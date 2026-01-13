import svgPaths from "./svg-99gptrco7q";
import imgImageWithFallback from "figma:asset/9eb4c631140618de5d9b0cb83cafb7811d81adeb.png";
import imgImageWithFallback1 from "figma:asset/69165af98cb92d253343b264950b275705e81eca.png";

function TextInput() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[10px] top-0 w-[361px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[16px] py-0 relative rounded-[inherit] w-[361px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#7e7467] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Search...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M17.5 17.5L13.8833 13.8833" id="Vector" stroke="var(--stroke-0, #7E7467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pcddfd00} id="Vector_2" stroke="var(--stroke-0, #7E7467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[132.82px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[132.82px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#ab591f] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Next prompt in 1 day</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.133px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[54.133px]">
        <p className="[text-underline-position:from-font] absolute decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[27.5px] not-italic text-[#be592a] text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] underline whitespace-pre">Unread</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-[30.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[30.922px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] whitespace-pre">12/8</p>
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e99b63] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[30px] left-0 not-italic text-[24px] text-white top-0 tracking-[0.0703px] w-[328px]">What truth about yourself are you afraid to admit?</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[48px] opacity-80 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-0 text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] w-[323px]">Example: That I might be depressed, not just tired</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[116px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-gray-200 relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[32px]">
        <ImageWithFallback1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[94.555px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Nick Abrams</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[18px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#7e7467] text-[12px] text-nowrap top-px whitespace-pre">17h ago</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #7E7467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
            <path d="M0.583333 0.583333V4.08333" id="Vector" stroke="var(--stroke-0, #7E7467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11">
            <path d={svgPaths.p15d40e70} id="Vector" stroke="var(--stroke-0, #7E7467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H11.0833" id="Vector" stroke="var(--stroke-0, #7E7467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p2d65a400} id="Vector" stroke="var(--stroke-0, #7E7467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[14px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[18px] items-center left-[187.14px] top-[4.5px] w-[65.859px]" data-name="Container">
      <Text3 />
      <Button1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <Text2 />
        <Container7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container8 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">{`That I'm not smart.`}</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white h-[98px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[98px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container9 />
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="content-stretch flex h-[80px] items-start overflow-clip relative shrink-0 w-full" data-name="Text Area">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#7e7467] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">That I have a hard time advocating</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[112.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[112.375px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#7e7467] text-[12px] top-px w-[113px]">45/2000 characters</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-gradient-to-b from-[#f5802c] h-[33px] relative rounded-[6px] shrink-0 to-[#b9420a] w-[78.773px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[33px] relative w-[78.773px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[38.5px] not-italic text-[#fbf9f8] text-[14px] text-center text-nowrap top-[5px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Submit</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Button2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[151px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] h-[151px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <TextArea />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#be592a] h-[469px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[469px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container4 />
          <Container5 />
          <Container10 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[29.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[29.813px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">12/7</p>
      </div>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Container14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[315px]">What would it feel like to fully inhabit your body?</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container15 />
          <Heading2 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[30.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[30.594px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">12/5</p>
      </div>
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback3 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Container17 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] text-nowrap top-[0.5px] tracking-[-0.4395px] whitespace-pre">How has suffering shaped your faith?</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white h-[90.75px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[90.75px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container18 />
          <Heading3 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[30.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[30.688px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">12/4</p>
      </div>
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-gray-100 left-0 rounded-[1.67772e+07px] size-[24px] top-0" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback4 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#372919] text-[10px] text-nowrap tracking-[0.1172px] whitespace-pre">D</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-gray-100 left-[16px] rounded-[1.67772e+07px] size-[24px] top-0" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[40px]">
        <Container20 />
        <Container22 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Container23 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[265px]">What would change if you truly believed you were worthy?</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container24 />
          <Heading4 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[30.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[30.734px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">12/3</p>
      </div>
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-gray-100 left-0 rounded-[1.67772e+07px] size-[24px] top-0" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback5 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#372919] text-[10px] text-nowrap tracking-[0.1172px] whitespace-pre">D</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-gray-100 left-[16px] rounded-[1.67772e+07px] size-[24px] top-0" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <Container27 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[40px]">
        <Container26 />
        <Container28 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Container29 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[306px]">How has friendship disappointment changed you?</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container30 />
          <Heading5 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[30.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[30.359px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">12/2</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#372919] text-[10px] text-nowrap tracking-[0.1172px] whitespace-pre">D</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-gray-100 left-0 rounded-[1.67772e+07px] size-[24px] top-0" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <Container32 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-gray-100 left-[16px] rounded-[1.67772e+07px] size-[24px] top-0" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback6 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[40px]">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Container35 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[299px]">{`What is your body trying to tell you that you're not hearing?`}</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container36 />
          <Heading6 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[38.266px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/30</p>
      </div>
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback7 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Container38 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[298px]">What gives your life meaning when everything else falls away?</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container39 />
          <Heading7 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#e99b63] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/28</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[54.031px]">
        <Container41 />
        <Text11 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-0" />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[279px]">{`What's a memory you've tried to forget but can't?`}</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container44 />
          <Heading8 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[36.922px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/27</p>
      </div>
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback8 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Container46 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[289px]">How does trauma show up in your body?</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container47 />
          <Heading9 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[38px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/26</p>
      </div>
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback9 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text13 />
      <Container49 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[265px]">What would change if you truly believed you were beloved?</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container50 />
          <Heading10 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[37.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[37.703px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/25</p>
      </div>
    </div>
  );
}

function ImageWithFallback10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback10 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Container52 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[325px]">What part of your shadow self are you learning to integrate?</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container53 />
          <Heading11 />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[37.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[37.844px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/23</p>
      </div>
    </div>
  );
}

function ImageWithFallback11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback11 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text15 />
      <Container55 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[257px]">{`What's a small moment with a grandparent you treasure?`}</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container56 />
          <Heading12 />
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[35.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[35.766px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/19</p>
      </div>
    </div>
  );
}

function ImageWithFallback12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback12 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Container58 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[327px]">How do you know when a friendship is real?</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container59 />
          <Heading13 />
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[35.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[35.469px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/15</p>
      </div>
    </div>
  );
}

function ImageWithFallback13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback13 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <Container61 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[325px]">What spiritual practice do you want to explore?</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container62 />
          <Heading14 />
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[35.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[35.234px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/12</p>
      </div>
    </div>
  );
}

function ImageWithFallback14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback14 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Container64 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[324px]">How do you hope your kids remember you?</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container65 />
          <Heading15 />
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[28.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[28.688px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/8</p>
      </div>
    </div>
  );
}

function ImageWithFallback15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback15 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text19 />
      <Container67 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[304px]">{`What's a place from your childhood you wish you could visit again?`}</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container68 />
          <Heading16 />
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[28.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[28.656px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/6</p>
      </div>
    </div>
  );
}

function ImageWithFallback16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback16 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Container70 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[307px]">{`How have your friendships changed as you've gotten older?`}</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container71 />
          <Heading17 />
        </div>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[28.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[28.453px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">11/4</p>
      </div>
    </div>
  );
}

function ImageWithFallback17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback17 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text21 />
      <Container73 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[74.25px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[293px]">{`What's something you were unnecessarily dramatic about as a teen?`}</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-white h-[140.25px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[140.25px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container74 />
          <Heading18 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#e99b63] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Text22() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">10/27</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[55.578px]">
        <Container76 />
        <Text22 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-0" />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[295px]">{`What's a childhood tradition you'd love to recreate?`}</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container79 />
          <Heading19 />
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[40.359px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">10/25</p>
      </div>
    </div>
  );
}

function ImageWithFallback18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback18 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text23 />
      <Container81 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] text-nowrap top-[0.5px] tracking-[-0.4395px] whitespace-pre">How do you self-sabotage?</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-white h-[90.75px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[90.75px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container82 />
          <Heading20 />
        </div>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[40.5px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">10/23</p>
      </div>
    </div>
  );
}

function ImageWithFallback19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback19 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <Container84 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[315px]">How does your body tell you it needs rest?</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container85 />
          <Heading21 />
        </div>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[40.125px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">10/22</p>
      </div>
    </div>
  );
}

function ImageWithFallback20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback20 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text25 />
      <Container87 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[310px]">What childhood role do you still play in your family?</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container88 />
          <Heading22 />
        </div>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[38.422px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">10/16</p>
      </div>
    </div>
  );
}

function ImageWithFallback21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback21 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Container90 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[277px]">What version of yourself are you working towards?</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container91 />
          <Heading23 />
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[38.266px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">10/13</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#372919] text-[10px] text-nowrap tracking-[0.1172px] whitespace-pre">D</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute bg-gray-100 left-0 rounded-[1.67772e+07px] size-[24px] top-0" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <Container93 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function ImageWithFallback22() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute bg-gray-100 left-[16px] rounded-[1.67772e+07px] size-[24px] top-0" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback22 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[40px]">
        <Container94 />
        <Container95 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text27 />
      <Container96 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[317px]">{`What's your most memorable 'I can't believe I said that' moment?`}</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container97 />
          <Heading24 />
        </div>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[38.313px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">10/10</p>
      </div>
    </div>
  );
}

function ImageWithFallback23() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <ImageWithFallback23 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text28 />
      <Container99 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[274px]">How do you handle conflict with friends?</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container100 />
          <Heading25 />
        </div>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[24px] relative shrink-0 w-[31.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[31.313px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">10/9</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#372919] text-[10px] text-nowrap tracking-[0.1172px] whitespace-pre">N</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="bg-gray-100 relative rounded-[1.67772e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-[24px]">
        <Container102 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text29 />
      <Container103 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24.75px] left-0 not-italic text-[#372919] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[308px]">{`What's something you believed as a child that shaped who you are?`}</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-white h-[115.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[115.5px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container104 />
          <Heading26 />
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[3731.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container16 />
      <Container19 />
      <Container25 />
      <Container31 />
      <Container37 />
      <Container40 />
      <Container45 />
      <Container48 />
      <Container51 />
      <Container54 />
      <Container57 />
      <Container60 />
      <Container63 />
      <Container66 />
      <Container69 />
      <Container72 />
      <Container75 />
      <Container80 />
      <Container83 />
      <Container86 />
      <Container89 />
      <Container92 />
      <Container98 />
      <Container101 />
      <Container105 />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[787px] items-start left-0 overflow-clip pb-0 pt-[16px] px-[16px] top-[65px] w-[393px]" data-name="Container">
      <Container2 />
      <Container106 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, #372919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[24px] top-[8px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#372919] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">ND For Life</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#7e7467] text-[12px] top-px w-[64px]">2 members</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex flex-col h-[38px] items-start left-[88px] top-px w-[82.742px]" data-name="Container">
      <Heading />
      <Paragraph2 />
    </div>
  );
}

function ImageWithFallback24() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute bg-gray-200 content-stretch flex flex-col items-start left-[36px] overflow-clip rounded-[10px] size-[40px] top-0" data-name="Container">
      <ImageWithFallback24 />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[40px] relative shrink-0 w-[170.742px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[170.742px]">
        <Button3 />
        <Container108 />
        <Container109 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.41%_12.68%]" data-name="Vector">
        <div className="absolute inset-[-5.01%_-5.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
            <path d={svgPaths.p23f3d180} id="Vector" stroke="var(--stroke-0, #372919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p1e531d00} id="Vector" stroke="var(--stroke-0, #372919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[24px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[65px] items-center justify-between left-0 pb-px pt-0 px-[16px] top-0 w-[393px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f6f7f9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container110 />
      <Button4 />
    </div>
  );
}

export default function WeveApp() {
  return (
    <div className="bg-[#fbf9f8] relative size-full" data-name="WE\'VE App - 1.2">
      <Container107 />
      <Header />
    </div>
  );
}