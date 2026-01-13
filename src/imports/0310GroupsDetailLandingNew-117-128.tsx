import svgPaths from "./svg-elerskgyjm";
import imgImagePreview from "figma:asset/9eb4c631140618de5d9b0cb83cafb7811d81adeb.png";
import imgImageNdForLife from "figma:asset/69165af98cb92d253343b264950b275705e81eca.png";

function Input() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[10px] top-0 w-[358px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative rounded-[inherit] w-[358px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#67717e] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Search...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M17.5 17.5L13.8833 13.8833" id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pcddfd00} id="Vector_2" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[20px] not-italic relative shrink-0 text-[#e99b63] text-[16px] text-nowrap tracking-[-0.1504px] w-full whitespace-pre">
      <p className="relative shrink-0">Next prompt in 1 day</p>
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0 underline">Unread</p>
    </div>
  );
}

function ImagePreview() {
  return (
    <div className="absolute left-[1.6px] size-[22px] top-[2px]" data-name="Image (Preview)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagePreview} />
    </div>
  );
}

function ImageNdForLife() {
  return (
    <div className="overflow-clip relative rounded-[2.01326e+07px] shrink-0 size-[24px]" data-name="Image (ND For Life)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.01326e+07px] size-full" src={imgImageNdForLife} />
      <ImagePreview />
    </div>
  );
}

function ImageNdForLife1() {
  return (
    <div className="relative rounded-[2.01326e+07px] shrink-0 size-[24px]" data-name="Image (ND For Life)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.01326e+07px] size-full" src={imgImageNdForLife} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[9.6px] items-start relative">
        <ImageNdForLife />
        <ImageNdForLife1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.3125px] whitespace-pre">11/12</p>
      <Frame2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[76px] leading-[1.2] not-italic relative shrink-0 text-[28px] text-white w-[321px]">How do you hope your kids remember you?</p>
      <p className="font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[24px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.75)] tracking-[-0.3125px] w-[289px]">Example: As someone who was always ready for an adventure, even small ones</p>
    </div>
  );
}

