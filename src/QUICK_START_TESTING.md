# Quick Start Testing Guide

## Photo Upload Features

### Test 1: Profile Photo Upload (5 minutes)

1. **Navigate to Settings**
   - Open the app
   - Sign in if not already signed in
   - Click the "Settings" tab in bottom navigation
   - You should see the Settings screen

2. **Upload Profile Photo**
   - Look for the circular camera icon under "Profile" section
   - Click "Upload Photo" button
   - Select a JPG, PNG, or WebP image (under 5MB)
   - Preview should appear immediately
   - Wait for upload to complete (should be quick)
   - Photo should persist after upload

3. **Verify Photo Appears**
   - Navigate to "Groups" tab
   - Open any group you're a member of
   - Scroll down to see member list
   - Your profile photo should appear next to your name

4. **Test Validation**
   - Try uploading a PDF or other non-image file
   - Should see error: "Please select a PNG, JPG, or WebP image"
   - Try uploading a file >5MB (if available)
   - Should see error: "Image must be smaller than 5MB"

**Expected Result**: ✅ Profile photo uploads successfully and appears in all locations

---

### Test 2: Group Photo Upload (5 minutes)

1. **Navigate to Group Settings**
   - Go to "Groups" tab
   - Click on any group you're a member of
   - Click the gear/settings icon in the header
   - You should see Group Settings screen

2. **Upload Group Photo**
   - Look for the circular camera icon under "Group Information"
   - Click "Upload Photo" button
   - Select a JPG, PNG, or WebP image (under 5MB)
   - Preview should appear immediately
   - Wait for upload to complete
   - Photo should persist

3. **Verify Photo Appears**
   - Click back arrow to return to main thread
   - Navigate to "Groups" tab
   - Your group should now have a photo instead of the Users icon
   - Navigate to "Home" tab
   - Posts from this group should show the group photo

**Expected Result**: ✅ Group photo uploads successfully and appears in all locations

---

### Test 3: Settings Navigation Fix (2 minutes)

1. **Test Navigation from Main Thread**
   - Go to "Groups" tab
   - Click on any group
   - You should be in the main thread view
   - Look for the user icon in the header (top right area)
   - Click the user icon

2. **Verify Settings Screen**
   - Should navigate to your profile Settings
   - Should see "Settings" header with "Manage your profile and preferences" subtitle
   - Should see your profile photo upload section
   - Should see your name and email

3. **Return to Home**
   - Click "Home" in bottom navigation
   - Should return to home feed

**Expected Result**: ✅ Navigation works correctly without errors

---

## Quick Validation Checklist

### Profile Photo
- [ ] Upload button is visible
- [ ] Camera icon shows when no photo
- [ ] File picker opens when clicking upload
- [ ] Preview appears after selecting file
- [ ] Upload completes successfully
- [ ] Photo appears in member lists
- [ ] Photo persists after refresh
- [ ] Remove button works (X icon)
- [ ] Can change photo after uploading

### Group Photo
- [ ] Upload button is visible in group settings
- [ ] Camera icon shows when no photo
- [ ] File picker opens when clicking upload
- [ ] Preview appears after selecting file
- [ ] Upload completes successfully
- [ ] Photo appears in groups list
- [ ] Photo appears in home feed
- [ ] Photo persists after refresh
- [ ] Can change photo after uploading

### Navigation
- [ ] User icon visible in main thread header
- [ ] Clicking user icon navigates to Settings
- [ ] Settings screen loads correctly
- [ ] Can navigate back to home
- [ ] No console errors

---

## Common Issues & Solutions

### Issue: "Unauthorized" Error
**Solution**: 
- Sign out and sign back in
- Check browser console for access token
- Try refreshing the page

### Issue: Photo Not Uploading
**Solution**:
- Check file size (must be under 5MB)
- Check file type (PNG, JPG, or WebP only)
- Check internet connection
- Check browser console for errors

### Issue: Photo Uploaded but Not Showing
**Solution**:
- Refresh the page
- Check browser console for errors
- Verify photo URL in network tab
- Clear browser cache

### Issue: Navigation Doesn't Work
**Solution**:
- Refresh the page
- Clear browser cache
- Check browser console for errors
- Verify you're signed in

---

## Browser Console Debugging

### Open Browser Console
- **Chrome/Edge**: F12 or Ctrl+Shift+I (Cmd+Option+I on Mac)
- **Firefox**: F12 or Ctrl+Shift+K (Cmd+Option+K on Mac)
- **Safari**: Cmd+Option+C (enable Developer menu first)

### What to Look For
1. **Network Tab**
   - Check for failed requests (red)
   - Look for upload requests to `/upload/profile-photo` or `/upload/group-photo`
   - Verify response status is 200

2. **Console Tab**
   - Look for red error messages
   - Check for "Unauthorized" or "Failed to upload" messages
   - Note any network errors

3. **Application Tab**
   - Check localStorage for `access_token`
   - Verify token exists and isn't expired

---

## Success Criteria

### All Tests Pass If:
✅ Profile photo uploads without errors
✅ Group photo uploads without errors
✅ Photos appear in all locations immediately
✅ Photos persist after page refresh
✅ File validation works (rejects invalid files)
✅ Navigation to settings works from main thread
✅ No errors in browser console
✅ UI is responsive and smooth

---

## Reporting Issues

If you find any issues during testing, please note:
1. What you were trying to do
2. What happened (include error messages)
3. Browser and device information
4. Screenshot or screen recording if possible
5. Browser console errors (copy the full error)

---

## Next Steps After Testing

Once these features are validated:
1. Consider adding real-time subscriptions for live updates
2. Implement 3-month reassessment system
3. Add PWA service worker and icons
4. Consider image compression before upload
5. Add photo cropping tool
6. Implement in-app camera capture

---

## Estimated Testing Time
- **Profile Photo**: 5 minutes
- **Group Photo**: 5 minutes
- **Navigation Fix**: 2 minutes
- **Validation Testing**: 3 minutes
- **Total**: ~15 minutes

**Priority**: High - Core features that improve user experience significantly
