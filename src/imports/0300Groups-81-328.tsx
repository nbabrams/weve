import svgPaths from "./svg-suxrfjk8hk";
import imgImageNdForLife from "figma:asset/69165af98cb92d253343b264950b275705e81eca.png";
import imgImageSurfGuys from "figma:asset/3fe4399e976390e198f6c8af0b8c06b08664bf9c.png";

function ImageNdForLife() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[64px]" data-name="Image (ND For Life)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImageNdForLife} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#264859] text-[18px] text-nowrap top-px tracking-[-0.4395px] whitespace-pre">ND For Life</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#67717e] text-[14px] top-0 tracking-[-0.1504px] w-[139px]">2 members</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#67717e] text-[12px]">Active 3d ago</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[71px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[71px] items-start relative w-full">
        <Heading />
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[71px] items-center left-[17px] top-[17px] w-[324px]" data-name="Container">
      <ImageNdForLife />
      <Container />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[105px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)]" />
      <Container1 />
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

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#264859] text-[18px] text-nowrap top-px tracking-[-0.4395px] whitespace-pre">Surf Guys</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#67717e] text-[14px] top-0 tracking-[-0.1504px] w-[64px]">1 member</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#67717e] text-[12px]">Active 3d ago</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[71px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[71px] items-start relative w-full">
        <Heading1 />
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[71px] items-center left-[17px] top-[17px] w-[324px]" data-name="Container">
      <ImageSurfGuys />
      <Container2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[105px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)]" />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[222px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[26px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#e99b63] grow h-[36px] min-h-px min-w-px relative rounded-[10px] shrink-0 to-[#eb6e52]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <Icon />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[58px] not-italic text-[14px] text-nowrap text-white top-[8px] tracking-[-0.1504px] whitespace-pre">Create Group</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-[#fbf9f8] grow h-[36px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e99b63] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[17px] py-[9px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#e99b63] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Join Group</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[330px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[330px] items-start pb-0 pt-[24px] px-[16px] relative w-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[765px] items-start left-0 overflow-clip top-[38px] w-[390px]" data-name="Main Content">
      <Container6 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[45px] items-center left-0 pb-0 pt-[8px] px-0 top-0 w-[390px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f6f7f9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29px] not-italic relative shrink-0 text-[#e99b63] text-[19.333px] text-center text-nowrap tracking-[0.1794px] whitespace-pre">Groups</p>
    </div>
  );
}

function Groups() {
  return (
    <div className="absolute bg-[#fbf9f8] h-[852px] left-0 overflow-clip top-0 w-[390px]" data-name="Groups">
      <MainContent />
      <Header />
    </div>
  );
}

function Icon1() {
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

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[33.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[33.297px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#67717e] text-[12px] text-nowrap whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center relative w-full">
        <Icon1 />
        <Text />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #E99B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p27451300} id="Vector_2" stroke="var(--stroke-0, #E99B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #E99B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, #E99B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[42.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[42.844px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e99b63] text-[12px] text-nowrap whitespace-pre">Groups</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center relative w-full">
        <Icon2 />
        <Text1 />
      </div>
    </div>
  );
}

function Icon3() {
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

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[59.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[59.141px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#67717e] text-[12px] text-nowrap whitespace-pre">Resources</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center relative w-full">
        <Icon3 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p169dda00} id="Vector" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3cccb600} id="Vector_2" stroke="var(--stroke-0, #67717E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[46.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[46.781px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#67717e] text-[12px] text-nowrap whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[64px] items-center justify-center relative w-full">
        <Icon4 />
        <Text3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function BottomNav() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[65px] items-start left-0 pb-0 pt-px px-0 top-[787px] w-[390px]" data-name="BottomNav">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.08)]" />
      <Container7 />
    </div>
  );
}

export default function Component0300Groups() {
  return (
    <div className="bg-[#fbf9f8] relative size-full" data-name="03.00 - Groups">
      <Groups />
      <BottomNav />
    </div>
  );
}