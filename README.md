# FitPR — Fitness Tracker & Personal Record Logger

A minimal, offline-first Progressive Web App (PWA) for tracking workouts, sets, reps, loads, and personal records. No account required. Optional cloud sync available.

![FitPR](https://img.shields.io/badge/PWA-ready-c8f542?style=flat-square) ![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square) ![Hosted on](https://img.shields.io/badge/hosted%20on-Cloudflare%20Pages-orange?style=flat-square)

---

## Features

### Workouts
- Create multiple workout tabs (Day 1, Push, Pull, Legs, etc.)
- Three sections per workout: **🔥 Warm-Up**, **💪 Exercises**, **❄️ Cool Down**
- Collapsible sections and exercises for a clean view
- Drag-to-reorder exercises within each section
- Duplicate workouts with one tap
- Editable workout titles inline

### Exercise Library
- 130+ exercises across 11 categories: Chest, Back, Shoulders, Legs, Arms, Core, Cardio, Warm-Up, Cool Down, Mobility, Conditioning
- Built-in form cues (3 coaching points per exercise)
- YouTube watch link on every exercise
- Full-text search — results jump to top instantly
- Add from library or create custom exercises

### Set Logging
- − / + steppers for reps and load (tap the number to type directly)
- Mark individual sets as complete with a checkmark
- Previous session comparison per set (↑↓ diff in green/red)
- Auto-advance to next exercise when all sets are done

### Personal Records (PRs)
- First session is always a baseline — no PRs recorded
- From the second session onwards: auto-detects best load, best reps, best volume
- 🏆 badge on sets that match or beat your PR
- Toast notification on new PRs
- PR History on the Stats dashboard (capped at 3, expandable with search)

### Commence Workout (Start Mode)
- Full-screen focused view — one exercise at a time
- Swipe left/right or tap Next/Back to navigate exercises
- Live session timer in the header
- Progress bar across the top
- End Session Early prompt with Log or Discard options
- Completion screen with total workout time

### Session Timer
- Starts when you tap Start or Log
- Persists across tab switches and app backgrounding (anchored to wall clock)
- Live timer pill in header — tap it to return to your active session
- Timer stops only when session is logged or discarded

### Stats Dashboard
- Weekly session ring (Mon–Sun reset) with day bar strip
- Editable weekly goal (set in Settings)
- 4 progression cards: Sessions ↑↓, Volume ↑↓, PR This Month, Goal Streak 🔥
- Recent activity feed (last 6 sessions with duration)
- Workout list with session count badges
- PR History with search

### Backup
- **Cloud Sync** (optional) — sign in to auto-sync data to the cloud after every change
- **Manual Backup** — download a timestamped `.json` file to your device
- Scheduled backup reminders (when not using cloud sync)
- Restore from a `.json` backup file
- Backup status indicator (green/amber/red) in the header

### Settings
- Weekly session goal
- Clear sessions per workout or all at once
- Clear all PRs
- Cloud Sync — sign in / sign out
- Backup controls
- Replay Onboarding
- Star on GitHub, Submit Feedback, Privacy Policy
- Version info

### PWA
- Installable to home screen (iOS, Android, desktop)
- Offline support via service worker (cache-first)
- All data stored in `localStorage` — nothing sent anywhere without your consent
- iOS safe area support for Dynamic Island / notch

---

## Getting Started

### Option 1 — Cloudflare Pages (live)

The app is live at **[fitpr.pages.dev](https://fitpr.pages.dev)**

### Option 2 — Deploy your own

1. Fork this repository
2. Connect to [Cloudflare Pages](https://pages.cloudflare.com) → Create project → Connect to Git
3. Build settings: leave all blank (no build command, no output directory)
4. Add environment variables (for cloud sync):
   - `SUPABASE_URL` — your Supabase project URL
   - `SUPABASE_ANON` — your Supabase anon public key
5. Deploy

### Option 3 — Open locally

1. Download `index.html`
2. Open in Chrome or Edge
3. Works fully offline — localStorage and all features available
4. Note: the service worker requires `localhost` or HTTPS

---

## Installing as a PWA

### iOS (Safari)
1. Open the app in Safari
2. Tap the **Share** button
3. Tap **Add to Home Screen**
4. Tap **Add**

### Android (Chrome)
1. Open the app in Chrome
2. Tap the three-dot menu (⋮)
3. Tap **Add to Home Screen** or **Install App**

### Desktop (Chrome / Edge)
1. Open the app
2. Click the install icon in the address bar
3. Click **Install**

---

## Cloud Sync

Cloud sync is optional. Without an account, all data stays on your device.

To enable cloud sync:
1. Open the app → **Settings → Cloud Sync**
2. Tap **Create Account** — enter your email and a password
3. You're signed in — data syncs automatically after every change
4. Sign in on any other device with the same credentials to restore your data

Cloud sync is powered by [Supabase](https://supabase.com) with Row Level Security — only you can access your own data.

---

## Data & Privacy

| | Local Only | With Cloud Sync |
|---|---|---|
| Data collected | None | Email + workout data |
| Data leaves device | No | Yes — synced to Supabase |
| Account required | No | Yes |
| Third-party access | No | Supabase (your data only) |

See the full [Privacy Policy](PRIVACY.md) for details.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 (via CDN, no build step) |
| Transpiler | Babel Standalone |
| Styling | Inline styles (no CSS framework) |
| Storage | `localStorage` |
| Cloud sync | Supabase (optional) |
| Offline | Service Worker (cache-first) |
| Hosting | Cloudflare Pages |
| Font | DM Mono (Google Fonts) |

---

## Project Structure

```
fitpr/
├── index.html              # Entire application (single file)
├── auth-callback.html      # Magic link auth callback page
├── favicon.svg             # App icon
├── functions/
│   └── supabase-config.js  # Cloudflare Pages Function (injects env vars)
├── README.md               # This file
├── PRIVACY.md              # Privacy policy
├── LICENSE                 # MIT License
└── .gitignore
```

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## License

[MIT](LICENSE) — Copyright (c) 2025 tinq777
