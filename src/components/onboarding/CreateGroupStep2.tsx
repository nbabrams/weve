import { useState } from 'react';
import { ChevronLeft, Upload } from 'lucide-react';

export function CreateGroupStep2({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: (groupName: string, photo?: File) => void;
}) {
  const [groupName, setGroupName] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);

  const handleContinue = () => {
    if (groupName.trim()) {
      onContinue(groupName.trim(), photo || undefined);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
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
            {/* Group Name Input */}
            <div className="flex flex-col gap-2">
              <h3 className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#264859] tracking-[-0.3125px]">
                Group Details
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#67717e] leading-[24px] tracking-[-0.3125px]">
                Choose a name and photo for your friend group
              </p>
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="e.g., Book Club Buddies, The Squad"
                className="bg-[#f6f7f9] h-[36px] rounded-[10px] px-3 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#264859] tracking-[-0.3125px] placeholder:text-[#67717e] border border-[#f6f7f9] focus:outline-none focus:ring-2 focus:ring-[#BE592A] focus:border-transparent"
              />
            </div>

            {/* Photo Upload */}
            <label className="flex items-center gap-6 cursor-pointer group">
              <div className="bg-[#e8f0f2] rounded-[8px] w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
                {photo ? (
                  <img src={URL.createObjectURL(photo)} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <Upload className="w-6 h-6 text-[#0d171c]" />
                )}
              </div>
              <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[16px] text-[#0d171c] underline leading-[24px] group-hover:opacity-80 transition-opacity">
                {photo ? photo.name : 'Upload Profile Photo'}
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!groupName.trim()}
              className={`h-[36px] rounded-[10px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white leading-[20px] tracking-[-0.1504px] transition-opacity ${
                groupName.trim() ? 'bg-[#BE592A] hover:opacity-90' : 'bg-[#BE592A] opacity-50 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
