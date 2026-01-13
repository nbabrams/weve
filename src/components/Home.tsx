import { useState, useEffect } from 'react';
import { apiCall } from '../utils/api';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users } from 'lucide-react';

interface Response {
  id: string;
  userPhoto: string | null;
  userName: string;
}

interface GroupData {
  id: string;
  name: string;
  photo: string | null;
  memberCount: number;
  lastActivity: string | null;
  prompt?: {
    text: string;
    createdAt: string;
  } | null;
  responses?: Response[];
}

interface HomeProps {
  onNavigateToGroup: (groupId: string) => void;
}

export function Home({ onNavigateToGroup }: HomeProps) {
  const [groups, setGroups] = useState<GroupData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { groups: groupsList } = await apiCall('/groups/list');
      if (groupsList) {
        const groupsWithDetails = await Promise.all(groupsList.map(async (g: any) => {
          try {
            // Fetch current prompt and responses for each group
            const { prompt, responses } = await apiCall(`/prompts/${g.id}/current`);
            return { ...g, prompt, responses: responses || [] };
          } catch (e) {
            console.error(`Failed to load details for group ${g.id}`, e);
            return { ...g, prompt: null, responses: [] };
          }
        }));
        setGroups(groupsWithDetails);
      }
    } catch (err) {
      console.error('Failed to load groups:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#fbf9f8]">
        <p className="text-[#264859]">Loading your groups...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-[#fbf9f8] min-h-full flex flex-col" data-name="02.00 - Home - New">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white w-full h-[45px] flex flex-col items-center justify-center border-b border-[#f6f7f9]">
         <p className="font-['Inter'] font-semibold text-[19px] text-[#e99b63] tracking-[0.18px]">
           Home
         </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-[16px] py-[24px] overflow-y-auto pb-24">
        <div className="flex flex-col gap-[16px] w-full">
          {groups.length === 0 ? (
             <div className="flex flex-col items-center justify-center py-12 text-center">
               <p className="text-[#264859] text-lg font-semibold mb-2">No groups yet</p>
               <p className="text-[#67717e] text-sm">Create or join a group to start connecting.</p>
             </div>
          ) : (
            groups.map((group) => (
              <div 
                key={group.id}
                onClick={() => onNavigateToGroup(group.id)}
                className="bg-white relative rounded-[16px] w-full shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] p-[17px] flex flex-col gap-[16px] cursor-pointer active:scale-[0.98] transition-transform"
              >
                {/* Header: Image + Name */}
                <div className="flex gap-[12px] items-center w-full">
                  <div className="relative rounded-[5px] shrink-0 size-[46px] overflow-hidden bg-gray-100">
                    {group.photo ? (
                      <ImageWithFallback
                        src={group.photo}
                        alt={group.name}
                        className="absolute inset-0 size-full object-cover"
                      />
                    ) : (
                      <div className="size-full flex items-center justify-center bg-[#e99b63] bg-opacity-20">
                        <Users className="text-[#e99b63] size-6" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-['Inter'] font-semibold text-[24px] text-[#264859] tracking-[-0.15px] truncate">
                      {group.name}
                    </p>
                  </div>
                </div>

                {/* Question Box */}
                <div className="bg-[rgb(190,89,42)] rounded-[12px] p-[16px] w-full text-white flex flex-col items-start">
                  <p className="font-['Inter'] font-normal text-[12px] leading-[16px] mb-1 opacity-90">
                    {group.prompt ? formatDate(group.prompt.createdAt) : formatDate(new Date().toISOString())}
                  </p>
                  <p className="font-['Inter'] font-bold text-[18px] leading-[24px] tracking-[-0.15px] w-full break-words">
                    {group.prompt?.text || "No active question"}
                  </p>
                </div>

                {/* Footer: Avatars or Call to Action */}
                <div className="flex items-center justify-end w-full h-[24px]">
                  {group.responses && group.responses.length > 0 ? (
                    <div className="flex gap-[-8px] items-center flex-row-reverse">
                      {/* Show up to 3 avatars */}
                      {group.responses.slice(0, 3).map((resp, idx) => (
                        <div 
                          key={resp.id} 
                          className="relative size-[24px] rounded-full overflow-hidden border-[1.5px] border-white -ml-[8px] first:ml-0 z-10"
                          style={{ zIndex: group.responses!.length - idx }}
                        >
                          {resp.userPhoto ? (
                            <ImageWithFallback
                              src={resp.userPhoto}
                              alt={resp.userName}
                              className="size-full object-cover"
                            />
                          ) : (
                            <div className="size-full bg-[#264859] flex items-center justify-center text-white text-[10px]">
                              {resp.userName.charAt(0)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-[#67717e] italic">
                      Be the first to answer
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
