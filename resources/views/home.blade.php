@extends('layouts.labspace')

@php($isId = app()->getLocale() === 'id')

@section('title', $isId ? 'LabSpace TI UMS - Beranda & Alur Reservasi Lab' : 'LabSpace TI UMS - Lab Availability & Reservation')

@section('content')
  <section class="grid lg:grid-cols-[1.15fr_0.95fr] gap-7 items-center pb-12 border-b border-[var(--border)]">
    <div>
      <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-mono font-bold text-[var(--ink-muted)] mb-4">
        <span class="w-2 h-2 rounded-full bg-[var(--open-bar)]"></span>
        {{ $isId ? 'GEDUNG J · LAB INFORMATIKA UMS' : 'BUILDING J · UMS INFORMATICS' }}
      </span>
      <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] mb-4">
        {{ $isId ? 'Cek Ketersediaan Lab Tanpa Datang Sia-Sia.' : 'Check Open Computer Labs Before Walking to Building J.' }}
      </h1>
      <p class="text-base text-[var(--ink-muted)] max-w-xl mb-6">
        {{ $isId
            ? 'Cek ruangan kosong di sela praktikum rutin, cegah jadwal bentrok secara otomatis, dan unduh surat izin e-tiket resmi dalam satu tempat.'
            : 'Check empty rooms between regular practicum classes, avoid double-booked slots automatically, and obtain an official lab permit e-ticket in one place.' }}
      </p>

      <div class="flex flex-wrap gap-3 mb-7">
        <a href="{{ route('schedule') }}" class="px-5 py-2.5 rounded-[10px] bg-[var(--accent)] text-[var(--accent-ink)] text-sm font-semibold hover:bg-[var(--accent-hover)]">
          {{ $isId ? 'Lihat Jadwal Lab' : 'Explore Lab Schedule' }}
        </a>
        @auth
          <a href="{{ auth()->user()->isLaboran() ? route('console') : route('schedule') }}" class="px-5 py-2.5 rounded-[10px] border border-[var(--border-strong)] bg-[var(--surface)] text-sm font-semibold hover:bg-[var(--surface-subtle)]">
            {{ auth()->user()->isLaboran() ? ($isId ? 'Buka Console Laboran' : 'Open Lab Console') : ($isId ? 'Buka Jadwal Lab' : 'Go to Lab Schedule') }}
          </a>
        @else
          <a href="{{ route('login') }}" class="px-5 py-2.5 rounded-[10px] border border-[var(--border-strong)] bg-[var(--surface)] text-sm font-semibold hover:bg-[var(--surface-subtle)]">
            {{ $isId ? 'Masuk / Daftar' : 'Sign In / Register' }}
          </a>
        @endauth
      </div>

      <div class="grid sm:grid-cols-3 border border-[var(--border)] rounded-xl bg-[var(--surface)] overflow-hidden">
        <div class="p-3.5 sm:border-r border-b sm:border-b-0 border-[var(--border)]">
          <div class="font-mono text-2xl font-bold">{{ $activeLabsCount }} / {{ $totalLabsCount }}</div>
          <div class="text-xs text-[var(--ink-muted)]">{{ $isId ? 'Lab Beroperasi' : 'Operational Labs' }}</div>
        </div>
        <div class="p-3.5 sm:border-r border-b sm:border-b-0 border-[var(--border)]">
          <div class="font-mono text-2xl font-bold">{{ $totalOpenToday }}</div>
          <div class="text-xs text-[var(--ink-muted)]">{{ $isId ? 'Slot Kosong Hari Ini' : 'Open Slots Today' }}</div>
        </div>
        <div class="p-3.5">
          <div class="font-mono text-2xl font-bold">07:00-21:00</div>
          <div class="text-xs text-[var(--ink-muted)]">{{ $isId ? 'Jam Layanan' : 'Operating Hours' }}</div>
        </div>
      </div>
    </div>

    <aside class="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xs">
      <div class="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border)] text-xs font-bold text-[var(--ink-muted)]">
        <span class="font-mono uppercase tracking-wider">{{ $isId ? 'STATUS RUANGAN LANGSUNG' : 'LIVE ROOM SNAPSHOT' }}</span>
        <span class="font-mono">{{ $wibTime }}</span>
      </div>
      <div class="flex flex-col gap-2">
        @foreach($labCards as $card)
          @php($lab = $card['lab'])
          <a href="{{ route('schedule', ['q' => $lab->kode_lab]) }}" class="flex items-center justify-between gap-3 p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] hover:border-[var(--border-strong)] transition">
            <span class="flex items-center gap-2.5 min-w-0">
              <span class="font-mono text-xs font-bold px-2 py-1 rounded-md bg-[var(--surface-subtle)] border border-[var(--border)]">{{ $lab->kode_lab }}</span>
              <span class="min-w-0">
                <strong class="block text-sm font-bold truncate">{{ $lab->displayName() }}</strong>
                <span class="block text-xs text-[var(--ink-muted)]">
                  {{ $lab->status === 'maintenance' ? 'Maintenance' : ($isId ? "{$card['openCount']}/{$card['totalSlots']} slot kosong" : "{$card['openCount']}/{$card['totalSlots']} slots open") }} &middot; {{ $lab->kapasitas_pc }} PC
                </span>
              </span>
            </span>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0 {{ $card['liveTone'] === 'open' ? 'bg-[var(--open-bg)] border-[var(--open-border)] text-[var(--open-ink)]' : ($card['liveTone'] === 'busy' ? 'bg-[var(--busy-bg)] border-[var(--busy-border)] text-[var(--busy-ink)]' : ($card['liveTone'] === 'reserved' ? 'bg-[var(--reserved-bg)] border-[var(--reserved-border)] text-[var(--reserved-ink)]' : 'bg-[var(--surface-subtle)] border-[var(--border)] text-[var(--ink-muted)]')) }}">
              {{ $card['liveLabel'] }}
            </span>
          </a>
        @endforeach
      </div>
    </aside>
  </section>

  <section class="py-12">
    <div class="mb-6">
      <span class="font-mono text-xs font-bold uppercase tracking-wider text-[var(--ink-muted)]">{{ $isId ? 'ALUR PENGAJUAN' : 'HOW LABSPACE WORKS' }}</span>
      <h2 class="text-2xl font-extrabold tracking-tight mt-1">{{ $isId ? 'Empat langkah terstruktur sampai pengambilan kunci.' : 'Four structured steps from checking empty rooms to key pickup.' }}</h2>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <span class="font-mono text-xs font-bold text-[var(--ink-muted)]">01</span>
        <h3 class="text-base font-bold mt-2 mb-1">{{ $isId ? 'Cek Ketersediaan' : 'Check Availability' }}</h3>
        <p class="text-sm text-[var(--ink-muted)]">{{ $isId ? 'Pantau slot 07:00-21:00 dan spesifikasi PC di J.2.1-J.2.4.' : 'Browse 07:00-21:00 room blocks and PC specs across J.2.1-J.2.4.' }}</p>
      </div>
      <div class="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <span class="font-mono text-xs font-bold text-[var(--ink-muted)]">02</span>
        <h3 class="text-base font-bold mt-2 mb-1">{{ $isId ? 'Form Anti-Bentrok' : 'Anti-Clash Booking' }}</h3>
        <p class="text-sm text-[var(--ink-muted)]">{{ $isId ? 'Sistem otomatis mengecek praktikum rutin, maintenance, dan kapasitas.' : 'Validates routine practicums, maintenance, and capacity automatically.' }}</p>
      </div>
      <div class="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <span class="font-mono text-xs font-bold text-[var(--ink-muted)]">03</span>
        <h3 class="text-base font-bold mt-2 mb-1">{{ $isId ? 'Verifikasi Laboran' : 'Staff Verification' }}</h3>
        <p class="text-sm text-[var(--ink-muted)]">{{ $isId ? 'Laboran menyetujui atau menolak permohonan dengan catatan resmi.' : 'Lab staff review requests and re-validate conflicts before approval.' }}</p>
      </div>
      <div class="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <span class="font-mono text-xs font-bold text-[var(--ink-muted)]">04</span>
        <h3 class="text-base font-bold mt-2 mb-1">{{ $isId ? 'E-Tiket & Surat PDF' : 'Official PDF Permit' }}</h3>
        <p class="text-sm text-[var(--ink-muted)]">{{ $isId ? 'Unduh surat izin ber-QR code untuk ambil kunci di ruang teknisi.' : 'Download printable QR permit for key pickup at the technician room.' }}</p>
      </div>
    </div>
  </section>
@endsection
