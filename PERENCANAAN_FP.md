# PERENCANAAN FINAL PROJECT — PEMROGRAMAN WEB BERBASIS FRAMEWORK
**Kelas D • Semester Gasal 2026/2027**

---

## 1. Deskripsi Project

### Judul
**LabSpace — Sistem Monitoring Ketersediaan dan Reservasi Laboratorium Komputer Berbasis Web (Laravel)**

### Anggota Kelompok
| No | Nama Lengkap | NIM |
|---|---|---|
| 1 | Farrel Athallah | L200250030 |
| 2 | Andrawina Farrel Ariyono | L200250012 |
| 3 | Dimas Satrio Wardhono | L200250052 |

### Deskripsi Aplikasi
LabSpace adalah aplikasi web berbasis framework Laravel yang menyediakan informasi ketersediaan ruang laboratorium komputer di lingkungan program studi Teknik Informatika secara terpusat dan real-time. Aplikasi memungkinkan mahasiswa melihat jadwal kekosongan lab sebelum datang ke lokasi, mengajukan izin penggunaan lab secara online untuk keperluan tugas / riset / proyek kelompok di luar jam praktikum reguler, dan menerima e-tiket izin setelah pengajuan divalidasi laboran. Di sisi lain, laboran mendapatkan dashboard untuk mengelola data lab, mengelola jadwal praktikum rutin, menyetujui atau menolak permohonan reservasi, serta memantau riwayat pemanfaatan ruangan.

### Tujuan Pengembangan
1. Menghapus pemborosan waktu mahasiswa yang datang ke lab namun mendapati ruangan terkunci atau sedang terpakai praktikum.
2. Menyediakan informasi jadwal ketersediaan lab yang transparan dan terpusat.
3. Mendigitalkan proses perizinan penggunaan lab yang sebelumnya manual (datangi laboran langsung).
4. Mencegah bentrok jadwal antara praktikum reguler dan penggunaan lab mandiri melalui validasi otomatis di sisi aplikasi.
5. Menyediakan data rekap pemanfaatan ruang lab bagi laboran.

### Fitur Utama
1. Autentikasi multi-role (mahasiswa & laboran) dengan middleware.
2. Monitoring ketersediaan lab — timeline per lab dengan status tiap rentang jam (praktikum / ter-reservasi / tersedia).
3. Pengajuan reservasi workspace — form izin penggunaan lab (lab, tanggal, jam mulai–selesai, keperluan, anggota).
4. Validasi anti-bentrok otomatis — query Eloquent memeriksa overlap rentang waktu terhadap jadwal praktikum dan reservasi lain.
5. CRUD manajemen ruang lab (laboran).
6. CRUD jadwal praktikum rutin semesteran (laboran).
7. Verifikasi pengajuan (approve / reject) oleh laboran beserta catatan.
8. E-tiket izin pemakaian lab + cetak surat izin PDF (library `barryvdh/laravel-dompdf`).
9. Riwayat reservasi per mahasiswa dan rekap pemanfaatan lab untuk laboran.

---

## 2. Task Breakdown (Pembagian Tugas)

| No | Nama | NIM | Modul / Fitur | Deskripsi Pekerjaan |
|---|---|---|---|---|
| 1 | Farrel Athallah | L200250030 | **Autentikasi, Multi-Role & CRUD Ruang Lab** | Membangun sistem login/register/logout, kolom `role` pada tabel `users`, middleware pembatas akses mahasiswa vs laboran, serta modul **CRUD master data ruang lab** (create, read, update, delete: kode lab, nama, kapasitas, spesifikasi). Merancang ERD dan seluruh migrasi database awal proyek. |
| 2 | Andrawina Farrel Ariyono | L200250012 | **Reservasi & Logika Anti-Bentrok + CRUD Reservasi** | Membangun form pengajuan reservasi (lab, tanggal, jam, keperluan, anggota kelompok), implementasi **CRUD data reservasi** (lihat, ubah/batalkan pengajuan berstatus pending, hapus riwayat), serta query validasi overlap waktu terhadap tabel `jadwal_rutin` dan `reservasis` agar tidak ada dua kegiatan pada lab & jam yang sama. |
| 3 | Dimas Satrio Wardhono | L200250052 | **Dashboard Laboran, CRUD Jadwal Praktikum & Laporan PDF** | Membangun **CRUD jadwal praktikum rutin** semesteran (kelas, mata kuliah, hari, jam per lab), halaman verifikasi pengajuan (approve/reject) dengan notifikasi status, tampilan kalender ketersediaan yang dipakai semua pengguna, serta generate e-tiket dan **cetak surat izin format PDF** (`barryvdh/laravel-dompdf`) dan rekap pemanfaatan lab. |

**Catatan:** Setiap anggota bertanggung jawab terhadap minimal satu modul CRUD lengkap (Create, Read, Update, Delete) di sisi Laravel:
- Farrel → CRUD `labs` (ruang lab)
- Andra → CRUD `reservasis` (pengajuan reservasi)
- Dimas → CRUD `jadwal_rutin` (jadwal praktikum semesteran)

---

## 3. Project Repository

**URL:** https://github.com/parrel17/labspace-ums

**Teknologi:**
- Laravel Framework 13.44.1
- PHP ^8.3
- Composer (dependency manager)
- Database: MySQL / SQLite (dev)
- Blade + Tailwind (via Laravel starter kit)

**Struktur Branch Kerja:**
| Branch | Penanggung Jawab | Fokus |
|---|---|---|
| `main` | Bersama | Stabil, hasil merge akhir |
| `farrel/auth-labs` | Farrel | Autentikasi, multi-role, CRUD labs |
| `andra/reservasi` | Andra | CRUD reservasi, logika anti-bentrok |
| `dimas/jadwal-laboran` | Dimas | CRUD jadwal rutin, dashboard laboran, PDF |

**Alur kerja:** Setiap anggota bekerja di branch masing-masing → push → buat Pull Request ke `main` → direview bersama → merge. Repository diset **public** agar dapat diakses dosen untuk monitoring dan evaluasi.

---

## 4. Rencana ERD (Ringkas)

| Tabel | Relasi Kunci |
|---|---|
| `users` | id, name, nim, email, password, **role** (mahasiswa/laboran) |
| `labs` | id, kode_lab, nama_lab, kapasitas_pc, spesifikasi |
| `jadwal_rutin` | id, lab_id (FK), kelas, mata_kuliah, hari, jam_mulai, jam_selesai |
| `reservasis` | id, user_id (FK), lab_id (FK), tanggal, jam_mulai, jam_selesai, keperluan, anggota, **status** (pending/approved/rejected), catatan_laboran |

Relasi: `users` 1—N `reservasis`; `labs` 1—N `reservasis`; `labs` 1—N `jadwal_rutin`.
