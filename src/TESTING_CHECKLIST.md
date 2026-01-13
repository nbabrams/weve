# WE'VE Testing Checklist

## Photo Upload Features (NEW)

### Profile Photo Upload
- [ ] Navigate to Settings via bottom nav
- [ ] Click on camera icon or "Upload Photo" button
- [ ] Select a valid image (PNG, JPG, WebP)
- [ ] Verify preview appears immediately
- [ ] Verify upload success message
- [ ] Verify photo persists after page refresh
- [ ] Click "Change Photo" to update existing photo
- [ ] Click X button to remove photo
- [ ] Test validation: Try uploading a PDF (should fail with error)
- [ ] Test validation: Try uploading >5MB file (should fail with error)
- [ ] Verify profile photo appears in group member lists
- [ ] Verify profile photo appears in thread responses

### Group Photo Upload
- [ ] Navigate to Group Settings (gear icon in thread header)
- [ ] Upload group photo using PhotoUpload component
- [ ] Verify preview appears immediately
- [ ] Verify photo persists after leaving and returning
- [ ] Verify group photo appears in Groups list
- [ ] Verify group photo appears in Home feed
- [ ] Test as non-admin (should still be able to see upload UI)
- [ ] Test validation same as profile photos

### Navigation Bug Fix
- [ ] Open a group thread
- [ ] Click user icon in header (should navigate to Settings)
- [ ] Verify Settings screen loads correctly
- [ ] Verify can navigate back to home via bottom nav
- [ ] Verify can navigate back to thread via Groups tab

## Core Authentication

### Sign Up
- [ ] Enter name, email, and password (min 8 characters)
- [ ] Verify account creation success
- [ ] Verify automatic sign-in after registration
- [ ] Test with existing email (should show error)
- [ ] Test with weak password (should show validation)

### Sign In
- [ ] Enter valid credentials
- [ ] Verify successful sign-in
- [ ] Verify redirect to appropriate screen
- [ ] Test with invalid credentials (should show error)
- [ ] Verify "Sign Out" works correctly

## Group Management

### Create Group
- [ ] Enter group name
- [ ] Select frequency (Daily, 2-3 Days, Weekly)
- [ ] Adjust depth level slider (1-10)
- [ ] Verify group creation success
- [ ] Verify invite code displayed
- [ ] Copy invite code to clipboard
- [ ] Verify admin can access all settings

### Join Group
- [ ] Enter valid invite code
- [ ] Verify successful join
- [ ] Test with invalid code (should show error)
- [ ] Verify joined group appears in Groups list
- [ ] Verify can access group thread

### Group Settings
- [ ] Change group name (admin only)
- [ ] Adjust frequency settings (admin only)
- [ ] Adjust depth level (admin only)
- [ ] View and copy invite code
- [ ] View member list with profile photos
- [ ] Verify non-admins see read-only settings
- [ ] Upload/change group photo

## Conversation Prompts

### Prompt Generation
- [ ] Admin clicks "Generate First Prompt"
- [ ] Verify prompt appears with category and depth level
- [ ] Verify example is shown
- [ ] Verify "Generate New Prompt" available to members
- [ ] Test prompt rotation (different categories)
- [ ] Verify depth level affects prompt selection

### Responses
- [ ] Write and submit response (max 2000 chars)
- [ ] Verify response appears in thread
- [ ] Verify author name and photo shown
- [ ] Verify timestamp displayed
- [ ] View other members' responses
- [ ] Verify character count while typing
- [ ] Test emoji support in responses

## Navigation

### Bottom Navigation
- [ ] Home tab - shows feed from all groups
- [ ] Groups tab - shows all joined groups
- [ ] Resources tab - shows articles and quotes
- [ ] Settings tab - shows user profile settings
- [ ] Verify active state highlighting
- [ ] Verify smooth transitions between tabs

### Thread Navigation
- [ ] Header: Settings icon → Group Settings
- [ ] Header: User icon → User Settings (FIXED)
- [ ] Header: Archive icon → Past Prompts
- [ ] Header: Book icon → Resources
- [ ] Back button returns to Groups list
- [ ] All navigations work smoothly

