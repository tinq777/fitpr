# FitPR — Fitness Tracker & Personal Record Logger

A minimal, offline-first Progressive Web App (PWA) for tracking workouts, sets, reps, loads, and personal records. No account required. No data leaves your device.

![FitPR](https://img.shields.io/badge/PWA-ready-c8f542?style=flat-square) ![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

---

## Features

### Workouts
- Create multiple workout tabs (Day 1, Push, Pull, etc.)
- Editable workout titles
- Three sections per workout: **Warm-Up**, **Exercises**, **Cool Down**
- Add exercises from a built-in library (130+ exercises across 11 categories) or create custom ones
- − / + steppers for reps and load (1kg increments)
- Mark individual sets as complete with a checkmark
- Previous session comparison per set (shows reps/load diff vs last time)
- Delete confirmation modal to prevent accidental removal

### Exercise Library
- 11 categories: Chest, Back, Shoulders, Legs, Arms, Core, Cardio, Warm-Up, Cool Down, Mobility, Conditioning
- Built-in form cues for every exercise (3 coaching points each)
- YouTube watch link on every exercise for video reference
- Full-text search across all categories

### Personal Records (PRs)
- Automatic PR detection when logging a session
- Tracks best load, best reps, and best volume per exercise
- 🏆 badge on sets that match or beat your current PR
- Toast notification when new PRs are set
- PR History on the Stats dashboard (capped at 3, expandable with search)

### Stats Dashboard
- Weekly session ring with day-by-day activity bars (Mon–Sun)
- Editable weekly goal (1–14 sessions)
- Total workouts, volume (kg), exercises, and sets
- Recent activity feed
- Workout list with session count badges

### Session Logging
- Log Session button per workout with flash confirmation
- Session history log per workout (collapsible, deletable)
- "Last completed X ago" banner

### Swipe Navigation
- Swipe left/right between tabs on mobile
- Slide animation in the correct direction
- Dot indicator showing current tab position

### Backup
- Manual and scheduled backup reminders (daily / every 3 days / weekly / every 2 weeks)
- Downloads a timestamped `.json` file to your device
- Backup status indicator (green / amber / red) in the header
- Save location guidance for iOS, Android, and desktop

### PWA
- Installable to home screen (iOS, Android, desktop)
- Offline support via service worker (cache-first strategy)
- All data stored in `localStorage` — nothing sent to any server

---

## Getting Started

### Option 1 — GitHub Pages (recommended)

1. Fork this repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your app will be live at `https://tinq777.github.io/fitpr`

### Option 2 — Open locally

1. Download `index.html`
2. Open it in Chrome or Edge
3. localStorage and the app will work immediately
4. Note: the service worker requires `localhost` or HTTPS — it will be skipped on `file://` URLs, but the app still works fully

### Option 3 — Any static host

Upload `index.html` to Netlify, Vercel, Cloudflare Pages, or any static host. No build step required.

---

## Installing as a PWA

### iOS (Safari)
1. Open the app in Safari
2. Tap the **Share** button
3. Tap **Add to Home Screen**
4. Tap **Add**

### Android (Chrome)
1. Open the app in Chrome
2. Tap the three-dot menu
3. Tap **Add to Home Screen** or **Install App**

### Desktop (Chrome / Edge)
1. Open the app
2. Click the install icon in the address bar (or via the three-dot menu)

---

## Data & Privacy

All data is stored exclusively in your browser's `localStorage`. No data is collected, transmitted, or stored on any server. See [PRIVACY.md](PRIVACY.md) for full details.

---

## Backup & Restore

### Backup
Tap the **download icon** in the top-right header → **Backup Now**. A `.json` file (e.g. `fitpr-backup-2025-05-14.json`) is saved to your device's Downloads folder.

### Restore
To restore from a backup, the app currently requires manually importing the `.json` file. A future version may include a one-tap restore button.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 (via CDN, no build step) |
| Transpiler | Babel Standalone |
| Styling | Inline styles (no CSS framework) |
| Storage | `localStorage` |
| Offline | Service Worker (cache-first) |
| Font | DM Mono (Google Fonts) |

---

## Project Structure

```
fitpr/
├── index.html        # Entire application (single file)
├── LICENSE           # MIT License
├── PRIVACY.md        # Privacy policy
└── README.md         # This file
```

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## License

[MIT](LICENSE)
