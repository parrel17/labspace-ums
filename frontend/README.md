# LabSpace TI — Frontend

Frontend interface for **LabSpace TI UMS** (Computer Laboratory Availability Monitoring & Reservation System, Building J · Informatics Engineering, FKI UMS).

- **Live Preview:** https://labspaceti.web.id/labspace/
- **Backend / Laravel Repo:** https://github.com/parrel17/labspace-ums

## Key Features

- **Landing & Service Desk:** Building J lab overview, usage guidelines, Kampus II Pabelan map, and FAQ accordion.
- **Dedicated Auth Routes:** Split-layout `/login` and `/register` views with UMS email validation and role-based routing.
- **Lab Availability Workspace:** Segmented per-room tabs (`J.2.1`–`J.2.4`), All Rooms Matrix table, room photography, and 8-point hardware/software specifications.
- **Anti-Clash Reservation & Verification:** Slot conflict detection, student booking manager, and Lab Admin verification console.
- **QR E-Ticket & Permit PDF:** Digital permit with single-page A4 print layout (`window.print()`).
- **Account Settings & Bilingual UI:** Profile/security/preferences modal with EN/ID switching and Light/Dark theme.

## Structure

- `index.html` — SPA entry markup and views
- `styles.css` — Design tokens, layout, responsive rules, and A4 print styles
- `app.js` — Client-side state, routing, i18n, anti-clash engine, and UI rendering
- `assets/` — Brand logo (`logo-ls.png`) and Building J lab photography (`labs/j21.webp`–`j24.webp`)
- `qrcode.min.js` — Client-side QR generator for e-tickets
