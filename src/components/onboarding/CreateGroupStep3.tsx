import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

type Frequency = 'daily' | '2-3days' | 'weekly';

export function CreateGroupStep3({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: (frequency: Frequency) => void;
}) {
  const [selected, setSelected] = useState<Frequency>('daily');

  const handleContinue = () => {
    onContinue(selected);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f8]">
      {/* Header */}
      <div className="bg-white h-[69px] border-b border-[#f6f7f9]">
        <div className="flex items-center gap-3 h-full px-4">
          <button
            onClick={onBack}
            className="rounded-[12px] w-[36px] h-[36px] flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5 text-[#264859]" />
          </button>
          <h2 className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#264859] tracking-[-0.3125px]">
            Create Group
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 pt-6">
        <div className="bg-white rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] p-6 max-w-md mx-auto">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h3 className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#264859] tracking-[-0.3125px]">
                Frequency
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#67717e] leading-[24px] tracking-[-0.3125px]">
                How often do you want new prompts?
              </p>
            </div>

            {/* Frequency Options */}
            <div className="flex gap-3">
              <button
                onClick={() => setSelected('daily')}
                className={`flex-1 h-[84px] rounded-[12px] font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] tracking-[-0.3125px] transition-all ${
                  selected === 'daily'
                    ? 'bg-[#BE592A] text-white border-2 border-[#BE592A] shadow-[0px_4px_12px_0px_rgba(190,89,42,0.3)]'
                    : 'bg-white text-[#264859] border-2 border-[#f6f7f9]'
                }`}
              >
                Daily
              </button>
              <button
                onClick={() => setSelected('2-3days')}
                className={`flex-1 h-[84px] rounded-[12px] font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] tracking-[-0.3125px] transition-all ${
                  selected === '2-3days'
                    ? 'bg-[#BE592A] text-white border-2 border-[#BE592A] shadow-[0px_4px_12px_0px_rgba(190,89,42,0.3)]'
                    : 'bg-white text-[#264859] border-2 border-[#f6f7f9]'
                }`}
              >
                2-3 Days
              </button>
              <button
                onClick={() => setSelected('weekly')}
                className={`flex-1 h-[84px] rounded-[12px] font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] tracking-[-0.3125px] transition-all ${
                  selected === 'weekly'
                    ? 'bg-[#BE592A] text-white border-2 border-[#BE592A] shadow-[0px_4px_12px_0px_rgba(190,89,42,0.3)]'
                    : 'bg-white text-[#264859] border-2 border-[#f6f7f9]'
                }`}
              >
                Weekly
              </button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onBack}
                className="flex-1 h-[36px] bg-[#fbf9f8] rounded-[10px] border border-[#BE592A] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#BE592A] leading-[20px] tracking-[-0.1504px] hover:opacity-90 transition-opacity"
              >
                Back
              </button>
              <button
                onClick={handleContinue}
                className="flex-1 h-[36px] bg-[#BE592A] rounded-[10px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white leading-[20px] tracking-[-0.1504px] hover:opacity-90 transition-opacity"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
