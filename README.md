# LabSpace

**Cek ketersediaan ruang lab sebelum berangkat, bukan setelah pintu terkunci.**  
LabSpace adalah sistem monitoring ketersediaan dan reservasi *workspace* laboratorium komputer Program Studi Teknik Informatika UMS berbasis **Laravel**. Aplikasi memusatkan jadwal praktikum reguler dan peminjaman mandiri mahasiswa dalam satu sistem, mencegah bentrok waktu secara otomatis, dan menerbitkan surat izin pemakaian lab (e-tiket PDF) yang tervalidasi laboran.

- **Status Proyek:** Tahap Inisialisasi & Perencanaan (*Final Project — Pemrograman Web Berbasis Framework, Kelas D*)
- **Dokumen Perencanaan:** [`PERENCANAAN_FP.md`](./PERENCANAAN_FP.md)
- **Framework:** Laravel `13.44.1` (PHP `^8.3`), Blade + Tailwind CSS, MySQL / SQLite

---

## Contents

- [The Problem](#the-problem)
- [How LabSpace Works](#how-labspace-works)
- [The Two Surfaces](#the-two-surfaces)
- [Core Logic & Anti-Bentrok](#core-logic--anti-bentrok)
- [Database Schema (ERD Plan)](#database-schema-erd-plan)
- [Architecture](#architecture)
- [Repository Layout](#repository-layout)
- [Team & Task Breakdown](#team--task-breakdown)
- [Quick Start](#quick-start)
- [Git Workflow Tim](#git-workflow-tim)
- [Security & Credentials](#security--credentials)

---

## The Problem

Pemanfaatan fasilitas laboratorium komputer (seperti Lab RPL, Lab Jaringan, dan Lab Multimedia di Gedung J FKI) di luar jam kuliah reguler masih berjalan **reaktif dan manual**:

- **Tanpa visibilitas jadwal terpusat:** Mahasiswa yang membutuhkan PC spesifikasi tinggi atau *environment* lab untuk riset, tugas akhir, maupun proyek kelompok harus datang langsung ke gedung untuk memastikan ruangan kosong. Sering kali ruangan ternyata sedang dipakai sesi praktikum atau terkunci tanpa keterangan.
- **Perizinan manual & rawan bentrok:** Permintaan izin pemakaian ruang kepada laboran masih dilakukan secara lisan atau pesan pribadi, sehingga berisiko bertabrakan dengan jadwal praktikum kelas lain atau agenda perawatan (*maintenance*) perangkat.
- **Minim jejak administrasi:** Riwayat siapa yang memakai lab pada jam tertentu dan bukti izin resminya belum terdokumentasi dalam satu sistem terpadu.

---

## How LabSpace Works

Satu alur siklus peminjaman ruang lab yang terstruktur dari pengecekan sampai penerbitan izin:

| Tahap | Proses yang Terjadi | Aktor |
|---|---|---|
| **1. Cek Ketersediaan** | Mahasiswa membuka timeline harian per lab (`J.2.1`, `J.2.4`, `J.3.2`). Sistem memetakan slot **Praktikum Reguler**, **Reservasi Terisi**, dan **Slot Kosong** secara *real-time*. | Mahasiswa |
| **2. Ajukan Workspace** | Mahasiswa memilih slot kosong, mengisi tanggal, rentang jam (`jam_mulai`–`jam_selesai`), keperluan, dan daftar anggota kelompok (maks. 3 mahasiswa). | Mahasiswa |
| **3. Validasi Anti-Bentrok** | Backend Laravel menjalankan *overlap query* terhadap `jadwal_rutin` dan `reservasis` yang sudah disetujui/menunggu pada `lab_id` dan tanggal yang sama. Jika bertabrakan, pengajuan langsung ditolak sebelum masuk database. | Sistem (Laravel) |
| **4. Verifikasi Laboran** | Pengajuan yang lolos validasi masuk antrean berstatus `pending`. Laboran meninjau keperluan di dashboard, lalu memilih **Approve** atau **Reject** beserta catatan. | Laboran |
| **5. Terbit E-Tiket PDF** | Pengajuan yang disetujui otomatis menghasilkan tiket izin resmi beserta file PDF (`barryvdh/laravel-dompdf`) yang dapat diunduh dan ditunjukkan ke laboran saat membuka ruangan. | Mahasiswa & Laboran |
| **6. Rekap & Evaluasi** | Seluruh aktivitas reservasi tercatat sebagai histori pemakaian lab per bulan untuk bahan evaluasi pengelola. | Laboran |

---

## The Two Surfaces

Aplikasi memisahkan pengalaman antarmuka berdasarkan peran (*role-based access control* via Laravel Middleware):

### 1. Portal Mahasiswa (`role: mahasiswa`)

| Halaman / Route (Rencana) | Fungsi |
|---|---|
| **Monitoring Live** (`/`) | Timeline ketersediaan seluruh ruang lab hari ini / tanggal tertentu dengan indikator status berwarna (Praktikum, Ter-reservasi, Tersedia). |
| **Detail Ruang Lab** (`/labs/{id}`) | Informasi spesifikasi PC, kapasitas kursi, software terpasang, dan jadwal mingguan lab terkait. |
| **Form Pengajuan** (`/reservasi/create`) | Pengajuan pemakaian ruang di luar jam praktikum lengkap dengan pengecekan ketersediaan otomatis. |
| **Riwayat & Tiket Saya** (`/reservasi`) | Daftar pengajuan pribadi (`pending`, `approved`, `rejected`), ubah/batalkan pengajuan yang masih `pending`, dan tombol unduh **Surat Izin PDF**. |

### 2. Console Laboran (`role: laboran`)

| Halaman / Route (Rencana) | Fungsi |
|---|---|
| **Dashboard Ringkasan** (`/admin`) | Jumlah pengajuan menunggu verifikasi, jadwal lab aktif hari ini, dan statistik pemakaian ruang. |
| **Verifikasi Pengajuan** (`/admin/verifikasi`) | Daftar permintaan masuk dengan aksi **Setujui / Tolak** serta kolom catatan alasan untuk mahasiswa. |
| **Master Ruang Lab** (`/admin/labs`) | Modul **CRUD** pengelolaan daftar ruangan lab (kode ruangan, nama, kapasitas PC, spesifikasi). |
| **Jadwal Praktikum Rutin** (`/admin/jadwal-rutin`) | Modul **CRUD** jadwal praktikum semesteran (mata kuliah, kelas, hari, jam) yang otomatis memblokir slot di kalender publik. |
| **Rekap Pemanfaatan** (`/admin/laporan`) | Laporan riwayat penggunaan lab per rentang tanggal. |

---

## Core Logic & Anti-Bentrok

Validasi inti aplikasi berada pada layer Controller/Service saat mahasiswa mengirimkan permohonan reservasi baru. Sistem memastikan tidak ada irisan waktu (*time window overlap*) dengan dua sumber kebenaran:

1. **Jadwal Praktikum Rutin (`jadwal_rutin`)** — mencocokkan hari dari tanggal pengajuan dengan jadwal praktikum tetap pada `lab_id` terkait.
2. **Reservasi Lain (`reservasis`)** — mengecek pengajuan lain pada tanggal dan `lab_id` yang sama yang berstatus `approved` atau `pending`.

Logika irisan interval dua rentang waktu $[A_{start}, A_{end}]$ dan $[B_{start}, B_{end}]$ terjadi apabila:

```text
Existing.jam_mulai < Request.jam_selesai  AND  Existing.jam_selesai > Request.jam_mulai
```

Jika kondisi terpenuhi pada salah satu tabel, sistem membatalkan penyimpanan dan mengembalikan pesan error spesifik beserta jam bentroknya.

---

## Database Schema (ERD Plan)

Aplikasi dirancang di atas 4 tabel relasional utama:

```text
  users (1) ──────────< (N) reservasis (N) >────────── (1) labs (1) ──────────< (N) jadwal_rutin
```

| Tabel | Kolom Utama | Keterangan |
|---|---|---|
| `users` | `id`, `name`, `nim`, `email`, `password`, `role` (`mahasiswa` / `laboran`) | Autentikasi & hak akses berbasis role. |
| `labs` | `id`, `kode_lab`, `nama_lab`, `kapasitas_pc`, `spesifikasi` | Master data ruangan lab (CRUD oleh Farrel). |
| `jadwal_rutin` | `id`, `lab_id` (FK), `kelas`, `mata_kuliah`, `hari`, `jam_mulai`, `jam_selesai` | Jadwal praktikum reguler per semester (CRUD oleh Dimas). |
| `reservasis` | `id`, `user_id` (FK), `lab_id` (FK), `tanggal`, `jam_mulai`, `jam_selesai`, `keperluan`, `anggota`, `status`, `catatan_laboran` | Data pengajuan pemakaian lab (CRUD oleh Andra). |

---

## Architecture

```text
┌─────────────────────────────────────────────────────────────────────┐
│ BROWSER / CLIENT                                                    │
│   Portal Mahasiswa (Timeline, Booking, Tiket PDF)                   │
│   Console Laboran  (Master Lab, Jadwal Rutin, Approval Queue)       │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ HTTP / Form Request + CSRF
┌───────────────────────────────▼─────────────────────────────────────┐
│ LARAVEL 13 BACKEND (PHP ^8.3)                                       │
│   • Routes & Middleware  · auth, role:mahasiswa, role:laboran       │
│   • Controllers          · LabController, JadwalController,         │
│                            ReservasiController, ApprovalController  │
│   • Business Rules       · Overlap schedule & slot conflict check   │
│   • Eloquent ORM         · Models (User, Lab, JadwalRutin,          │
│                            Reservasi)                               │
│   • PDF Generator        · barryvdh/laravel-dompdf (Surat Izin)     │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ PDO / Eloquent
┌───────────────────────────────▼─────────────────────────────────────┐
│ RELATIONAL DATABASE                                                 │
│   MySQL / MariaDB (Production)  |  SQLite (Local Development)       │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Repository Layout

Struktur proyek Laravel saat ini (tahap inisialisasi awal):

```text
labspace-ums/
├── app/
│   ├── Http/Controllers/      # Controller per modul (Lab, Reservasi, Jadwal, Auth)
│   └── Models/                # Eloquent Models (User, Lab, JadwalRutin, Reservasi)
├── bootstrap/
├── config/
├── database/
│   ├── factories/
│   ├── migrations/            # Skema tabel & relasi database
│   └── seeders/               # Data awal ruangan lab & akun uji coba
├── public/
├── resources/
│   ├── css/                   # Tailwind CSS entry
│   ├── js/
│   └── views/                 # Blade templates (layouts, mahasiswa, laboran, pdf)
├── routes/
│   └── web.php                # Routing aplikasi web
├── tests/                     # Feature & Unit tests (PHPUnit)
├── .env.example               # Template environment variables
├── composer.json              # PHP dependencies
└── PERENCANAAN_FP.md          # Dokumen perencanaan & task breakdown resmi
```

---

## Team & Task Breakdown

Setiap anggota kelompok bertanggung jawab penuh atas minimal **1 modul CRUD lengkap** (*Create, Read, Update, Delete*) di Laravel serta pengembangan pada branch kerjanya masing-masing:

| No | Nama Lengkap | NIM | Branch | Tanggung Jawab & Modul CRUD |
|---|---|---|---|---|
| 1 | **Farrel Athallah** | `L200250030` | `farrel/auth-labs` | Perancangan ERD & migrasi database awal, sistem autentikasi & role middleware (`mahasiswa` vs `laboran`), serta **CRUD Master Ruang Lab (`labs`)**. |
| 2 | **Andrawina Farrel Ariyono** | `L200250012` | `andra/reservasi` | Form pengajuan reservasi workspace, logika validasi anti-bentrok (*overlap query*), serta **CRUD Pengajuan Reservasi (`reservasis`)** oleh mahasiswa. |
| 3 | **Dimas Satrio Wardhono** | `L200250052` | `dimas/jadwal-laboran` | Tampilan timeline ketersediaan lab, dashboard verifikasi laboran (approve/reject), export surat izin PDF (`dompdf`), serta **CRUD Jadwal Praktikum Rutin (`jadwal_rutin`)**. |

---

## Quick Start

**Prasyarat:** PHP `8.2+` (disarankan `8.3`), Composer, Node.js & npm, serta MySQL/MariaDB (via Laragon/XAMPP) atau SQLite.

```bash
# 1. Clone repository
git clone https://github.com/parrel17/labspace-ums.git
cd labspace-ums

# 2. Install dependensi PHP & JavaScript
composer install
npm install

# 3. Setup environment & app key
cp .env.example .env
php artisan key:generate

# 4. Konfigurasi database di .env, lalu jalankan migrasi
php artisan migrate

# 5. Jalankan development server
php artisan serve
# Di terminal terpisah (jika compile asset Vite):
npm run dev
```

Aplikasi berjalan di `http://127.0.0.1:8000`.

---

## Git Workflow Tim

Untuk menghindari konflik kode antar anggota:

```bash
# 1. Masuk ke branch tugas masing-masing (jangan langsung di main)
git checkout farrel/auth-labs        # Farrel
git checkout andra/reservasi         # Andra
git checkout dimas/jadwal-laboran    # Dimas

# 2. Ambil update terbaru dari main sebelum mulai ngoding
git pull origin main

# 3. Setelah selesai mengerjakan fitur, commit & push ke branch sendiri
git add .
git commit -m "feat: deskripsi singkat perubahan"
git push origin <nama-branch-kamu>

# 4. Buka GitHub -> Compare & Pull Request ke branch `main` untuk direview bersama
```

---

## Security & Credentials

Repository ini bersifat **public** untuk keperluan monitoring perkuliahan:

- File **`.env`** dan seluruh kredensial database lokal sudah masuk ke `.gitignore` dan **tidak pernah di-commit** ke GitHub. Gunakan `.env.example` sebagai acuan konfigurasi.
- Direktori `vendor/` dan `node_modules/` tidak disertakan di Git; jalankan `composer install` dan `npm install` setelah clone.
- Autentikasi pengguna menggunakan *hashing* Bcrypt bawaan Laravel serta proteksi CSRF pada setiap form request.
