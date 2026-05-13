# Privacy Policy

**Last updated: May 2025**

## Overview

FitPR is a privacy-first fitness tracking application. We take your privacy seriously, and this policy explains exactly how your data is handled.

**Short version: all your data stays on your device. We collect nothing.**

---

## Data We Collect

**None.**

FitPR does not collect, transmit, store, or share any personal data, usage data, analytics, or identifiers of any kind.

---

## Where Your Data Lives

All data you enter into FitPR — including workouts, exercises, sets, reps, loads, session history, and personal records — is stored exclusively in your browser's `localStorage` on your device.

This means:

- Your data never leaves your device
- No account or sign-up is required
- No server ever receives your data
- No third party ever has access to your data

---

## Third-Party Services

FitPR loads the following resources from third-party CDNs on first load:

| Resource | Provider | Purpose |
|---|---|---|
| React 18 | cdnjs.cloudflare.com | UI framework |
| Babel Standalone | cdnjs.cloudflare.com | JSX transpilation |
| DM Mono font | fonts.googleapis.com | Typography |

These requests are standard CDN fetches and do not include any personal data from FitPR. After the first load, the service worker caches these resources so the app works fully offline without further network requests.

The YouTube "Watch" links in the exercise library open YouTube in a new tab. YouTube's own privacy policy applies to any interactions you have there. FitPR does not pass any user data to YouTube.

---

## Cookies

FitPR does not use cookies.

---

## Local Storage

FitPR uses two `localStorage` keys:

| Key | Contents |
|---|---|
| `fitpr_v1` | Your workouts, sessions, exercises, sets, and PR records |
| `fitpr_backup_meta` | Your backup settings and last backup timestamp |

You can clear this data at any time by:
- Going to your browser settings → Site data → Clear data for this site
- Or using your browser's developer tools → Application → Local Storage

---

## Backups

When you tap **Backup Now**, FitPR generates a `.json` file and triggers a standard browser download to your device. This file is saved locally on your device — not to any cloud service or server controlled by FitPR. You are responsible for the security of your backup files.

---

## Children's Privacy

FitPR does not knowingly collect data from anyone, including children under the age of 13, because it does not collect data from anyone at all.

---

## Changes to This Policy

If this privacy policy changes, the updated version will be published in this repository with an updated date. Since FitPR collects no data, changes are unlikely to affect your privacy in any meaningful way.

---

## Contact

FitPR is an open-source project. If you have questions about this privacy policy, please open an issue on the [GitHub repository](https://github.com/yourusername/fitpr).

---

## Summary

| Question | Answer |
|---|---|
| Do you collect personal data? | No |
| Do you use analytics? | No |
| Do you use cookies? | No |
| Does data leave my device? | No |
| Do I need an account? | No |
| Is the source code open? | Yes — MIT licensed |
