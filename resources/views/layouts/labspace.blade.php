<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@yield('title', 'LabSpace TI UMS - Lab Availability & Reservation')</title>
  <link rel="icon" type="image/png" href="{{ asset('images/logo-ls.png') }}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
@php($isId = app()->getLocale() === 'id')
@php($user = auth()->user())
@php($pendingCount = $user && $user->isLaboran() ? \App\Models\Reservasi::where('status', 'pending')->count() : 0)
@php($usersCount = $user && $user->isLaboran() ? \App\Models\User::count() : 0)
<body class="min-h-screen flex flex-col antialiased {{ $user ? 'is-authenticated' : '' }}">

  <header class="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/95">
    <div class="{{ $user ? 'w-full px-4 md:px-5' : 'max-w-[1240px] mx-auto px-4 md:px-5' }} min-h-[64px] flex items-center justify-between gap-3">
      <div class="flex items-center gap-2.5 min-w-0">
        @auth
          <button type="button" id="btn-mobile-drawer" class="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-[10px] border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--ink)]" aria-label="Open menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        @endauth

        <a href="{{ route('home') }}" class="flex items-center gap-2.5 shrink-0 text-[var(--ink)] no-underline">
          <span class="w-9 h-9 inline-flex items-center justify-center rounded-[10px] overflow-hidden">
            <img src="{{ asset('images/logo-ls.png') }}" alt="" width="36" height="36" class="w-9 h-9 object-contain">
          </span>
          <span class="flex flex-col leading-tight">
            <strong class="text-base font-bold tracking-tight">LabSpace TI</strong>
            <span class="text-[11px] text-[var(--ink-muted)]">{{ $isId ? 'Gedung J FKI UMS' : 'Building J FKI UMS' }}</span>
          </span>
        </a>

        @auth
          <span class="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-subtle)] text-[11px] font-semibold text-[var(--ink-muted)]">
            {{ request()->routeIs('console') ? ($isId ? 'Pusat Admin' : 'Admin Center') : ($isId ? 'Jadwal & Ketersediaan' : 'Lab Schedule') }}
          </span>
        @endauth
      </div>

      @guest
        <nav class="hidden md:flex items-center gap-1" aria-label="Main navigation">
          <a href="{{ route('home') }}" class="px-3 py-2 rounded-lg text-sm font-semibold {{ request()->routeIs('home') ? 'bg-[var(--surface-subtle)] text-[var(--ink)]' : 'text-[var(--ink-muted)] hover:text-[var(--ink)]' }}">
            {{ $isId ? 'Ringkasan' : 'Overview' }}
          </a>
          <a href="{{ route('schedule') }}" class="px-3 py-2 rounded-lg text-sm font-semibold {{ request()->routeIs('schedule') ? 'bg-[var(--surface-subtle)] text-[var(--ink)]' : 'text-[var(--ink-muted)] hover:text-[var(--ink)]' }}">
            {{ $isId ? 'Ketersediaan Lab' : 'Lab Availability' }}
          </a>
        </nav>
      @endguest

      <div class="flex items-center gap-2">
        <div class="hidden sm:inline-flex items-center bg-[var(--surface-subtle)] border border-[var(--border)] rounded-lg p-0.5 text-xs font-mono font-bold">
          <a href="{{ route('locale.switch', 'en') }}" class="px-2 py-1 rounded-md {{ !$isId ? 'bg-[var(--surface)] text-[var(--ink)] shadow-xs' : 'text-[var(--ink-muted)]' }}">EN</a>
          <a href="{{ route('locale.switch', 'id') }}" class="px-2 py-1 rounded-md {{ $isId ? 'bg-[var(--surface)] text-[var(--ink)] shadow-xs' : 'text-[var(--ink-muted)]' }}">ID</a>
        </div>

        <button type="button" id="btn-theme-toggle" class="w-9 h-9 inline-flex items-center justify-center rounded-[10px] border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-muted)] hover:text-[var(--ink)]" aria-label="Toggle theme">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
          </svg>
        </button>

        @guest
          <a href="{{ route('login') }}" class="px-3.5 py-2 rounded-[10px] border border-[var(--border-strong)] bg-[var(--surface)] text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-subtle)]">
            {{ $isId ? 'Masuk' : 'Sign In' }}
          </a>
          <a href="{{ route('register') }}" class="px-3.5 py-2 rounded-[10px] bg-[var(--accent)] text-[var(--accent-ink)] text-sm font-semibold hover:bg-[var(--accent-hover)]">
            {{ $isId ? 'Daftar' : 'Register' }}
          </a>
        @else
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

  <div class="flex-1 w-full ls-shell-grid">
    @auth
      <aside id="cf-sidebar" class="hidden lg:flex flex-col sticky top-[65px] h-[calc(100dvh-65px)] bg-[var(--surface)] border-r border-[var(--border)] px-2.5 py-3 gap-2.5 overflow-y-auto">
        <div class="flex items-center justify-between gap-2 px-1.5 py-1">
          <div class="flex items-center gap-2 min-w-0 cf-hide-collapsed">
            <span class="w-2 h-2 rounded-full bg-[var(--open-bar)] shrink-0"></span>
            <strong class="text-xs font-bold truncate">{{ $user->isLaboran() ? ($isId ? 'Admin Gedung J' : 'Admin · Building J') : ($isId ? 'Mahasiswa FKI' : 'Student · Building J') }}</strong>
          </div>
          <button type="button" id="btn-collapse-sidebar" class="w-7 h-7 rounded-lg inline-flex items-center justify-center text-[var(--ink-muted)] hover:bg-[var(--surface-subtle)] hover:text-[var(--ink)]" aria-label="Collapse sidebar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
          </button>
        </div>

        <div class="relative flex items-center cf-hide-collapsed">
          <svg class="absolute left-2.5 text-[var(--ink-muted)] pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" id="sidebar-quick-search" class="w-full h-8.5 pl-8 pr-12 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-xs text-[var(--ink)] focus:outline-none focus:border-[var(--border-strong)]" placeholder="{{ $isId ? 'Cari cepat...' : 'Quick search...' }}">
          <kbd class="absolute right-1.5 px-1.5 py-0.5 rounded border border-[var(--border)] bg-[var(--surface)] text-[10px] font-mono text-[var(--ink-muted)]">Ctrl+K</kbd>
        </div>

        <nav id="cf-sidebar-nav" class="flex-1 flex flex-col gap-0.5" aria-label="Workspace navigation">
          <div class="px-2.5 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-[var(--ink-muted)] cf-hide-collapsed">{{ $isId ? 'Ruang Kerja' : 'Workspace' }}</div>
          <a href="{{ route('home') }}" data-cf-item class="cf-nav-link flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg text-xs font-semibold {{ request()->routeIs('home') ? 'bg-[var(--surface-subtle)] text-[var(--ink)] font-bold border border-[var(--border)]' : 'text-[var(--ink-muted)] hover:bg-[var(--surface-subtle)] hover:text-[var(--ink)]' }}">
            <span class="flex items-center gap-2.5 min-w-0">
              <svg class="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span class="truncate cf-hide-collapsed">{{ $isId ? 'Ringkasan' : 'Overview' }}</span>
            </span>
          </a>
          <a href="{{ route('schedule') }}" data-cf-item class="cf-nav-link flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg text-xs font-semibold {{ request()->routeIs('schedule') ? 'bg-[var(--surface-subtle)] text-[var(--ink)] font-bold border border-[var(--border)]' : 'text-[var(--ink-muted)] hover:bg-[var(--surface-subtle)] hover:text-[var(--ink)]' }}">
            <span class="flex items-center gap-2.5 min-w-0">
              <svg class="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span class="truncate cf-hide-collapsed">{{ $isId ? 'Ketersediaan Lab' : 'Lab Availability' }}</span>
            </span>
          </a>

          @if($user->isLaboran())
            <div class="my-2 h-px bg-[var(--border)] mx-1.5"></div>
            <div class="px-2.5 pt-1 pb-1 text-[10px] font-bold uppercase tracking-wider text-[var(--ink-muted)] cf-hide-collapsed">{{ $isId ? 'Pusat Admin' : 'Admin Center' }}</div>
            <a href="{{ route('console') }}" data-cf-item class="cf-nav-link flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg text-xs font-semibold {{ request()->routeIs('console') ? 'bg-[var(--surface-subtle)] text-[var(--ink)] font-bold border border-[var(--border)]' : 'text-[var(--ink-muted)] hover:bg-[var(--surface-subtle)] hover:text-[var(--ink)]' }}">
              <span class="flex items-center gap-2.5 min-w-0">
                <svg class="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                <span class="truncate cf-hide-collapsed">{{ $isId ? 'Kontrol Laboran' : 'Control Center' }}</span>
              </span>
              <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] cf-hide-collapsed">{{ $pendingCount }}</span>
            </a>
            <div class="px-2.5 py-1.5 text-[11px] text-[var(--ink-muted)] cf-hide-collapsed">
              {{ $isId ? 'Akun terdaftar:' : 'Registered accounts:' }} <span class="font-mono font-bold">{{ $usersCount }}</span>
            </div>
          @endif
        </nav>

        <div class="pt-2.5 border-t border-[var(--border)] flex items-center justify-between gap-2 cf-hide-collapsed">
          <span class="text-[11px] font-mono text-[var(--ink-muted)]">{{ $user->role }}</span>
          <div class="inline-flex items-center bg-[var(--surface-subtle)] border border-[var(--border)] rounded-lg p-0.5 text-[11px] font-mono font-bold">
            <a href="{{ route('locale.switch', 'en') }}" class="px-2 py-0.5 rounded {{ !$isId ? 'bg-[var(--surface)] text-[var(--ink)]' : 'text-[var(--ink-muted)]' }}">EN</a>
            <a href="{{ route('locale.switch', 'id') }}" class="px-2 py-0.5 rounded {{ $isId ? 'bg-[var(--surface)] text-[var(--ink)]' : 'text-[var(--ink-muted)]' }}">ID</a>
          </div>
        </div>
      </aside>

      <!-- Mobile Slide Drawer -->
      <div id="mobile-drawer" class="fixed inset-0 z-50 hidden lg:hidden">
        <div id="drawer-scrim" class="absolute inset-0 bg-black/50"></div>
        <div class="relative w-72 max-w-[85vw] h-full bg-[var(--surface)] border-r border-[var(--border)] p-4 flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <strong class="text-sm">{{ $isId ? 'Menu Navigasi' : 'Workspace Menu' }}</strong>
            <button type="button" id="btn-close-drawer" class="w-9 h-9 rounded-lg border border-[var(--border)] inline-flex items-center justify-center">✕</button>
          </div>
          <nav class="flex flex-col gap-1">
            <a href="{{ route('home') }}" class="px-3 py-2.5 rounded-lg text-sm font-semibold {{ request()->routeIs('home') ? 'bg-[var(--accent)] text-[var(--accent-ink)]' : '' }}">{{ $isId ? 'Ringkasan' : 'Overview' }}</a>
            <a href="{{ route('schedule') }}" class="px-3 py-2.5 rounded-lg text-sm font-semibold {{ request()->routeIs('schedule') ? 'bg-[var(--accent)] text-[var(--accent-ink)]' : '' }}">{{ $isId ? 'Ketersediaan Lab' : 'Lab Availability' }}</a>
            @if($user->isLaboran())
              <a href="{{ route('console') }}" class="px-3 py-2.5 rounded-lg text-sm font-semibold {{ request()->routeIs('console') ? 'bg-[var(--accent)] text-[var(--accent-ink)]' : '' }}">{{ $isId ? 'Pusat Admin' : 'Admin Center' }} ({{ $pendingCount }})</a>
            @endif
          </nav>
        </div>
      </div>
    @endauth

    <main class="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-6">
      @if(session('status'))
        <div class="mb-4 px-4 py-3 rounded-xl border border-[var(--open-border)] bg-[var(--open-bg)] text-sm font-medium text-[var(--open-ink)]">
          {{ session('status') }}
        </div>
      @endif
      @if(session('error'))
        <div class="mb-4 px-4 py-3 rounded-xl border border-[var(--busy-border)] bg-[var(--busy-bg)] text-sm font-medium text-[var(--busy-ink)]">
          {{ session('error') }}
        </div>
      @endif
      @yield('content')
    </main>
  </div>

  <footer class="border-t border-[var(--border)] bg-[var(--surface)]">
    <div class="max-w-[1240px] mx-auto px-4 md:px-5 py-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--ink-muted)]">
      <span>{{ $isId ? 'LabSpace TI - Manajemen Lab Informatika, Gedung J FKI UMS' : 'LabSpace TI - Informatics Laboratory Management, Building J FKI UMS' }}</span>
      <span>{{ $isId ? 'Jam Layanan: Senin - Sabtu, 07:30 - 17:00 WIB' : 'Service Hours: Mon - Sat, 07:30 - 17:00 WIB' }}</span>
    </div>
  </footer>
</body>
</html>
