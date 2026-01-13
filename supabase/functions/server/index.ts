import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.ts';

// Comprehensive prompt library
interface Prompt {
  text: string;
  example: string;
  depthLevel: number;
  category: 'funny' | 'memory' | 'dreams' | 'psychology' | 'somatic' | 'group' | 'spiritual';
}

// This will be populated from the data file via seeding endpoint
let promptLibrary: Prompt[] = [];

const app = new Hono().basePath('/make-server-9cac149a');

// Middleware
app.use('*', cors());
app.use('*', logger(console.log));

// Global Error Handler
app.onError((err, c) => {
  console.error('Server error:', err);
  return c.json({ error: 'Internal Server Error', message: err.message }, 500);
});

// Load prompts from KV store on startup
async function loadPromptsFromStorage() {
  try {
    const storedPrompts = await kv.get('system:prompts');
    if (storedPrompts && Array.isArray(storedPrompts)) {
      promptLibrary = storedPrompts;
      console.log(`Loaded ${promptLibrary.length} prompts from storage on startup`);
    } else {
      console.log('No prompts found in storage - waiting for seed');
    }
  } catch (error) {
    console.error('Failed to load prompts from storage:', error);
  }
}

// Initialize prompts on startup
loadPromptsFromStorage();

// Health check endpoint
app.get('/health', async (c) => {
  return c.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    promptsLoaded: promptLibrary.length 
  });
});

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Initialize storage bucket on startup
const BUCKET_NAME = 'make-9cac149a-photos';

async function initializeStorage() {
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME);
    
    if (!bucketExists) {
      const { error } = await supabase.storage.createBucket(BUCKET_NAME, {
        public: false,
        fileSizeLimit: 5242880, // 5MB limit
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
      });
      
      if (error) {
        // If error is 409 Conflict or "The resource already exists", treat it as success
        if (error.message.includes('The resource already exists') || (error as any).statusCode === '409') {
          console.log(`Storage bucket ${BUCKET_NAME} already exists (concurrent creation)`);
        } else {
          console.error('Failed to create storage bucket:', error);
        }
      } else {
        console.log(`Created storage bucket: ${BUCKET_NAME}`);
      }
    } else {
      console.log(`Storage bucket ${BUCKET_NAME} already exists`);
    }
  } catch (error) {
    console.error('Storage initialization error:', error);
  }
}

// Initialize storage on startup
initializeStorage();

// ============= AUTH ROUTES =============

app.post('/auth/register', async (c) => {
  try {
    const { email, password, name, profilePhoto } = await c.req.json();

    // Create user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm since email server not configured
      user_metadata: { name }
    });

    if (authError) throw authError;

    // Store user profile in KV store
    await kv.set(`user:${authData.user.id}`, {
      id: authData.user.id,
      email,
      name,
      profilePhoto: profilePhoto || null,
      groups: [],
      createdAt: new Date().toISOString()
    });

    return c.json({ success: true, user: authData.user });
  } catch (error) {
    console.error('Registration error:', error);
    
    // Provide user-friendly error messages
    let errorMessage = error.message;
    if (error.code === 'email_exists' || error.message?.includes('already been registered')) {
      errorMessage = 'An account with this email already exists';
    }
    
    return c.json({ error: `Registration failed: ${errorMessage}` }, 400);
  }
});

// ============= GROUP ROUTES =============