## Home Feed

- [ ] Shows latest posts from all groups
- [ ] Group photos displayed correctly
- [ ] Click post to navigate to group
- [ ] Shows empty state if no posts
- [ ] Responses show author names and photos
- [ ] Timestamps are readable

## Archive

- [ ] View past prompts chronologically
- [ ] Click prompt to expand responses
- [ ] View all responses for archived prompts
- [ ] Navigate back to current thread

## Resources

- [ ] View connection quotes
- [ ] View article cards
- [ ] Articles are relevant and inspiring
- [ ] Quotes display properly
- [ ] Smooth scrolling through content

## Mobile Experience

### Responsive Design
- [ ] Test on 375px width (iPhone SE)
- [ ] Test on 390px width (iPhone 12/13)
- [ ] Test on 428px width (iPhone 14 Pro Max)
- [ ] Test on Android devices
- [ ] Verify safe area insets respected

### Touch Interactions
- [ ] All buttons are 44px min touch target
- [ ] Swipe gestures work smoothly
- [ ] No accidental clicks
- [ ] Keyboard doesn't block inputs
- [ ] Form inputs are easily tappable

### Performance
- [ ] Smooth scrolling in threads
- [ ] No lag when typing responses
- [ ] Images load quickly
- [ ] Transitions are smooth
- [ ] No memory leaks on long sessions

## Data Persistence

- [ ] User data persists across sessions
- [ ] Group memberships persist
- [ ] Responses persist and sync
- [ ] Settings changes are saved
- [ ] Profile photos persist
- [ ] Group photos persist
- [ ] Access tokens refresh properly

## Error Handling

- [ ] Network errors show user-friendly messages
- [ ] Invalid input shows validation errors
- [ ] Unauthorized access redirects to login
- [ ] 404 errors handled gracefully
- [ ] Server errors don't break UI
- [ ] File upload errors are clear

## Edge Cases

- [ ] User in no groups yet
- [ ] Group with only 1 member
- [ ] Group at max capacity (6 members)
- [ ] Very long group names
- [ ] Very long user names
- [ ] Very long responses (2000 chars)
- [ ] Empty responses (should not submit)
- [ ] Rapid clicking buttons
- [ ] Slow network conditions
- [ ] Offline behavior

## Security

- [ ] Authenticated routes require login
- [ ] Can't access other users' data
- [ ] Can't modify groups you're not in
- [ ] Invite codes are unique
- [ ] Passwords not visible in forms
- [ ] Access tokens stored securely
- [ ] Photo uploads require auth
- [ ] Group photo uploads verify membership

## Accessibility

- [ ] Focus indicators visible
- [ ] Tab navigation works
- [ ] Buttons have accessible labels
- [ ] Images have alt text
- [ ] Color contrast meets standards
- [ ] Text is readable at system font sizes

## Future Features (Not Yet Implemented)

- [ ] Real-time Supabase subscriptions for live updates
- [ ] 3-month reassessment system with blocking UI
- [ ] PWA service worker registration
- [ ] Push notifications
- [ ] Photo compression before upload
- [ ] Image cropping tool
- [ ] In-app photo capture (use camera)
- [ ] Group photo galleries
- [ ] User presence indicators
- [ ] Read receipts
- [ ] Reaction emoji on responses
- [ ] Dark mode support
- [ ] Multiple language support

## Performance Benchmarks

- [ ] Initial load < 3 seconds
- [ ] Navigation transitions < 200ms
- [ ] Image uploads complete < 5 seconds
- [ ] API responses < 1 second
- [ ] Smooth 60fps animations
- [ ] Memory usage stays stable

## Browser Testing

- [ ] Safari (iOS)
- [ ] Chrome (iOS)
- [ ] Chrome (Android)
- [ ] Firefox (Android)
- [ ] Samsung Internet
- [ ] Edge (mobile)

## Notes
- Focus on mobile-first testing
- Test with real user data
- Test with slow 3G network
- Test battery usage on mobile
- Monitor console for errors
- Check all photo URLs are signed URLs
- Verify photo expiry handling (1 year expiry)
