# WE'VE - Deepen Friendships Through Connection

A mobile-first Progressive Web App that helps small friend groups (3-6 people) deepen their connections through guided conversation prompts.

## Core Features

### 🎯 MVP Features Implemented

- **User Authentication**: Sign up and sign in with email/password
- **Profile & Group Photos**: Upload and manage photos for profiles and groups
- **Group Management**: Create or join private friend groups using invite codes
- **Real-Time Updates**: Live notifications when friends post responses (5-second polling)
- **Scheduled Prompts**: Automatic prompt generation based on group frequency (daily, 2-3 days, or weekly)
- **Smart Prompt Selection**: Prompts adapt to group depth level with category rotation
- **Shared Responses**: Read and respond to prompts in a group thread
- **Response Control**: Edit or delete your own responses with inline editing
- **Dynamic Settings**: Group settings automatically adjust to members' comfort levels
- **Live Home Feed**: See updates from all your groups with automatic refresh
- **Archive**: View past prompts and conversations
- **Resources**: Access articles about connection and friendship
- **Mobile-First Design**: Optimized for mobile devices (375-428px width)
- **PWA Ready**: Can be installed to home screen

### 🎨 Design System

- **Primary Color**: Coral (#ff7b5f) - Warmth and connection
- **Secondary Color**: Teal (#4ecdc4) - Trust and calm
- **Background**: Warm off-white (#fdfbf9)
- **Typography**: Clean, readable fonts with proper hierarchy

## Getting Started

### First Time User Flow

1. **Splash Screen**: See an inspiring quote about connection
2. **Sign Up**: Create account with name, email, and password
3. **Create or Join Group**:
   - Create: Set group name, frequency, and depth level → Get invite code
   - Join: Enter invite code and set your preferences
4. **Main Thread**: View prompts, read responses, and share your thoughts

### Signing In Later
- Use the **same email and password** you created your account with
- Email must match exactly (though case doesn't matter)
- Password is case-sensitive
- If you get "Invalid credentials" - you need to sign up first!

### Using the App

- **Live Updates**: See new responses automatically without refreshing (updates every 5 seconds)
- **Automatic Prompts**: Prompts generate automatically based on your group's frequency setting
- **Respond**: Share thoughts up to 2000 characters
- **Edit/Delete**: Click pencil/trash icons on your own responses to edit or remove them
- **Get Notified**: Visual badges show "X new responses!" when friends post
- **Navigate**: Use header icons to access Settings, Archive, Resources, and Profile
- **Adjust Settings**: Admin can update group preferences at any time
- **Track Schedule**: See when the next prompt will arrive in the prompt card header

### Signing In Later
- Use the **same email and password** you created your account with
- Email must match exactly (though case doesn't matter)
- Password is case-sensitive
- If you get "Invalid credentials" - you need to sign up first!

## Technical Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Supabase (Auth, Database, Real-time)
- **Server**: Deno Edge Functions with Hono framework
- **UI Components**: ShadCN UI library

## Prompt System

Prompts are organized by depth levels:

- **Level 1-3 (Light)**: Fun questions, funny stories
- **Level 4-7 (Meaningful)**: Past memories, future dreams, growth
- **Level 8-10 (Deep)**: Vulnerability, psychology, spiritual questions

Every 8th prompt pushes one level deeper to gently encourage growth.

## Future Enhancements

- **Real-Time v2**: Upgrade to Supabase Realtime for instant updates (vs. 5-second polling)
- **Advanced Real-Time**: Typing indicators, read receipts, online presence indicators
- **3-Month Reassessment**: Automatic comfort level review with blocking UI
- **Push Notifications**: Alert users when new prompts/responses arrive (even when app closed)
- **PWA Service Worker**: Offline support and home screen installation
- **Edit Time Limits**: Optional 24-hour window for editing responses
- **Group Management**: Member removal by admin, admin role transfer
- **Social Login**: Google, Facebook authentication options
- **Photo Tools**: Image compression, cropping, direct camera capture

## Key Business Rules

- Minimum 2 members, maximum 6 per group
- Maximum 5 groups per user
- Prompts never repeat within a group
- Settings adjust to lowest member comfort level
- Responses limited to 400 words (~2000 characters)

## Development Notes

This is a prototype built with Figma Make. For production use:

1. Set up proper email service for notifications
2. Implement scheduled jobs for daily prompt generation
3. Add comprehensive error handling
4. Set up analytics and monitoring
5. Implement rate limiting on API endpoints
6. Add data backup and recovery
7. Configure proper CORS and security headers
8. Set up CI/CD pipeline

## Tagline

**"Seen. Held. Cared for."**

Transform time with friends into a space for genuine vulnerability and belonging.