// IMPORTANT: List route must come BEFORE :groupId route to avoid route conflicts
app.get('/groups/list', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    // Wrap KV operations in a separate try-catch block to isolate KV issues
    try {
      const userData = await kv.get(`user:${user.id}`);
      if (!userData) {
        console.log(`User ${user.id} not found in KV store, returning empty groups list`);
        return c.json({ success: true, groups: [] });
      }
      const userGroups = Array.isArray(userData.groups) ? userData.groups : [];
      console.log(`Loading ${userGroups.length} groups for user ${user.id}`);
      
      // Limit to prevent timeout issues (users shouldn't have more than 10-20 groups anyway)
      const groupsToFetch = userGroups.slice(0, 50);
      
      // Fetch each group's details and track invalid ones
      const invalidGroupIds: string[] = [];
      const groups = await Promise.all(
        groupsToFetch.map(async (groupId: string) => {
          try {
            if (!groupId) return null;
            const group = await kv.get(`group:${groupId}`);
            if (!group) {
              console.log(`Group ${groupId} not found in KV store, marking for removal`);
              invalidGroupIds.push(groupId);
              return null;
            }
          
            // Use the lastPromptDate from the group as last activity
            const lastActivity = group.lastPromptDate || null;
          
            return {
              id: groupId,
              name: group.name,
              photo: group.photo,
              memberCount: Array.isArray(group.members) ? group.members.length : 0,
              lastActivity
            };
          } catch (err) {
            console.log(`Error loading group ${groupId}:`, err);
            return null;
          }
        })
      );

      // Clean up invalid groups from user's groups array
      if (invalidGroupIds.length > 0) {
        console.log(`Removing ${invalidGroupIds.length} invalid groups from user ${user.id}`);
        userData.groups = userGroups.filter((gId: string) => !invalidGroupIds.includes(gId));
        await kv.set(`user:${user.id}`, userData);
      }

      const validGroups = groups.filter(g => g !== null);
      console.log(`Returning ${validGroups.length} valid groups`);
      return c.json({ success: true, groups: validGroups });
    } catch (kvError) {
      console.error('KV operation failed:', kvError);
      // Return empty list on KV failure instead of 500
      return c.json({ success: true, groups: [] });
    }
  } catch (error) {
    console.error('Get groups list error:', error);
    // Return empty groups instead of error to prevent frontend from breaking
    return c.json({ success: true, groups: [] });
  }
});

app.post('/groups/create', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { name, photo, frequency, depthLevel } = await c.req.json();
    const groupId = crypto.randomUUID();
    const inviteCode = Math.random().toString(36).substring(2, 10).toUpperCase();

    const group = {
      id: groupId,
      name,
      photo: photo || null,
      adminId: user.id,
      frequency: frequency || 'daily',
      depthLevel: depthLevel || 5,
      members: [user.id],
      inviteCode,
      createdAt: new Date().toISOString(),
      lastPromptDate: null,
      promptCount: 0
    };

    await kv.set(`group:${groupId}`, group);
    await kv.set(`invite:${inviteCode}`, groupId);

    // Add group to user's groups list
    const userData = await kv.get(`user:${user.id}`);
    if (userData) {
      userData.groups.push(groupId);
      await kv.set(`user:${user.id}`, userData);
    }

    return c.json({ success: true, group, inviteCode });
  } catch (error) {
    console.error('Group creation error:', error);
    return c.json({ error: `Group creation failed: ${error.message}` }, 400);
  }
});

app.post('/groups/join', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { inviteCode, userFrequency, userDepthLevel } = await c.req.json();
    
    // Get group ID from invite code
    const groupId = await kv.get(`invite:${inviteCode}`);
    if (!groupId) {
      return c.json({ error: 'Invalid invite code' }, 404);
    }

    // Get group data
    const group = await kv.get(`group:${groupId}`);
    if (!group) {
      return c.json({ error: 'Group not found' }, 404);
    }

    // Check if group is full
    if (group.members.length >= 6) {
      return c.json({ error: 'Group is full (max 6 members)' }, 400);
    }

    // Check if user already in group
    if (group.members.includes(user.id)) {
      return c.json({ error: 'Already a member of this group' }, 400);
    }

    // Add user to group
    group.members.push(user.id);
    
    // Adjust group settings to lowest comfort level
    if (userDepthLevel < group.depthLevel) {
      group.depthLevel = userDepthLevel;
    }
    
    // Store user preferences
    await kv.set(`group:${groupId}:member:${user.id}`, {
      userId: user.id,
      frequency: userFrequency,
      depthLevel: userDepthLevel,
      joinedAt: new Date().toISOString(),
      lastReassessment: null
    });

    await kv.set(`group:${groupId}`, group);

    // Add group to user's groups list
    const userData = await kv.get(`user:${user.id}`);
    if (userData) {
      userData.groups.push(groupId);
      await kv.set(`user:${user.id}`, userData);
    }

    return c.json({ success: true, group });
  } catch (error) {
    console.error('Group join error:', error);
    return c.json({ error: `Failed to join group: ${error.message}` }, 400);
  }
});

