<?php

namespace Database\Seeders;

use App\Models\JadwalRutin;
use App\Models\Lab;
use App\Models\Reservasi;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $wibNow = Carbon::now('Asia/Jakarta');
        $today = $wibNow->toDateString();
        $tomorrow = $wibNow->copy()->addDay()->toDateString();
        $todayDow = $wibNow->dayOfWeekIso;
        if ($todayDow === 7) {
            $todayDow = 5;
        }

        $bagas = User::updateOrCreate(
            ['email' => 'l200240081@student.ums.ac.id'],
            [
                'name' => 'Bagas Prakoso',
                'nim' => 'L200240081',
                'password' => Hash::make('labspace123'),
                'role' => 'mahasiswa',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'l200240147@student.ums.ac.id'],
            [
                'name' => 'Nadia Larasati',
                'nim' => 'L200240147',
                'password' => Hash::make('labspace123'),
                'role' => 'mahasiswa',
                'email_verified_at' => now(),
            ]
        );

        $hendra = User::updateOrCreate(
            ['email' => 'l200230094@student.ums.ac.id'],
            [
                'name' => 'Hendra Wijaya',
                'nim' => 'L200230094',
                'password' => Hash::make('labspace123'),
                'role' => 'mahasiswa',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'laboran@ums.ac.id'],
            [
                'name' => 'Budi Hartono',
                'nim' => 'ADMIN-LAB',
                'password' => Hash::make('labspace123'),
                'role' => 'laboran',
                'email_verified_at' => now(),
            ]
        );

        $j21 = Lab::updateOrCreate(
            ['kode_lab' => 'J.2.1'],
            [
                'nama_lab' => 'Software Engineering Lab',
                'nama_lab_id' => 'Lab Rekayasa Perangkat Lunak',
                'kapasitas_pc' => 40,
                'spesifikasi' => '40 PC Core i7, 16GB RAM, Dual Boot Windows & Ubuntu',
                'status' => 'aktif',
            ]
        );

        $j22 = Lab::updateOrCreate(
            ['kode_lab' => 'J.2.2'],
            [
                'nama_lab' => 'Networking & Security Lab',
                'nama_lab_id' => 'Lab Jaringan & Keamanan Sistem',
                'kapasitas_pc' => 36,
                'spesifikasi' => '36 PC Core i5, Routerboard MikroTik, Switch Cisco',
                'status' => 'aktif',
            ]
        );

        $j23 = Lab::updateOrCreate(
            ['kode_lab' => 'J.2.3'],
            [
                'nama_lab' => 'Multimedia & Graphics Lab',
                'nama_lab_id' => 'Lab Multimedia & Grafika',
                'kapasitas_pc' => 32,
                'spesifikasi' => '32 PC Core i7, GPU RTX 3060, Color Calibrated Display',
                'status' => 'aktif',
            ]
        );

        Lab::updateOrCreate(
            ['kode_lab' => 'J.2.4'],
            [
                'nama_lab' => 'Intelligent Systems & Data Lab',
                'nama_lab_id' => 'Lab Sistem Cerdas & Data',
                'kapasitas_pc' => 30,
                'spesifikasi' => '30 Workstation Ryzen 7, 32GB RAM, Python & CUDA Ready',
                'status' => 'maintenance',
            ]
        );

        if (JadwalRutin::count() === 0) {
            JadwalRutin::insert([
                [
                    'lab_id' => $j21->id,
                    'kelas' => 'Class D',
                    'mata_kuliah' => 'Framework Web Programming',
                    'pengampu' => 'Informatics Lab Team',
                    'hari' => $todayDow,
                    'jam_mulai' => '07:00',
                    'jam_selesai' => '09:00',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'lab_id' => $j21->id,
                    'kelas' => 'Class A',
                    'mata_kuliah' => 'Object-Oriented Programming',
                    'pengampu' => 'Informatics Lab Team',
                    'hari' => $todayDow,
                    'jam_mulai' => '13:00',
                    'jam_selesai' => '15:00',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'lab_id' => $j22->id,
                    'kelas' => 'Class A',
                    'mata_kuliah' => 'Operating Systems Practicum',
                    'pengampu' => 'Networking Lab Team',
                    'hari' => $todayDow,
                    'jam_mulai' => '09:00',
                    'jam_selesai' => '11:00',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'lab_id' => $j23->id,
                    'kelas' => 'Class B',
                    'mata_kuliah' => 'Interaction Design & Multimedia',
                    'pengampu' => 'Multimedia Lab Team',
                    'hari' => $todayDow,
                    'jam_mulai' => '15:00',
                    'jam_selesai' => '17:00',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'lab_id' => $j21->id,
                    'kelas' => 'Class C',
                    'mata_kuliah' => 'Advanced Databases',
                    'pengampu' => 'Informatics Lab Team',
                    'hari' => ($todayDow % 6) + 1,
                    'jam_mulai' => '09:00',
                    'jam_selesai' => '11:00',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);
        }

        Reservasi::updateOrCreate(
            ['kode_tiket' => 'LS-2026-0101'],
            [
                'user_id' => $bagas->id,
                'lab_id' => $j21->id,
                'tanggal' => $today,
                'jam_mulai' => '15:00',
                'jam_selesai' => '17:00',
                'peserta' => 3,
                'keperluan' => 'Web Programming final project application development',
                'anggota' => 'Bagas Prakoso (L200240081), Tegar Saputra (L200240092)',
                'status' => 'approved',
                'catatan_laboran' => 'Approved. Pick up room key in technician office floor 2 with student ID.',
            ]
        );

        Reservasi::updateOrCreate(
            ['kode_tiket' => 'LS-2026-0102'],
            [
                'user_id' => $bagas->id,
                'lab_id' => $j22->id,
                'tanggal' => $tomorrow,
                'jam_mulai' => '13:00',
                'jam_selesai' => '15:00',
                'peserta' => 4,
                'keperluan' => 'MikroTik static routing & firewall configuration lab',
                'anggota' => 'Bagas Prakoso (L200240081), Nadia Larasati (L200240147)',
                'status' => 'pending',
                'catatan_laboran' => null,
            ]
        );

        Reservasi::updateOrCreate(
            ['kode_tiket' => 'LS-2026-0103'],
            [
                'user_id' => $hendra->id,
                'lab_id' => $j23->id,
                'tanggal' => $today,
                'jam_mulai' => '11:00',
                'jam_selesai' => '13:00',
                'peserta' => 5,
                'keperluan' => '3D graphics rendering and group project UI testing',
                'anggota' => 'Hendra Wijaya (L200230094), 4 Team Members',
                'status' => 'pending',
                'catatan_laboran' => null,
            ]
        );
    }
}
