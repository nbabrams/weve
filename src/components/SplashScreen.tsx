import { useEffect, useState } from 'react';
import { getRandomQuote } from '../data/quotes';

interface SplashScreenProps {
  onContinue: () => void;
}

export function SplashScreen({ onContinue }: SplashScreenProps) {
  const [quote] = useState(getRandomQuote());
  const [show, setShow] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade in animation
    setFadeIn(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#fbf9f8] flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Background/Frame logic from Figma - kept simpler for responsiveness */}
      
      <div 
        className={`relative flex flex-col items-center justify-center transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="bg-clip-padding border-0 border-[transparent] border-solid flex flex-col gap-[24px] items-center px-4 relative max-w-sm w-full">
          
          {/* Container */}
          <div className="flex flex-col gap-[16px] items-center pb-[24px] pt-[32px] px-0 relative shrink-0 w-full">
            
            {/* Top Text */}
            <div className="flex flex-col items-center relative shrink-0 w-full">
              <div className="font-['Merriweather',serif] leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(38,72,89,0.9)] text-center">
                <p className="leading-[29.25px] mb-0">Take a deep breath.</p>
                <p className="leading-[29.25px]">
                  <span>{`You’re entering a space for `}</span>
                  <span className="italic">you</span>.
                </p>
              </div>
            </div>
            
            {/* Divider Line */}
            <div className="flex h-[0.5px] items-center justify-center relative shrink-0 w-full max-w-[258px] my-2">
              <div className="flex-none w-full">
                <div className="h-0 relative w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg className="block w-full h-[1px]" fill="none" preserveAspectRatio="none" viewBox="0 0 258 1">
                      <line x1="0" y1="0.5" x2="258" y2="0.5" stroke="#C5CED7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="flex items-center justify-center relative shrink-0 min-h-[80px] w-full px-4">
              <p className="font-['Merriweather',serif] leading-[29.25px] not-italic relative shrink-0 text-[18px] text-[rgba(38,72,89,0.9)] text-center w-full max-w-[280px]">
                “{quote.text}”
              </p>
            </div>
            
            {/* Author */}
            <p className="font-['Inter',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#67717e] text-[14px] text-center tracking-[-0.1504px] w-full">
              — {quote.author}
            </p>
          </div>

          {/* Continue Button */}
          <button 
            onClick={() => {
              setShow(false);
              onContinue();
            }}
            className="flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity p-2"
          >
            <p className="font-['Inter',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#e99b63] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">
              Continue →
            </p>
          </button>

        </div>
      </div>
    </div>
  );
}
