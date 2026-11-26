# LabSpace

**Sistem Monitoring Ketersediaan dan Reservasi Laboratorium Komputer Berbasis Web (Laravel)**  
Final Project — Pemrograman Web Berbasis Framework (Kelas D)

---

## Tentang Aplikasi

**LabSpace** memusatkan informasi jadwal ketersediaan ruang laboratorium komputer Teknik Informatika agar mahasiswa dapat mengecek kekosongan ruangan secara *real-time* sebelum datang ke lokasi, sekaligus mengajukan permohonan izin pemakaian ruang di luar jam praktikum reguler.

Bagi pihak pengelola (laboran), LabSpace menyediakan dashboard untuk mengatur master ruang lab, jadwal praktikum semesteran, memvalidasi permohonan reservasi mahasiswa (approve/reject), serta menerbitkan surat izin pemakaian lab dalam format PDF.

> Dokumen perencanaan lengkap juga tersedia di [`PERENCANAAN_FP.md`](./PERENCANAAN_FP.md).

---

## Anggota Kelompok & Pembagian Tugas

| No | Nama | NIM | Branch | Fokus & Modul CRUD |
|---|---|---|---|---|
| 1 | Farrel Athallah | L200250030 | `farrel/auth-labs` | Autentikasi multi-role, middleware akses, ERD/migrasi, **CRUD Ruang Lab (`labs`)** |
| 2 | Andrawina Farrel Ariyono | L200250012 | `andra/reservasi` | Form reservasi, validasi overlap jadwal (anti-bentrok), **CRUD Reservasi (`reservasis`)** |
| 3 | Dimas Satrio Wardhono | L200250052 | `dimas/jadwal-laboran` | Dashboard approval laboran, kalender ketersediaan, export PDF (`dompdf`), **CRUD Jadwal Praktikum (`jadwal_rutin`)** |

---

## Fitur Utama

- **Monitoring Ketersediaan Lab** — Timeline per ruang lab yang membedakan slot praktikum reguler, reservasi terpakai, dan slot tersedia.
- **Reservasi Workspace Online** — Pengajuan pemakaian ruang di luar jam kuliah beserta tujuan dan daftar anggota kelompok.
- **Validasi Anti-Bentrok** — Pengecekan otomatis overlap waktu terhadap jadwal praktikum rutin dan reservasi lain pada lab yang sama.
- **Manajemen Lab & Jadwal Rutin** — Pengelolaan data ruangan (`labs`) dan jadwal praktikum semesteran (`jadwal_rutin`) oleh laboran.
- **Verifikasi & Surat Izin PDF** — Persetujuan/penolakan oleh laboran disertai penerbitan e-tiket dan cetak bukti izin PDF.

---

## Stack Teknologi

- **Backend:** Laravel 13.44.1 (PHP ^8.3)
- **Frontend:** Blade + Tailwind CSS
- **Database:** MySQL / SQLite (dev)
- **PDF Export:** `barryvdh/laravel-dompdf`

---

## Setup Lokal (Untuk Anggota Tim)

```bash
git clone https://github.com/parrel17/labspace-ums.git
cd labspace-ums
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

Masuk ke branch tugas masing-masing sebelum mulai mengoding:

```bash
git checkout farrel/auth-labs        # Farrel
git checkout andra/reservasi         # Andra
git checkout dimas/jadwal-laboran    # Dimas
```
