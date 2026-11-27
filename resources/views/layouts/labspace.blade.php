<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@yield('title', 'LabSpace TI UMS - Lab Availability & Reservation')</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="min-h-screen flex flex-col antialiased">
  @php($isId = app()->getLocale() === 'id')
  @php($user = auth()->user())

  <header class="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/95">
    <div class="max-w-[1240px] mx-auto px-4 md:px-5 min-h-[64px] flex items-center justify-between gap-3">
      <a href="{{ route('home') }}" class="flex items-center gap-2.5 shrink-0 text-[var(--ink)] no-underline">
        <span class="w-9 h-9 inline-flex items-center justify-center rounded-[10px] bg-[var(--accent)] text-[var(--accent-ink)]">
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <rect x="8" y="8" width="10" height="10" rx="2.5" fill="currentColor"/>
            <rect x="22" y="8" width="10" height="10" rx="2.5" fill="currentColor" opacity="0.45"/>
            <rect x="8" y="22" width="10" height="10" rx="2.5" fill="currentColor" opacity="0.72"/>
            <rect x="22" y="22" width="10" height="10" rx="2.5" fill="currentColor"/>
          </svg>
        </span>
        <span class="flex flex-col leading-tight">
          <strong class="text-base font-bold tracking-tight">LabSpace TI</strong>
          <span class="text-[11px] text-[var(--ink-muted)]">{{ $isId ? 'Gedung J FKI UMS' : 'Building J FKI UMS' }}</span>
        </span>
      </a>

      <nav class="hidden md:flex items-center gap-1" aria-label="Main navigation">
        @guest
          <a href="{{ route('home') }}" class="px-3 py-2 rounded-lg text-sm font-semibold {{ request()->routeIs('home') ? 'bg-[var(--surface-subtle)] text-[var(--ink)]' : 'text-[var(--ink-muted)] hover:text-[var(--ink)]' }}">
            {{ $isId ? 'Ringkasan' : 'Overview' }}
          </a>
        @endguest
        <a href="{{ route('schedule') }}" class="px-3 py-2 rounded-lg text-sm font-semibold {{ request()->routeIs('schedule') ? 'bg-[var(--surface-subtle)] text-[var(--ink)]' : 'text-[var(--ink-muted)] hover:text-[var(--ink)]' }}">
          {{ $isId ? 'Ketersediaan Lab' : 'Lab Availability' }}
        </a>
        @if($user && $user->isLaboran())
          <a href="{{ route('console') }}" class="px-3 py-2 rounded-lg text-sm font-semibold {{ request()->routeIs('console') ? 'bg-[var(--surface-subtle)] text-[var(--ink)]' : 'text-[var(--ink-muted)] hover:text-[var(--ink)]' }}">
            {{ $isId ? 'Console Laboran' : 'Lab Console' }}
          </a>
        @endif
      </nav>

      <div class="flex items-center gap-2">
        @guest
          <div class="hidden sm:inline-flex items-center bg-[var(--surface-subtle)] border border-[var(--border)] rounded-lg p-0.5 text-xs font-mono font-bold">
            <a href="{{ route('locale.switch', 'en') }}" class="px-2 py-1 rounded-md {{ !$isId ? 'bg-[var(--surface)] text-[var(--ink)] shadow-xs' : 'text-[var(--ink-muted)]' }}">EN</a>
            <a href="{{ route('locale.switch', 'id') }}" class="px-2 py-1 rounded-md {{ $isId ? 'bg-[var(--surface)] text-[var(--ink)] shadow-xs' : 'text-[var(--ink-muted)]' }}">ID</a>
          </div>
          <a href="{{ route('login') }}" class="px-3.5 py-2 rounded-[10px] border border-[var(--border-strong)] bg-[var(--surface)] text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-subtle)]">
            {{ $isId ? 'Masuk' : 'Sign In' }}
          </a>
          <a href="{{ route('register') }}" class="px-3.5 py-2 rounded-[10px] bg-[var(--accent)] text-[var(--accent-ink)] text-sm font-semibold hover:bg-[var(--accent-hover)]">
            {{ $isId ? 'Daftar' : 'Register' }}
          </a>
        @else
          <div class="hidden sm:inline-flex items-center bg-[var(--surface-subtle)] border border-[var(--border)] rounded-lg p-0.5 text-xs font-mono font-bold">
            <a href="{{ route('locale.switch', 'en') }}" class="px-2 py-1 rounded-md {{ !$isId ? 'bg-[var(--surface)] text-[var(--ink)] shadow-xs' : 'text-[var(--ink-muted)]' }}">EN</a>
            <a href="{{ route('locale.switch', 'id') }}" class="px-2 py-1 rounded-md {{ $isId ? 'bg-[var(--surface)] text-[var(--ink)] shadow-xs' : 'text-[var(--ink-muted)]' }}">ID</a>
          </div>
          <div class="flex items-center gap-2 px-2.5 py-1.5 rounded-[10px] border border-[var(--border)] bg-[var(--surface)]">
            <span class="w-7 h-7 rounded-md bg-[var(--accent)] text-[var(--accent-ink)] font-mono text-xs font-bold grid place-items-center">
              {{ strtoupper(substr($user->name, 0, 2)) }}
            </span>
            <span class="hidden sm:flex flex-col leading-tight">
              <strong class="text-xs font-bold">{{ $user->name }}</strong>
              <span class="text-[11px] font-mono text-[var(--ink-muted)]">{{ $user->nim }}</span>
            </span>
          </div>
          <form method="POST" action="{{ route('logout') }}">
            @csrf
            <button type="submit" class="px-3 py-2 rounded-[10px] border border-[var(--border-strong)] bg-[var(--surface)] text-xs font-semibold text-[var(--ink)] hover:bg-[var(--surface-subtle)]">
              {{ $isId ? 'Keluar' : 'Sign Out' }}
            </button>
          </form>
        @endguest
      </div>
    </div>
  </header>

  <main class="flex-1 w-full max-w-[1240px] mx-auto px-4 md:px-5 py-6">
    @yield('content')
  </main>

  <footer class="border-t border-[var(--border)] bg-[var(--surface)]">
    <div class="max-w-[1240px] mx-auto px-4 md:px-5 py-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--ink-muted)]">
      <span>{{ $isId ? 'LabSpace TI - Manajemen Lab Informatika, Gedung J FKI UMS' : 'LabSpace TI - Informatics Laboratory Management, Building J FKI UMS' }}</span>
      <span>{{ $isId ? 'Jam Layanan: Senin - Sabtu, 07:30 - 17:00 WIB' : 'Service Hours: Mon - Sat, 07:30 - 17:00 WIB' }}</span>
    </div>
  </footer>
</body>
</html>
