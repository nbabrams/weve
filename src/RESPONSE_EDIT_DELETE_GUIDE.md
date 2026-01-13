# Response Edit & Delete Feature Guide

## Overview
Users can now edit or delete their own responses in group conversations. This feature provides full control over posted content with a polished, intuitive interface following WE'VE's warm design system.

---

## Features

### ✏️ Edit Responses

#### How It Works
1. **Visibility**: Pencil icon appears only on your own responses
2. **Click to Edit**: Click the pencil icon to enter edit mode
3. **Inline Editing**: Textarea appears in place of the response text
4. **Character Counter**: Shows "X/2000 characters" while editing
5. **Save/Cancel**: 
   - Click "Save" (check icon) to update
   - Click "Cancel" (X icon) to discard changes
6. **Instant Update**: Response updates immediately in the thread

#### UI Elements
- **Edit Button**: Pencil icon with hover effect (gray → coral)
- **Edit Textarea**: Full-width, auto-focused, 2000 char limit
- **Action Buttons**:
  - Cancel: Outline style with X icon
  - Save: Primary coral with check icon
- **Loading State**: "Saving..." text during API call

---

### 🗑️ Delete Responses

#### How It Works
1. **Visibility**: Trash icon appears only on your own responses
2. **Click to Delete**: Click the trash icon
3. **Confirmation Dialog**: Modal appears with warning message
4. **Confirm or Cancel**:
   - Click "Delete" (red destructive button) to confirm
   - Click "Cancel" to keep the response
5. **Instant Removal**: Response disappears from thread immediately

#### UI Elements
- **Delete Button**: Trash icon with hover effect (gray → red)
- **Confirmation Dialog**:
  - Title: "Delete Response?"
  - Description: Clear warning about permanence
  - Cancel: Default button
  - Delete: Red destructive button
- **Loading State**: "Deleting..." text during API call

---

## User Experience

### Ownership Detection
- **Current User Check**: Compares `response.userId` with `localStorage.getItem('user_id')`
- **Conditional Rendering**: Edit/delete buttons only appear on own responses
- **Other Users**: Friends' responses show no action buttons

### Visual Design
- **Icon Buttons**: 
  - Minimal, clean design
  - Hover states with background accent
  - Color-coded for clarity (pencil → primary, trash → destructive)
- **Smooth Transitions**: All state changes animate smoothly
- **Responsive Layout**: Buttons aligned to right of response header

### Accessibility
- **Title Attributes**: "Edit response" and "Delete response" tooltips
- **Keyboard Accessible**: Tab navigation and enter/escape keys work
- **Loading States**: Disabled buttons prevent double-submission
- **Focus Management**: Auto-focus on textarea when editing

---

## Technical Implementation

### State Management
```typescript
const [editingResponseId, setEditingResponseId] = useState<string | null>(null);
const [editText, setEditText] = useState('');
const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
const [responseToDelete, setResponseToDelete] = useState<string | null>(null);
const [actionLoading, setActionLoading] = useState(false);
```

### API Endpoints

#### Edit Response
```typescript
PUT /responses/:responseId
Body: { text: string }
Response: { success: boolean }
```

#### Delete Response
```typescript
DELETE /responses/:responseId
Response: { success: boolean }
```

### Error Handling
- **Console Logging**: All errors logged to console
- **User Feedback**: Loading states prevent confusion
- **Optimistic Updates**: UI updates before server confirmation
- **Rollback**: Could add error recovery (not currently implemented)

---

## Code Structure

### MainThread.tsx Changes

#### New Imports
```typescript
import { Pencil, Trash2, X, Check } from 'lucide-react';
import { AlertDialog, ... } from './ui/alert-dialog';
```

#### Handler Functions
- `handleEditResponse(responseId, currentText)` - Enter edit mode
- `handleCancelEdit()` - Exit edit mode without saving
- `handleSaveEdit(responseId)` - Save edited text via API
- `handleDeleteClick(responseId)` - Open delete confirmation
- `handleConfirmDelete()` - Delete response via API

#### Response Rendering
Each response now includes:
1. Ownership check: `isOwnResponse = response.userId === currentUserId`
2. Edit mode check: `isEditing = editingResponseId === response.id`
3. Conditional action buttons (edit/delete)
4. Conditional display (text vs. edit textarea)

---

## Design System Alignment

### Colors (from Guidelines.md)
- **Primary (Coral)**: Edit button hover → `hsl(25, 75%, 65%)`
- **Destructive (Red)**: Delete button hover → `hsl(0, 70%, 55%)`
- **Muted**: Default icon state → `text-muted-foreground`
- **Accent**: Button hover background → `bg-accent`