app.get('/groups/:groupId', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const groupId = c.req.param('groupId');
    const group = await kv.get(`group:${groupId}`);

    if (!group) {
      return c.json({ error: 'Group not found' }, 404);
    }

    // Verify user is member
    if (!group.members.includes(user.id)) {
      return c.json({ error: 'Not a member of this group' }, 403);
    }

    // Get member details
    const memberDetails = await Promise.all(
      group.members.map(async (memberId) => {
        const memberData = await kv.get(`user:${memberId}`);
        return {
          id: memberId,
          name: memberData?.name || 'Unknown',
          profilePhoto: memberData?.profilePhoto || null
        };
      })
    );

    return c.json({ success: true, group: { ...group, memberDetails } });
  } catch (error) {
    console.error('Get group error:', error);
    return c.json({ error: `Failed to get group: ${error.message}` }, 400);
  }
});

app.put('/groups/:groupId/settings', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const groupId = c.req.param('groupId');
    const group = await kv.get(`group:${groupId}`);

    if (!group) {
      return c.json({ error: 'Group not found' }, 404);
    }

    // Verify user is admin
    if (group.adminId !== user.id) {
      return c.json({ error: 'Only admin can update settings' }, 403);
    }

    const { name, photo, frequency, depthLevel } = await c.req.json();

    if (name) group.name = name;
    if (photo !== undefined) group.photo = photo;
    if (frequency) group.frequency = frequency;
    if (depthLevel !== undefined) group.depthLevel = depthLevel;

    await kv.set(`group:${groupId}`, group);

    return c.json({ success: true, group });
  } catch (error) {
    console.error('Update group settings error:', error);
    return c.json({ error: `Failed to update settings: ${error.message}` }, 400);
  }
});

app.delete('/groups/:groupId', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const groupId = c.req.param('groupId');
    const group = await kv.get(`group:${groupId}`);

    if (!group) {
      return c.json({ error: 'Group not found' }, 404);
    }

    // Verify user is admin
    if (group.adminId !== user.id) {
      return c.json({ error: 'Only admin can delete group' }, 403);
    }

    // 1. Remove group from all members' lists
    await Promise.all(group.members.map(async (memberId: string) => {
      try {
        const memberData = await kv.get(`user:${memberId}`);
        if (memberData && memberData.groups) {
          memberData.groups = memberData.groups.filter((id: string) => id !== groupId);
          await kv.set(`user:${memberId}`, memberData);
        }
      } catch (err) {
        console.error(`Failed to update member ${memberId}:`, err);
      }
    }));

    // 2. Remove invite code mapping
    if (group.inviteCode) {
      await kv.del(`invite:${group.inviteCode}`);
    }

    // 3. Delete group data
    await kv.del(`group:${groupId}`);
    
    // Note: We're leaving prompts and responses orphaned for now as bulk deletion
    // might exceed execution time limits. They won't be accessible anyway.

    return c.json({ success: true });
  } catch (error) {
    console.error('Delete group error:', error);
    return c.json({ error: `Failed to delete group: ${error.message}` }, 400);
  }
});

// ============= FEED ROUTE =============

