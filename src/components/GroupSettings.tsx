import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Copy, Trash2, Upload, User } from 'lucide-react';
import { apiCall } from '../utils/api';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projectId } from '../utils/supabase/info';

interface GroupSettingsProps {
  groupId: string;
  onBack: () => void;
  onDelete?: () => void;
}

export function GroupSettings({ groupId, onBack, onDelete }: GroupSettingsProps) {
  const [group, setGroup] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  
  // Form state
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const [depthLevel, setDepthLevel] = useState(5);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadGroup();
  }, [groupId]);

  const loadGroup = async () => {
    try {
      const { group: groupData } = await apiCall(`/groups/${groupId}`);
      if (groupData) {
        setGroup(groupData);
        setName(groupData.name);
        setFrequency(groupData.frequency);
        setDepthLevel(groupData.depthLevel);
      }
    } catch (err) {
      console.error('Failed to load group:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await apiCall(`/groups/${groupId}/settings`, {
        method: 'PUT',
        body: JSON.stringify({
          name,
          frequency,
          depthLevel
        })
      });
      alert('Settings saved successfully');
    } catch (err) {
      console.error('Failed to save settings:', err);
      alert('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('groupId', groupId);

    try {
      const accessToken = localStorage.getItem('access_token');
      // Use projectId if available in environment/context, otherwise fallback to known project or relative path if proxied
      // But since we are in client side, we should use the full URL unless we have a proxy
      // Assuming projectId is available globally or we use the hardcoded one that works
      // Ideally should be: `https://${projectId}.supabase.co...`
      // For now, let's keep it as is or update if we import projectId. 
      // To be safe, let's use the one that matches App.tsx if possible, but we need to import projectId.
      // Since I cannot easily add import without reading file top, I will assume the existing URL was intended but might be wrong.
      // Let's try to use the same logic as App.tsx if possible.
      // But I don't want to break it if I don't import projectId.
      // I'll stick to the existing URL but fix it if I can see where projectId is defined.
      // Wait, I saw App.tsx imports projectId. GroupSettings.tsx does NOT.
      // I should update GroupSettings.tsx to import projectId.
      
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-9cac149a/upload/group-photo`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setGroup({ ...group, photo: data.publicUrl });
      } else {
        throw new Error(data.error || 'Upload failed');
      }
    } catch (err) {
      console.error('Upload error:', err);
      alert('Failed to upload photo');
    } finally {
      setUploading(false);
    }
  };

  const handleCopyInvite = async () => {
    if (group?.inviteCode) {
      try {
        await navigator.clipboard.writeText(group.inviteCode);
        alert('Invite code copied to clipboard');
      } catch (err) {
        // Fallback for iframes/environments where clipboard API is blocked
        try {
          const textArea = document.createElement("textarea");
          textArea.value = group.inviteCode;
          textArea.style.position = "fixed";
          textArea.style.left = "-9999px";
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert('Invite code copied to clipboard');
        } catch (fallbackErr) {
          console.error('Failed to copy invite code:', fallbackErr);
          alert(`Here is the code: ${group.inviteCode}`);
        }
      }
    }
  };

  const handleDeleteGroup = async () => {
    if (confirm('Are you sure you want to delete this group? This cannot be undone.')) {
      setDeleting(true);
      try {
        await apiCall(`/groups/${groupId}`, {
          method: 'DELETE'
        });
        
        // Call the onDelete callback to navigate away
        if (onDelete) {
          onDelete();
        } else {
          onBack(); // Fallback
        }
      } catch (err) {
        console.error('Failed to delete group:', err);
        alert('Failed to delete group');
      } finally {
        setDeleting(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#fbf9f8]">
        <p className="text-[#264859]">Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#fbf9f8] overflow-hidden">
      <header className="bg-white border-b border-[#f6f7f9] px-4 py-3 flex items-center gap-3 sticky top-0 z-20">
        <button onClick={onBack} className="text-[#264859]">
          <ChevronLeft size={24} />
        </button>
        <h1 className="font-medium text-[#264859] text-[16px]">Group Settings</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
        {/* Group Information */}
        <section className="bg-white rounded-[12px] p-6 shadow-sm space-y-6">
          <h2 className="text-[#264859] text-[16px]">Group Information</h2>
          
          {/* Photo */}
          <div className="space-y-2">
            <label className="text-[#264859] text-[14px] font-semibold">Group Photo</label>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-2 border-[#e0e6eb]">
                {group.photo ? (
                  <ImageWithFallback src={group.photo} alt="Group" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <User size={32} />
                  </div>
                )}
                {/* Remove button overlay could go here */}
              </div>
              <div>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="flex items-center gap-2 px-4 py-2 bg-[#fbf9f8] border border-[#e99b63] rounded-[10px] text-[rgb(190,89,42)] text-[14px] font-medium mb-1"
                >
                  <Upload size={14} />
                  {uploading ? 'Uploading...' : 'Change Photo'}
                </button>
                <p className="text-[#67717e] text-[12px]">PNG, JPG or WebP • Max 5MB</p>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-[#264859] text-[16px]">Group Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-[10px] border border-gray-200 text-[#264859] outline-none focus:border-[#e99b63]"
            />
          </div>

          {/* Invite Code */}
          <div className="space-y-2">
            <label className="text-[#264859] text-[16px]">Invite Code</label>
            <div className="flex gap-2">
              <div className="flex-1 bg-[#f5d4bc] rounded-[12px] p-3 text-[#264859] font-mono tracking-wider">
                {group.inviteCode}
              </div>
              <button 
                onClick={handleCopyInvite}
                className="bg-[#e99b63]/10 w-[48px] flex items-center justify-center rounded-[12px] text-[rgb(190,89,42)]"
              >
                <Copy size={20} />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-[#67717e] text-[14px]">Members</p>
              <p className="text-[#264859] text-[16px]">{group.members.length}</p>
            </div>
            <div>
              <p className="text-[#67717e] text-[14px]">Created</p>
              <p className="text-[#264859] text-[16px]">
                {new Date(group.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>

        {/* Prompt Settings */}
        <section className="bg-white rounded-[12px] p-6 shadow-sm space-y-6">
          <h2 className="text-[#264859] text-[16px]">Prompt Settings</h2>
          
          {/* Frequency */}
          <div className="space-y-3">
            <label className="text-[#264859] text-[16px]">Frequency</label>
            <div className="grid grid-cols-3 gap-2">
              {['daily', '2-3days', 'weekly'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFrequency(opt)}
                  className={`py-3 rounded-[12px] text-[14px] font-medium border transition-colors ${
                    frequency === opt 
                      ? 'bg-[#BE592A] text-white border-[#BE592A]' 
                      : 'bg-white text-[#264859] border-gray-200'
                  }`}
                >
                  {opt === 'daily' ? 'Daily' : opt === '2-3days' ? '2-3 Days' : 'Weekly'}
                </button>
              ))}
            </div>
          </div>

          {/* Connection Depth */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-[#264859] font-medium">Connection Depth</label>
              <span className="text-[rgb(190,89,42)]">
                {depthLevel < 4 ? 'Lighthearted' : depthLevel < 8 ? 'Meaningful sharing' : 'Deep connection'}
              </span>
            </div>
            
            <div className="relative pt-2 pb-6">
              <input
                type="range"
                min="1"
                max="10"
                value={depthLevel}
                onChange={(e) => setDepthLevel(parseInt(e.target.value))}
                className="w-full h-2 bg-[#f6f7f9] rounded-full appearance-none cursor-pointer accent-[#e99b63]"
              />
              <div className="flex justify-between mt-2 text-[14px] text-[#67717e]">
                <span>Light</span>
                <span>Deep</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full bg-[rgb(190,89,42)] text-white py-3 rounded-[10px] font-medium disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </section>

        {/* Members List */}
        <section className="bg-white rounded-[12px] p-6 shadow-sm space-y-4">
          <h2 className="text-[#264859] text-[16px]">Members</h2>
          <div className="space-y-3">
             {group.memberDetails?.map((member: any) => (
               <div key={member.id} className={`flex items-center justify-between p-3 rounded-[12px] ${member.id === group.adminId ? 'bg-[#f5d4bc]' : 'bg-gray-50'}`}>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                     {member.profilePhoto ? (
                       <ImageWithFallback src={member.profilePhoto} alt={member.name} className="w-full h-full object-cover" />
                     ) : (
                       <div className="w-full h-full flex items-center justify-center text-[#e99b63] font-bold">
                         {member.name[0]}
                       </div>
                     )}
                   </div>
                   <div>
                     <p className="text-[#264859] font-medium">{member.name}</p>
                     {member.id === group.adminId && (
                       <p className="text-[#67717e] text-[12px]">Admin</p>
                     )}
                   </div>
                 </div>
                 {/* Allow removing members if admin? */}
               </div>
             ))}
          </div>
        </section>

        {/* Delete Group */}
        <section className="bg-white rounded-[12px] p-6 shadow-sm space-y-4 border border-red-100">
          <h2 className="text-[#264859] text-[16px]">Delete Group</h2>
          <button 
            onClick={handleDeleteGroup}
            className="w-full bg-[#dd3c3c] text-white py-3 rounded-[10px] font-medium"
          >
            Delete This Group
          </button>
          <p className="text-[#67717e] text-[14px] leading-relaxed">
            NOTE: This cannot be undone. You'll lose everything that has been added or created.
          </p>
        </section>
      </div>
    </div>
  );
}
