# WE'VE App - Development Guidelines

## Design Principles

1. **Mobile-First**: Always design for mobile screens (375-428px) first
2. **Warmth**: Use coral and teal colors to evoke connection and trust
3. **Simplicity**: Keep interfaces clean and uncluttered
4. **Vulnerability**: Design flows that encourage openness and authenticity

## Color Palette

- **Primary (Coral)**: `#ff7b5f` - Main actions, headers, emphasis
- **Secondary (Teal)**: `#4ecdc4` - Supporting elements, secondary actions
- **Background**: `#fdfbf9` - Warm off-white
- **Accent**: `#ffe8e0` - Light coral for highlights
- **Borders**: `rgba(0, 0, 0, 0.08)` - Subtle dividers

## Component Guidelines

### Buttons
- Primary actions use coral background
- Secondary actions use outline with coral border
- Destructive actions use red/destructive color
- Always include loading states

### Forms
- Light backgrounds for inputs (#ffffff)
- Clear labels above fields
- Helpful placeholder text
- Inline validation when possible
- Character limits displayed for text areas

### Cards
- White background with subtle border
- Rounded corners (0.75rem)
- Padding: 1.5rem (24px)
- Hover states for interactive cards

### Typography
- Headers: Use default heading styles from globals.css
- Body text: Default paragraph styles
- Muted text: For secondary information
- Never override font sizes unless specifically requested

## User Experience

### Navigation
- Sticky headers for context
- Back buttons on all sub-screens
- Clear iconography (lucide-react icons)
- Bottom-aligned primary actions on mobile

### Feedback
- Loading states for all async operations
- Error messages with context
- Success confirmations when needed
- Character counters on text inputs

### Accessibility
- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images
- Focus states on interactive elements
- Sufficient color contrast

## Code Organization

### File Structure
```
/components
  /auth - Authentication screens
  /onboarding - First-time user flows
  /ui - ShadCN UI components (don't modify)
  *.tsx - Main app components
/data
  quotes.ts - Connection quotes
/types
  index.ts - TypeScript interfaces
/utils
  api.ts - API helper functions
  /supabase - Supabase client
/supabase/functions/server
  index.tsx - Backend API routes
```

### API Patterns

All API calls follow this pattern:
```typescript
const { data } = await apiCall('/endpoint', {
  method: 'POST',
  body: JSON.stringify({ ... })
});
```

Authentication token is automatically included from localStorage.

### State Management
- Use React hooks (useState, useEffect)
- Load data on component mount
- Store minimal state in parent components
- Pass callbacks for navigation

## Backend Guidelines

### Route Naming
- Prefix all routes: `/make-server-9cac149a/`
- RESTful conventions: GET, POST, PUT, DELETE
- Descriptive endpoint names

### Data Storage
- Use KV store for all data
- Prefix keys by entity type: `user:`, `group:`, `prompt:`
- Store related data with composite keys: `group:123:prompt:456`

### Error Handling
- Log all errors to console
- Return descriptive error messages
- Use appropriate HTTP status codes
- Include context in error messages

## Prompt System

### Depth Levels
1. **1-3 (Light)**: Fun, funny, easy to answer
2. **4-7 (Meaningful)**: Personal growth, memories, relationships
3. **8-10 (Deep)**: Vulnerability, psychology, spirituality

### Progressive Pushing
- Every 8th prompt is one level deeper than selected
- This encourages growth without overwhelming
- Calculate: `(promptCount + 1) % 8 === 0`

### Categories
- Funny Stories
- Fun Facts
- Past Memories
- Future Dreams
- Relationships
- Personal Growth
- Psychology
- Somatic (body awareness)
- Spiritual

## Testing Checklist

When adding new features:
- [ ] Works on mobile viewport (375px)
- [ ] Loading states implemented
- [ ] Error handling in place
- [ ] Responsive to 428px width
- [ ] Console errors cleared
- [ ] API calls use proper authentication
- [ ] Data persists correctly
- [ ] Back buttons work as expected
- [ ] Forms validate input
- [ ] Success feedback provided

## Common Tasks

### Adding a New Screen
1. Create component in `/components`
2. Add screen type to App.tsx Screen union
3. Add screen to App.tsx switch statement
4. Implement navigation callbacks
5. Test back button functionality

### Adding a New API Endpoint
1. Add route in `/supabase/functions/server/index.tsx`
2. Implement authentication check if needed
3. Add proper error handling
4. Test with frontend integration
5. Log errors for debugging

### Modifying Group Settings
1. Update interface in `/types/index.ts`
2. Update backend route
3. Update GroupSettings component
4. Update CreateGroup component
5. Test dynamic adjustment logic

## Best Practices

1. **Always authenticate**: Check access tokens on protected routes
2. **Validate input**: Both frontend and backend
3. **Handle errors gracefully**: User-friendly messages
4. **Log for debugging**: Console.log important operations
5. **Keep it simple**: Don't over-engineer
6. **Mobile-first**: Test on mobile viewport
7. **Be consistent**: Follow existing patterns

## Security Notes

- Never expose SUPABASE_SERVICE_ROLE_KEY to frontend
- Always validate user permissions on backend
- Use access tokens for authenticated requests
- Sanitize user input
- Rate limit in production

## Future Considerations

When implementing advanced features:
- Email notifications need SendGrid setup
- Push notifications need service worker
- File uploads need Supabase Storage buckets
- Scheduled prompts need cron jobs
- Analytics need event tracking setup
