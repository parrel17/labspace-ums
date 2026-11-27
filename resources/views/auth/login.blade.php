@extends('layouts.labspace')

@php($isId = app()->getLocale() === 'id')

@section('title', $isId ? 'Masuk ke LabSpace TI' : 'Sign In to LabSpace TI')

@section('content')
  <div class="max-w-[820px] mx-auto my-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-sm">
    <div class="grid md:grid-cols-[0.92fr_1.18fr]">
      <aside class="bg-[#1c1917] text-[#faf8f5] p-6 sm:p-7 flex flex-col justify-between gap-6">
        <div>
          <span class="inline-block font-mono text-[11px] font-bold tracking-widest text-[#a8a29e] uppercase mb-3">
            {{ $isId ? 'GEDUNG J · TEKNIK INFORMATIKA' : 'BUILDING J · INFORMATICS' }}
          </span>
          <h1 class="text-2xl font-extrabold leading-tight mb-5">
            {{ $isId ? 'Satu akses terpadu untuk seluruh lab komputer.' : 'One workspace pass for every computer lab.' }}
          </h1>
          <ul class="space-y-3 text-sm text-[#e7e5e4]">
            <li class="flex items-start gap-2.5">
              <span class="font-mono text-xs px-1.5 py-0.5 rounded bg-white/10">01</span>
              <span>{{ $isId ? 'Cek slot ruang 07:00-21:00 secara langsung' : 'Real-time 07:00-21:00 room slot check' }}</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="font-mono text-xs px-1.5 py-0.5 rounded bg-white/10">02</span>
              <span>{{ $isId ? 'Cegah bentrok praktikum secara otomatis' : 'Automatic practicum clash protection' }}</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="font-mono text-xs px-1.5 py-0.5 rounded bg-white/10">03</span>
              <span>{{ $isId ? 'E-tiket QR resmi untuk pengambilan kunci' : 'Verified QR e-ticket for key pickup' }}</span>
            </li>
          </ul>
        </div>
        <div class="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-[#d6d3d1]">
          <span>{{ $isId ? 'Akses Mahasiswa & Laboran' : 'Student & Lab Staff Access' }}</span>
          <span class="font-mono">J.2.1 - J.2.4</span>
        </div>
      </aside>

      <div class="p-6 sm:p-7">
        <div class="grid grid-cols-2 gap-1 p-1 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] mb-5 text-sm font-semibold text-center">
          <a href="{{ route('login') }}" class="py-2 rounded-lg bg-[var(--surface)] text-[var(--ink)] shadow-xs">{{ $isId ? 'Masuk' : 'Sign In' }}</a>
          <a href="{{ route('register') }}" class="py-2 rounded-lg text-[var(--ink-muted)] hover:text-[var(--ink)]">{{ $isId ? 'Daftar Mahasiswa' : 'Student Register' }}</a>
        </div>

        <h2 class="text-xl font-extrabold tracking-tight">{{ $isId ? 'Masuk ke LabSpace TI' : 'Sign In to LabSpace TI' }}</h2>
        <p class="text-xs text-[var(--ink-muted)] mt-1 mb-5">{{ $isId ? 'Gunakan email UMS atau NIM untuk mengajukan dan memantau jadwal.' : 'Use your UMS student email or NIM to book and track rooms.' }}</p>

        @if(session('status'))
          <div class="mb-4 p-3 rounded-lg border border-[var(--open-border)] bg-[var(--open-bg)] text-[var(--open-ink)] text-xs font-semibold">
            {{ session('status') }}
          </div>
        @endif

        <form method="POST" action="{{ route('login') }}" class="space-y-4">
          @csrf
          <div>
            <label for="email" class="block text-xs font-bold mb-1.5">{{ $isId ? 'Email UMS atau NIM' : 'UMS Email or Student ID' }}</label>
            <input id="email" name="email" type="text" value="{{ old('email') }}" required autofocus placeholder="l200240081@student.ums.ac.id / L200240081" class="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-sm">
            @error('email')
              <p class="text-xs text-[var(--busy-ink)] mt-1 font-medium">{{ $message }}</p>
            @enderror
          </div>

          <div>
            <label for="password" class="block text-xs font-bold mb-1.5">{{ $isId ? 'Kata Sandi' : 'Password' }}</label>
            <div class="relative flex items-center">
              <input id="password" name="password" type="password" required placeholder="{{ $isId ? 'Masukkan kata sandi' : 'Enter password' }}" class="w-full px-3.5 py-2.5 pr-16 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-sm">
              <button type="button" onclick="const i=document.getElementById('password');i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'Show':'Hide';" class="absolute right-2 px-2 py-1 text-xs font-mono font-semibold text-[var(--ink-muted)] hover:text-[var(--ink)]">
                Show
              </button>
            </div>
            @error('password')
              <p class="text-xs text-[var(--busy-ink)] mt-1 font-medium">{{ $message }}</p>
            @enderror
          </div>

          <label class="inline-flex items-center gap-2 text-xs text-[var(--ink-muted)]">
            <input type="checkbox" name="remember" class="rounded border-[var(--border-strong)]">
            <span>{{ $isId ? 'Ingat sesi saya' : 'Keep me signed in' }}</span>
          </label>

          <button type="submit" class="w-full py-2.5 rounded-[10px] bg-[var(--accent)] text-[var(--accent-ink)] text-sm font-semibold hover:bg-[var(--accent-hover)]">
            {{ $isId ? 'Masuk' : 'Sign In' }}
          </button>
        </form>
      </div>
    </div>
  </div>
@endsection
