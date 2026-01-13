# Real-Time Updates System

## Overview
WE'VE now includes real-time updates that automatically refresh content when friends post new responses. Users see live notifications and content updates without manual refreshing, creating a more connected conversation experience.

---

## Features Implemented

### 1. MainThread Real-Time Updates
**Location**: `/components/MainThread.tsx`

#### What Updates Live:
- ✅ New responses from friends in the current group thread
- ✅ Automatic refresh every 5 seconds while viewing a conversation
- ✅ Visual notification badge when new responses arrive

#### User Experience:
- **Notification**: Floating badge shows "X new responses!" when friends post
- **Auto-Disappear**: Notification fades after 3 seconds
- **Seamless**: New responses appear automatically in the thread
- **Efficient**: Only polls when user is actively viewing the thread

---

### 2. Home Feed Real-Time Updates
**Location**: `/components/Home.tsx`

#### What Updates Live:
- ✅ New responses from all groups
- ✅ Automatic refresh every 10 seconds
- ✅ Visual notification when new content is available

#### User Experience:
- **Notification**: Shows "X new updates!" when activity happens across groups
- **Less Frequent**: 10-second interval to reduce server load on multi-group feed
- **Discoverable**: Encourages users to explore new content across their groups

---

## Technical Implementation

### Polling Strategy
Uses **client-side polling** with JavaScript `setInterval`:

```typescript
// MainThread: Poll every 5 seconds
pollingIntervalRef.current = setInterval(async () => {
  const response = await apiCall(`/prompts/${groupId}/current`);
  if (response.responses.length > lastResponseCountRef.current) {
    // Show notification and update UI
  }
}, 5000);
```

### Why Polling Instead of WebSockets?
1. **Simpler Implementation**: Works with existing REST API
2. **Environment Compatibility**: No WebSocket infrastructure needed
3. **Battery Efficient**: Controlled intervals prevent excessive battery drain
4. **Reliable**: No connection drops or reconnection logic needed
5. **Figma Make Compatible**: Works within platform constraints

### Response Tracking
- **Reference Counting**: Uses `useRef` to track last known response count
- **Comparison**: Compares current count vs. previous on each poll
- **Notification**: Triggers visual notification when count increases

### Cleanup Handling
- **Automatic Cleanup**: Clears intervals on component unmount
- **Memory Safe**: Prevents memory leaks with proper cleanup
- **Re-initialization**: Restarts polling when navigating back to screen

---

## Visual Design

### Notification Badge
```jsx
<div className="bg-secondary text-white px-6 py-3 rounded-full shadow-lg">
  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
  <p>X new responses!</p>
</div>
```

**Styling**:
- **Color**: Teal secondary color (#2A9D8F) for trust and calm
- **Position**: Fixed at top-center of screen
- **Animation**: Slides in from top with fade
- **Pulse**: White dot animates to draw attention
- **Auto-Hide**: Fades after 3 seconds

---

## Performance Considerations

### Polling Intervals
- **MainThread**: 5 seconds (active conversation)
- **Home Feed**: 10 seconds (browse mode)

### Server Load
- **Minimal Impact**: Existing GET endpoints reused
- **Efficient Queries**: No additional database load
- **Cached Responses**: Backend already optimized for repeated calls

### Battery Impact
- **Controlled**: Fixed intervals prevent runaway polling
- **Stopped on Unmount**: Polling stops when leaving screen
- **Reasonable Frequency**: 5-10 second intervals balance freshness vs. battery

---

## Future Enhancements

### Phase 2: True Real-Time with Supabase Realtime
Upgrade to Supabase's PostgreSQL Realtime subscriptions:

```typescript
const channel = supabase
  .channel('group-responses')
  .on('postgres_changes', 
    { event: 'INSERT', schema: 'public', table: 'kv_store' },
    (payload) => {
      // Handle new response instantly
    }
  )
  .subscribe();
```

**Benefits**:
- Instant updates (no 5-second delay)
- Zero polling overhead
- Truly "live" conversation feel

**Requirements**:
- Access to underlying Postgres table structure
- Supabase Realtime enabled on project
- More complex subscription management

---

### Phase 3: Enhanced Features
1. **Typing Indicators**: Show when friends are composing responses
2. **Read Receipts**: Show who has seen the prompt/responses
3. **Push Notifications**: Alert users even when app is closed
4. **Presence**: Show who is currently online in the group

---

## Testing

### How to Test Real-Time Updates

1. **Setup**: Open WE'VE in two different browsers/devices
2. **Login**: Sign in as different users in the same group
3. **Navigate**: Both users open the same group thread
4. **Post**: User A posts a response
5. **Verify**: User B should see notification within 5 seconds
6. **Check**: New response appears automatically in User B's thread

### Expected Behavior
- ✅ Notification badge appears: "1 new response!"
- ✅ Notification auto-hides after 3 seconds
- ✅ New response visible in thread
- ✅ Polling continues for additional updates

### Troubleshooting
- **No updates appearing?** Check browser console for errors
- **Notification not showing?** Verify `newResponsesCount > 0`
- **Polling stopped?** Check component is still mounted
- **Server errors?** Check network tab for failed API calls

---

## Code Structure

### Key Files Modified
1. `/components/MainThread.tsx` - Thread real-time updates
2. `/components/Home.tsx` - Feed real-time updates

### New State Variables
```typescript
const [newResponsesCount, setNewResponsesCount] = useState(0);
const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
const lastResponseCountRef = useRef(0);
```

### Key Functions
- `startRealtimePolling()` - Initializes interval
- `stopRealtimePolling()` - Cleanup function
- `loadFeed(silent)` - Load with optional notification

---

## User Benefits

### For Users
- **Stay Connected**: See friends' responses immediately
- **Engaging**: Conversation feels live and dynamic
- **Discovery**: Home feed shows new activity across all groups
- **No Refresh**: Never need to manually reload

### For Groups
- **Active Feel**: Groups feel more alive with live updates
- **Faster Responses**: Encourages back-and-forth conversation
- **FOMO Reducer**: Users won't miss responses while browsing
- **Trust**: Builds confidence that the app is "always listening"

---

## Metrics & Monitoring

### Success Indicators
- **Response Time**: Users should see updates within 5-10 seconds
- **Notification Accuracy**: Count should match actual new responses
- **Cleanup**: No memory leaks or stuck intervals
- **Server Load**: API call frequency remains constant

### Potential Issues
- ⚠️ **Stale Data**: If polling fails silently
- ⚠️ **Race Conditions**: Multiple polls overlapping
- ⚠️ **Memory Leaks**: Intervals not cleared on unmount
- ⚠️ **Battery Drain**: On mobile devices with many groups

---

Last Updated: October 10, 2025
