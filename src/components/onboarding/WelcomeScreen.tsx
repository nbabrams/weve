import { useState } from 'react';

// Inline SVG paths from imported file to ensure stability
const svgPaths = {
  p3de7e600: "M11.6667 3.5L5.25 9.91667L2.33333 7",
  pe0f980: "M5.055 3.24562C4.98914 3.17138 4.90919 3.11095 4.8198 3.06783C4.73041 3.02471 4.63335 2.99976 4.53424 2.99443C4.43514 2.9891 4.33596 3.00349 4.24246 3.03677C4.14896 3.07005 4.06299 3.12156 3.98954 3.18831C3.91609 3.25505 3.85662 3.33572 3.81458 3.42562C3.77253 3.51552 3.74875 3.61288 3.74461 3.71204C3.74046 3.8112 3.75604 3.9102 3.79044 4.00329C3.82484 4.09639 3.87738 4.18173 3.945 4.25438L5.74875 6.23906C2.34375 8.32875 0.879375 11.55 0.814687 11.6963C0.772044 11.7922 0.750009 11.896 0.750009 12.0009C0.750009 12.1059 0.772044 12.2097 0.814687 12.3056C0.8475 12.3797 1.64156 14.1403 3.40688 15.9056C5.75906 18.2569 8.73 19.5 12 19.5C13.6806 19.5096 15.3442 19.1636 16.8816 18.4847L18.9441 20.7544C19.0099 20.8286 19.0899 20.8891 19.1793 20.9322C19.2687 20.9753 19.3657 21.0002 19.4648 21.0056C19.5639 21.0109 19.6631 20.9965 19.7566 20.9632C19.8501 20.93 19.9361 20.8784 20.0095 20.8117C20.083 20.7449 20.1424 20.6643 20.1845 20.5744C20.2265 20.4845 20.2503 20.3871 20.2545 20.288C20.2586 20.1888 20.243 20.0898 20.2086 19.9967C20.1742 19.9036 20.1217 19.8183 20.0541 19.7456L5.055 3.24562ZM9.49219 10.3556L13.3988 14.6541C12.8105 14.9635 12.136 15.0689 11.4814 14.9535C10.8268 14.8382 10.229 14.5087 9.78189 14.0168C9.33482 13.5248 9.06378 12.8984 9.01135 12.2357C8.95891 11.573 9.12804 10.9117 9.49219 10.3556ZM12 18C9.11438 18 6.59344 16.9509 4.50656 14.8828C3.64998 14.0315 2.92146 13.0605 2.34375 12C2.78344 11.1759 4.18687 8.86969 6.78281 7.37063L8.47031 9.22219C7.817 10.0589 7.48053 11.0997 7.52037 12.1605C7.56021 13.2213 7.9738 14.2339 8.68803 15.0192C9.40226 15.8046 10.3711 16.3122 11.4234 16.4522C12.4757 16.5923 13.5436 16.3559 14.4384 15.7847L15.8194 17.3034C14.6006 17.771 13.3054 18.0072 12 18ZM12.5625 9.05344C12.3671 9.01614 12.1945 8.90274 12.0826 8.73817C11.9708 8.57361 11.929 8.37137 11.9663 8.17594C12.0035 7.98051 12.117 7.8079 12.2815 7.69608C12.4461 7.58426 12.6483 7.54239 12.8438 7.57969C13.7996 7.765 14.67 8.25436 15.325 8.97477C15.98 9.69518 16.3846 10.608 16.4784 11.5772C16.497 11.7752 16.436 11.9725 16.3091 12.1256C16.1822 12.2788 15.9996 12.3752 15.8016 12.3937C15.7781 12.3951 15.7547 12.3951 15.7313 12.3937C15.5438 12.3946 15.3628 12.3251 15.224 12.1992C15.0852 12.0732 14.9986 11.8998 14.9813 11.7131C14.9181 11.0685 14.6486 10.4615 14.2128 9.98226C13.7771 9.50307 13.1983 9.17731 12.5625 9.05344ZM23.1825 12.3056C23.1431 12.3937 22.1934 14.4966 20.055 16.4119C19.9819 16.4794 19.8962 16.5317 19.8027 16.5658C19.7092 16.5998 19.6099 16.6149 19.5105 16.6102C19.4111 16.6055 19.3136 16.5811 19.2238 16.5384C19.1339 16.4956 19.0535 16.4354 18.9871 16.3613C18.9208 16.2872 18.8698 16.2006 18.8373 16.1066C18.8047 16.0125 18.7912 15.913 18.7975 15.8137C18.8037 15.7144 18.8297 15.6173 18.8739 15.5282C18.9181 15.439 18.9795 15.3595 19.0547 15.2944C20.1038 14.3518 20.9851 13.2378 21.6609 12C21.082 10.9385 20.3518 9.96683 19.4934 9.11531C17.4066 7.04906 14.8856 6 12 6C11.392 5.99926 10.7849 6.04849 10.185 6.14719C10.0874 6.16444 9.98742 6.16219 9.89073 6.14057C9.79405 6.11895 9.7026 6.07839 9.62167 6.02123C9.54075 5.96407 9.47196 5.89144 9.41926 5.80753C9.36657 5.72363 9.33102 5.63012 9.31467 5.5324C9.29832 5.43468 9.3015 5.3347 9.32402 5.23821C9.34653 5.14173 9.38794 5.05066 9.44585 4.97027C9.50376 4.88988 9.57702 4.82176 9.66141 4.76985C9.7458 4.71793 9.83963 4.68325 9.9375 4.66781C10.6192 4.55525 11.3091 4.49912 12 4.5C15.27 4.5 18.2409 5.74312 20.5931 8.09531C22.3584 9.86062 23.1525 11.6222 23.1853 11.6963C23.228 11.7922 23.25 11.896 23.25 12.0009C23.25 12.1059 23.228 12.2097 23.1853 12.3056H23.1825Z",
};

