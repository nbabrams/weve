import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Splash } from './components/onboarding/Splash';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { PostAuthSplash } from './components/onboarding/PostAuthSplash';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { CreateGroupStep1 } from './components/onboarding/CreateGroupStep1';
import { CreateGroupStep2 } from './components/onboarding/CreateGroupStep2';
import { CreateGroupStep3 } from './components/onboarding/CreateGroupStep3';
import { CreateGroupStep4 } from './components/onboarding/CreateGroupStep4';
import { JoinGroupStep1 } from './components/onboarding/JoinGroupStep1';
import { JoinGroupStep2 } from './components/onboarding/JoinGroupStep2';
import { JoinGroupStep3 } from './components/onboarding/JoinGroupStep3';
import { InviteSuccess } from './components/onboarding/InviteSuccess';
import { Home } from './components/Home';
import { Groups } from './components/Groups';
import { MainThread } from './components/MainThread';
import { GroupSettings } from './components/GroupSettings';
import { UserSettings } from './components/UserSettings';
import { Archive } from './components/Archive';
import { Resources } from './components/Resources';
import { BottomNav } from './components/BottomNav';
import { createClient } from './utils/supabase/client';
import { apiCall, seedPrompts } from './utils/api';
import { projectId } from './utils/supabase/info';
import { allPrompts } from './data/prompts';

import { ForgotPassword } from './components/auth/ForgotPassword';