app.get('/feed', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const userData = await kv.get(`user:${user.id}`);
    if (!userData) {
      console.log(`User ${user.id} not found in KV store, returning empty feed`);
      return c.json({ success: true, feed: [] });
    }
    const userGroups = userData.groups || [];
    console.log(`Loading feed from ${userGroups.length} groups for user ${user.id}`);
    
    // Limit to prevent timeout issues
    const groupsToFetch = userGroups.slice(0, 50);
    
    // Fetch latest responses from all groups
    const feedItems: any[] = [];
    
    for (const groupId of groupsToFetch) {
      try {
        const group = await kv.get(`group:${groupId}`);
        if (!group) {
          console.log(`Group ${groupId} not found, skipping from feed`);
          continue;
        }
        
        const currentPrompt = await kv.get(`group:${groupId}:currentPrompt`);
        if (!currentPrompt) continue;
        
        const responses = await kv.getByPrefix(`group:${groupId}:prompt:${currentPrompt.id}:response:`);
        
        if (responses && responses.length > 0) {
          for (const response of responses) {
            feedItems.push({
              id: response.id,
              groupId,
              groupName: group.name,
              groupPhoto: group.photo,
              promptText: currentPrompt.text,
              userId: response.userId,
              userName: response.userName,
              userPhoto: response.userPhoto,
              responseText: response.text,
              createdAt: response.createdAt
            });
          }
        }
      } catch (err) {
        console.log(`Error loading feed for group ${groupId}:`, err);
        continue;
      }
    }
    
    // Sort by most recent
    feedItems.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    
    // Return top 50 items
    const feed = feedItems.slice(0, 50);
    console.log(`Returning ${feed.length} feed items`);
    
    return c.json({ success: true, feed });
  } catch (error) {
    console.error('Get feed error:', error);
    // Return empty feed instead of error to prevent frontend from breaking
    return c.json({ success: true, feed: [] });
  }
});

// ============= PROMPT ROUTES =============

// Archive route must come before :groupId/current to avoid route conflicts
app.get('/prompts/:groupId/archive', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const groupId = c.req.param('groupId');
    const group = await kv.get(`group:${groupId}`);

    if (!group || !group.members.includes(user.id)) {
      return c.json({ error: 'Unauthorized' }, 403);
    }

    const allPrompts = await kv.getByPrefix(`group:${groupId}:prompt:`);
    const currentPrompt = await kv.get(`group:${groupId}:currentPrompt`);
    
    // Filter out the current prompt and enrich with response data
    const archivedPromptsList = (allPrompts || []).filter(p => 
      p && p.id && p.id !== currentPrompt?.id
    );

    const prompts = await Promise.all(archivedPromptsList.map(async (p: any) => {
      const responses = await kv.getByPrefix(`group:${groupId}:prompt:${p.id}:response:`) || [];
      // Sort responses by date descending
      responses.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      
      return {
        ...p,
        responseCount: responses.length,
        hasResponded: responses.some((r: any) => r.userId === user.id),
        responses: responses.slice(0, 5) // Return top 5 for avatars
      };
    }));

    // Sort prompts by creation date descending
    prompts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return c.json({ success: true, prompts });
  } catch (error) {
    console.error('Get archived prompts error:', error);
    return c.json({ error: `Failed to get archive: ${error.message}` }, 400);
  }
});

app.get('/prompts/:groupId/current', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const groupId = c.req.param('groupId');
    const group = await kv.get(`group:${groupId}`);

    if (!group) {
      return c.json({ error: 'Group not found' }, 404);
    }

    if (!group.members.includes(user.id)) {
      return c.json({ error: 'Not a member of this group' }, 403);
    }

    // Get current prompt for the group
    let currentPrompt = await kv.get(`group:${groupId}:currentPrompt`);
    
    // Check if we need to generate new prompts (Catch-up logic)
    if (group.lastPromptDate) {
       const frequency = group.frequency || 'daily';
       let lastDate = new Date(group.lastPromptDate);
       const now = new Date();
       
       // Max 10 catch-up prompts to prevent infinite loops/timeouts
       let safetyCounter = 0;
       
       while (safetyCounter < 10) {
         let daysToAdd = 1;
         if (frequency === 'daily') daysToAdd = 1;
         else if (frequency === '2-3days') daysToAdd = 2;
         else if (frequency === 'weekly') daysToAdd = 7;

         // Calculate next due date aligned to 12:01 AM PST/PDT
         const nextDueDate = getNextPSTMidnight(lastDate.toISOString(), daysToAdd);
         
         // If we are strictly after the next due date, generate it
         if (now.getTime() >= nextDueDate.getTime()) {
           console.log(`Catch-up: Generating prompt for ${nextDueDate.toISOString()}`);
           try {
             // Pass the specific due date as the creation date so history is accurate
             currentPrompt = await generateNewPrompt(groupId, group, nextDueDate.toISOString());
             lastDate = nextDueDate;
           } catch (err) {
             console.error('Failed to auto-generate prompt:', err);
             break;
           }
         } else {
           break; // Up to date
         }
         
         safetyCounter++;
       }
    } else if (!currentPrompt) {
       // No prompt at all? Should be handled by frontend generate call, 
       // but we can also do it here for robustness
       // However, sticking to the pattern: if null, frontend calls generate.
       // But let's leave it as null so frontend handles initial generation logic if specific parameters needed
       // Actually, better to just return null and let frontend logic stand
    }
    
    if (!currentPrompt) {
      return c.json({ prompt: null });
    }

    // Get responses for this prompt
    const responses = await kv.getByPrefix(`group:${groupId}:prompt:${currentPrompt.id}:response:`);

    return c.json({ success: true, prompt: currentPrompt, responses });
  } catch (error) {
    console.error('Get current prompt error:', error);
    return c.json({ error: `Failed to get prompt: ${error.message}` }, 400);
  }
});

