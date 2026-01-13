import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { createClient } from '../../utils/supabase/client';

interface SignInProps {
  onSuccess: (accessToken: string) => void;
  onSwitch: () => void;
  onForgotPassword: () => void;
}

export function SignIn({ onSuccess, onSwitch, onForgotPassword }: SignInProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const supabase = createClient();
      console.log('Attempting sign in for:', email);
      
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        console.error('Supabase auth error:', signInError);
        throw signInError;
      }

      if (data.session?.access_token) {
        if (rememberMe) {
          localStorage.setItem('access_token', data.session.access_token);
          localStorage.setItem('user_id', data.user.id);
        } else {
          sessionStorage.setItem('access_token', data.session.access_token);
          sessionStorage.setItem('user_id', data.user.id);
        }
        onSuccess(data.session.access_token);
      }
    } catch (err: any) {
      console.error('Sign in error:', err);
      
      // Provide more helpful error messages
      if (err.message?.includes('Invalid login credentials')) {
        setError('Invalid email or password. Please check your credentials and try again.');
      } else if (err.message?.includes('Email not confirmed')) {
        setError('Please confirm your email address before signing in.');
      } else {
        setError(err.message || 'Failed to sign in');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(25,75%,65%)]/10 via-background to-[hsl(172,42%,40%)]/10 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-[hsl(200,40%,25%)]">Welcome Back</h1>
          <p className="text-[hsl(215,10%,45%)]">Sign in to continue your journey</p>
        </div>

        <form onSubmit={handleSignIn} className="bg-white rounded-xl p-6 shadow-[0_2px_8px_hsla(200,40%,25%,0.08)] space-y-4">
          {error && (
            <div className="bg-[hsl(0,70%,55%)]/10 border border-[hsl(0,70%,55%)]/20 rounded-lg p-3">
              <p className="text-[hsl(0,70%,55%)]">{error}</p>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-[hsl(200,40%,25%)]">Email</label>
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
            <label className="text-[hsl(200,40%,25%)]">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-[hsl(210,20%,97%)] border-[hsl(210,20%,97%)]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember-me" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-[hsl(200,40%,25%)]/30 data-[state=checked]:bg-[hsl(25,75%,65%)] data-[state=checked]:border-[hsl(25,75%,65%)]"
              />
              <Label 
                htmlFor="remember-me" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[hsl(200,40%,25%)]"
              >
                Keep me logged in
              </Label>
            </div>
            
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm font-medium text-[hsl(25,75%,65%)] hover:text-[hsl(25,75%,60%)] transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,60%)] text-white transition-all hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] hover:-translate-y-0.5"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="text-center space-y-3">
          <div className="border-t border-[hsl(210,20%,97%)] pt-6">
            <button
              onClick={onSwitch}
              className="text-[hsl(25,75%,65%)] hover:text-[hsl(25,75%,60%)] transition-colors font-medium text-lg"
            >
              Don't have an account? <span className="underline">Sign up</span>
            </button>
          </div>
          {error && (
            <div className="bg-[hsl(25,75%,65%)]/5 border border-[hsl(25,75%,65%)]/10 rounded-lg p-3">
              <p className="text-[hsl(200,40%,25%)] text-sm">
                💡 <strong>Tip:</strong> Make sure you've created an account first. Click the "Sign up" button above.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
