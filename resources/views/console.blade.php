@extends('layouts.labspace')

@php($isId = app()->getLocale() === 'id')

@section('title', $isId ? 'LabSpace TI UMS - Console Laboran' : 'LabSpace TI UMS - Lab Technician Console')

@section('content')
  <div class="pb-4 mb-5 border-b border-[var(--border)] flex flex-wrap items-end justify-between gap-4">
    <div>
      <h1 class="text-2xl font-extrabold tracking-tight">{{ $isId ? 'Console Pengelola Lab (Laboran)' : 'Lab Technician Console' }}</h1>
      <p class="text-sm text-[var(--ink-muted)] mt-1">{{ $isId ? 'Ringkasan operasional ruang lab dan permohonan mahasiswa terbaru.' : 'Operational overview of laboratory rooms and recent student requests.' }}</p>
    </div>
    <span class="font-mono text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-subtle)]">
      Role: {{ auth()->user()->role }}
    </span>
  </div>

  <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
    <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
      <div class="text-xs font-semibold text-[var(--ink-muted)]">{{ $isId ? 'Menunggu Verifikasi' : 'Needs Review' }}</div>
      <div class="font-mono text-2xl font-bold mt-1">{{ $pendingCount }}</div>
    </div>
    <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
      <div class="text-xs font-semibold text-[var(--ink-muted)]">{{ $isId ? 'Disetujui' : 'Approved' }}</div>
      <div class="font-mono text-2xl font-bold mt-1">{{ $approvedCount }}</div>
    </div>
    <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
      <div class="text-xs font-semibold text-[var(--ink-muted)]">{{ $isId ? 'Lab Operasional' : 'Operational Labs' }}</div>
      <div class="font-mono text-2xl font-bold mt-1">{{ $activeLabsCount }} / {{ $totalLabsCount }}</div>
    </div>
    <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
      <div class="text-xs font-semibold text-[var(--ink-muted)]">{{ $isId ? 'Praktikum Rutin' : 'Routine Classes' }}</div>
      <div class="font-mono text-2xl font-bold mt-1">{{ $rutinCount }}</div>
    </div>
  </div>

  <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
    <div class="px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-subtle)] flex items-center justify-between">
      <strong class="text-sm">{{ $isId ? 'Daftar Permohonan Terkini' : 'Recent Booking Requests' }}</strong>
      <span class="text-xs text-[var(--ink-muted)] font-mono">{{ $recentBookings->count() }} {{ $isId ? 'entri' : 'records' }}</span>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm border-collapse">
        <thead>
          <tr class="border-b border-[var(--border)] text-xs uppercase text-[var(--ink-muted)]">
            <th class="px-4 py-3">Ticket</th>
            <th class="px-4 py-3">{{ $isId ? 'Pemohon' : 'Applicant' }}</th>
            <th class="px-4 py-3">Lab</th>
            <th class="px-4 py-3">{{ $isId ? 'Jadwal' : 'Schedule' }}</th>
            <th class="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          @foreach($recentBookings as $b)
            <tr class="border-b border-[var(--border)] last:border-b-0">
              <td class="px-4 py-3 font-mono text-xs font-semibold">{{ $b->kode_tiket }}</td>
              <td class="px-4 py-3">{{ $b->user?->name }} <span class="text-xs font-mono text-[var(--ink-muted)]">({{ $b->user?->nim }})</span></td>
              <td class="px-4 py-3 font-mono text-xs">{{ $b->lab?->kode_lab }}</td>
              <td class="px-4 py-3 font-mono text-xs">{{ $b->tanggal->format('Y-m-d') }} &middot; {{ $b->jam_mulai }}-{{ $b->jam_selesai }}</td>
              <td class="px-4 py-3 text-xs font-semibold uppercase">{{ $b->status }}</td>
            </tr>
          @endforeach
        </tbody>
      </table>
    </div>
  </div>
@endsection
