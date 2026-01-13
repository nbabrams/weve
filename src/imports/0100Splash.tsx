function App() {
  return <div className="absolute bg-[#fbf9f8] h-[852px] left-0 top-0 w-[390px]" data-name="App" />;
}

function Heading() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[60px] left-[128.5px] not-italic text-[#e99b63] text-[40px] text-center text-nowrap top-0 tracking-[0.3711px] translate-x-[-50%] whitespace-pre">{`WE'VE`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Tinos:Italic',sans-serif] italic leading-[30px] left-[128.41px] text-[#67717e] text-[14px] text-center text-nowrap top-[-15.38px] translate-x-[-50%] whitespace-pre">Seen. Held. Cared for.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[98px] items-start left-0 top-0 w-[257.297px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return <div className="h-[29.25px] shrink-0 w-full" data-name="Paragraph" />;
}

function Paragraph2() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[129.25px] items-start left-0 pb-0 pt-[32px] px-0 top-[141px] w-[257.297px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[24px] left-[85.95px] top-[313.25px] w-[85.391px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#e99b63] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Continue →</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[316px] relative shrink-0 w-[258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[316px] relative w-[258px]">
        <Container />
        <Container1 />
        <Button />
      </div>
    </div>
  );
}

function SplashScreen() {
  return (
    <div className="absolute content-stretch flex flex-col h-[852px] items-center justify-center left-0 top-0 w-[390px]" data-name="SplashScreen">
      <Container2 />
    </div>
  );
}

export default function Component0100Splash() {
  return (
    <div className="bg-[#fbf9f8] relative size-full" data-name="01.00 - Splash">
      <App />
      <SplashScreen />
      <div className="absolute font-['Tinos:Regular',sans-serif] h-[151px] leading-[0] left-[195px] not-italic text-[18px] text-[rgba(38,72,89,0.9)] text-center top-[393px] translate-x-[-50%] w-[258px]">
        <p className="leading-[29.25px] mb-0">Take a deep breath.</p>
        <p className="leading-[29.25px] mb-0">{`Breathe in for 3. `}</p>
        <p className="leading-[29.25px] mb-0">{`Breathe out for 3. `}</p>
        <p className="leading-[29.25px] mb-0">&nbsp;</p>
        <p className="leading-[29.25px]">
          <span>{`You’re entering a space for `}</span>
          <span className="font-['Tinos:Italic',sans-serif] italic">you</span>.
        </p>
      </div>
    </div>
  );
}