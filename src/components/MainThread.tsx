import { useState, useEffect } from 'react';
import { ChevronLeft, Settings, Search, Edit2, Trash2, User } from 'lucide-react';
import { apiCall } from '../utils/api';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MainThreadProps {
  groupId: string;
  onSettings: () => void;
  onUserSettings: () => void;
  onArchive: () => void;
  onResources: () => void;
  onBack: () => void;
}

export function MainThread({ groupId, onSettings, onBack }: MainThreadProps) {
  const [group, setGroup] = useState<any>(null);
  const [prompts, setPrompts] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Response form state
  const [responseText, setResponseText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  useEffect(() => {
    loadData();
  }, [groupId]);

  const loadData = async () => {
    try {
      const [groupData, promptData, archiveData, userData] = await Promise.all([
        apiCall(`/groups/${groupId}`),
        apiCall(`/prompts/${groupId}/current`),
        apiCall(`/prompts/${groupId}/archive`),
        apiCall('/users/me')
      ]);

      if (groupData.success) setGroup(groupData.group);
      
      let allPrompts: any[] = [];
      let currentUserId = userData.success ? userData.user.id : null;
      if (userData.success) setCurrentUser(userData.user);

      // Process current prompt
      if (promptData.success && promptData.prompt) {
        const currentResps = promptData.responses || [];
        // Sort responses newest first
        currentResps.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        
        const current = {
          ...promptData.prompt,
          responses: currentResps,
          responseCount: currentResps.length,
          hasResponded: currentUserId ? currentResps.some((r: any) => r.userId === currentUserId) : false,
          isCurrent: true
        };
        allPrompts.push(current);
        // Default expand current prompt
        setExpandedId(current.id);
      } else if (promptData.success && !promptData.prompt) {
        // No current prompt - generate one for new groups
        try {
          const { prompt: newPrompt } = await apiCall('/prompts/generate', {
            method: 'POST',
            body: JSON.stringify({ groupId })
          });

          if (newPrompt) {
            const current = {
              ...newPrompt,
              responses: [],
              responseCount: 0,
              hasResponded: false,
              isCurrent: true
            };
            allPrompts.push(current);
            setExpandedId(current.id);
          }
        } catch (err) {
          console.error('Failed to generate initial prompt:', err);
        }
      }

      // Process archive
      if (archiveData.success) {
        allPrompts = [...allPrompts, ...archiveData.prompts];
      }

      // Sort all by date descending
      allPrompts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      setPrompts(allPrompts);
    } catch (err) {
      console.error('Failed to load main thread data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitResponse = async () => {
    if (!responseText.trim() || !expandedId) return;

    setSubmitting(true);
    try {
      const { response } = await apiCall('/responses/create', {
        method: 'POST',
        body: JSON.stringify({
          groupId,
          promptId: expandedId,
          text: responseText
        })
      });

      if (response) {
        // Update local state
        setPrompts(prev => prev.map(p => {
          if (p.id === expandedId) {
            const newResponses = [response, ...(p.responses || [])];
            return {
              ...p,
              responses: newResponses,
              responseCount: newResponses.length,
              hasResponded: true
            };
          }
          return p;
        }));
        setResponseText('');
      }
    } catch (err) {
      console.error('Failed to submit response:', err);
      alert('Failed to submit response. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteResponse = async (responseId: string, promptId: string) => {
    if (!confirm('Are you sure you want to delete this response?')) return;

    try {
      await apiCall(`/responses/${responseId}`, {
        method: 'DELETE',
        body: JSON.stringify({ groupId, promptId })
      });

      // Update local state
      setPrompts(prev => prev.map(p => {
        if (p.id === promptId) {
          const newResponses = p.responses.filter((r: any) => r.id !== responseId);
          return {
            ...p,
            responses: newResponses,
            responseCount: newResponses.length,
            hasResponded: currentUser ? newResponses.some((r: any) => r.userId === currentUser.id) : false
          };
        }
        return p;
      }));
    } catch (err) {
      console.error('Failed to delete response:', err);
      alert('Failed to delete response');
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  };

  const formatTime = (dateStr: string) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diff = (now.getTime() - d.getTime()) / 1000 / 60; // minutes

    if (diff < 1) return 'Just now';
    if (diff < 60) return `${Math.floor(diff)}m ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
    return d.toLocaleDateString();
  };

  const getUniqueResponders = (responses: any[]) => {
    if (!responses) return [];
    const unique = new Map();
    responses.forEach(r => {
      if (r.userId && !unique.has(r.userId)) {
        unique.set(r.userId, r);
      }
    });
    return Array.from(unique.values());
  };

  const handleExpand = (id: string) => {
    if (expandedId !== id) {
      setExpandedId(id);
      setResponseText(''); // Clear text when switching
      
      // Scroll to view after render
      setTimeout(() => {
        const element = document.getElementById(`prompt-${id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  // Filter prompts
  const filteredPrompts = prompts.filter(p => {
    const matchesSearch = p.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesUnread = showUnreadOnly ? !p.hasResponded : true;
    return matchesSearch && matchesUnread;
  });

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#fbf9f8]">
        <p className="text-[#264859]">Loading...</p>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#fbf9f8]">
        <p className="text-[#264859]">Group not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#fbf9f8] overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-[#f6f7f9] px-4 py-3 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-[#264859]">
            <ChevronLeft size={24} />
          </button>
          <div className="relative w-10 h-10 rounded-[10px] overflow-hidden bg-gray-200">
            {group.photo ? (
              <ImageWithFallback src={group.photo} alt={group.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#BE592A]/20 text-[#BE592A]">
                <User size={20} />
              </div>
            )}
          </div>
          <div>
            <h1 className="font-medium text-[#264859] text-[16px] leading-tight">{group.name}</h1>
            <p className="text-[#67717e] text-[12px]">{group.members.length} members</p>
          </div>
        </div>
        <button onClick={onSettings} className="text-[#264859]">
          <Settings size={24} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
        {/* Search & Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#67717e]" size={20} />
            <input 
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[36px] bg-white rounded-[10px] pl-10 pr-4 text-[16px] placeholder-[#67717e] border border-transparent focus:border-[#BE592A] outline-none"
            />
          </div>
          <div className="flex justify-between items-center text-[14px]">
            <span className="text-[rgb(126,116,103)]">Next prompt in 1 day</span>
            <button 
              onClick={() => setShowUnreadOnly(!showUnreadOnly)}
              className={`text-[#BE592A] ${showUnreadOnly ? 'font-bold' : 'underline'}`}
            >
              Unread
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredPrompts.map((prompt) => {
            const isExpanded = expandedId === prompt.id;
            
            if (isExpanded) {
              // EXPANDED STATE
              return (
                <div id={`prompt-${prompt.id}`} key={prompt.id} className="bg-[rgb(190,89,42)] rounded-[12px] p-4 text-white shadow-sm space-y-4 transition-all duration-300">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <span className="text-[16px] opacity-90">{formatDate(prompt.createdAt)}</span>
                    <div className="flex -space-x-2">
                      {/* Show avatars of people who responded to THIS prompt */}
                      {prompt.responses && getUniqueResponders(prompt.responses).slice(0, 3).map((r: any, i: number) => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-[#BE592A] overflow-hidden bg-white">
                           {r.userPhoto ? (
                             <ImageWithFallback src={r.userPhoto} alt="" className="w-full h-full object-cover" />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center text-[#BE592A] text-[10px] font-bold bg-white">
                               {r.userName?.[0]}
                             </div>
                           )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Question */}
                  <div className="space-y-2">
                    <h2 className="text-[24px] font-bold leading-tight">{prompt.text}</h2>
                    {prompt.example && (
                      <p className="text-[16px] italic opacity-80">Example: {prompt.example}</p>
                    )}
                  </div>

                  {/* Responses */}
                  <div className="space-y-3">
                    {prompt.responses?.map((resp: any) => (
                      <div key={resp.id} className="bg-[rgb(251,249,248)] rounded-[12px] p-4 text-[#264859]">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                             {resp.userPhoto ? (
                               <ImageWithFallback src={resp.userPhoto} alt={resp.userName} className="w-full h-full object-cover" />
                             ) : (
                               <div className="w-full h-full flex items-center justify-center bg-[#264859] text-white text-xs">
                                 {resp.userName[0]}
                               </div>
                             )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                              <span className="font-medium text-[16px]">{resp.userName}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-[12px] text-[#67717e]">{formatTime(resp.createdAt)}</span>
                                {currentUser && resp.userId === currentUser.id && (
                                   <div className="flex gap-2">
                                     <button onClick={() => handleDeleteResponse(resp.id, prompt.id)} className="text-[#67717e] hover:text-red-500">
                                       <Trash2 size={14} />
                                     </button>
                                   </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-[16px] leading-relaxed text-[rgb(55,41,25)]">{resp.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Input Area */}
                  <div className="bg-white rounded-[10px] p-3 space-y-2 border-2 border-[#BE592A]">
                    <textarea
                      value={responseText}
                      onChange={(e) => setResponseText(e.target.value)}
                      placeholder="Share your thoughts..."
                      className="w-full h-[80px] resize-none text-[#264859] placeholder-[#67717e] outline-none text-[16px]"
                      maxLength={2000}
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-[12px] text-[#67717e]">{responseText.length}/2000 characters</span>
                      <button
                        onClick={handleSubmitResponse}
                        disabled={submitting || !responseText.trim()}
                        className={`px-4 py-1.5 rounded-[8px] text-[14px] font-medium disabled:opacity-50 ${
                          !responseText.trim() || submitting
                            ? 'bg-[#BE592A]/10 text-black'
                            : 'bg-gradient-to-b from-[#f5802c] to-[#b9420a] text-[#fbf9f8]'
                        }`}
                      >
                        {submitting ? 'Sending...' : 'Submit'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else {
              // COLLAPSED STATE
              return (
                prompt.promptId ? null : (
                <div 
                  id={`prompt-${prompt.id}`}
                  key={prompt.id} 
                  onClick={() => handleExpand(prompt.id)}
                  className="bg-white rounded-[12px] p-4 shadow-sm border border-transparent cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      {!prompt.hasResponded && (
                         <div className="w-2 h-2 rounded-full bg-[#BE592A] flex-shrink-0" />
                      )}
                      <span className="text-[#264859] text-[16px]">{formatDate(prompt.createdAt)}</span>
                    </div>
                    <div className="flex -space-x-2">
                      {prompt.responses && getUniqueResponders(prompt.responses).slice(0, 3).map((r: any, i: number) => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                           {r.userPhoto ? (
                             <ImageWithFallback src={r.userPhoto} alt="" className="w-full h-full object-cover" />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center text-[#264859] text-[10px] font-bold bg-[#f6f7f9]">
                               {r.userName?.[0]}
                             </div>
                           )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-[rgb(55,41,25)] font-bold text-[18px] leading-snug">
                    {prompt.text}
                  </h3>
                </div>
                )
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
