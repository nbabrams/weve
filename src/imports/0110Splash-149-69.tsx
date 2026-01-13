function App() {
  return <div className="absolute bg-[#fbf9f8] h-[852px] left-0 top-0 w-[390px]" data-name="App" />;
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[75px] items-start relative shrink-0 w-full">
      <div className="font-['Tinos:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(38,72,89,0.9)] text-center w-[258px]">
        <p className="leading-[29.25px] mb-0">Take a deep breath.</p>
        <p className="leading-[29.25px]">
          <span>{`You’re entering a space for `}</span>
          <span className="font-['Tinos:Italic',sans-serif] italic">you</span>.
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-center relative shrink-0">
      <p className="font-['Tinos:Regular',sans-serif] h-[53px] leading-[29.25px] not-italic relative shrink-0 text-[18px] text-[rgba(38,72,89,0.9)] text-center w-[258px]">“Surround yourself with people that only lift you higher.”</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[32px] px-0 relative shrink-0 w-[257.297px]" data-name="Container">
      <Frame />
      <div className="flex h-[0.5px] items-center justify-center relative shrink-0 w-[257.648px]" style={{ "--transform-inner-width": "257.640625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.889deg]">
          <div className="h-0 relative w-[257.649px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258 1">
                <line id="Line 1" stroke="var(--stroke-0, #C5CED7)" x2="257.649" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#67717e] text-[14px] text-center tracking-[-0.1504px] w-[258px]">— Percy Bysshe Shelley</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#e99b63] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Continue →</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center px-0 py-px relative">
        <Container />
        <Button />
      </div>
    </div>
  );
}

function SplashScreen() {
  return (
    <div className="absolute content-stretch flex flex-col h-[852px] items-center justify-center left-0 top-0 w-[390px]" data-name="SplashScreen">
      <Container1 />
    </div>
  );
}

export default function Component0110Splash() {
  return (
    <div className="bg-[#fbf9f8] relative size-full" data-name="01.10 - Splash">
      <App />
      <SplashScreen />
    </div>
  );
}