import svgPaths from "./svg-qrjkpez4jb";

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 text-center w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[46px] leading-[60px] not-italic relative shrink-0 text-[#e99b63] text-[40px] tracking-[0.3711px] w-[128px]">{`WE'VE`}</p>
      <p className="font-['Tinos:Italic',sans-serif] italic leading-[30px] relative shrink-0 text-[#67717e] text-[14px] text-nowrap whitespace-pre">Seen. Held. Cared for.</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-[#f6f7f9] h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#67717e] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">you@example.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[66px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <EmailInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Password</p>
    </div>
  );
}

function EyeSlash() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="EyeSlash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="EyeSlash">
          <path d={svgPaths.pe0f980} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="bg-[#f6f7f9] h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Password Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12px] py-[8px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#dbdee1] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">••••••••</p>
          <EyeSlash />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[66px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <PasswordInput />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Primitive.span">
      <Icon />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[#e99b63] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e99b63] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start p-px relative size-[16px]">
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#264859] text-[14px] text-nowrap tracking-[-0.15px] whitespace-pre">Keep me logged in</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[144.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[144.094px]">
        <PrimitiveButton />
        <PrimitiveLabel />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[21px] relative shrink-0 w-[116.156px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[116.156px]">
        <p className="[text-underline-position:from-font] absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[58.5px] not-italic text-[#e99b63] text-[14px] text-center text-nowrap top-0 tracking-[-0.15px] translate-x-[-50%] underline whitespace-pre">Forgot Password?</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[25px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e99b63] h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[147.34px] not-italic text-[14px] text-center text-nowrap text-white top-[7.5px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Sign In</p>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white h-[289px] relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] shrink-0 w-full" data-name="Form">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[289px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container1 />
          <Container2 />
          <Container4 />
          <Button1 />
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

function Button2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#e99b63] text-[18px] text-nowrap top-0 tracking-[-0.4395px] whitespace-pre">{`Don't have an account?`}</p>
      <Text />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f6f7f9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[53px] items-start pb-0 pl-[41.672px] pr-[41.688px] pt-[25px] relative w-full">
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[421px] relative shrink-0 w-[342px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] h-[421px] items-start relative w-[342px]">
        <Container />
        <Form />
        <Container5 />
      </div>
    </div>
  );
}

export default function Component0100SignIn() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="01.00  - Sign In">
      <Container6 />
    </div>
  );
}