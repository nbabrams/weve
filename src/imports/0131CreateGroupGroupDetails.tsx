import svgPaths from "./svg-ciykjhzubr";

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Group Details</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#67717e] text-[16px] top-0 tracking-[-0.3125px] w-[297px]">Choose a name and photo for your friend group</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f6f7f9] h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#67717e] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">e.g., Book Club Buddies, The Squad</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
      <Input />
    </div>
  );
}

function Depth4Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Depth 4, Frame 0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_74_2133)" id="Depth 4, Frame 0">
          <path clipRule="evenodd" d={svgPaths.p20258e00} fill="var(--fill-0, #0D171C)" fillRule="evenodd" id="Vector - 0" />
          <g id="Depth 5, Frame 0"></g>
        </g>
        <defs>
          <clipPath id="clip0_74_2133">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Depth3Frame() {
  return (
    <div className="bg-[#e8f0f2] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Depth 3, Frame 0">
      <Depth4Frame />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Depth3Frame />
      <p className="[text-underline-position:from-font] decoration-solid font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#0d171c] text-[16px] text-nowrap underline whitespace-pre">Upload Profile Photo</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e99b63] h-[36px] opacity-50 relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[125.22px] not-italic text-[14px] text-nowrap text-white top-[8px] tracking-[-0.1504px] whitespace-pre">Continue</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-white h-[408px] relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] shrink-0 w-[358px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[408px] items-start pb-0 pt-[24px] px-[24px] relative w-[358px]">
        <Container />
        <Frame />
        <Button />
      </div>
    </div>
  );
}

function CreateGroup() {
  return (
    <div className="absolute bg-[#fbf9f8] box-border content-stretch flex flex-col h-[852px] items-start left-0 pb-0 pl-[16px] pr-0 pt-[93px] top-0 w-[390px]" data-name="CreateGroup">
      <MainContent />
    </div>
  );
}

function Icon() {
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

function Button1() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[97.234px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[97.234px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Create Group</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[68px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Button1 />
          <Heading />
        </div>
      </div>
    </div>
  );
}

function CreateGroup1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[69px] items-start left-0 pb-px pt-0 px-0 top-0 w-[390px]" data-name="CreateGroup">
      <div aria-hidden="true" className="absolute border-[#f6f7f9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

export default function Component0131CreateGroupGroupDetails() {
  return (
    <div className="bg-[#fbf9f8] relative size-full" data-name="01.31 - Create Group > Group Details">
      <CreateGroup />
      <CreateGroup1 />
    </div>
  );
}