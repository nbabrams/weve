function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[171.94px] not-italic text-[#264859] text-[24px] text-center text-nowrap top-0 tracking-[0.0703px] translate-x-[-50%] whitespace-pre">Welcome</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[170.63px] not-italic text-[#67717e] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Sign in to continue your journey</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[3px] w-[38.719px]" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#264859] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Email</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f6f7f9] h-[36px] left-0 rounded-[10px] top-[24px] w-[294px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[294px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#67717e] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">you@example.com</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[3px] w-[69.766px]" data-name="Label">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#264859] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Password</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#f6f7f9] h-[36px] left-0 rounded-[10px] top-[24px] w-[294px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[294px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#67717e] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">••••••••</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e99b63] h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[124.52px] not-italic text-[14px] text-nowrap text-white top-[8px] tracking-[-0.1504px] whitespace-pre">Sign In</p>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white h-[236px] relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] shrink-0 w-full" data-name="Form">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[236px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container1 />
          <Container2 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-[196.8px] top-[3px] w-[61.844px]" data-name="Text">
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#e99b63] text-[18px] text-nowrap tracking-[-0.4395px] underline whitespace-pre">Sign up</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#e99b63] text-[18px] text-nowrap top-0 tracking-[-0.4395px] whitespace-pre">{`Don't have an account?`}</p>
      <Text />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f6f7f9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[53px] items-start pb-0 pl-[41.672px] pr-[41.688px] pt-[25px] relative w-full">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[421px] relative shrink-0 w-[342px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] h-[421px] items-start relative w-[342px]">
        <Container />
        <Form />
        <Container3 />
      </div>
    </div>
  );
}

export default function Component0110SignIn() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="01.10  - Sign In">
      <Container4 />
    </div>
  );
}