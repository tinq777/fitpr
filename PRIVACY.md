# Privacy Policy

**Last updated: June 2025**

---

## Overview

FitPR is a privacy-first fitness tracking application. This policy explains how your data is handled — both locally on your device and, if you choose to enable it, via optional cloud sync.

**Short version: your data stays on your device by default. Cloud sync is optional and requires you to create an account.**

---

## Two Modes of Use

### Local Only (default — no account required)
All data is stored exclusively in your browser's `localStorage`. Nothing is transmitted to any server. No account is needed.

### Cloud Sync (optional)
If you choose to sign in, your workout data is synced to a secure cloud database hosted by Supabase. This requires creating an account with an email address and password.

---

## Data We Collect

### Without an account
**None.** No data is collected, transmitted, or stored on any server.

### With cloud sync enabled
When you create an account and enable cloud sync, we store:

| Data | Purpose |
|---|---|
| Email address | Account identification |
| Encrypted password | Authentication (handled by Supabase) |
| Workout data | Cloud backup and sync across devices |
| PR history | Cloud backup and sync across devices |
| Weekly goal setting | Cloud backup and sync across devices |
| Sync timestamps | To track when data was last synced |

We do **not** collect:
- Location data
- Health or biometric data beyond what you manually enter
- Device identifiers
- Usage analytics or tracking
- Advertising data

---

## Where Your Data Lives

### Local storage
All data is stored in your browser's `localStorage` under the key `fitpr_v1`. Backup metadata is stored under `fitpr_backup_meta`.

### Cloud storage (if signed in)
Data is stored in a Supabase PostgreSQL database hosted on AWS infrastructure. Your data is protected by **Row Level Security** — meaning only you can ever read or write your own data, even with database-level access.

Cloud data is stored in the `workouts` table and associated exclusively with your user account via a unique user ID.

---

## Third-Party Services

| Service | Purpose | Privacy Policy |
|---|---|---|
| Supabase | Authentication and cloud database | [supabase.com/privacy](https://supabase.com/privacy) |
| Cloudflare Pages | App hosting and delivery | [cloudflare.com/privacypolicy](https://www.cloudflare.com/privacypolicy/) |
| cdnjs / jsDelivr | CDN for React, Babel, Supabase libraries | Standard CDN request logs |
| Google Fonts | DM Mono typography | [policies.google.com/privacy](https://policies.google.com/privacy) |

CDN requests are standard browser fetches and include your IP address as part of normal HTTP operation. No personal data from FitPR is passed to CDN providers.

YouTube links in the exercise library open in a new tab. YouTube's own privacy policy applies to any interactions there.

---

## Authentication

Account authentication is handled entirely by Supabase Auth. FitPR never sees or stores your password — it is hashed and managed exclusively by Supabase.

Sessions persist in your browser's `localStorage` so you remain signed in across app restarts. You can sign out at any time from **Settings → Cloud Sync**.

---

## Cookies

FitPR does not use cookies. Supabase stores your session token in `localStorage`, not as a cookie.

---

## Local Storage Keys

| Key | Contents |
|---|---|
| `fitpr_v1` | Workouts, sessions, exercises, sets, PR records |
| `fitpr_backup_meta` | Backup settings and last backup timestamp |
| `fitpr_session_ts` | Active session timer start timestamp |
| `fitpr_session_wid` | Active session workout ID |
| `fitpr_last_sync` | Last cloud sync timestamp |
| `sb-*-auth-token` | Supabase session token (if signed in) |

You can clear all local data at any time via:
- **Settings → Sessions → Clear All Sessions**
- **Settings → Personal Records → Clear All PRs**
- Your browser settings → Site data → Clear data for this site

---

## Data Deletion

### Local data
Cleared immediately when you use the clear options in Settings, or when you clear browser site data.

### Cloud data (if signed in)
To delete your cloud data, sign out from **Settings → Cloud Sync** and contact us via [GitHub Issues](https://github.com/tinq777/fitpr/issues) to request full account and data deletion. We will process deletion requests within 30 days.

---

## Manual Backup

The manual backup feature downloads a `.json` file to your device. This file is saved locally — not to any cloud service controlled by FitPR. You are responsible for the security of your backup files.

---

## Children's Privacy

FitPR does not knowingly collect data from children under the age of 13. If cloud sync is used, it requires creating an account, which is not intended for children under 13.

---

## Changes to This Policy

If this privacy policy changes, the updated version will be published in this repository with an updated date. Significant changes affecting how your data is stored or processed will be noted in the app.

---

## Contact

FitPR is an open-source project. Questions or data requests can be submitted via [GitHub Issues](https://github.com/tinq777/fitpr/issues).

---

## Summary

| Question | Local Only | With Cloud Sync |
|---|---|---|
| Data collected? | None | Email + workout data |
| Data leaves device? | No | Yes — synced to Supabase |
| Account required? | No | Yes |
| Third-party access? | No | Supabase (your data only) |
| Cookies used? | No | No |
| Source code open? | Yes — MIT licensed | Yes — MIT licensed |
