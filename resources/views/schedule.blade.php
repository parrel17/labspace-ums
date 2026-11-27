@extends('layouts.labspace')

@php($isId = app()->getLocale() === 'id')

@section('title', $isId ? 'LabSpace TI UMS - Jadwal & Ketersediaan Lab' : 'LabSpace TI UMS - Lab Availability & Schedule')

@section('content')
  <div class="flex flex-wrap items-end justify-between gap-4 pb-4 mb-5 border-b border-[var(--border)]">
    <div>
      <h1 class="text-2xl font-extrabold tracking-tight">{{ $isId ? 'Ketersediaan Ruang Laboratorium' : 'Laboratory Room Availability' }}</h1>
      <p class="text-sm text-[var(--ink-muted)] mt-1">{{ $isId ? 'Cek slot praktikum rutin dan jadwal terpakai per ruangan sebelum datang ke Gedung J.' : 'Check routine practicum blocks and available hours in Building J before heading to the lab.' }}</p>
    </div>
    <span class="font-mono text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-subtle)]">
      {{ $isId ? 'Waktu kampus:' : 'Campus time:' }} {{ $wibTime }}
    </span>
  </div>

  <div class="grid grid-cols-2 lg:grid-cols-4 border border-[var(--border)] rounded-xl bg-[var(--surface)] mb-5 overflow-hidden">
    <div class="p-3.5 border-b lg:border-b-0 border-r border-[var(--border)]">
      <div class="text-xs font-semibold text-[var(--ink-muted)]">{{ $isId ? 'Ruang Lab' : 'Lab Rooms' }}</div>
      <div class="font-mono text-2xl font-bold mt-1">{{ $totalLabs }}</div>
      <div class="text-xs text-[var(--ink-muted)]">{{ $activeLabs }} {{ $isId ? 'operasional' : 'operational' }}</div>
    </div>
    <div class="p-3.5 border-b lg:border-b-0 lg:border-r border-[var(--border)]">
      <div class="text-xs font-semibold text-[var(--ink-muted)]">{{ $isId ? 'Slot Kosong' : 'Open Slots' }}</div>
      <div class="font-mono text-2xl font-bold mt-1">{{ $totalOpen }}</div>
      <div class="text-xs text-[var(--ink-muted)]">{{ $isId ? 'tersedia pada tanggal ini' : 'available on this date' }}</div>
    </div>
    <div class="p-3.5 border-r border-[var(--border)]">
      <div class="text-xs font-semibold text-[var(--ink-muted)]">{{ $isId ? 'Slot Praktikum' : 'Practicum Blocks' }}</div>
      <div class="font-mono text-2xl font-bold mt-1">{{ $totalPracticum }}</div>
      <div class="text-xs text-[var(--ink-muted)]">{{ $isId ? 'kelas reguler' : 'scheduled classes' }}</div>
    </div>
    <div class="p-3.5">
      <div class="text-xs font-semibold text-[var(--ink-muted)]">{{ $isId ? 'Ter-reservasi' : 'Booked Slots' }}</div>
      <div class="font-mono text-2xl font-bold mt-1">{{ $totalBooked }}</div>
      <div class="text-xs text-[var(--ink-muted)]">{{ $pendingCount }} {{ $isId ? 'menunggu verifikasi' : 'pending verification' }}</div>
    </div>
  </div>

  <form method="GET" action="{{ route('schedule') }}" class="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] mb-5 flex flex-wrap items-center justify-between gap-3">
    <div class="flex flex-wrap items-center gap-2 flex-1 min-w-[240px]">
      <input type="text" name="q" value="{{ $query }}" placeholder="{{ $isId ? 'Cari kode lab atau spek (RTX, Ubuntu, MikroTik)...' : 'Search room code or specs (RTX, Ubuntu, MikroTik)...' }}" class="w-full sm:w-72 px-3 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-sm">
      <select name="status" class="px-3 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-sm">
        <option value="all" @selected($statusFilter === 'all')>{{ $isId ? 'Semua Lab' : 'All Labs' }}</option>
        <option value="available" @selected($statusFilter === 'available')>{{ $isId ? 'Ada Slot Kosong' : 'Has Open Slots' }}</option>
        <option value="aktif" @selected($statusFilter === 'aktif')>{{ $isId ? 'Operasional' : 'Operational' }}</option>
        <option value="maintenance" @selected($statusFilter === 'maintenance')>Maintenance</option>
      </select>
      <input type="date" name="date" value="{{ $selectedDate }}" class="px-3 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-sm font-mono">
      <button type="submit" class="px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--accent-ink)] text-sm font-semibold">
        {{ $isId ? 'Terapkan' : 'Apply' }}
      </button>
    </div>
    <div class="flex items-center gap-1.5 text-xs font-semibold">
      <a href="{{ route('schedule', ['date' => $prevDate, 'status' => $statusFilter, 'q' => $query]) }}" class="px-2.5 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)]">&larr;</a>
      <span class="px-2 font-mono">{{ $displayDate }}</span>
      <a href="{{ route('schedule', ['date' => $nextDate, 'status' => $statusFilter, 'q' => $query]) }}" class="px-2.5 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)]">&rarr;</a>
      <a href="{{ route('schedule', ['date' => $todayDate, 'status' => $statusFilter, 'q' => $query]) }}" class="px-2.5 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)]">{{ $isId ? 'Hari Ini' : 'Today' }}</a>
    </div>
  </form>

  <div class="flex flex-col gap-4">
    @forelse($cards as $card)
      @php($lab = $card['lab'])
      <article class="p-4 sm:p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div class="flex items-center gap-2.5">
              <span class="font-mono text-xs font-bold px-2 py-1 rounded-md bg-[var(--surface-subtle)] border border-[var(--border)]">{{ $lab->kode_lab }}</span>
              <h2 class="text-lg font-bold">{{ $lab->displayName() }}</h2>
            </div>
            <p class="text-xs text-[var(--ink-muted)] mt-1.5">{{ $lab->spesifikasi }}</p>
          </div>
          <span class="font-mono text-xs font-semibold px-3 py-1 rounded-full border {{ $lab->status === 'maintenance' ? 'bg-[var(--surface-subtle)] border-[var(--border)] text-[var(--ink-muted)]' : 'bg-[var(--open-bg)] border-[var(--open-border)] text-[var(--open-ink)]' }}">
            {{ $lab->status === 'maintenance' ? 'Maintenance' : "{$card['openCount']}/".count($card['slots']).($isId ? ' slot kosong' : ' slots open') }}
          </span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          @foreach($card['slots'] as $slot)
            @php($slotCls = match($slot['kind']) {
              'open' => 'bg-[var(--open-bg)] border-[var(--open-border)] text-[var(--open-ink)]',
              'praktikum' => 'bg-[var(--busy-bg)] border-[var(--busy-border)] text-[var(--busy-ink)]',
              'reserved' => 'bg-[var(--reserved-bg)] border-[var(--reserved-border)] text-[var(--reserved-ink)]',
              'pending' => 'bg-[var(--pending-bg)] border-[var(--pending-border)] text-[var(--pending-ink)]',
              default => 'bg-[var(--surface-subtle)] border-[var(--border)] text-[var(--ink-muted)]',
            })
            <div class="p-2.5 rounded-lg border text-left {{ $slotCls }}">
              <div class="font-mono text-[11px] font-bold">{{ $slot['start'] }} - {{ $slot['end'] }}</div>
              <div class="text-xs font-bold mt-1 truncate">{{ $slot['title'] }}</div>
              @if($slot['sub'])
                <div class="text-[11px] opacity-80 truncate">{{ $slot['sub'] }}</div>
              @endif
            </div>
          @endforeach
        </div>
      </article>
    @empty
      <div class="p-8 rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--surface)] text-center">
        <p class="font-semibold">{{ $isId ? 'Tidak ada ruang lab yang cocok dengan filter.' : 'No laboratory rooms match your filter.' }}</p>
      </div>
    @endforelse
  </div>
@endsection
