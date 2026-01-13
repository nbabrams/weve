export function CreateGroupStep1({
  userName,
  onCreateGroup,
  onJoinGroup,
}: {
  userName?: string;
  onCreateGroup: () => void;
  onJoinGroup: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#fbf9f8] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="font-['Inter:Medium',sans-serif] font-medium text-[24px] text-[#BE592A] text-center leading-[36px] tracking-[0.0703px]">
            Welcome{userName ? `, ${userName}` : ''}!
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[rgba(38,72,89,0.8)] text-center leading-[24px] tracking-[-0.3125px]">
            Let's set up your first friend group
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onCreateGroup}
            className="bg-[#BE592A] h-[36px] rounded-[10px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white leading-[20px] tracking-[-0.1504px] hover:opacity-90 transition-opacity"
          >
            Create New Group
          </button>
          <button
            onClick={onJoinGroup}
            className="bg-[#fbf9f8] h-[36px] rounded-[10px] border border-[#BE592A] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#BE592A] leading-[20px] tracking-[-0.1504px] hover:opacity-90 transition-opacity"
          >
            Join Existing Group
          </button>
        </div>
      </div>
    </div>
  );
}
