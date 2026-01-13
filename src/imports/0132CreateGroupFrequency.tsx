import svgPaths from "./svg-wqjg19t3f0";

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Frequency</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#67717e] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">How often do you want new prompts?</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#e99b63] h-[84px] left-0 rounded-[12px] top-0 w-[95.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e99b63] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(233,155,99,0.3)]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[16px] text-nowrap text-white top-[30px] tracking-[-0.3125px] whitespace-pre">Daily</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[84px] left-[107.33px] rounded-[12px] top-0 w-[95.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[17.67px] not-italic text-[#264859] text-[16px] top-[18px] tracking-[-0.3125px] w-[63px]">2-3 Days</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[84px] left-[214.66px] rounded-[12px] top-0 w-[95.344px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#264859] text-[16px] text-nowrap top-[30px] tracking-[-0.3125px] whitespace-pre">Weekly</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[156px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
      <Container />
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-[#fbf9f8] grow h-[36px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e99b63] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[17px] py-[9px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#e99b63] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Back</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[#e99b63] grow h-[36px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre">Continue</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-white h-[264px] relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] shrink-0 w-[358px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[264px] items-start pb-0 pt-[24px] px-[24px] relative w-[358px]">
        <Container1 />
        <Container2 />
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

function Button5() {
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

function Container3() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[68px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Button5 />
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
      <Container3 />
    </div>
  );
}

export default function Component0132CreateGroupFrequency() {
  return (
    <div className="bg-[#fbf9f8] relative size-full" data-name="01.32 - Create Group > Frequency">
      <CreateGroup />
      <CreateGroup1 />
    </div>
  );
}