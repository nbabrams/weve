# Photo Upload API Documentation

## Base URL
```
https://{projectId}.supabase.co/functions/v1/make-server-9cac149a
```

## Authentication
All photo upload endpoints require authentication via Bearer token in the Authorization header:
```
Authorization: Bearer {access_token}
```

---

## Upload Profile Photo

### Endpoint
```
POST /upload/profile-photo
```

### Description
Uploads or updates the authenticated user's profile photo.

### Request
- **Content-Type**: `multipart/form-data`
- **Body Parameters**:
  - `photo` (File, required): Image file to upload

### File Requirements
- **Allowed formats**: PNG, JPG, JPEG, WebP
- **Max size**: 5MB
- **Storage path**: `profiles/{userId}.{ext}`

### Response

#### Success (200)
```json
{
  "success": true,
  "photoUrl": "https://{projectId}.supabase.co/storage/v1/object/sign/make-9cac149a-photos/profiles/{userId}.jpg?token=..."
}
```

#### Error (400/401/500)
```json
{
  "error": "Error message describing what went wrong"
}
```

### Example Usage (JavaScript)
```javascript
const formData = new FormData();
formData.append('photo', fileInput.files[0]);

const response = await fetch(`${API_BASE}/upload/profile-photo`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  },
  body: formData,
});

const data = await response.json();
if (data.success) {
  console.log('Photo URL:', data.photoUrl);
}
```

---

## Upload Group Photo

### Endpoint
```
POST /upload/group-photo
```

### Description
Uploads or updates a group's photo. User must be a member of the group.

### Request
- **Content-Type**: `multipart/form-data`
- **Body Parameters**:
  - `photo` (File, required): Image file to upload
  - `groupId` (string, required): ID of the group

### File Requirements
- **Allowed formats**: PNG, JPG, JPEG, WebP
- **Max size**: 5MB
- **Storage path**: `groups/{groupId}.{ext}`

### Authorization
- User must be authenticated
- User must be a member of the specified group

### Response

#### Success (200)
```json
{
  "success": true,
  "photoUrl": "https://{projectId}.supabase.co/storage/v1/object/sign/make-9cac149a-photos/groups/{groupId}.jpg?token=..."
}
```

#### Error (400/401/403/500)
```json
{
  "error": "Error message describing what went wrong"
}
```

### Example Usage (JavaScript)
```javascript
const formData = new FormData();
formData.append('photo', fileInput.files[0]);
formData.append('groupId', currentGroupId);

const response = await fetch(`${API_BASE}/upload/group-photo`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  },
  body: formData,
});

const data = await response.json();
if (data.success) {
  console.log('Photo URL:', data.photoUrl);
}
```

---

## Error Codes

### 400 - Bad Request
- No file provided
- Invalid file type (not PNG/JPG/WebP)
- File too large (>5MB)
- Missing required parameters

### 401 - Unauthorized
- Invalid or missing access token
- Access token expired

### 403 - Forbidden
- User not a member of the group (group photo only)

### 500 - Internal Server Error
- Upload to Supabase Storage failed
- Failed to generate signed URL
- Database update failed

---

## Storage Details

### Bucket Name
`make-9cac149a-photos`

### Bucket Configuration
- **Public**: No (private bucket)
- **File size limit**: 5MB
- **Allowed MIME types**: 
  - `image/png`
  - `image/jpeg`
  - `image/jpg`
  - `image/webp`

### Signed URLs
- **Expiry**: 1 year (31,536,000 seconds)
- **Purpose**: Secure access to private photos
- **Refresh**: Currently manual, future enhancement for auto-refresh

### File Naming
- Profile photos: `profiles/{userId}.{ext}`
  - Example: `profiles/abc123def456.jpg`
- Group photos: `groups/{groupId}.{ext}`
  - Example: `groups/group789xyz.png`

### File Replacement
When uploading a new photo:
1. Old file is deleted from storage
2. New file is uploaded with same path (different extension possible)
3. Signed URL is regenerated
4. Database record is updated

