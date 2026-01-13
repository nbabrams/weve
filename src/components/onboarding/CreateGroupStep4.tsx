import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Slider } from '../ui/slider';

const depthDescriptions: Record<number, string> = {
  1: 'Fun and lighthearted icebreakers',
  2: 'Getting to know each other better',
  3: 'Exploring interests and hobbies',
  4: 'Sharing personal experiences',
  5: 'Discussing values and beliefs',
  6: 'Reflecting on life and goals',
  7: 'Exploring emotions and feelings',
  8: 'Discussing challenges and growth',
  9: 'Sharing vulnerabilities and fears',
  10: 'Deep questions exploring vulnerability, psychology, and spirituality',
};

export function CreateGroupStep4({
  onBack,
  onCreateGroup,
}: {
  onBack: () => void;
  onCreateGroup: (depth: number) => void;
}) {
  const [depth, setDepth] = useState(10);

  const handleCreateGroup = () => {
    onCreateGroup(depth);
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
                Connection Depth
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#67717e] leading-[24px] tracking-[-0.3125px]">
                How deep do you want the conversations to be?
              </p>
            </div>

            {/* Slider */}
            <div className="flex flex-col gap-4">
              {/* Level Display */}
              <div className="flex items-center justify-between">
                <span className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#264859] tracking-[-0.3125px]">
                  Level {depth}
                </span>
                <span className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#BE592A] tracking-[-0.3125px]">
                  {depth <= 3 ? 'Light connection' : depth <= 6 ? 'Moderate connection' : 'Deep connection'}
                </span>
              </div>

              {/* Slider Component */}
              <Slider
                value={[depth]}
                onValueChange={(values) => setDepth(values[0])}
                min={1}
                max={10}
                step={1}
                className="w-full"
              />

              {/* Light / Deep Labels */}
              <div className="flex items-center justify-between">
                <span className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#67717e] tracking-[-0.3125px]">
                  Light
                </span>
                <span className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#67717e] tracking-[-0.3125px]">
                  Deep
                </span>
              </div>
            </div>

            {/* Description Box */}
            <div className="bg-[rgba(190,89,42,0.1)] rounded-[12px] p-4">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#264859] leading-[24px] tracking-[-0.3125px]">
                {depthDescriptions[depth]}
              </p>
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
                onClick={handleCreateGroup}
                className="flex-1 h-[36px] bg-[#BE592A] rounded-[10px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white leading-[20px] tracking-[-0.1504px] hover:opacity-90 transition-opacity"
              >
                Create Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
