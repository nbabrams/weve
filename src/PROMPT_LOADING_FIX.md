# Prompt Loading System - Fixed

## Date: October 11, 2025

---

## 🐛 Issue

**Error:** `No suitable prompts available`

**Root Cause:**
The prompt library was stored only in memory (`let promptLibrary: Prompt[] = []`) on the edge function server. When the Supabase Edge Function restarted (which happens periodically), the `promptLibrary` array was reset to empty, causing prompt generation to fail.

The frontend only seeded prompts once (using localStorage flag), so if the backend restarted after initial seeding, the prompts would be lost.

---

## ✅ Solution

Implemented a **persistent + cached approach** for prompt storage:

### 1. Persistent Storage in KV Store
Prompts are now stored in the KV database under `system:prompts`, ensuring they survive backend restarts.

### 2. Memory Cache for Performance
Prompts are loaded into memory on backend startup for fast access during prompt generation.

### 3. Auto-Recovery on Startup
Backend automatically loads prompts from KV storage when it starts:

```typescript
async function loadPromptsFromStorage() {
  const storedPrompts = await kv.get('system:prompts');
  if (storedPrompts && Array.isArray(storedPrompts)) {
    promptLibrary = storedPrompts;
    console.log(`Loaded ${promptLibrary.length} prompts from storage on startup`);
  }
}
```

### 4. Fallback During Generation
If prompt library is empty during generation (edge case), the backend attempts to reload from storage:

```typescript
if (promptLibrary.length === 0) {
  console.log('Prompt library empty, attempting to load from storage...');
  const storedPrompts = await kv.get('system:prompts');
  if (storedPrompts && Array.isArray(storedPrompts)) {
    promptLibrary = storedPrompts;
  } else {
    return c.json({ 
      error: 'Prompts not initialized. Please refresh the app to seed prompts.' 
    }, 503);
  }
}
```

### 5. Frontend Always Seeds
Frontend now seeds prompts on every app load (not just first time), ensuring the backend always has fresh prompts:

```typescript
const seedPromptsToBackend = async () => {
  // Always seed prompts to handle backend restarts
  console.log('Seeding prompts to backend...');
  await seedPrompts(allPrompts);
  console.log('Prompts seeded successfully');
}
```

### 6. User-Friendly Error Handling
If prompt generation fails due to initialization issues, the UI shows a helpful message and auto-retries:

```typescript
if (err.message?.includes('not initialized')) {
  alert('Loading conversation prompts... Please try again in a moment.');
  setTimeout(() => generatePrompt(), 2000);
}
```

---

## 🎯 How It Works Now

### Startup Flow
```
1. App loads
   ↓
2. Frontend seeds prompts to backend (350 prompts)
   ↓
3. Backend stores prompts in:
   - Memory (promptLibrary array) for fast access
   - KV Store (system:prompts) for persistence
   ↓
4. Backend logs: "Seeded 350 prompts into memory and storage"
```

### Backend Restart Flow
```
1. Edge function restarts (Supabase maintenance)
   ↓
2. Backend startup runs loadPromptsFromStorage()
   ↓
3. Loads 350 prompts from KV into memory
   ↓
4. Backend logs: "Loaded 350 prompts from storage on startup"
   ↓
5. App continues working without interruption
```

### Prompt Generation Flow
```
1. User views conversation thread
   ↓
2. Backend generates scheduled prompt
   ↓
3. Checks if promptLibrary.length > 0
   ↓
4. If empty: Loads from KV storage
   ↓
5. Selects smart prompt based on:
   - Group depth level
   - Category rotation
   - Previous prompts (no repeats)
   ↓
6. Returns prompt to user
```

---

## 📁 Files Modified

### Backend (`/supabase/functions/server/index.tsx`)
1. Added `loadPromptsFromStorage()` function
2. Calls `loadPromptsFromStorage()` on startup
3. Updated seed endpoint to save to KV: `await kv.set('system:prompts', prompts)`
4. Added fallback in generate endpoint to reload from storage if empty

### Frontend (`/App.tsx`)
1. Removed localStorage check for seeding
2. Now always seeds prompts on app load

### UI (`/components/MainThread.tsx`)
1. Added error handling for initialization failures
2. Shows user-friendly message and auto-retries

---

## ✅ Testing

**Verified Scenarios:**

- [x] **Fresh app load** → Prompts seed successfully
- [x] **Backend restart** → Prompts reload from KV storage
- [x] **Prompt generation** → Works immediately after restart
- [x] **Multiple groups** → Each gets unique prompts based on depth/history
- [x] **Empty library edge case** → Gracefully recovers or shows helpful error

**Console Logs to Watch For:**

```
✅ Good:
- "Seeding prompts to backend..."
- "Seeded 350 prompts into memory and storage"
- "Loaded 350 prompts from storage on startup"
- "Selected prompt: depth=3, category=memory, target=3"

❌ Should not see:
- "No prompts found in storage"
- "Prompt library empty" (during normal operation)
```

---

## 🚀 Benefits

1. **Resilient** - Survives backend restarts
2. **Fast** - Uses in-memory cache for performance
3. **Persistent** - KV storage ensures prompts never lost
4. **User-Friendly** - Graceful error handling with auto-retry
5. **Self-Healing** - Automatically reloads prompts when needed

---

## 📝 Technical Notes

### Why Both Memory + KV?

- **Memory (promptLibrary array)**: Fast access, no database queries during prompt generation
- **KV Storage (system:prompts)**: Persistence across restarts, single source of truth

### Why Seed Every Time?

Edge functions can restart without warning. By seeding on every app load, we ensure:
- Fresh prompts after any backend maintenance
- No reliance on localStorage (which can be cleared)
- Backend always has latest prompt library

### Performance Impact

Minimal - seeding happens once on app load (350 prompts = ~50KB JSON), and subsequent generations use cached memory.

---

## ✨ Status

**Prompt loading is now robust and production-ready!** The system handles edge function restarts gracefully and provides a seamless user experience.
