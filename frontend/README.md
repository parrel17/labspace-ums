# LabSpace TI — Frontend

Frontend interface for **LabSpace TI UMS** (Computer Laboratory Availability Monitoring & Reservation System, Building J · Informatics Engineering, FKI UMS).

- **Live Preview:** https://labspaceti.web.id/labspace/
- **Main Repository:** https://github.com/parrel17/labspace-ums

## Run Locally (`localhost`)

Works out of the box with zero build steps or `npm install`:

### Option 1 — Local SPA Server (Recommended, supports `/login`, `/register`, `/schedule` refresh)
```bash
cd frontend
npm run dev
# Opens at http://127.0.0.1:3000
```

### Option 2 — VS Code / Antigravity Live Server
1. Clone this repository.
2. Right-click `frontend/index.html` and choose **Open with Live Server**.

### Option 3 — Python / PHP Built-in Server
```bash
python3 -m http.server 3000 -d frontend
# or
php -S 127.0.0.1:3000 -t frontend
```

## Key Features

- **Landing & Service Desk:** Building J lab overview, usage guidelines, Kampus II Pabelan map, and FAQ accordion.
- **Dedicated Auth Routes:** Split-layout `/login` and `/register` views with UMS email validation and role-based routing.
- **Lab Availability Workspace:** Segmented per-room tabs (`J.2.1`–`J.2.4`), All Rooms Matrix table, room photography, and 8-point hardware/software specifications.
- **Anti-Clash Reservation & Verification:** Slot conflict detection, student booking manager, and Lab Admin verification console.
- **QR E-Ticket & Permit PDF:** Digital permit with single-page A4 print layout (`window.print()`).
- **Account Settings & Bilingual UI:** Profile/security/preferences modal with EN/ID switching and Light/Dark theme.
