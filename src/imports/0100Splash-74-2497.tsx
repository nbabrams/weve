function App() {
  return <div className="absolute bg-[#fbf9f8] h-[852px] left-0 top-0 w-[390px]" data-name="App" />;
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Tinos:Regular',sans-serif] leading-[29.25px] not-italic relative shrink-0 text-[18px] text-[rgba(38,72,89,0.9)] text-center w-[258px]">“Surround yourself with people that only lift you higher.”</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129px] not-italic text-[#67717e] text-[14px] text-center top-[0.13px] tracking-[-0.1504px] translate-x-[-50%] w-[192px]">— Percy Bysshe Shelley</p>
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[129.25px] items-start pb-[24px] pt-[32px] px-0 relative shrink-0 w-[257.297px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[24px] relative shrink-0 w-[85.391px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#e99b63] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Continue →</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] items-center px-0 py-px relative">
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

export default function Component0100Splash() {
  return (
    <div className="bg-[#fbf9f8] relative size-full" data-name="01.00 - Splash">
      <App />
      <SplashScreen />
    </div>
  );
}