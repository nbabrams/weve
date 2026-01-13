import svgPaths from "./svg-mggbkc9vo8";
import imgImagePreview from "figma:asset/9eb4c631140618de5d9b0cb83cafb7811d81adeb.png";
import imgImageNdForLife from "figma:asset/69165af98cb92d253343b264950b275705e81eca.png";
import imgImageSurfGuys from "figma:asset/3fe4399e976390e198f6c8af0b8c06b08664bf9c.png";

function Header() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[45px] items-center pb-0 pt-[8px] px-0 relative shrink-0 w-[390px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f6f7f9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29px] not-italic relative shrink-0 text-[#e99b63] text-[19.333px] text-center text-nowrap tracking-[0.1794px] whitespace-pre">Settings</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Profile</p>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[87.203px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#264859] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Profile Photo</p>
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
    <div className="absolute h-[32px] left-0 top-[44px] w-[164px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#67717e] text-[12px] top-0 w-[143px]">PNG, JPG or WebP • Max 5MB</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[76px] left-[144px] top-[26px] w-[164px]" data-name="Container">
      <Button />
      <Paragraph />
    </div>
  );
}

function ImagePreview() {
  return (
    <div className="relative shrink-0 size-[124px]" data-name="Image (Preview)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagePreview} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[124px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#f6f7f9] left-0 rounded-[3.35544e+07px] size-[128px] top-0" data-name="Container">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-[128px]">
        <ImagePreview />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e0e6eb] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute left-0 size-[128px] top-0" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[128px] left-0 top-[24px] w-[308px]" data-name="Container">
      <Container />
      <Container2 />
    </div>
  );
}

function PhotoUpload() {
  return (
    <div className="h-[152px] relative shrink-0 w-full" data-name="PhotoUpload">
      <Label />
      <Container3 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[39.156px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#264859] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f6f7f9] h-[36px] left-0 rounded-[10px] top-[24px] w-[308px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[308px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#264859] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Nick Abrams</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
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
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[36.453px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#264859] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Email</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#f6f7f9] h-[36px] left-0 opacity-50 rounded-[10px] top-[24px] w-[308px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[308px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#264859] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">nick@tillforgood.com</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Input1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-b from-[#e99b63] h-[36px] relative rounded-[10px] shrink-0 to-[#eb6e52] w-full" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[106.31px] not-italic text-[14px] text-nowrap text-white top-[8px] tracking-[-0.1504px] whitespace-pre">Save Changes</p>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white h-[446px] relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[446px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Heading />
          <PhotoUpload />
          <Container4 />
          <Container5 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function ImageNdForLife() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[64px]" data-name="Image (ND For Life)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImageNdForLife} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#264859] text-[18px] text-nowrap top-px tracking-[-0.4395px] whitespace-pre">ND For Life</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#67717e] text-[14px] top-0 tracking-[-0.1504px] w-[139px]">2 members</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#67717e] text-[12px]">Active 3d ago</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-[71px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[71px] items-start relative w-full">
        <Heading1 />
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[71px] items-center left-[17px] top-[17px] w-[324px]" data-name="Container">
      <ImageNdForLife />
      <Container6 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[105px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container7 />
    </div>
  );
}

function ImageSurfGuys() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[64px]" data-name="Image (Surf Guys)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImageSurfGuys} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#264859] text-[18px] text-nowrap top-px tracking-[-0.4395px] whitespace-pre">Surf Guys</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#67717e] text-[14px] top-0 tracking-[-0.1504px] w-[64px]">1 member</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#67717e] text-[12px]">Active 3d ago</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[71px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[71px] items-start relative w-full">
        <Heading2 />
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[71px] items-center left-[17px] top-[17px] w-[324px]" data-name="Container">
      <ImageSurfGuys />
      <Container8 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[105px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[222px] items-start relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[25px] px-[25px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#264859] text-[18px] text-nowrap tracking-[-0.4395px] whitespace-pre">My Groups</p>
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Account</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[108.92px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2c1f680} id="Vector" stroke="var(--stroke-0, #DD3C3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 8H6" id="Vector_2" stroke="var(--stroke-0, #DD3C3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p12257fa0} id="Vector_3" stroke="var(--stroke-0, #DD3C3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#fbf9f8] h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dd3c3c] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon1 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[140.92px] not-italic text-[#dd3c3c] text-[14px] text-nowrap top-[8px] tracking-[-0.1504px] whitespace-pre">Sign Out</p>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white h-[126px] relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[126px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Heading3 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Delete My Profile</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#dd3c3c] h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[107.2px] not-italic text-[14px] text-nowrap text-white top-[8px] tracking-[-0.1504px] whitespace-pre">Delete Profile</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[36.453px]">
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#67717e] text-[16px] top-0 tracking-[-0.3125px] w-[322px]">
          <p className="mb-0">{`NOTE: This cannon be undone. You’ll lose `}</p>
          <p>everything that yo’ve written created.</p>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-[38.422px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] h-[231px] items-start pb-px pt-[25px] px-[25px] relative rounded-[12px] shrink-0 w-[358px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Heading4 />
      <Button5 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-[16px] relative w-full">
          <Section />
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2bbf6680} id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p206ad900} id="Vector_2" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[33.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[33.297px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#67717e] text-[12px] text-nowrap whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center relative w-full">
        <Icon2 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p27451300} id="Vector_2" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[41.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[41.063px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#67717e] text-[12px] text-nowrap whitespace-pre">Groups</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center relative w-full">
        <Icon3 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 7V21" id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p38e00000} id="Vector_2" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[59.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[59.141px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#67717e] text-[12px] text-nowrap whitespace-pre">Resources</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center relative w-full">
        <Icon4 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p169dda00} id="Vector" stroke="var(--stroke-0, #E99B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p3cccb600} id="Vector_2" stroke="var(--stroke-0, #E99B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[49.453px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e99b63] text-[12px] text-nowrap whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center relative w-full">
        <Icon5 />
        <Text5 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function BottomNav() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[65px] items-start pb-0 pt-px px-0 relative shrink-0 w-[390px]" data-name="BottomNav">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.08)]" />
      <Container13 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Main Content">
      <Container12 />
      <BottomNav />
    </div>
  );
}

function UserSettings() {
  return (
    <div className="basis-0 bg-[#fbf9f8] content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="UserSettings">
      <Header />
      <MainContent />
    </div>
  );
}

export default function Component0500Settings() {
  return (
    <div className="bg-[#fbf9f8] content-stretch flex gap-[8px] items-center relative size-full" data-name="05.00 - Settings">
      <UserSettings />
    </div>
  );
}