interface WelcomeScreenProps {
  onSignIn: (email: string, password: string, rememberMe: boolean) => void;
  onSignUp: () => void;
  onForgotPassword: () => void;
  error?: string | null;
}

export function WelcomeScreen({ onSignIn, onSignUp, onForgotPassword, error }: WelcomeScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSignIn(email, password, rememberMe);
  };

  return (
    <div className="content-stretch flex flex-col items-center justify-center relative min-h-screen bg-[#fbf9f8]" data-name="01.00  - Sign In">
      <div className="h-[421px] relative shrink-0 w-[342px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] h-[421px] items-start relative w-[342px]">
          
          {/* Header Container */}
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 text-center w-full" data-name="Container">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[46px] leading-[60px] not-italic relative shrink-0 text-[#BE592A] text-[40px] tracking-[0.3711px] w-[128px]">{`WE'VE`}</p>
            <p className="font-['Tinos:Italic',sans-serif] italic leading-[30px] relative shrink-0 text-[#67717e] text-[14px] text-nowrap whitespace-pre">Seen. Held. Cared for.</p>
          </div>

          {/* Form */}
          <div className="bg-white relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] shrink-0 w-full p-6" data-name="Form">
             <div className="flex flex-col gap-[16px]">
               
               {/* Error Message */}
               {error && (
                  <div className="bg-[hsl(0,70%,55%)]/10 border border-[hsl(0,70%,55%)]/20 rounded-[10px] p-3 mb-2">
                    <p className="text-[hsl(0,70%,55%)] text-[14px] font-medium text-center">{error}</p>
                  </div>
                )}

               {/* Email Container */}
               <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                 <div className="h-[24px] relative shrink-0 w-full">
                   <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Email</p>
                 </div>
                 <div className="bg-[#f6f7f9] h-[36px] relative rounded-[10px] shrink-0 w-full">
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full h-full bg-transparent border-none outline-none px-[12px] py-[8px] font-['Inter:Regular',sans-serif] font-normal text-[#67717e] text-[16px] placeholder-[#67717e]"
                    />
                    <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
                 </div>
               </div>

               {/* Password Container */}
               <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                 <div className="h-[24px] relative shrink-0 w-full">
                   <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#264859] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Password</p>
                 </div>
                 <div className="bg-[#f6f7f9] h-[36px] relative rounded-[10px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full px-[12px]">
                       <input 
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="flex-1 bg-transparent border-none outline-none font-['Inter:Regular',sans-serif] font-normal text-[#264859] text-[16px] placeholder-[#dbdee1]"
                        />
                       <button onClick={() => setShowPassword(!showPassword)} className="relative shrink-0 size-[24px] outline-none">
                         <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            {showPassword ? (
                              // Eye Open (reusing path or simple circle/dot if needed, but EyeSlash is what user provided)
                              // I'll just use EyeSlash for "hide" and a simple path for "show" or just rely on toggle
                              // For now, I'll use the provided EyeSlash path when hidden (password mode)? No, usually EyeSlash means "Hidden"
                              // The user provided EyeSlash.
                              <g id="Eye"><circle cx="12" cy="12" r="3" fill="black"/><path d="M21 12C21 12 18 19 12 19C6 19 3 12 3 12C3 12 6 5 12 5C18 5 21 12 21 12Z" stroke="black" strokeWidth="2" fill="none"/></g>
                            ) : (
                              <g id="EyeSlash">
                                <path d={svgPaths.pe0f980} fill="var(--fill-0, black)" id="Vector" />
                              </g>
                            )}
                         </svg>
                       </button>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#f6f7f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
                 </div>
               </div>

               {/* Remember Me & Forgot Password */}
               <div className="content-stretch flex h-[25px] items-center justify-between relative shrink-0 w-full">
                  <div className="h-[21px] relative shrink-0 flex items-center gap-[8px] cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>
                    {/* Custom Checkbox */}
                    <div className={`relative rounded-[4px] shrink-0 size-[16px] transition-colors ${rememberMe ? 'bg-[#BE592A]' : 'bg-white border border-[#BE592A]'}`}>
                      {rememberMe && (
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="relative shrink-0 size-[14px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                <path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                              </svg>
                           </div>
                        </div>
                      )}
                      {!rememberMe && <div aria-hidden="true" className="absolute border border-[#BE592A] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />}
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#264859] text-[14px] text-nowrap tracking-[-0.15px] whitespace-pre">Keep me logged in</p>
                  </div>
                  
                  <button onClick={onForgotPassword} className="h-[21px] relative shrink-0 outline-none">
                     <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[#BE592A] text-[14px] text-center text-nowrap tracking-[-0.15px] underline whitespace-pre">Forgot Password?</p>
                  </button>
               </div>

               {/* Sign In Button */}
               <button onClick={(e) => handleSubmit(e)} className="bg-[#BE592A] h-[36px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center hover:opacity-90 transition-opacity">
                 <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic text-[14px] text-center text-nowrap text-white tracking-[-0.1504px] whitespace-pre">Sign In</p>
               </button>

             </div>
          </div>

          {/* Sign Up Link */}
          <div className="h-[53px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#f6f7f9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="size-full flex justify-center pt-[25px]">
               <div className="relative shrink-0 flex gap-1">
                 <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic text-[#BE592A] text-[18px] text-nowrap tracking-[-0.4395px] whitespace-pre">{`Don't have an account?`}</p>
                 <button onClick={onSignUp}>
                    <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic text-[#BE592A] text-[18px] text-nowrap tracking-[-0.4395px] underline whitespace-pre">Sign up</p>
                 </button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
