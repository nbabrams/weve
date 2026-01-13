import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Upload, LogOut, User, Users } from 'lucide-react';
import { apiCall } from '../utils/api';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projectId } from '../utils/supabase/info';

interface UserSettingsProps {
  onBack: () => void;
  onSignOut: () => void;
}

export function UserSettings({ onBack, onSignOut }: UserSettingsProps) {
  const [user, setUser] = useState<any>(null);
  const [groups, setGroups] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [userData, groupsData] = await Promise.all([
        apiCall('/users/me'),
        apiCall('/groups/list')
      ]);

      if (userData.success) {
        setUser(userData.user);
        setName(userData.user.name);
      }
      if (groupsData.success) {
        setGroups(groupsData.groups);
      }
    } catch (err) {
      console.error('Failed to load settings data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!name.trim()) return;
    setSaving(true);
    try {
      await apiCall('/users/profile', {
        method: 'PUT',
        body: JSON.stringify({ name })
      });
      alert('Profile updated successfully');
    } catch (err) {
      console.error('Failed to update profile:', err);
      alert('Failed to update profile');
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

    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-9cac149a/upload/profile-photo`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setUser({ ...user, profilePhoto: data.publicUrl });
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

  const handleDeleteProfile = async () => {
    if (confirm('Are you sure you want to delete your profile? This cannot be undone and you will lose all your data.')) {
      setDeleting(true);
      try {
        await apiCall('/users/me', { method: 'DELETE' });
        onSignOut();
      } catch (err) {
        console.error('Failed to delete profile:', err);
        alert('Failed to delete profile');
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
    <div className="flex flex-col h-full bg-[#fbf9f8] overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-[#f6f7f9] px-4 py-3 flex items-center justify-center sticky top-0 z-20 h-[45px]">
        <p className="font-['Inter'] font-semibold text-[19px] text-[#e99b63] tracking-[0.18px]">
           Settings
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
        
        {/* Profile Section */}
        <section className="bg-white rounded-[16px] p-6 shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] space-y-6">
          <h3 className="text-[#264859] text-[16px] font-normal">Profile</h3>
          
          {/* Photo Upload */}
          <div className="space-y-2">
            <label className="text-[#264859] text-[14px] font-semibold">Profile Photo</label>
            <div className="flex items-start gap-4">
               <div className="relative w-[128px] h-[128px] rounded-full bg-[#f6f7f9] border-2 border-[#e0e6eb] overflow-hidden flex-shrink-0">
                 {user?.profilePhoto ? (
                   <ImageWithFallback src={user.profilePhoto} alt={user.name} className="w-full h-full object-cover" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-[#e0e6eb]">
                     <User size={64} />
                   </div>
                 )}
               </div>
               <div className="pt-6">
                 <button 
                   onClick={() => fileInputRef.current?.click()}
                   disabled={uploading}
                   className="flex items-center gap-2 px-4 py-2 bg-[#fbf9f8] border border-[#e99b63] rounded-[10px] text-[rgb(190,89,42)] text-[14px] font-medium mb-2"
                 >
                   <Upload size={16} />
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
            <label className="text-[#264859] text-[14px] font-semibold">Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#f6f7f9] border border-[#f6f7f9] rounded-[10px] px-3 py-2 text-[#264859] outline-none focus:border-[#e99b63]"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-[#264859] text-[14px] font-semibold">Email</label>
            <input 
              type="email" 
              value={user?.email || ''}
              disabled
              className="w-full bg-[#f6f7f9] border border-[#f6f7f9] rounded-[10px] px-3 py-2 text-[#264859] opacity-50"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveProfile}
            disabled={saving}
            className="w-full bg-gradient-to-b from-[#f5802c] to-[#b9420a] h-[33px] rounded-[6px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#fbf9f8] tracking-[-0.1504px] flex items-center justify-center disabled:opacity-70"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </section>

        {/* My Groups Section */}
        <section className="bg-white rounded-[16px] p-6 shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] space-y-4">
          <h3 className="text-[#264859] text-[18px] font-medium">My Groups</h3>
          
          <div className="space-y-3">
            {groups.length === 0 ? (
              <p className="text-[#67717e] text-[14px]">You haven't joined any groups yet.</p>
            ) : (
              groups.map((group) => (
                <div key={group.id} className="bg-white border border-[#f6f7f9] rounded-[16px] p-4 flex items-center gap-3">
                  <div className="w-16 h-16 rounded-[10px] overflow-hidden bg-gray-100 flex-shrink-0">
                    {group.photo ? (
                      <ImageWithFallback src={group.photo} alt={group.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#e99b63]/20 text-[#e99b63]">
                        <Users size={24} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#264859] text-[18px] font-semibold leading-tight">{group.name}</h4>
                    <p className="text-[#67717e] text-[14px]">{group.memberCount} {group.memberCount === 1 ? 'member' : 'members'}</p>
                    <p className="text-[#67717e] text-[12px] mt-1">
                      Active {group.lastActivity ? new Date(group.lastActivity).toLocaleDateString() : 'recently'}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Account Section */}
        <section className="bg-white rounded-[16px] p-6 shadow-[0px_2px_8px_0px_rgba(38,72,89,0.08)] space-y-4">
          <h3 className="text-[#264859] text-[16px] font-normal">Account</h3>
          <button 
            onClick={onSignOut}
            className="w-full bg-[#fbf9f8] border border-[#dd3c3c] text-[#dd3c3c] py-2 rounded-[10px] font-semibold text-[14px] flex items-center justify-center gap-2"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </section>

        {/* Delete Profile Section */}
        <section className="bg-white rounded-[12px] p-6 border border-[rgba(0,0,0,0.08)] space-y-6">
           <h3 className="text-[#264859] text-[16px] font-normal">Delete My Profile</h3>
           <button 
             onClick={handleDeleteProfile}
             disabled={deleting}
             className="w-full bg-[#dd3c3c] text-white py-2 rounded-[10px] font-medium text-[14px] disabled:opacity-70"
           >
             {deleting ? 'Deleting...' : 'Delete Profile'}
           </button>
           <p className="text-[#67717e] text-[16px] leading-tight">
             NOTE: This cannon be undone. You'll lose everything that you've written created.
           </p>
        </section>

      </div>
    </div>
  );
}