function ImageNickAbrams() {
  return (
    <div className="relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Image (Nick Abrams)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3.35544e+07px] size-full" src={imgImagePreview} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[32px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] items-start leading-[24px] not-italic relative w-full">
        <p className="h-[23px] relative shrink-0 text-[#264859] text-[16px] w-[137px]">Nick Abrams</p>
        <p className="relative shrink-0 text-[#67717e] text-[14px] w-[85px]">Just now</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p4290a20} id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_20.83%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p17db7800} id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
            <path d={svgPaths.p3f1e40} id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
            <path d={svgPaths.p3a97aa70} id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Button">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start pb-0 pt-[8px] px-[8px] relative w-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[32px] items-center relative w-[68px]">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <ImageNickAbrams />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">As someone that loved them deeply!</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#fff8f1] h-[118px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[118px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container5 />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function ImageNdForLife2() {
  return (
    <div className="relative rounded-[2.01326e+07px] shrink-0 size-[34px]" data-name="Image (ND For Life)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.01326e+07px] size-full" src={imgImageNdForLife} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[34px]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Dar Abrams</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#67717e] text-[14px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">1h ago</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <ImageNdForLife2 />
      <Container7 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#264859] text-[16px] tracking-[-0.3125px]">That I was always there for them and that they felt seen, held and cared for.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#fff8f1] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[17px] px-[17px] relative w-full">
          <Container8 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-0 relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container6 />
      <Container9 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[100px] relative rounded-[10px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[100px] items-start px-[12px] py-[8px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#67717e] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Share your thoughts...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[193px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[193px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-0 tracking-[-0.3125px] w-[183px]">0/2000 characters</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] opacity-50 relative rounded-[10px] shrink-0 w-[65.781px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[65.781px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.1504px] whitespace-pre">Submit</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Button2 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[148px] items-start relative shrink-0 w-full" data-name="Form">
      <Textarea />
      <Container11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#e99b63] relative rounded-[10px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Container10 />
          <Form />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64.922px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[64.922px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">11/11</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[132.828px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] w-[132.828px]" />
    </div>
  );
}

function ImageNdForLife3() {
  return (
    <div className="relative rounded-[2.01326e+07px] shrink-0 size-[24px]" data-name="Image (ND For Life)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.01326e+07px] size-full" src={imgImageNdForLife} />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[9.6px] items-start relative">
        <ImageNdForLife3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-[310px]" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
      <Frame4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] not-italic relative shrink-0 text-[#264859] text-[18px] w-[276px]">What is something you belived as a child that shaped you?</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pl-[16px] pr-[25px] py-0 relative w-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e99b63] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64.922px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[64.922px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">11/10</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[132.828px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] w-[132.828px]" />
    </div>
  );
}

function ImagePreview1() {
  return (
    <div className="absolute left-[1.6px] size-[22px] top-[2px]" data-name="Image (Preview)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagePreview} />
    </div>
  );
}

function ImageNdForLife4() {
  return (
    <div className="overflow-clip relative rounded-[2.01326e+07px] shrink-0 size-[24px]" data-name="Image (ND For Life)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.01326e+07px] size-full" src={imgImageNdForLife} />
      <ImagePreview1 />
    </div>
  );
}

function ImageNdForLife5() {
  return (
    <div className="relative rounded-[2.01326e+07px] shrink-0 size-[24px]" data-name="Image (ND For Life)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.01326e+07px] size-full" src={imgImageNdForLife} />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[9.6px] items-start relative">
        {[...Array(2).keys()].map((_, i) => (
          <ImageNdForLife4 key={i} />
        ))}
        <ImageNdForLife5 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-[310px]" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
      <Frame6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] not-italic relative shrink-0 text-[#264859] text-[18px] w-[276px]">How do you handle conflict?</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pl-[16px] pr-[25px] py-0 relative w-full">
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e99b63] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function MainThread() {
  return (
    <div className="bg-[#fbf9f8] box-border content-stretch flex flex-col gap-[24px] h-[1232px] items-start pb-0 pt-[135px] px-[16px] relative shrink-0 w-[390px]" data-name="MainThread">
      <Container />
      <Frame5 />
      <Frame />
      <Frame1 />
      <Frame3 />
      <div className="absolute left-[13px] size-[14px] top-[977px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #E99B63)" id="Ellipse 1" r="6" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p37c3e100} id="Vector" stroke="var(--stroke-0, #264859)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M12.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #264859)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[36px] relative rounded-[12px] shrink-0 w-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start pb-0 pl-0 pr-[8px] pt-[8px] relative w-[28px]">
        <Icon3 />
      </div>
    </div>
  );
}

function ImageNdForLife6() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[78px]" data-name="Image (ND For Life)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImageNdForLife} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[78px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#264859] text-[18px] top-[13px] tracking-[-0.4395px] w-[169px]">ND For Life</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[2.54px] not-italic text-[#67717e] text-[16px] top-[-14.39px] tracking-[-0.3125px] w-[152px]">2 members</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[78px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[78px] items-start relative w-full">
        <Heading />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[78px] relative shrink-0 w-[190px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[78px] items-center relative w-[190px]">
        <Button3 />
        <ImageNdForLife6 />
        <Container18 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.41%_12.68%]" data-name="Vector">
        <div className="absolute inset-[-5.01%_-5.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
            <path d={svgPaths.p2322a380} id="Vector" stroke="var(--stroke-0, #264859)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, #264859)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[110px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[110px] items-center justify-between px-[16px] py-0 relative w-full">
          <Container19 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function MainThread1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[111px] items-start left-0 pb-px pt-0 px-0 top-0 w-[390px]" data-name="MainThread">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none" />
      <Container20 />
    </div>
  );
}

export default function Component0310GroupsDetailLandingNew() {
  return (
    <div className="bg-[#e99b63] content-stretch flex gap-[8px] items-center relative size-full" data-name="03.10 - Groups > Detail Landing - New">
      <MainThread />
      <MainThread1 />
    </div>
  );
}