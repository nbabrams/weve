import { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Input } from './ui/input';
import { apiCall } from '../utils/api';

interface ArchiveProps {
  groupId: string;
  onBack: () => void;
}

export function Archive({ groupId, onBack }: ArchiveProps) {
  const [prompts, setPrompts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPrompt, setExpandedPrompt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadArchive();
  }, [groupId]);

  const loadArchive = async () => {
    setLoading(true);
    try {
      const response = await apiCall(`/prompts/${groupId}/archive`, {}, 2);
      setPrompts(response?.prompts || []);
    } catch (err) {
      console.error('Failed to load archive:', err);
      // If group not found or unauthorized, navigate back
      if (err instanceof Error && (err.message.includes('Group not found') || err.message.includes('Unauthorized'))) {
        console.log('Group no longer exists or unauthorized, navigating back');
        onBack();
      }
      setPrompts([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredPrompts = prompts.filter(prompt =>
    prompt.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h2>Archive</h2>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search prompts..."
            className="pl-10 bg-input-background border-border"
          />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading archive...</p>
          </div>
        ) : filteredPrompts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchQuery ? 'No prompts found' : 'No archived prompts yet'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedPrompt(expandedPrompt === prompt.id ? null : prompt.id)
                  }
                  className="w-full p-4 flex items-start justify-between hover:bg-accent transition-colors"
                >
                  <div className="flex-1 text-left space-y-2">
                    <p className="text-foreground">{prompt.text}</p>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span>{formatDate(prompt.createdAt)}</span>
                      <span>•</span>
                      <span>Level {prompt.depthLevel}</span>
                    </div>
                  </div>
                  {expandedPrompt === prompt.id ? (
                    <ChevronUp className="w-5 h-5 text-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-foreground flex-shrink-0" />
                  )}
                </button>

                {expandedPrompt === prompt.id && (
                  <div className="border-t border-border p-4 space-y-3 bg-accent/50">
                    <div>
                      <p className="text-muted-foreground">Example:</p>
                      <p className="text-foreground italic">{prompt.example}</p>
                    </div>
                    {/* In a full implementation, we would load and display responses here */}
                    <p className="text-muted-foreground">
                      View full conversation in the app
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