### Typography
- **Character Counter**: Small, muted text
- **Dialog Text**: Clean, readable descriptions

### Animations
- **Hover Transitions**: `transition-colors` for smooth effects
- **Icon Color**: Gradual color shifts on hover

### Components Used
- **Button**: ShadCN with custom styling
- **Textarea**: ShadCN with border/background customization
- **AlertDialog**: ShadCN for delete confirmation

---

## User Flow Examples

### Edit Flow
1. User posts: "I love spending time with fiends"
2. User notices typo, clicks pencil icon
3. Textarea appears with current text selected
4. User changes "fiends" → "friends"
5. User clicks "Save" button
6. Text updates immediately
7. Edit mode closes, normal view returns

### Delete Flow
1. User posts: "This is a test response"
2. User decides to remove it, clicks trash icon
3. Dialog appears: "Delete Response?"
4. User reads warning about permanence
5. User clicks red "Delete" button
6. Response disappears from thread
7. Other users no longer see the response

### Cancel Edit Flow
1. User clicks pencil to edit
2. User starts typing changes
3. User changes mind, clicks "Cancel"
4. Changes are discarded
5. Original text remains unchanged
6. Edit mode closes

---

## Edge Cases Handled

✅ **Edit While Another User Posts**: Real-time polling won't interfere with local edit state
✅ **Delete While Editing**: Can't delete while in edit mode (buttons hidden)
✅ **Empty Text**: Save button disabled if text is empty after trimming
✅ **Character Limit**: Textarea enforces 2000 character maximum
✅ **Loading State**: Buttons disabled during API calls to prevent double-submission
✅ **Dialog Dismiss**: Clicking outside dialog or pressing Escape cancels delete

---

## Limitations & Future Enhancements

### Current Limitations
- ❌ No edit history tracking
- ❌ No "edited" indicator shown to other users
- ❌ No time limit for editing (can edit anytime)
- ❌ No rollback if edit/delete fails
- ❌ No optimistic update recovery

### Potential Enhancements
1. **Edit History**: Track edit timestamps and previous versions
2. **"Edited" Label**: Show "(edited)" badge next to timestamp
3. **24-Hour Window**: Allow edits only within 24 hours of posting
4. **Undo Delete**: 5-second grace period to undo deletion
5. **Error Recovery**: Automatic rollback if API call fails
6. **Admin Override**: Allow admin to delete any response
7. **Reason for Deletion**: Optional explanation when deleting

---

## Testing Checklist

### Manual Testing
- [ ] Post a response, verify edit button appears
- [ ] Click edit, verify textarea shows with correct text
- [ ] Edit text, click Save, verify update appears
- [ ] Edit text, click Cancel, verify no change
- [ ] Click delete, verify confirmation dialog appears
- [ ] Click Cancel in dialog, verify response remains
- [ ] Click Delete in dialog, verify response removed
- [ ] Verify edit/delete buttons don't appear on friends' responses
- [ ] Test character counter while editing
- [ ] Test loading states (Saving.../Deleting...)

### Edge Cases
- [ ] Try to save empty text (should be disabled)
- [ ] Test character limit (2000 chars)
- [ ] Test rapid clicks (should be prevented by loading state)
- [ ] Test editing immediately after posting
- [ ] Test deleting immediately after posting
- [ ] Navigate away while editing (should clean up state)

---

## Performance Considerations

### Optimizations
- **Local State**: Edit mode uses local state, no server calls until Save
- **Optimistic Updates**: UI updates before API confirmation
- **Debouncing**: Character counter updates instantly without API calls
- **Minimal Re-renders**: Only affected response re-renders, not entire list

### Potential Issues
- **Large Responses**: No pagination, could be slow with 100+ responses
- **Concurrent Edits**: No conflict resolution if response edited elsewhere
- **Network Latency**: Loading states help but could feel slow on bad connection

---

## Accessibility Notes

### Screen Readers
- Title attributes provide context for icon-only buttons
- Dialog has proper ARIA labels
- Focus management guides user through edit flow

### Keyboard Navigation
- Tab through edit/delete buttons
- Enter to activate buttons
- Escape to close dialog or cancel edit
- All interactive elements keyboard-accessible

### Visual Indicators
- Clear hover states for buttons
- Loading states prevent confusion
- High contrast for destructive actions (red delete)

---

Last Updated: October 10, 2025
