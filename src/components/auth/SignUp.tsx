import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { apiCall } from '../../utils/api';
import { createClient } from '../../utils/supabase/client';

interface SignUpProps {
  onSuccess: (accessToken: string) => void;
  onSwitch: () => void;
}

export function SignUp({ onSuccess, onSwitch }: SignUpProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      console.log('Creating account for:', email);
      
      // Register user via backend
      const registerResponse = await apiCall('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name }),
      });
      
      console.log('Registration successful, signing in...');

      // Add a small delay to ensure Auth propagation
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Sign in to get access token
      const supabase = createClient();
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        console.error('Auto-signin failed:', signInError);
        // If sign in fails but registration succeeded, we should probably ask them to sign in manually
        // or try one more time
        if (signInError.message.includes('Invalid login credentials')) {
           // Try one more time after another delay
           await new Promise(resolve => setTimeout(resolve, 2000));
           const { data: retryData, error: retryError } = await supabase.auth.signInWithPassword({
             email,
             password,
           });
           
           if (retryError) {
             throw new Error('Account created successfully, but automatic sign-in failed. Please sign in manually.');
           }
           
           // Retry succeeded
           if (retryData.session?.access_token) {
             localStorage.setItem('access_token', retryData.session.access_token);
             localStorage.setItem('user_id', retryData.user.id);
             onSuccess(retryData.session.access_token);
             return;
           }
        }
        throw signInError;
      }

      if (data.session?.access_token) {
        localStorage.setItem('access_token', data.session.access_token);
        if (data.session.refresh_token) localStorage.setItem('refresh_token', data.session.refresh_token);
        localStorage.setItem('user_id', data.user.id);
        onSuccess(data.session.access_token);
      }
    } catch (err: any) {
      console.error('Sign up error:', err);
      
      // Provide helpful error messages
      if (err.message?.includes('already been registered') || err.message?.includes('User already registered') || err.message?.includes('email_exists')) {
        setError('An account with this email already exists. Please try signing in instead.');
      } else if (err.message?.includes('password')) {
        setError('Password must be at least 8 characters long.');
      } else if (err.message?.includes('email')) {
        setError('Please enter a valid email address.');
      } else {
        setError(err.message || 'Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(25,75%,65%)]/10 via-background to-[hsl(172,42%,40%)]/10 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-[hsl(200,40%,25%)] text-[rgb(190,89,42)] text-[32px] font-bold">Join WE'VE</h1>
          <p className="text-[hsl(215,10%,45%)] text-[rgb(126,116,103)]">Start deepening your friendships</p>
        </div>

        <form onSubmit={handleSignUp} className="bg-white rounded-xl p-6 shadow-[0_2px_8px_hsla(200,40%,25%,0.08)] space-y-4">
          {error && (
            <div className="bg-[hsl(0,70%,55%)]/10 border border-[hsl(0,70%,55%)]/20 rounded-lg p-3 space-y-2">
              <p className="text-[hsl(0,70%,55%)]">{error}</p>
              {error.includes('already exists') && (
                <button
                  type="button"
                  onClick={onSwitch}
                  className="text-[hsl(25,75%,65%)] hover:text-[hsl(25,75%,60%)] transition-colors underline"
                >
                  Go to sign in →
                </button>
              )}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-[hsl(200,40%,25%)] text-[rgb(55,41,25)]">Name</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-[hsl(210,20%,97%)] border-[hsl(210,20%,97%)]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[hsl(200,40%,25%)] text-[rgb(55,41,25)]">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="bg-[hsl(210,20%,97%)] border-[hsl(210,20%,97%)]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[hsl(200,40%,25%)] text-[rgb(55,41,25)]">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={8}
              className="bg-[hsl(210,20%,97%)] border-[hsl(210,20%,97%)]"
            />
            <p className="text-[hsl(215,10%,45%)]">Minimum 8 characters</p>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,60%)] text-white transition-all hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] hover:-translate-y-0.5 bg-[rgb(190,89,42)]"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={onSwitch}
            className="text-[hsl(25,75%,65%)] hover:text-[hsl(25,75%,60%)] transition-colors text-[rgb(190,89,42)]"
          >
            Already have an account? Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
