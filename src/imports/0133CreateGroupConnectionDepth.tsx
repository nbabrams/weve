import svgPaths from "./svg-olnynuwe7v";

function Heading1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[310px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Connection Depth</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[48px] left-0 top-[32px] w-[310px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#67717e] text-[16px] top-0 tracking-[-0.3125px] w-[299px]">How deep do you want the conversations to be?</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[58.734px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] top-0 tracking-[-0.3125px] w-[91px]">Level 10</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[123.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[123.375px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e99b63] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Deep connection</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-[#e99b63] h-[16px] left-0 rounded-[3.35544e+07px] top-0 w-[310px]" data-name="Text" />;
}

function Slider() {
  return (
    <div className="absolute bg-[#fbf9f8] left-[294px] rounded-[3.35544e+07px] size-[16px] top-0" data-name="Slider">
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

function Container1() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[96px] items-start left-0 top-[96px] w-[310px]" data-name="Container">
      <Container />
      <PrimitiveSpan />
      <Container1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] top-0 tracking-[-0.3125px] w-[213px]">Deep questions exploring vulnerability, psychology, and spirituality</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(233,155,99,0.1)] box-border content-stretch flex flex-col h-[104px] items-start left-0 pb-0 pt-[16px] px-[16px] rounded-[12px] top-[216px] w-[310px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[320px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Button() {
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

function Button1() {
  return (
    <div className="basis-0 bg-[#e99b63] grow h-[36px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre">Create Group</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-white h-[428px] relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] shrink-0 w-[358px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[428px] items-start pb-0 pt-[24px] px-[24px] relative w-[358px]">
        <Container4 />
        <Container5 />
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

function Button2() {
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

function Container6() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[68px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <Button2 />
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
      <Container6 />
    </div>
  );
}

export default function Component0133CreateGroupConnectionDepth() {
  return (
    <div className="bg-[#fbf9f8] relative size-full" data-name="01.33 - Create Group > Connection Depth">
      <CreateGroup />
      <CreateGroup1 />
    </div>
  );
}