// ============= RESPONSE ROUTES =============

app.post('/responses/create', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { groupId, promptId, text } = await c.req.json();

    // Verify user is member
    const group = await kv.get(`group:${groupId}`);
    if (!group || !group.members.includes(user.id)) {
      return c.json({ error: 'Unauthorized' }, 403);
    }

    const responseId = crypto.randomUUID();
    const userData = await kv.get(`user:${user.id}`);

    const response = {
      id: responseId,
      groupId,
      promptId,
      userId: user.id,
      userName: userData?.name || 'Unknown',
      userPhoto: userData?.profilePhoto || null,
      text,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await kv.set(`group:${groupId}:prompt:${promptId}:response:${responseId}`, response);

    return c.json({ success: true, response });
  } catch (error) {
    console.error('Create response error:', error);
    return c.json({ error: `Failed to create response: ${error.message}` }, 400);
  }
});

app.put('/responses/:responseId', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { groupId, promptId, text } = await c.req.json();
    const responseId = c.req.param('responseId');
    
    const response = await kv.get(`group:${groupId}:prompt:${promptId}:response:${responseId}`);
    
    if (!response) {
      return c.json({ error: 'Response not found' }, 404);
    }

    if (response.userId !== user.id) {
      return c.json({ error: 'Can only edit your own responses' }, 403);
    }

    response.text = text;
    response.updatedAt = new Date().toISOString();

    await kv.set(`group:${groupId}:prompt:${promptId}:response:${responseId}`, response);

    return c.json({ success: true, response });
  } catch (error) {
    console.error('Update response error:', error);
    return c.json({ error: `Failed to update response: ${error.message}` }, 400);
  }
});

app.delete('/responses/:responseId', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { groupId, promptId } = await c.req.json();
    const responseId = c.req.param('responseId');
    
    const response = await kv.get(`group:${groupId}:prompt:${promptId}:response:${responseId}`);
    
    if (!response) {
      return c.json({ error: 'Response not found' }, 404);
    }

    if (response.userId !== user.id) {
      return c.json({ error: 'Can only delete your own responses' }, 403);
    }

    await kv.del(`group:${groupId}:prompt:${promptId}:response:${responseId}`);

    return c.json({ success: true });
  } catch (error) {
    console.error('Delete response error:', error);
    return c.json({ error: `Failed to delete response: ${error.message}` }, 400);
  }
});

// ============= USER ROUTES =============

app.get('/users/me', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    let userData = await kv.get(`user:${user.id}`);
    
    // If user doesn't exist in KV store, create them from auth data
    if (!userData) {
      console.log(`User ${user.id} not found in KV store, creating from auth data`);
      userData = {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.name || user.email?.split('@')[0] || 'User',
        profilePhoto: null,
        groups: [],
        createdAt: new Date().toISOString()
      };
      await kv.set(`user:${user.id}`, userData);
    }
    
    return c.json({ success: true, user: userData });
  } catch (error) {
    console.error('Get user error:', error);
    return c.json({ error: `Failed to get user: ${error.message}` }, 400);
  }
});

