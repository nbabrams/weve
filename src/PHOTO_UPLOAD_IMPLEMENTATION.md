# Photo Upload Implementation

## Overview
Added complete photo upload functionality for user profiles and group images, with backend storage using Supabase Storage.

## Features Implemented

### 1. Backend Storage (Supabase)
- **Bucket Creation**: Automatic initialization of `make-9cac149a-photos` bucket on server startup
- **File Validation**: 
  - Allowed types: PNG, JPG, JPEG, WebP
  - Maximum size: 5MB
  - Proper error handling and validation
- **Signed URLs**: Photos stored privately with 1-year signed URLs for secure access

### 2. Upload Endpoints

#### Profile Photo Upload
- **Endpoint**: `POST /upload/profile-photo`
- **Auth**: Requires valid user access token
- **Process**: 
  1. Validates file type and size
  2. Uploads to `profiles/{userId}.{ext}`
  3. Generates signed URL
  4. Updates user profile in KV store
  5. Returns new photo URL to frontend

#### Group Photo Upload
- **Endpoint**: `POST /upload/group-photo`
- **Auth**: Requires valid user access token + group membership
- **Process**:
  1. Validates file type and size
  2. Verifies user is member of group
  3. Uploads to `groups/{groupId}.{ext}`
  4. Generates signed URL
  5. Updates group data in KV store
  6. Returns new photo URL to frontend

### 3. PhotoUpload Component
- **Location**: `/components/PhotoUpload.tsx`
- **Features**:
  - Image preview with drag-and-drop support
  - File validation (type and size)
  - Upload progress indication
  - Remove photo button
  - Configurable sizes (small, medium, large)
  - Error handling with user-friendly messages
- **Props**:
  - `currentPhotoUrl`: Existing photo URL
  - `onPhotoChange`: Callback when upload completes
  - `uploadType`: 'profile' or 'group'
  - `groupId`: Required for group uploads
  - `size`: 'small' | 'medium' | 'large'
  - `showLabel`: Toggle label visibility

### 4. UI Integration

#### User Settings
- Profile photo upload with large preview (128x128px)
- Appears above name field
- Photo persists across sessions
- Displays in member lists throughout app

#### Group Settings
- Group photo upload with medium preview (96x96px)
- Appears at top of group settings
- All members see the group photo
- Photo displayed in group cards on home screen

### 5. Bug Fix: Settings Navigation
- **Issue**: MainThread navigated to 'user-settings' but App.tsx checked for 'settings'
- **Fix**: Updated MainThread navigation to use 'settings' to match BottomNav and App.tsx
- **Files Changed**: `/App.tsx` line 251

## Technical Details

### File Storage Structure
```
make-9cac149a-photos/
├── profiles/
│   ├── {userId1}.jpg
│   ├── {userId2}.png
│   └── ...
└── groups/
    ├── {groupId1}.jpg
    ├── {groupId2}.png
    └── ...
```

### Security
- All photos stored in private bucket
- Access controlled via signed URLs (1-year expiry)
- Upload endpoints require authentication
- Group uploads verify membership before accepting

### Data Flow
1. User selects photo → Preview shown immediately
2. File validated on client side
3. FormData sent to backend with auth token
4. Backend validates, uploads to Supabase Storage
5. Signed URL generated and stored in KV
6. URL returned to frontend
7. Component updates with new photo
8. Photo visible immediately throughout app

## Testing Checklist

- [ ] Upload profile photo in User Settings
- [ ] Upload group photo in Group Settings  
- [ ] Verify file type validation (try uploading PDF)
- [ ] Verify file size validation (try uploading >5MB)
- [ ] Remove photo and re-upload
- [ ] Check photos persist after refresh
- [ ] Verify photos display in member lists
- [ ] Test navigation to settings from main thread
- [ ] Confirm unauthorized users cannot upload

## Future Enhancements

1. **Image Compression**: Automatically compress images before upload
2. **Cropping Tool**: Allow users to crop/adjust photos before uploading
3. **Multiple Photos**: Support photo galleries or multiple profile photos
4. **Photo Moderation**: Add admin controls for inappropriate images
5. **CDN Integration**: Consider CDN for faster photo delivery
6. **Signed URL Refresh**: Auto-refresh expiring signed URLs

## Files Modified/Created

### New Files
- `/components/PhotoUpload.tsx` - Reusable photo upload component

### Modified Files
- `/supabase/functions/server/index.tsx` - Added storage initialization and upload endpoints
- `/components/UserSettings.tsx` - Added PhotoUpload import
- `/components/GroupSettings.tsx` - Added PhotoUpload import  
- `/App.tsx` - Fixed settings navigation bug

### Protected Files (Not Modified)
- `/supabase/functions/server/kv_store.tsx` - Protected system file
- `/utils/supabase/info.tsx` - Protected config file
- `/components/figma/ImageWithFallback.tsx` - Protected component