---

## Data Storage

### User Profile Storage
Photo URL is stored in the KV store:
```javascript
// Key: user:{userId}
{
  id: "user123",
  name: "John Doe",
  email: "john@example.com",
  profilePhoto: "https://...signed-url...",
  groups: ["groupId1", "groupId2"],
  createdAt: "2025-01-15T10:00:00.000Z"
}
```

### Group Storage
Photo URL is stored in the KV store:
```javascript
// Key: group:{groupId}
{
  id: "group123",
  name: "Book Club",
  photo: "https://...signed-url...",
  adminId: "user123",
  members: ["user123", "user456"],
  frequency: "weekly",
  depthLevel: 7,
  // ... other fields
}
```

---

## Security Considerations

### Authentication
- All endpoints require valid JWT access token
- Tokens verified via Supabase Auth
- Expired tokens automatically rejected

### Authorization
- Users can only upload their own profile photos
- Users can only upload photos for groups they're members of
- Group membership verified before upload

### File Validation
- Client-side validation (immediate feedback)
- Server-side validation (security)
- Both check file type and size

### Storage Security
- Private bucket (not publicly accessible)
- Signed URLs required for access
- URLs expire after 1 year
- Bucket-level policies enforce permissions

---

## Best Practices

### Client-Side
1. Validate file type and size before upload
2. Show preview immediately after selection
3. Display upload progress/loading state
4. Handle errors gracefully with user-friendly messages
5. Clear file input after successful upload

### Server-Side
1. Always validate file type and size
2. Delete old photos before uploading new ones
3. Generate new signed URLs after upload
4. Update database atomically
5. Log errors with context for debugging

### Performance
1. Compress large images before upload (future enhancement)
2. Use appropriate image formats (WebP preferred)
3. Cache signed URLs client-side
4. Lazy load images in lists
5. Use CDN for faster delivery (future enhancement)

---

## Future Enhancements

### Planned Features
- [ ] Automatic image compression (reduce file size)
- [ ] Image cropping/editing before upload
- [ ] Support for animated GIFs
- [ ] Batch upload for multiple photos
- [ ] Photo galleries for groups
- [ ] Direct camera capture (mobile)
- [ ] Auto-refresh expiring signed URLs
- [ ] CDN integration for faster delivery
- [ ] Image optimization (WebP conversion)
- [ ] Thumbnail generation for faster loading

### Monitoring
- [ ] Upload success/failure rates
- [ ] Average upload time
- [ ] Storage usage per user/group
- [ ] Signed URL expiry tracking
- [ ] Error rate by type

---

## Troubleshooting

### "Unauthorized" Error
- Check access token is present and valid
- Verify token hasn't expired
- Try refreshing the session

### "File too large" Error
- Ensure file is under 5MB
- Consider compressing the image
- Use a different format (WebP is smaller)

### "Invalid file type" Error
- Only PNG, JPG, and WebP are supported
- Check file extension matches actual format
- Try converting to a supported format

### Upload Succeeds but Photo Not Showing
- Check signed URL is valid
- Verify photo URL is saved in database
- Try refreshing the page
- Check browser console for errors

### Photo Shows Initially Then Breaks
- Signed URL may have expired (rare, 1 year expiry)
- Network error loading image
- Check browser dev tools network tab
- Verify URL is still accessible

---

## Testing Commands

### Test Profile Photo Upload (cURL)
```bash
curl -X POST \
  https://{projectId}.supabase.co/functions/v1/make-server-9cac149a/upload/profile-photo \
  -H "Authorization: Bearer {access_token}" \
  -F "photo=@/path/to/image.jpg"
```

### Test Group Photo Upload (cURL)
```bash
curl -X POST \
  https://{projectId}.supabase.co/functions/v1/make-server-9cac149a/upload/group-photo \
  -H "Authorization: Bearer {access_token}" \
  -F "photo=@/path/to/image.jpg" \
  -F "groupId=group123"
```
