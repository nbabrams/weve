import { useState } from 'react';

interface WelcomeProps {
  onSignIn: (email: string, password: string) => void;
  onSignUp: () => void;
}

export function Welcome({ onSignIn, onSignUp }: WelcomeProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f8] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-[342px] space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="font-['Inter:Medium',sans-serif] font-medium text-[24px] text-[#264859] tracking-[0.0703px]">
            Welcome
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#67717e] tracking-[-0.3125px]">
            Sign in to continue your journey
          </p>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] p-6 space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label 
                htmlFor="email"
                className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#264859] tracking-[-0.3125px] block"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-[#f6f7f9] rounded-[10px] px-3 py-2 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#264859] tracking-[-0.3125px] placeholder:text-[#67717e] border border-[#f6f7f9] focus:outline-none focus:ring-2 focus:ring-[#BE592A] focus:border-transparent"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label 
                htmlFor="password"
                className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#264859] tracking-[-0.3125px] block"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#f6f7f9] rounded-[10px] px-3 py-2 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#264859] tracking-[-0.3125px] placeholder:text-[#67717e] border border-[#f6f7f9] focus:outline-none focus:ring-2 focus:ring-[#BE592A] focus:border-transparent"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#BE592A] rounded-[10px] py-2 font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white tracking-[-0.1504px] hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="border-t border-[#f6f7f9] pt-6 text-center">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-[#BE592A] tracking-[-0.4395px]">
            Don't have an account?{' '}
            <button
              onClick={onSignUp}
              className="underline hover:opacity-80 transition-opacity"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