app.put('/users/profile', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { name, profilePhoto } = await c.req.json();
    const userData = await kv.get(`user:${user.id}`);
    
    if (!userData) {
      return c.json({ error: 'User not found in database' }, 404);
    }

    if (name) userData.name = name;
    if (profilePhoto !== undefined) userData.profilePhoto = profilePhoto;

    await kv.set(`user:${user.id}`, userData);

    return c.json({ success: true, user: userData });
  } catch (error) {
    console.error('Update profile error:', error);
    return c.json({ error: `Failed to update profile: ${error.message}` }, 400);
  }
});

app.delete('/users/me', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    // Delete from KV
    await kv.del(`user:${user.id}`);

    // Delete from Auth
    const { error: deleteError } = await supabase.auth.admin.deleteUser(user.id);
    if (deleteError) {
        console.error('Auth delete error:', deleteError);
        // Continue anyway
    }

    return c.json({ success: true });
  } catch (error) {
    console.error('Delete user error:', error);
    return c.json({ error: `Failed to delete user: ${error.message}` }, 400);
  }
});

// ============= PROMPT SEEDING ROUTE =============

app.post('/prompts/seed', async (c) => {
  try {
    const { prompts } = await c.req.json();
    
    if (!prompts || !Array.isArray(prompts)) {
      return c.json({ error: 'Invalid prompts data' }, 400);
    }

    // Store in both memory and KV for persistence
    promptLibrary = prompts;
    await kv.set('system:prompts', prompts);
    
    console.log(`Seeded ${promptLibrary.length} prompts into memory and storage`);

    return c.json({ success: true, count: promptLibrary.length });
  } catch (error) {
    console.error('Seed prompts error:', error);
    return c.json({ error: `Failed to seed prompts: ${error.message}` }, 400);
  }
});

// ============= PROMPT GENERATION ROUTE =============

app.post('/prompts/generate', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { groupId } = await c.req.json();
    
    const group = await kv.get(`group:${groupId}`);
    if (!group || !group.members.includes(user.id)) {
      return c.json({ error: 'Unauthorized' }, 403);
    }

    const newPrompt = await generateNewPrompt(groupId, group);

    return c.json({ success: true, prompt: newPrompt });
  } catch (error) {
    console.error('Generate prompt error:', error);
    return c.json({ error: `Failed to generate prompt: ${error.message}` }, 400);
  }
});

// ============= HELPER FUNCTIONS =============

function isPromptDue(lastDate: string, frequency: string): boolean {
  if (!lastDate) return true;

  const last = new Date(lastDate);
  const now = new Date();
  const diff = now.getTime() - last.getTime();
  const hours = diff / (1000 * 60 * 60);

  if (frequency === 'daily') {
    return hours >= 24;
  } else if (frequency === '2-3days') {
    return hours >= 48; 
  } else if (frequency === 'weekly') {
    return hours >= 168; // 24 * 7
  }

  return hours >= 24; // default
}

async function generateNewPrompt(groupId: string, group: any, creationDate?: string) {
    // Get prompt history for this group
    const promptHistory = await kv.get(`group:${groupId}:promptHistory`) || {
      usedPromptIndices: [],
      lastCategory: null,
      categoryRotation: ['funny', 'memory', 'dreams', 'psychology', 'somatic', 'group', 'spiritual']
    };

    // Check if prompts are loaded
    if (promptLibrary.length === 0) {
      console.log('Prompt library empty, attempting to load from storage...');
      const storedPrompts = await kv.get('system:prompts');
      if (storedPrompts && Array.isArray(storedPrompts)) {
        promptLibrary = storedPrompts;
      } else {
         throw new Error('Prompts not initialized');
      }
    }

    // Smart prompt selection
    const selectedPrompt = selectSmartPrompt(
      group.depthLevel,
      group.promptCount,
      promptHistory
    );

    if (!selectedPrompt) {
       throw new Error('No suitable prompts available');
    }

    const dateToUse = creationDate || new Date().toISOString();
    const promptId = crypto.randomUUID();
    const newPrompt = {
      id: promptId,
      groupId,
      text: selectedPrompt.prompt.text,
      example: selectedPrompt.prompt.example,
      depthLevel: selectedPrompt.prompt.depthLevel,
      category: selectedPrompt.prompt.category,
      createdAt: dateToUse
    };

    // Set as current prompt
    await kv.set(`group:${groupId}:currentPrompt`, newPrompt);
    await kv.set(`group:${groupId}:prompt:${promptId}`, newPrompt);

    // Update prompt history
    promptHistory.usedPromptIndices.push(selectedPrompt.index);
    promptHistory.lastCategory = selectedPrompt.prompt.category;

    // If we've used 80% of available prompts at this depth, reset history
    const availableAtDepth = getPromptsAtDepthRange(group.depthLevel).length;
    if (promptHistory.usedPromptIndices.length > availableAtDepth * 0.8) {
      promptHistory.usedPromptIndices = [];
      console.log(`Reset prompt history for group ${groupId}`);
    }

    await kv.set(`group:${groupId}:promptHistory`, promptHistory);

    // Update group
    group.promptCount = (group.promptCount || 0) + 1;
    group.lastPromptDate = dateToUse;
    await kv.set(`group:${groupId}`, group);

    return newPrompt;
}

