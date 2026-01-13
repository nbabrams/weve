import { useState } from 'react';
import { Button } from '../ui/button';
import { Copy, Check } from 'lucide-react';

interface InviteSuccessProps {
  inviteCode: string;
  onContinue: () => void;
}

export function InviteSuccess({ inviteCode, onContinue }: InviteSuccessProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for iframes/environments where clipboard API is blocked
      try {
        const textArea = document.createElement("textarea");
        textArea.value = inviteCode;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Failed to copy invite code:', fallbackErr);
        alert(`Here is the code: ${inviteCode}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(25,75%,65%)]/10 via-[hsl(20,30%,98%)] to-[hsl(172,42%,40%)]/10 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-[hsl(25,75%,65%)] to-[hsl(11,79%,62%)] rounded-full mx-auto flex items-center justify-center shadow-[0_4px_12px_hsla(25,75%,65%,0.3)]">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-[hsl(200,40%,25%)]">Group Created!</h1>
          <p className="text-[hsl(215,10%,45%)]">
            Share this invite code with your friends
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_hsla(200,40%,25%,0.08)] space-y-4">
          <div className="p-6 bg-[hsl(25,75%,65%)]/10 rounded-lg">
            <p className="text-[hsl(215,10%,45%)] mb-2">Invite Code</p>
            <p className="text-[hsl(200,40%,25%)] tracking-widest">
              {inviteCode}
            </p>
          </div>

          <Button
            onClick={handleCopy}
            variant="outline"
            className="w-full border-[hsl(25,75%,65%)] text-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,65%)]/10"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Invite Code
              </>
            )}
          </Button>
        </div>

        <div className="space-y-3">
          <p className="text-[hsl(215,10%,45%)]">
            You can also find this code later in group settings
          </p>
          <Button
            onClick={onContinue}
            className="w-full bg-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,60%)] text-white transition-all hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] hover:-translate-y-0.5"
          >
            Continue to Group
          </Button>
        </div>
      </div>
    </div>
  );
}
