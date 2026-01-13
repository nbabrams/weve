# Scheduled Prompts System

## Overview
WE'VE automatically generates new conversation prompts based on each group's frequency setting. Prompts are generated when users open the group thread, ensuring timely delivery while keeping the system simple and reliable.

---

## How It Works

### Frequency Options
Groups can choose from three frequency settings:

1. **Daily** - New prompt every 24 hours
2. **2-3 Days** - New prompt every 60 hours (2.5 days)
3. **Weekly** - New prompt every 168 hours (7 days)

### Automatic Generation Logic

When a user opens a group's main thread (`MainThread` component):

1. **Load Current Prompt**: The system loads the current active prompt
2. **Check Time Elapsed**: Calculates hours since the prompt was created
3. **Auto-Generate if Due**: If the frequency interval has passed, automatically generates a new prompt
4. **First Prompt**: If no prompt exists, generates the first one automatically

### Code Location
**File**: `/components/MainThread.tsx`

**Key Functions**:
- `loadPrompt()` - Loads current prompt and triggers schedule check
- `checkAndGenerateScheduledPrompt()` - Checks if new prompt is due
- `generatePrompt()` - Calls backend to create new prompt
- `getNextPromptTime()` - Calculates and displays when next prompt is due

---

## User Experience

### Next Prompt Display
Users see when the next prompt is coming in the prompt card header:
- "Next prompt in 12h" (if less than 24 hours)
- "Next prompt in 2 days" (if 24+ hours)
- "New prompt coming soon!" (if overdue)

### Backend Integration
- Backend selects smart prompts based on:
  - Group's current depth level
  - Prompt history (avoids repetition)
  - Category rotation (for variety)
  - Every 8th prompt pushes one level deeper

---

## Admin Controls

### Group Settings
Group admins can change the frequency at any time via:
1. Open Group Settings
2. Navigate to "Prompt Settings"
3. Select new frequency (Daily / 2-3 Days / Weekly)
4. Save changes

**Note**: Changing frequency affects when the NEXT prompt will be generated, not the current one.

---

## Technical Details

### Frequency Intervals
```typescript
- daily: 24 hours
- 2-3days: 60 hours (2.5 days average)
- weekly: 168 hours (7 days)
```

### Client-Side vs Server-Side
This implementation uses **client-side scheduling** because:
- Simpler to implement in the Figma Make environment
- Prompts generate when users are actually active
- No need for cron jobs or scheduled functions
- Immediate feedback when opening the app

### Edge Cases Handled
- ✅ No prompt exists → Generate first prompt automatically
- ✅ Frequency changed → Next prompt uses new schedule
- ✅ Multiple users open at once → Backend handles concurrent requests
- ✅ User offline for weeks → New prompt generated when they return

---

## Future Enhancements

Potential improvements for production:

1. **Server-Side Scheduling**: Use Supabase Edge Functions with cron triggers for guaranteed prompt delivery
2. **Push Notifications**: Notify users when a new prompt is available
3. **Flexible Scheduling**: Allow custom intervals (e.g., "every 3 days")
4. **Time of Day**: Let groups choose when prompts arrive (e.g., 9 AM daily)
5. **Pause Feature**: Allow groups to pause prompts temporarily

---

## Testing

To test scheduled prompts:

1. Create a test group with "daily" frequency
2. Manually edit the current prompt's `createdAt` timestamp to 25+ hours ago (using Supabase dashboard)
3. Open the group thread in the app
4. Verify a new prompt is auto-generated
5. Check that "Next prompt in 24h" displays correctly

---

## Troubleshooting

**Prompt not auto-generating?**
- Check group frequency setting in Group Settings
- Verify current prompt's `createdAt` timestamp
- Check browser console for errors
- Ensure user is authenticated and member of group

**"Next prompt" time seems wrong?**
- Verify group's frequency setting matches expectation
- Check that timezone handling is correct
- Refresh the page to recalculate

---

Last Updated: October 10, 2025