function getPromptsAtDepthRange(maxDepth: number): Prompt[] {
  // Return all prompts from 1 up to the selected max depth
  // Light (1-3): gets 1-3
  // Medium (4-7): gets 1-7
  // Deep (8-10): gets 1-10
  return promptLibrary.filter(p => p.depthLevel >= 1 && p.depthLevel <= maxDepth);
}

function selectSmartPrompt(
  groupDepth: number,
  promptCount: number,
  history: any
): { prompt: Prompt, index: number } | null {
  // Get all prompts from 1 to maxDepth (inclusive range)
  let candidatePrompts = getPromptsAtDepthRange(groupDepth)
    .map((prompt, index) => ({ prompt, index: promptLibrary.indexOf(prompt) }));

  if (candidatePrompts.length === 0) {
    console.log('No prompts found at target depth, using all prompts');
    candidatePrompts = promptLibrary.map((prompt, index) => ({ prompt, index }));
  }

  // Apply weighted selection based on depth level
  // For Deep (8-10): 30% chance of getting a deep question (8-10)
  // For Medium (4-7): weighted toward medium questions
  // For Light (1-3): evenly distributed
  if (groupDepth >= 8) {
    // Deep selection: 30% deep (8-10), 70% lighter (1-7)
    const shouldBeDeep = Math.random() < 0.3;
    if (shouldBeDeep) {
      const deepPrompts = candidatePrompts.filter(p => p.prompt.depthLevel >= 8);
      if (deepPrompts.length > 0) {
        candidatePrompts = deepPrompts;
      }
    } else {
      const lighterPrompts = candidatePrompts.filter(p => p.prompt.depthLevel < 8);
      if (lighterPrompts.length > 0) {
        candidatePrompts = lighterPrompts;
      }
    }
  } else if (groupDepth >= 4) {
    // Medium selection: weighted toward 4-7 range (70% chance)
    const shouldBeMedium = Math.random() < 0.7;
    if (shouldBeMedium) {
      const mediumPrompts = candidatePrompts.filter(p => p.prompt.depthLevel >= 4);
      if (mediumPrompts.length > 0) {
        candidatePrompts = mediumPrompts;
      }
    }
  }
  // Light (1-3): no weighting needed, already filtered to 1-3

  // Filter out recently used prompts (unless we've used most of them)
  const unusedPrompts = candidatePrompts.filter(
    p => !history.usedPromptIndices.includes(p.index)
  );
  
  if (unusedPrompts.length > 0) {
    candidatePrompts = unusedPrompts;
  }

  // Try to rotate categories for variety
  if (history.lastCategory) {
    const differentCategory = candidatePrompts.filter(
      p => p.prompt.category !== history.lastCategory
    );
    
    if (differentCategory.length > 0) {
      candidatePrompts = differentCategory;
    }
  }

  // Randomly select from remaining candidates
  if (candidatePrompts.length === 0) {
    return null;
  }

  const selected = candidatePrompts[Math.floor(Math.random() * candidatePrompts.length)];
  
  console.log(`Selected prompt: depth=${selected.prompt.depthLevel}, category=${selected.prompt.category}, target=${targetDepth}`);
  
  return selected;
}

