import { useState } from 'react';

const quotes = [
  { text: "Surround yourself with people that only lift you higher.", author: "Percy Bysshe Shelley" },
  { text: "Friendship is the only cement that will ever hold the world together.", author: "Woodrow Wilson" },
  { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
  { text: "The only way to have a friend is to be one.", author: "Ralph Waldo Emerson" },
  { text: "True friendship comes when the silence between two people is comfortable.", author: "David Tyson" },
];

interface PostAuthSplashProps {
  onContinue: () => void;
}

export function PostAuthSplash({ onContinue }: PostAuthSplashProps) {
  // Initialize with a random index once on mount
  const [quoteIndex] = useState(() => Math.floor(Math.random() * quotes.length));
  
  const currentQuote = quotes[quoteIndex];

  return (
    <div className="absolute inset-0 bg-[#fbf9f8] flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center gap-8 max-w-[342px] w-full">
        
        {/* Static Text */}
        <div className="text-center space-y-0">
          <p className="font-['Tinos:Regular',sans-serif] text-[18px] text-[#264859]/90 leading-[29.25px]">
            Take a deep breath.
          </p>
          <p className="font-['Tinos:Regular',sans-serif] text-[18px] text-[#264859]/90 leading-[29.25px]">
            You’re entering a space for <span className="font-['Tinos:Italic',sans-serif] italic">you</span>.
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-[257px] h-[1px] relative flex justify-center items-center">
             <div className="w-full h-[1px] bg-[#C5CED7]"></div>
        </div>

        {/* Static Quote */}
        <div className="flex flex-col gap-4 items-center w-full justify-center">
          <div className="text-center">
            <p className="font-['Tinos:Regular',sans-serif] text-[18px] text-[#264859]/90 leading-[29.25px]">
              “{currentQuote.text}”
            </p>
          </div>
          <div className="text-center">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#67717e] leading-[20px] tracking-[-0.15px]">
              — {currentQuote.author}
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#BE592A] tracking-[-0.3125px] hover:opacity-80 transition-opacity mt-4"
        >
          Continue →
        </button>

      </div>
    </div>
  );
}
