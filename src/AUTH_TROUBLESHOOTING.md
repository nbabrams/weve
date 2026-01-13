# Authentication Troubleshooting Guide

## Common Sign-In Issues

### "Invalid login credentials" Error

This error typically occurs for these reasons:

#### 1. **User Account Doesn't Exist**
- **Solution**: Click "Sign up" to create an account first
- The app requires you to create an account before signing in
- Make sure you use the exact email you registered with

#### 2. **Incorrect Password**
- **Solution**: Double-check your password
- Password is case-sensitive
- Make sure there are no extra spaces

#### 3. **Typo in Email Address**
- **Solution**: Carefully retype your email
- Check for typos (e.g., "gmial.com" vs "gmail.com")
- Email is case-insensitive but must match exactly

#### 4. **Browser/Cache Issues**
- **Solution**: Try these steps:
  1. Clear browser cache and cookies
  2. Try incognito/private browsing mode
  3. Try a different browser
  4. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

---

## How Authentication Works

### Sign Up Flow
1. User fills out sign-up form (name, email, password)
2. Frontend calls backend `/auth/register` endpoint
3. Backend creates user in Supabase Auth using Admin API
4. Backend auto-confirms email (no email server needed for MVP)
5. Backend stores user profile in KV store
6. Frontend signs in user automatically with credentials
7. Access token stored in localStorage
8. User redirected to Welcome screen

### Sign In Flow
1. User enters email and password
2. Frontend calls Supabase `signInWithPassword()` directly
3. Supabase validates credentials and returns access token
4. Access token and user ID stored in localStorage
5. User redirected to main app

---

## Testing Authentication

### Create a Test Account
1. Click "Don't have an account? Sign up"
2. Use these test credentials:
   - **Name**: Test User
   - **Email**: test@weve.app
   - **Password**: test1234

3. Complete sign-up
4. You'll be automatically signed in

### Sign Out and Sign In Again
1. Go to Settings → Sign Out (if implemented)
2. Return to sign-in screen
3. Enter the same credentials:
   - **Email**: test@weve.app
   - **Password**: test1234
4. Should sign in successfully

---

## Debugging Steps

### Check Browser Console
1. Open Developer Tools (F12)
2. Go to Console tab
3. Look for errors when signing in
4. Common errors to check:
   - "Attempting sign in for: [email]"
   - "Supabase auth error: ..."
   - "Sign in error: ..."

### Check LocalStorage
1. Open Developer Tools (F12)
2. Go to Application/Storage tab
3. Look at Local Storage
4. Should see:
   - `access_token`: JWT token string
   - `user_id`: UUID string

### Check Network Requests
1. Open Developer Tools (F12)
2. Go to Network tab
3. Try signing in
4. Look for requests to:
   - Supabase auth endpoints
   - Should see 200 OK for successful auth
   - Check response body for errors

---

## Common Error Messages

### "Invalid login credentials"
- **Cause**: Email or password doesn't match any account
- **Fix**: Verify credentials or create new account

### "Email not confirmed"
- **Cause**: Email verification pending (shouldn't happen in MVP)
- **Fix**: Check if `email_confirm: true` is set in backend

### "AuthApiError"
- **Cause**: Supabase auth service error
- **Fix**: Check Supabase project status and configuration

### "Failed to sign in"
- **Cause**: Generic network or server error
- **Fix**: Check browser console for detailed error message

---

## Backend Configuration

### Supabase Auth Settings
The backend uses Supabase Auth Admin API:

```typescript
await supabase.auth.admin.createUser({
  email,
  password,
  email_confirm: true, // Auto-confirm email
  user_metadata: { name }
});
```

### Email Confirmation
- **MVP Setting**: `email_confirm: true`
- **Reason**: No email server configured
- **Effect**: Users can sign in immediately after sign-up

---

## Known Limitations

### No Password Reset
- **Issue**: Users cannot reset forgotten passwords
- **Workaround**: Create a new account with different email
- **Future**: Implement password reset flow

### No Email Verification
- **Issue**: Email addresses are not verified
- **Impact**: Users can sign up with fake emails
- **Future**: Set up email service (SendGrid, Mailgun, etc.)

### No Account Recovery
- **Issue**: Lost credentials cannot be recovered
- **Workaround**: Remember your password!
- **Future**: Add password reset + email verification

---

## For Developers

### Manual User Creation (Backend Console)
If you need to create users programmatically:

```typescript
const { data, error } = await supabase.auth.admin.createUser({
  email: 'user@example.com',
  password: 'securepassword',
  email_confirm: true,
  user_metadata: { name: 'Test User' }
});
```

### Check User Exists
```typescript
const { data, error } = await supabase.auth.admin.listUsers();
console.log('Users:', data.users);
```

### Delete Test Users
```typescript
const { error } = await supabase.auth.admin.deleteUser(userId);
```

---

## Quick Fixes

### "I can't sign in!"
1. ✅ **Have you created an account?** → Click "Sign up"
2. ✅ **Is email correct?** → Check for typos
3. ✅ **Is password correct?** → Try retyping carefully
4. ✅ **Still stuck?** → Create a new account with different email

### "Sign up isn't working!"
1. ✅ **Password too short?** → Must be 8+ characters
2. ✅ **Email already used?** → Try different email
3. ✅ **Network error?** → Check internet connection
4. ✅ **Check console** → Look for error messages

---

## Testing Checklist

- [ ] Sign up with new email
- [ ] Automatically signed in after sign-up
- [ ] Sign out (if implemented)
- [ ] Sign in with same credentials
- [ ] Try wrong password (should fail)
- [ ] Try wrong email (should fail)
- [ ] Check localStorage has tokens
- [ ] Check console for errors
- [ ] Test on different browser
- [ ] Test on mobile device

---

Last Updated: October 10, 2025