// ============= PHOTO UPLOAD ROUTES =============

app.post('/upload/profile-photo', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const formData = await c.req.formData();
    const file = formData.get('photo') as File;
    
    if (!file) {
      return c.json({ error: 'No file provided' }, 400);
    }

    // Validate file type
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return c.json({ error: 'Invalid file type. Only PNG, JPG, and WebP are allowed.' }, 400);
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return c.json({ error: 'File too large. Maximum size is 5MB.' }, 400);
    }

    const fileExt = file.name.split('.').pop();
    const filePath = `profiles/${user.id}.${fileExt}`;

    // Delete old photo if exists
    await supabase.storage.from(BUCKET_NAME).remove([filePath]);

    // Upload new photo
    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        contentType: file.type,
        upsert: true
      });

    if (uploadError) throw uploadError;

    // Get signed URL (valid for 10 years)
    const { data, error: urlError } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(filePath, 315360000);

    if (urlError) throw urlError;
    const signedUrl = data.signedUrl;

    // Update user profile
    const userData = await kv.get(`user:${user.id}`);
    if (userData) {
      userData.profilePhoto = signedUrl;
      await kv.set(`user:${user.id}`, userData);
    }

    return c.json({ success: true, publicUrl: signedUrl });
  } catch (error) {
    console.error('Upload photo error:', error);
    return c.json({ error: `Failed to upload photo: ${error.message}` }, 400);
  }
});

app.post('/upload/group-photo', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const formData = await c.req.formData();
    const file = formData.get('photo') as File;
    const groupId = formData.get('groupId') as string;
    
    if (!file) {
      return c.json({ error: 'No file provided' }, 400);
    }
    if (!groupId) {
      return c.json({ error: 'No group ID provided' }, 400);
    }

    // Validate group membership/admin
    const group = await kv.get(`group:${groupId}`);
    if (!group || group.adminId !== user.id) {
      return c.json({ error: 'Unauthorized' }, 403);
    }

    // Validate file type
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return c.json({ error: 'Invalid file type. Only PNG, JPG, and WebP are allowed.' }, 400);
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return c.json({ error: 'File too large. Maximum size is 5MB.' }, 400);
    }

    const fileExt = file.name.split('.').pop();
    const filePath = `groups/${groupId}.${fileExt}`;

    // Delete old photo if exists
    await supabase.storage.from(BUCKET_NAME).remove([filePath]);

    // Upload new photo
    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        contentType: file.type,
        upsert: true
      });

    if (uploadError) throw uploadError;

    // Get signed URL (valid for 10 years)
    const { data, error: urlError } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(filePath, 315360000);

    if (urlError) throw urlError;
    const signedUrl = data.signedUrl;

    // Update group photo
    group.photo = signedUrl;
    await kv.set(`group:${groupId}`, group);

    return c.json({ success: true, publicUrl: signedUrl });
  } catch (error) {
    console.error('Upload group photo error:', error);
    return c.json({ error: `Failed to upload photo: ${error.message}` }, 400);
  }
});

function getNextPSTMidnight(lastDateStr: string, daysToAdd: number): Date {
  const d = new Date(lastDateStr);
  // Add days roughly first to get to the target day
  d.setDate(d.getDate() + daysToAdd);
  
  // Create a candidate date at 08:01 UTC (which is 00:01 PST)
  // We use UTC methods to ensure we set the absolute time correctly
  const candidate = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 8, 1, 0));
  
  // Check what time this candidate is in America/Los_Angeles
  // If it's DST (PDT), 08:01 UTC is 01:01 PDT. We want 00:01 PDT.
  const pstString = candidate.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles', 
    hour: 'numeric', 
    hour12: false
  });
  
  // Parse the hour (0-23)
  const hour = parseInt(pstString);
  
  // If hour is 1, it means we are in PDT (UTC-7), so 08:01 UTC -> 01:01 PDT
  // We want 00:01 PDT, so we subtract 1 hour (set to 07:01 UTC)
  if (hour === 1) {
     candidate.setUTCHours(7, 1, 0, 0);
  }
  
  return candidate;
}

Deno.serve(app.fetch);
