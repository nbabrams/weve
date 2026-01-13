import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Slider } from '../ui/slider';
import { ArrowLeft } from 'lucide-react';
import { apiCall } from '../../utils/api';

interface CreateGroupProps {
  onSuccess: (groupId: string, inviteCode: string) => void;
  onBack: () => void;
}

export function CreateGroup({ onSuccess, onBack }: CreateGroupProps) {
  const [step, setStep] = useState(1);
  const [groupName, setGroupName] = useState('');
  const [frequency, setFrequency] = useState<'daily' | '2-3days' | 'weekly'>('daily');
  const [depthLevel, setDepthLevel] = useState([5]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async () => {
    setError('');
    setLoading(true);

    try {
      const { group, inviteCode } = await apiCall('/groups/create', {
        method: 'POST',
        body: JSON.stringify({
          name: groupName,
          frequency,
          depthLevel: depthLevel[0],
        }),
      });

      // Store group ID for photo upload
      setTempGroupId(group.id);
      
      // If photo was uploaded, it's already associated with the group
      // Just proceed to success
      onSuccess(group.id, inviteCode);
    } catch (err: any) {
      console.error('Create group error:', err);
      setError(err.message || 'Failed to create group');
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
          <h2 className="text-[hsl(200,40%,25%)]">Create Group</h2>
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
              <h3 className="text-[hsl(200,40%,25%)] mb-2">Group Details</h3>
              <p className="text-[hsl(215,10%,45%)] mb-4">
                Choose a name and photo for your friend group
              </p>
              
              <div className="space-y-4">
                <Input
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="e.g., Book Club Buddies, The Squad"
                  className="bg-[hsl(210,20%,97%)] border-[hsl(210,20%,97%)]"
                />
              </div>
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!groupName.trim()}
              className="w-full bg-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,60%)] text-white transition-all hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] hover:-translate-y-0.5"
            >
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_hsla(200,40%,25%,0.08)] space-y-6">
            <div>
              <h3 className="text-[hsl(200,40%,25%)] mb-2">Frequency</h3>
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
                How deep do you want the conversations to be?
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

              <div className="mt-6 p-4 bg-[hsl(25,75%,65%)]/10 rounded-lg">
                <p className="text-[hsl(200,40%,25%)]">
                  {depthLevel[0] <= 3 && "Fun and lighthearted questions to get to know each other"}
                  {depthLevel[0] > 3 && depthLevel[0] <= 7 && "Meaningful questions about memories, dreams, and relationships"}
                  {depthLevel[0] > 7 && "Deep questions exploring vulnerability, psychology, and spirituality"}
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
                onClick={handleCreate}
                disabled={loading}
                className="flex-1 bg-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,60%)] text-white transition-all hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] hover:-translate-y-0.5"
              >
                {loading ? 'Creating...' : 'Create Group'}
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