type Screen =
  | 'splash'
  | 'welcome-screen'
  | 'post-auth-splash'
  | 'signin'
  | 'signup'
  | 'forgot-password'
  | 'create-group-step1'
  | 'create-group-step2'
  | 'create-group-step3'
  | 'create-group-step4'
  | 'join-group-step1'
  | 'join-group-step2'
  | 'join-group-step3'
  | 'invite-success'
  | 'home'
  | 'groups'
  | 'main-thread'
  | 'group-settings'
  | 'settings'
  | 'archive'
  | 'resources';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const [currentGroupId, setCurrentGroupId] = useState<string | null>(null);
  const [inviteCode, setInviteCode] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
    seedPromptsToBackend();
  }, []);

  const seedPromptsToBackend = async () => {
    try {
      // Always seed prompts to handle backend restarts
      // The backend will handle idempotency
      console.log('Seeding prompts to backend...');
      await seedPrompts(allPrompts);
      console.log('Prompts seeded successfully');
    } catch (err) {
      console.error('Failed to seed prompts:', err);
      // Not critical, backend may already have prompts or will retry on prompt generation
    }
  };

  const checkSession = async () => {
    try {
      const hasToken = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
      
      if (!hasToken) {
        setLoading(false);
        setCurrentScreen('welcome-screen');
        return;
      }

      console.log('Checking session...');

      // Use apiCall to verify session. It handles token refresh automatically.
      const { user: userData } = await apiCall('/users/me');

      if (userData) {
        setIsAuthenticated(true);
        setUserName(userData.name || '');

        // Check if user has groups
        if (userData.groups?.length > 0) {
          setCurrentGroupId(userData.groups[0]);
          setCurrentScreen('home');
        } else {
          setCurrentScreen('post-auth-splash');
        }
      } else {
        throw new Error('User data missing');
      }
    } catch (err) {
      console.error('Session check failed:', err);
      // Clear tokens as they are likely invalid if apiCall failed after retries
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      sessionStorage.removeItem('access_token');
      sessionStorage.removeItem('refresh_token');
      
      setIsAuthenticated(false);
      setCurrentScreen('welcome-screen');
    } finally {
      setLoading(false);
    }
  };

  const handleSplashContinue = async () => {
    setCurrentScreen('welcome-screen');
  };

  const handleWelcomeSignIn = async (email: string, password: string, rememberMe: boolean = true) => {
    console.log('Attempting sign in:', { email, rememberMe });
    setAuthError(null);
    try {
      const supabase = createClient();
      const { data: { session }, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        console.error('Sign in error:', error);
        if (error.message === 'Invalid login credentials') {
          setAuthError('Invalid email or password. Please try again.');
        } else {
          setAuthError(error.message);
        }
        return;
      }

      if (session?.access_token) {
        if (rememberMe) {
          localStorage.setItem('access_token', session.access_token);
          if (session.refresh_token) localStorage.setItem('refresh_token', session.refresh_token);
          // Clear session storage to prevent conflicts
          sessionStorage.removeItem('access_token');
          sessionStorage.removeItem('refresh_token');
        } else {
          sessionStorage.setItem('access_token', session.access_token);
          if (session.refresh_token) sessionStorage.setItem('refresh_token', session.refresh_token);
          // Clear local storage to prevent conflicts
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
        }
        setIsAuthenticated(true);
        
        // Get user data
        try {
          const { user: userData } = await apiCall('/users/me');
          setUserName(userData?.name || '');

          // Check if user has groups
          if (userData?.groups?.length > 0) {
            setCurrentGroupId(userData.groups[0]);
            // On sign in, go to post-auth-splash first
            setCurrentScreen('post-auth-splash');
          } else {
            // Show quote page before create group
            setCurrentScreen('post-auth-splash');
          }
        } catch (err) {
          console.error('Failed to load user data:', err);
          // Show quote page before create group
          setCurrentScreen('post-auth-splash');
        }
      }
    } catch (err) {
      console.error('Sign in error:', err);
      alert('An error occurred during sign in');
    }
  };

  const handleWelcomeSignUp = () => {
    setCurrentScreen('signup');
  };

  const handleWelcomeContinue = () => {
    setCurrentScreen('post-auth-splash');
  };

  const handlePostAuthSplashContinue = () => {
    if (isAuthenticated) {
      // Check if user has groups
      apiCall('/users/me')
        .then(({ user: userData }) => {
          if (userData?.groups?.length > 0) {
            setCurrentGroupId(userData.groups[0]);
            setCurrentScreen('home');
          } else {
            setCurrentScreen('create-group-step1');
          }
        })
        .catch(() => {
          setCurrentScreen('create-group-step1');
        });
    } else {
      setCurrentScreen('welcome-screen');
    }
  };

  const handleNavigation = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleNavigateToGroup = (groupId: string) => {
    setCurrentGroupId(groupId);
    setCurrentScreen('main-thread');
  };

  const handleAuthSuccess = async (accessToken: string) => {
    setIsAuthenticated(true);
    setCurrentScreen('post-auth-splash');
    
    // Background fetch to ensure data is ready
    try {
      const { user: userData } = await apiCall('/users/me');
      setUserName(userData?.name || '');
      if (userData?.groups?.length > 0) {
        setCurrentGroupId(userData.groups[0]);
      }
    } catch (err) {
      console.error('Failed to load user data:', err);
    }
  };

  // Create Group Flow State
  const [createGroupData, setCreateGroupData] = useState<{
    groupName?: string;
    photo?: File;
    frequency?: string;
  }>({});

  const handleCreateGroupStart = () => {
    setCurrentScreen('create-group-step2');
  };

  const handleCreateGroupStep2 = (groupName: string, photo?: File) => {
    setCreateGroupData({ ...createGroupData, groupName, photo });
    setCurrentScreen('create-group-step3');
  };

  const handleCreateGroupStep3 = (frequency: string) => {
    setCreateGroupData({ ...createGroupData, frequency });
    setCurrentScreen('create-group-step4');
  };

  const handleCreateGroupStep4 = async (depth: number) => {
    try {
      setLoading(true);
      
      // 1. Create Group
      const { group, error } = await apiCall('/groups/create', {
        method: 'POST',
        body: JSON.stringify({
          name: createGroupData.groupName,
          frequency: createGroupData.frequency,
          depthLevel: depth
        })
      });

      if (error) throw new Error(error);

      // 2. Upload Photo if exists
      if (createGroupData.photo && group?.id) {
        const formData = new FormData();
        formData.append('photo', createGroupData.photo);
        formData.append('groupId', group.id);

        const accessToken = localStorage.getItem('access_token');
        const uploadResponse = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-9cac149a/upload/group-photo`, {
           method: 'POST',
           headers: {
             'Authorization': `Bearer ${accessToken}`
           },
           body: formData
        });

        if (!uploadResponse.ok) {
          console.error('Failed to upload group photo:', await uploadResponse.text());
          // Don't throw, just log - we still want to proceed
        }
      }
      
      // 3. Set current group and redirect to Group Detail
      if (group?.id) {
        // Generate first prompt immediately
        try {
          await apiCall('/prompts/generate', {
            method: 'POST',
            body: JSON.stringify({ groupId: group.id })
          });
        } catch (promptErr) {
          console.error('Failed to generate initial prompt:', promptErr);
        }

        // Refresh user data to update groups list
        const { user: userData } = await apiCall('/users/me');
        if (userData?.groups?.length > 0) {
          // Ensure we have the latest groups
        }
        
        setCurrentGroupId(group.id);
        setCurrentScreen('main-thread');
      }

    } catch (err) {
      console.error('Failed to create group:', err);
      alert('Failed to create group. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Join Group Flow State
  const [joinGroupData, setJoinGroupData] = useState<{
    inviteCode?: string;
    frequency?: string;
  }>({});

  const handleJoinGroupStart = () => {
    setCurrentScreen('join-group-step1');
  };

  const handleJoinGroupStep1 = (inviteCode: string) => {
    setJoinGroupData({ ...joinGroupData, inviteCode });
    setCurrentScreen('join-group-step2');
  };

  const handleJoinGroupStep2 = (frequency: string) => {
    setJoinGroupData({ ...joinGroupData, frequency });
    setCurrentScreen('join-group-step3');
  };

  const handleJoinGroupStep3 = async (depth: number) => {
    try {
      setLoading(true);
      
      const { group, error } = await apiCall('/groups/join', {
        method: 'POST',
        body: JSON.stringify({
          inviteCode: joinGroupData.inviteCode,
          userFrequency: joinGroupData.frequency,
          userDepthLevel: depth
        })
      });

      if (error) throw new Error(error);

      if (group?.id) {
        // Refresh user data to ensure local state is up to date
        try {
           await apiCall('/users/me');
        } catch (e) {
           console.warn('Failed to refresh user data after join:', e);
        }
        
        setCurrentGroupId(group.id);
        setCurrentScreen('main-thread');
      }

    } catch (err) {
      console.error('Failed to join group:', err);
      alert(err instanceof Error ? err.message : 'Failed to join group. Please check the invite code.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    // Clear all tokens
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    
    setIsAuthenticated(false);
    setUserName('');
    setCurrentGroupId(null);
    setCurrentScreen('welcome-screen');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  // Screens that should show the bottom nav
  const showBottomNav = isAuthenticated && [
    'home',
    'groups',
    'resources',
    'settings'
  ].includes(currentScreen);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {currentScreen === 'welcome-screen' && (
        <WelcomeScreen
          onSignIn={handleWelcomeSignIn}
          onSignUp={handleWelcomeSignUp}
          onForgotPassword={() => setCurrentScreen('forgot-password')}
          error={authError}
        />
      )}

      {currentScreen === 'post-auth-splash' && (
        <PostAuthSplash onContinue={handlePostAuthSplashContinue} />
      )}

      {currentScreen === 'forgot-password' && (
        <ForgotPassword
          onBack={() => setCurrentScreen('welcome-screen')}
        />
      )}

      {currentScreen === 'signup' && (
        <SignUp
          onSuccess={handleAuthSuccess}
          onSwitch={() => setCurrentScreen('welcome-screen')}
        />
      )}

      {currentScreen === 'create-group-step1' && (
        <CreateGroupStep1
          userName={userName}
          onCreateGroup={handleCreateGroupStart}
          onJoinGroup={handleJoinGroupStart}
        />
      )}

      {currentScreen === 'create-group-step2' && (
        <CreateGroupStep2
          onBack={() => setCurrentScreen('create-group-step1')}
          onContinue={handleCreateGroupStep2}
        />
      )}

      {currentScreen === 'create-group-step3' && (
        <CreateGroupStep3
          onBack={() => setCurrentScreen('create-group-step2')}
          onContinue={handleCreateGroupStep3}
        />
      )}

      {currentScreen === 'create-group-step4' && (
        <CreateGroupStep4
          onBack={() => setCurrentScreen('create-group-step3')}
          onCreateGroup={handleCreateGroupStep4}
        />
      )}

      {currentScreen === 'join-group-step1' && (
        <JoinGroupStep1
          onBack={() => setCurrentScreen('create-group-step1')}
          onContinue={handleJoinGroupStep1}
        />
      )}

      {currentScreen === 'join-group-step2' && (
        <JoinGroupStep2
          onBack={() => setCurrentScreen('join-group-step1')}
          onContinue={handleJoinGroupStep2}
        />
      )}

      {currentScreen === 'join-group-step3' && (
        <JoinGroupStep3
          onBack={() => setCurrentScreen('join-group-step2')}
          onJoinGroup={handleJoinGroupStep3}
        />
      )}

      {currentScreen === 'invite-success' && (
        <InviteSuccess
          inviteCode={inviteCode}
          onContinue={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'home' && (
        <Home onNavigateToGroup={handleNavigateToGroup} />
      )}

      {currentScreen === 'groups' && (
        <Groups
          onNavigateToGroup={handleNavigateToGroup}
          onCreateGroup={() => setCurrentScreen('create-group-step1')}
          onJoinGroup={() => setCurrentScreen('join-group-step1')}
        />
      )}

      {currentScreen === 'main-thread' && currentGroupId && (
        <MainThread
          groupId={currentGroupId}
          onSettings={() => setCurrentScreen('group-settings')}
          onUserSettings={() => setCurrentScreen('settings')}
          onArchive={() => setCurrentScreen('archive')}
          onResources={() => setCurrentScreen('resources')}
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'group-settings' && currentGroupId && (
        <GroupSettings
          groupId={currentGroupId}
          onBack={() => setCurrentScreen('main-thread')}
          onDelete={() => {
             setCurrentGroupId(null);
             setCurrentScreen('home');
          }}
        />
      )}

      {currentScreen === 'settings' && (
        <UserSettings
          onBack={() => setCurrentScreen('home')}
          onSignOut={handleSignOut}
        />
      )}

      {currentScreen === 'archive' && currentGroupId && (
        <Archive
          groupId={currentGroupId}
          onBack={() => setCurrentScreen('main-thread')}
        />
      )}

      {currentScreen === 'resources' && (
        <Resources onBack={() => setCurrentScreen('home')} />
      )}

      {showBottomNav && (
        <BottomNav 
          currentScreen={currentScreen} 
          onNavigate={handleNavigation} 
        />
      )}
    </div>
  );
}