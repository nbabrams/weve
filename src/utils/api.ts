import { projectId, publicAnonKey } from './supabase/info';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { createClient as getGlobalClient } from './supabase/client';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-9cac149a`;
const DEFAULT_TIMEOUT = 25000; // 25 seconds

// Helper to get a valid access token, handling auto-refresh and storage location
async function getAccessToken() {
  try {
    // 1. Try global client (uses localStorage by default)
    const globalClient = getGlobalClient();
    const { data: { session: globalSession } } = await globalClient.auth.getSession();
    
    if (globalSession?.access_token) {
      return globalSession.access_token;
    }

    // 2. If no global session, check sessionStorage explicitly (for "Remember Me" = false)
    // We check existence first to avoid creating unnecessary clients
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('access_token')) {
       const tempClient = createSupabaseClient(`https://${projectId}.supabase.co`, publicAnonKey, {
         auth: {
           storage: sessionStorage,
           persistSession: true,
           detectSessionInUrl: false,
           autoRefreshToken: true
         }
       });
       
       const { data: { session: tempSession } } = await tempClient.auth.getSession();
       if (tempSession?.access_token) {
         return tempSession.access_token;
       }
    }
  } catch (err) {
    console.warn('Error getting access token:', err);
  }

  // 3. Fallback to raw storage read or public key
  return localStorage.getItem('access_token') || sessionStorage.getItem('access_token') || publicAnonKey;
}

// Helper to add timeout to fetch
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout: number = DEFAULT_TIMEOUT) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timeout - please try again');
    }
    throw error;
  }
}

export async function apiCall(endpoint: string, options: RequestInit = {}, retries: number = 1) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const accessToken = await getAccessToken();
      
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        ...options.headers,
      };

      const response = await fetchWithTimeout(`${API_BASE}${endpoint}`, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `API request failed with status ${response.status}`;
        try {
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.error || errorMessage;
        } catch {
          errorMessage = errorText ? `${errorMessage}: ${errorText}` : errorMessage;
        }
        
        // Don't retry user errors (4xx status codes except 408 Request Timeout and 429 Too Many Requests)
        const shouldRetry = !response.status || response.status >= 500 || response.status === 408 || response.status === 429;
        
        const error = new Error(errorMessage);
        if (!shouldRetry) {
          throw error;
        }
        throw error;
      }

      return response.json();
    } catch (error) {
      console.error(`API call attempt ${attempt + 1} failed:`, error);
      
      // Don't retry if it's a user error (already thrown above for 4xx)
      const isUserError = error instanceof Error && 
        (error.message.includes('already exists') || 
         error.message.includes('Invalid email') || 
         error.message.includes('password'));
      
      // Don't retry on last attempt or user errors
      if (attempt === retries || isUserError) {
        throw error;
      }
      
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.min(1000 * Math.pow(2, attempt), 5000)));
    }
  }
  
  throw new Error('All retry attempts failed');
}

// Seed prompts into backend on app initialization
export async function seedPrompts(prompts: any[]) {
  try {
    const response = await fetchWithTimeout(`${API_BASE}/prompts/seed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify({ prompts }),
    }, 30000); // 30 second timeout for seeding

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Seed prompts failed:', errorText);
      throw new Error('Failed to seed prompts');
    }

    return response.json();
  } catch (error) {
    console.error('Error seeding prompts:', error);
    throw error;
  }
}
