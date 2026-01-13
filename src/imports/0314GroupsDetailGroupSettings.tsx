import svgPaths from "./svg-okwhdlfsef";
import imgImagePreview from "figma:asset/69165af98cb92d253343b264950b275705e81eca.png";
import imgImageNickAbrams from "figma:asset/9eb4c631140618de5d9b0cb83cafb7811d81adeb.png";

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Group Information</p>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[84.766px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#264859] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Group Photo</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #E99B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #E99B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #E99B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#fbf9f8] h-[36px] left-0 rounded-[10px] top-0 w-[151.281px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e99b63] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[45px] not-italic text-[#e99b63] text-[14px] text-nowrap top-[8px] tracking-[-0.1504px] whitespace-pre">Change Photo</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[44px] w-[196px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#67717e] text-[12px]">PNG, JPG or WebP • Max 5MB</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[60px] left-[112px] top-[18px] w-[196px]" data-name="Container">
      <Button />
      <Paragraph />
    </div>
  );
}

function ImagePreview() {
  return (
    <div className="relative shrink-0 size-[92px]" data-name="Image (Preview)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagePreview} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[92px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#f6f7f9] left-0 rounded-[3.35544e+07px] size-[96px] top-0" data-name="Container">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-[96px]">
        <ImagePreview />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e0e6eb] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#dd3c3c] box-border content-stretch flex items-center justify-center left-[76px] rounded-[3.35544e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[24px] top-[-4px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute left-0 size-[96px] top-0" data-name="Container">
      <Container1 />
      <Button1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[96px] left-0 top-[24px] w-[308px]" data-name="Container">
      <Container />
      <Container2 />
    </div>
  );
}

function PhotoUpload() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="PhotoUpload">
      <Label />
      <Container3 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[3px] w-[91.5px]" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#264859] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Group Name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[10px] top-[24px] w-[308px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[308px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#264859] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">ND For Life</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[3px] w-[81.703px]" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#264859] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Invite Code</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[1.2875px] whitespace-pre">OQRF8FUY</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 bg-[#f5d4bc] grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.33%_8.33%_8.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.pebf4900} id="Vector" stroke="var(--stroke-0, #E99B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%_33.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p14e01180} id="Vector" stroke="var(--stroke-0, #E99B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(233,155,99,0.1)] relative rounded-[12px] shrink-0 size-[44px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-[44px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center left-0 top-[24px] w-[308px]" data-name="Container">
      <Container5 />
      <Button2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container6 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#67717e] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Members</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">2</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#67717e] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Created</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">10/9/2025</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[56px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white h-[446px] relative rounded-[12px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[446px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Heading1 />
          <PhotoUpload />
          <Container4 />
          <Container7 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Prompt Settings</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[3px] w-[76.547px]" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#264859] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Frequency</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#e99b63] h-[50px] left-0 rounded-[12px] top-0 w-[97.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e99b63] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[13px] not-italic text-[16px] text-nowrap text-white top-[13px] tracking-[-0.3125px] whitespace-pre">Daily</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white h-[50px] left-[105.33px] rounded-[12px] top-0 w-[97.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[13px] not-italic text-[#264859] text-[16px] text-nowrap top-[13px] tracking-[-0.3125px] whitespace-pre">2-3 Days</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white h-[50px] left-[210.66px] rounded-[12px] top-0 w-[97.344px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[13px] not-italic text-[#264859] text-[16px] text-nowrap top-[13px] tracking-[-0.3125px] whitespace-pre">Weekly</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[50px] left-0 top-[24px] w-[308px]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[74px] relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container11 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[134.391px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[134.391px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Connection Depth</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[138.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[138.125px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e99b63] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Meaningful sharing</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Text />
    </div>
  );
}

function Text1() {
  return <div className="bg-[#e99b63] h-[16px] shrink-0 w-full" data-name="Text" />;
}

function Text2() {
  return (
    <div className="absolute bg-[#f6f7f9] box-border content-stretch flex flex-col h-[16px] items-start left-0 overflow-clip pl-0 pr-[171.109px] py-0 rounded-[3.35544e+07px] top-0 w-[308px]" data-name="Text">
      <Text1 />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute bg-[#fbf9f8] left-[129.77px] rounded-[3.35544e+07px] size-[16px] top-0" data-name="Slider">
      <div aria-hidden="true" className="absolute border border-[#e99b63] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text2 />
      <Slider />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[36.453px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#67717e] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Light</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[38.422px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#67717e] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Deep</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <PrimitiveSpan />
      <Container14 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#e99b63] h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[107.2px] not-italic text-[14px] text-nowrap text-white top-[8px] tracking-[-0.1504px] whitespace-pre">Save Changes</p>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white h-[344px] relative rounded-[12px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[344px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Heading2 />
          <Container12 />
          <Container15 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Members</p>
    </div>
  );
}

function ImageNickAbrams() {
  return (
    <div className="relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Image (Nick Abrams)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3.35544e+07px] size-full" src={imgImageNickAbrams} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Nick Abrams</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#67717e] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Admin</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[48px] relative shrink-0 w-[144.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48px] items-center relative w-[144.359px]">
        <ImageNickAbrams />
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f5d4bc] h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center justify-between pl-[12px] pr-[151.641px] py-0 relative w-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[11.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[11.313px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e99b63] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">D</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(233,155,99,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Text5 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Darlene Abrams</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[40px] relative shrink-0 w-[168.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[168.172px]">
        <Container19 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
            <path d={svgPaths.p352c6500} id="Vector" stroke="var(--stroke-0, #DD3C3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p31080000} id="Vector" stroke="var(--stroke-0, #DD3C3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_8.33%_45.83%_70.83%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M0.666667 0.666667L4 4" id="Vector" stroke="var(--stroke-0, #DD3C3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_8.33%_45.83%_70.83%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M4 0.666667L0.666667 4" id="Vector" stroke="var(--stroke-0, #DD3C3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f5d4bc] h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[12px] py-0 relative w-full">
          <Container20 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[148px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container21 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white h-[238px] relative rounded-[12px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[238px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Heading3 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Delete Group</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#dd3c3c] h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[107.2px] not-italic text-[14px] text-nowrap text-white top-[8px] tracking-[-0.1504px] whitespace-pre">Delete This Group</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[36.453px]">
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#67717e] text-[16px] top-0 tracking-[-0.3125px] w-[322px]">
          <p className="mb-0">{`NOTE: This cannon be undone. You’ll lose `}</p>
          <p>everything that has been added or created.</p>
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-[38.422px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] h-[231px] items-start pb-px pt-[25px] px-[25px] relative rounded-[12px] shrink-0 w-[358px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Heading4 />
      <Button8 />
      <Container23 />
    </div>
  );
}

function GroupSettings() {
  return (
    <div className="bg-[#fbf9f8] box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[93px] px-[16px] relative shrink-0 w-[390px]" data-name="GroupSettings">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Icon4() {
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

function Button9() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[108.859px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[108.859px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Group Settings</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[68px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Button9 />
          <Heading />
        </div>
      </div>
    </div>
  );
}

function GroupSettings1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[69px] items-start left-0 pb-px pt-0 px-0 top-0 w-[390px]" data-name="GroupSettings">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none" />
      <Container24 />
    </div>
  );
}

export default function Component0314GroupsDetailGroupSettings() {
  return (
    <div className="bg-[#fbf9f8] content-stretch flex gap-[8px] items-center relative size-full" data-name="03.14 - Groups > Detail > Group Settings">
      <GroupSettings />
      <GroupSettings1 />
    </div>
  );
}