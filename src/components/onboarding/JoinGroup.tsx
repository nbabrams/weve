import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Slider } from '../ui/slider';
import { ArrowLeft } from 'lucide-react';
import { apiCall } from '../../utils/api';

interface JoinGroupProps {
  onSuccess: (groupId: string) => void;
  onBack: () => void;
}

export function JoinGroup({ onSuccess, onBack }: JoinGroupProps) {
  const [step, setStep] = useState(1);
  const [inviteCode, setInviteCode] = useState('');
  const [frequency, setFrequency] = useState<'daily' | '2-3days' | 'weekly'>('daily');
  const [depthLevel, setDepthLevel] = useState([5]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleJoin = async () => {
    setError('');
    setLoading(true);

    try {
      const { group } = await apiCall('/groups/join', {
        method: 'POST',
        body: JSON.stringify({
          inviteCode: inviteCode.toUpperCase(),
          userFrequency: frequency,
          userDepthLevel: depthLevel[0],
        }),
      });

      onSuccess(group.id);
    } catch (err: any) {
      console.error('Join group error:', err);
      setError(err.message || 'Failed to join group');
    } finally {
      setLoading(false);
    }
  };

  const getDepthLabel = (level: number) => {
    if (level <= 3) return 'Light & fun';
    if (level <= 7) return 'Meaningful sharing';
    return 'Deep connection';
  };

  return (
    <div className="min-h-screen bg-[hsl(20,30%,98%)] flex flex-col">
      <header className="sticky top-0 z-10 bg-white border-b border-[hsl(210,20%,97%)]">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-[hsl(210,20%,97%)] rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[hsl(200,40%,25%)]" />
          </button>
          <h2 className="text-[hsl(200,40%,25%)]">Join Group</h2>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 space-y-6">
        {error && (
          <div className="bg-[hsl(0,70%,55%)]/10 border border-[hsl(0,70%,55%)]/20 rounded-xl p-4">
            <p className="text-[hsl(0,70%,55%)]">{error}</p>
          </div>
        )}

        {step === 1 && (
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_hsla(200,40%,25%,0.08)] space-y-6">
            <div>
              <h3 className="text-[hsl(200,40%,25%)] mb-2">Invite Code</h3>
              <p className="text-[hsl(215,10%,45%)] mb-4">
                Enter the code shared by your friend
              </p>
              <Input
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                placeholder="XXXXXXXX"
                className="bg-[hsl(210,20%,97%)] border-[hsl(210,20%,97%)] tracking-widest uppercase"
                maxLength={8}
              />
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={inviteCode.length < 6}
              className="w-full bg-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,60%)] text-white transition-all hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] hover:-translate-y-0.5"
            >
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_hsla(200,40%,25%,0.08)] space-y-6">
            <div>
              <h3 className="text-[hsl(200,40%,25%)] mb-2">Your Preferences</h3>
              <p className="text-[hsl(215,10%,45%)] mb-4">
                How often do you want new prompts?
              </p>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setFrequency('daily')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    frequency === 'daily'
                      ? 'bg-[hsl(25,75%,65%)] text-white border-[hsl(25,75%,65%)] shadow-[0_4px_12px_hsla(25,75%,65%,0.3)]'
                      : 'bg-white border-[hsl(210,20%,97%)] hover:border-[hsl(25,75%,65%)]/50'
                  }`}
                >
                  Daily
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('2-3days')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    frequency === '2-3days'
                      ? 'bg-[hsl(25,75%,65%)] text-white border-[hsl(25,75%,65%)] shadow-[0_4px_12px_hsla(25,75%,65%,0.3)]'
                      : 'bg-white border-[hsl(210,20%,97%)] hover:border-[hsl(25,75%,65%)]/50'
                  }`}
                >
                  2-3 Days
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('weekly')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    frequency === 'weekly'
                      ? 'bg-[hsl(25,75%,65%)] text-white border-[hsl(25,75%,65%)] shadow-[0_4px_12px_hsla(25,75%,65%,0.3)]'
                      : 'bg-white border-[hsl(210,20%,97%)] hover:border-[hsl(25,75%,65%)]/50'
                  }`}
                >
                  Weekly
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1 border-[hsl(25,75%,65%)] text-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,65%)]/10"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(3)}
                className="flex-1 bg-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,60%)] text-white transition-all hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] hover:-translate-y-0.5"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_hsla(200,40%,25%,0.08)] space-y-6">
            <div>
              <h3 className="text-[hsl(200,40%,25%)] mb-2">Connection Depth</h3>
              <p className="text-[hsl(215,10%,45%)] mb-4">
                How deep are you comfortable going?
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[hsl(200,40%,25%)]">Level {depthLevel[0]}</span>
                  <span className="text-[hsl(25,75%,65%)]">{getDepthLabel(depthLevel[0])}</span>
                </div>
                <Slider
                  value={depthLevel}
                  onValueChange={setDepthLevel}
                  min={1}
                  max={10}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-[hsl(215,10%,45%)]">
                  <span>Light</span>
                  <span>Deep</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[hsl(172,42%,40%)]/10 rounded-lg">
                <p className="text-[hsl(200,40%,25%)]">
                  Note: Group settings will automatically adjust to the most comfortable level for all members.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(2)}
                variant="outline"
                className="flex-1 border-[hsl(25,75%,65%)] text-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,65%)]/10"
              >
                Back
              </Button>
              <Button
                onClick={handleJoin}
                disabled={loading}
                className="flex-1 bg-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,60%)] text-white transition-all hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] hover:-translate-y-0.5"
              >
                {loading ? 'Joining...' : 'Join Group'}
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
