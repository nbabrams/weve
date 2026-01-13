interface SplashProps {
  onContinue: () => void;
}

export function Splash({ onContinue }: SplashProps) {
  return (
    <div className="min-h-screen bg-[#fbf9f8] flex flex-col items-center justify-center p-6" onClick={onContinue}>
      <div className="flex flex-col gap-[8px] items-center justify-center relative shrink-0 text-center w-full animate-in fade-in duration-1000">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[46px] leading-[60px] not-italic relative shrink-0 text-[#BE592A] text-[40px] tracking-[0.3711px]">
          WE'VE
        </p>
        <p className="font-['Tinos:Italic',sans-serif] italic leading-[30px] relative shrink-0 text-[#67717e] text-[14px] whitespace-pre">
          Seen. Held. Cared for.
        </p>
      </div>
      <div className="absolute bottom-10">
        <p className="text-[#67717e] text-sm animate-pulse">Tap to continue</p>
      </div>
    </div>
  );
}
