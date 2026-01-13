# 🚨 Getting "Invalid login credentials"? Here's How to Fix It!

## The Most Common Issue: You Need to Sign Up First!

### ✅ Solution: Create Your Account

WE'VE requires you to create an account before signing in. Here's what to do:

1. **On the Sign In screen**, look for the text: "Don't have an account? Sign up"
2. **Click "Sign up"** at the bottom
3. **Fill out the form**:
   - Your name (how friends will see you)
   - Your email address
   - A password (minimum 8 characters)
4. **Click "Create Account"**
5. You'll be **automatically signed in** after creating your account!

---

## Quick Test: Try These Credentials

### Create a Test Account
1. Click "Sign up"
2. Use these details:
   ```
   Name: Test Friend
   Email: yourname+test@gmail.com
   Password: password123
   ```
3. Complete sign-up
4. You're in!

**💡 Pro Tip**: Use the `+test` trick with Gmail to create multiple test accounts without needing different emails!

---

## Still Getting the Error?

### Double-Check These Things:

#### ✅ Email Address
- Make sure it's **exactly** the same as when you signed up
- Check for typos: `gmial.com` vs `gmail.com`
- Email is case-insensitive, so `Test@Gmail.com` = `test@gmail.com`

#### ✅ Password
- Passwords ARE case-sensitive
- Make sure CAPS LOCK is off
- Check for extra spaces
- Must be at least 8 characters

#### ✅ Did You Actually Sign Up?
- The app doesn't create accounts automatically
- You must click "Sign up" and complete the form
- If you're not sure, just sign up again with a different email

---

## Visual Guide

```
┌────────────────────────────────────┐
│         Sign In Screen             │
├────────────────────────────────────┤
│  Email: [                    ]     │
│  Password: [                 ]     │
│  [Sign In]                         │
│                                    │
│  👇 LOOK HERE 👇                   │
│  Don't have an account? Sign up    │ ← Click this!
└────────────────────────────────────┘

                 ⬇️

┌────────────────────────────────────┐
│         Sign Up Screen             │
├────────────────────────────────────┤
│  Name: [Test User]                 │
│  Email: [test@example.com]         │
│  Password: [••••••••]              │
│  [Create Account]                  │
└────────────────────────────────────┘

                 ⬇️

     ✅ Account Created!
     Automatically Signed In
```

---

## What's Actually Happening?

### When You Sign Up:
1. We create your account in our secure database
2. We store your info (name, email, hashed password)
3. We automatically sign you in
4. You see the Welcome screen

### When You Sign In Later:
1. We check if email exists ✅
2. We verify password matches ✅
3. We give you access
4. You're back in!

### Why You're Getting the Error:
- ❌ Email not found in database = need to sign up first
- ❌ Password doesn't match = check for typos
- ❌ Account doesn't exist = need to create one

---

## Browser Console Help

If you're technical, check the browser console (F12) for these messages:

### Successful Sign In:
```
Attempting sign in for: test@example.com
✅ User signed in successfully
```

### Failed Sign In:
```
Attempting sign in for: test@example.com
❌ Supabase auth error: AuthApiError: Invalid login credentials
Sign in error: Invalid email or password...
```

---

## I'm Stuck - What Now?

### Option 1: Create a New Account
Just sign up with a different email address. Problem solved!

### Option 2: Try a Different Browser
- Use Chrome, Firefox, or Safari
- Try incognito/private mode
- Clear cache and cookies

### Option 3: Wait and Try Again
Sometimes it's just a temporary glitch. Wait 5 minutes and try again.

---

## Future Improvements

We're working on adding:
- 🔄 Password reset functionality
- 📧 Email verification
- 👤 Social login (Google, Facebook)
- 🔐 Better error messages
- 💾 "Remember me" feature

For now, keep your password safe! There's no recovery option yet.

---

## Quick Reference Card

| Issue | Solution |
|-------|----------|
| "Invalid credentials" | Sign up first, then sign in |
| "Email already exists" (sign up) | Use sign in instead |
| Forgot password | Create new account (no reset yet) |
| Typo in email | Sign up with correct email |
| Wrong password | Carefully retype password |
| Still stuck | Create new account with different email |

---

**Remember**: The sign-up button is RIGHT THERE on the sign-in screen. Most login errors are solved by clicking it! 😊

---

Last Updated: October 10, 2025
