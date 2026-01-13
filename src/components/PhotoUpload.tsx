import { useState, useRef } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { Button } from './ui/button';
import { apiCall } from '../utils/api';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface PhotoUploadProps {
  currentPhotoUrl?: string | null;
  onPhotoChange: (photoUrl: string) => void;
  uploadType: 'profile' | 'group';
  groupId?: string;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
}

export function PhotoUpload({
  currentPhotoUrl,
  onPhotoChange,
  uploadType,
  groupId,
  size = 'medium',
  showLabel = true
}: PhotoUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(currentPhotoUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setError('Please select a PNG, JPG, or WebP image');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be smaller than 5MB');
      return;
    }

    setError(null);
    
    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload
    await handleUpload(file);
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('photo', file);
      
      if (uploadType === 'group' && groupId) {
        formData.append('groupId', groupId);
      }

      const endpoint = uploadType === 'profile' 
        ? '/upload/profile-photo' 
        : '/upload/group-photo';

      const accessToken = localStorage.getItem('access_token') || publicAnonKey;
      const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-9cac149a`;

      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();
      onPhotoChange(data.photoUrl);
    } catch (err) {
      console.error('Upload error:', err);
      setError(err instanceof Error ? err.message : 'Upload failed');
      setPreview(currentPhotoUrl || null);
    } finally {
      setUploading(false);
    }
  };

  const handleRemovePhoto = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-3">
      {showLabel && (
        <label className="text-sm" style={{ color: 'hsl(200, 40%, 25%)', fontWeight: 600 }}>
          {uploadType === 'profile' ? 'Profile Photo' : 'Group Photo'}
        </label>
      )}
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <div 
            className={`${sizeClasses[size]} rounded-full overflow-hidden bg-[hsl(210,20%,97%)] border-2 border-[hsl(210,20%,90%)] flex items-center justify-center cursor-pointer transition-all hover:border-primary`}
            onClick={handleClick}
          >
            {preview ? (
              <img 
                src={preview} 
                alt="Preview" 
                className="w-full h-full object-cover"
              />
            ) : (
              <Camera className="w-8 h-8 text-[hsl(215,10%,45%)]" />
            )}
          </div>
          
          {preview && !uploading && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemovePhoto();
              }}
              className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[hsl(0,70%,55%)] text-white flex items-center justify-center shadow-md hover:bg-[hsl(0,70%,45%)] transition-colors"
              title="Remove photo"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex-1 space-y-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/webp"
            onChange={handleFileSelect}
            className="hidden"
          />
          
          <Button
            type="button"
            onClick={handleClick}
            disabled={uploading}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <Upload className="w-4 h-4 mr-2" />
            {uploading ? 'Uploading...' : preview ? 'Change Photo' : 'Upload Photo'}
          </Button>
          
          <p className="text-xs text-[hsl(215,10%,45%)]">
            PNG, JPG or WebP • Max 5MB
          </p>
        </div>
      </div>

      {error && (
        <p className="text-sm text-[hsl(0,70%,55%)]">{error}</p>
      )}
    </div>
  );
}
