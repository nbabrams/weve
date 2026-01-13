import { useState, useEffect } from 'react';
import { Users, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { apiCall } from '../utils/api';

interface Group {
  id: string;
  name: string;
  photo: string | null;
  memberCount: number;
  lastActivity: string | null;
}

interface GroupsProps {
  onNavigateToGroup: (groupId: string) => void;
  onCreateGroup: () => void;
  onJoinGroup: () => void;
}

export function Groups({ onNavigateToGroup, onCreateGroup, onJoinGroup }: GroupsProps) {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGroups();
  }, []);

  const loadGroups = async () => {
    try {
      const response = await apiCall('/groups/list', {}, 2); // Retry up to 2 times
      setGroups(response?.groups || []);
    } catch (err) {
      console.error('Failed to load groups:', err);
      // Don't throw error, just show empty state
      setGroups([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'No activity yet';
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Active now';
    if (diffHours < 24) return `Active ${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return 'Active yesterday';
    if (diffDays < 7) return `Active ${diffDays}d ago`;
    return `Active ${date.toLocaleDateString()}`;
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[hsl(20,30%,98%)]">
        <p className="text-[hsl(215,10%,45%)]">Loading groups...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[hsl(20,30%,98%)]">
      <header className="sticky top-0 z-10 bg-white h-[45px] flex items-center justify-center border-b border-[#f6f7f9]">
        <h1 className="font-['Inter'] font-semibold text-[19px] text-[#e99b63] tracking-[0.18px]">Groups</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        <div className="max-w-2xl mx-auto px-4 py-6">
          {groups.length === 0 ? (
            <div className="text-center py-12">
              <Users 
                className="w-16 h-16 mx-auto mb-4" 
                style={{ color: 'hsl(25, 75%, 65%)' }}
              />
              <h3 className="text-[hsl(200,40%,25%)] mb-2">No groups yet</h3>
              <p className="text-[hsl(215,10%,45%)] mb-6">
                Create or join a group to start deeper conversations
              </p>
              <div className="flex flex-col gap-3 max-w-xs mx-auto">
                <Button
                  onClick={onCreateGroup}
                  className="w-full bg-gradient-to-br from-[hsl(25,75%,65%)] to-[hsl(11,79%,62%)] text-white hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] transition-all hover:-translate-y-0.5 border-0"
                  style={{ fontWeight: 600 }}
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create Group
                </Button>
                <Button
                  onClick={onJoinGroup}
                  variant="outline"
                  className="w-full border-[hsl(25,75%,65%)] text-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,65%,0.08)] transition-all"
                  style={{ fontWeight: 600 }}
                >
                  Join Group
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-3 mb-6">
                {groups.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => onNavigateToGroup(group.id)}
                    className="w-full text-left bg-white border border-[hsl(210,20%,97%)] rounded-xl p-4 shadow-[0_2px_8px_hsla(200,40%,25%,0.08)] hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] transition-all hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      {group.photo ? (
                        <img 
                          src={group.photo} 
                          alt={group.name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      ) : (
                        <div 
                          className="w-14 h-14 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'hsl(25, 75%, 65%, 0.1)' }}
                        >
                          <Users 
                            className="w-7 h-7" 
                            style={{ color: 'hsl(25, 75%, 65%)' }}
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-[hsl(200,40%,25%)] mb-1" style={{ fontWeight: 600 }}>
                          {group.name}
                        </h3>
                        <p className="text-sm" style={{ color: 'hsl(215, 10%, 45%)' }}>
                          {group.memberCount} {group.memberCount === 1 ? 'member' : 'members'}
                        </p>
                        <p className="text-xs mt-1" style={{ color: 'hsl(215, 10%, 45%)' }}>
                          {formatDate(group.lastActivity)}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Add Group Actions */}
              <div className="flex gap-3">
                <Button
                  onClick={onCreateGroup}
                  className="flex-1 bg-gradient-to-b from-[#f5802c] to-[#b9420a] h-[33px] rounded-[6px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#fbf9f8] tracking-[-0.1504px] leading-[21px] border-0 hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] transition-all hover:-translate-y-0.5"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create
                </Button>
                <Button
                  onClick={onJoinGroup}
                  variant="outline"
                  className="flex-1 border-[hsl(25,75%,65%)] text-[hsl(25,75%,65%)] hover:bg-[hsl(25,75%,65%,0.08)] transition-all"
                  style={{ fontWeight: 600 }}
                >
                  Join
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
