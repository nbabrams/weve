import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { createClient } from '../../utils/supabase/client';

interface ForgotPasswordProps {
  onBack: () => void;
}

export function ForgotPassword({ onBack }: ForgotPasswordProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      const supabase = createClient();
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/auth/reset-password', 
      });

      if (resetError) throw resetError;

      setSuccess(true);
    } catch (err: any) {
      console.error('Forgot password error:', err);
      setError(err.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(25,75%,65%)]/10 via-background to-[hsl(172,42%,40%)]/10 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-[hsl(200,40%,25%)] font-medium text-[24px]">Reset Password</h1>
          <p className="text-[hsl(215,10%,45%)] text-[16px]">Enter your email to receive instructions</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-[0_2px_8px_hsla(200,40%,25%,0.08)] space-y-4">
          {error && (
            <div className="bg-[hsl(0,70%,55%)]/10 border border-[hsl(0,70%,55%)]/20 rounded-lg p-3">
              <p className="text-[hsl(0,70%,55%)] text-sm">{error}</p>
            </div>
          )}
          
          {success ? (
            <div className="bg-[hsl(142,69%,58%)]/10 border border-[hsl(142,69%,58%)]/20 rounded-lg p-4 space-y-4">
              <p className="text-[hsl(142,69%,58%)] font-medium">Check your email!</p>
              <p className="text-[hsl(200,40%,25%)] text-sm">We've sent password reset instructions to {email}.</p>
              <Button
                type="button"
                onClick={onBack}
                className="w-full bg-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,60%)] text-white"
              >
                Back to Sign In
              </Button>
            </div>
          ) : (
            <>
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

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,60%)] text-white transition-all hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] hover:-translate-y-0.5"
              >
                {loading ? 'Sending...' : 'Send Reset Instructions'}
              </Button>

              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={onBack}
                  className="text-[#67717e] hover:text-[hsl(200,40%,25%)] transition-colors text-sm"
                >
                  Back to Sign In
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}