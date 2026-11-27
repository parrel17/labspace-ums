@extends('layouts.labspace')

@php($isId = app()->getLocale() === 'id')

@section('title', $isId ? 'Daftar Akun Mahasiswa - LabSpace TI' : 'Create Student Account - LabSpace TI')

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
          <span>{{ $isId ? 'Registrasi Mahasiswa TI UMS' : 'UMS Informatics Student Registration' }}</span>
          <span class="font-mono">J.2.1 - J.2.4</span>
        </div>
      </aside>

      <div class="p-6 sm:p-7">
        <div class="grid grid-cols-2 gap-1 p-1 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] mb-5 text-sm font-semibold text-center">
          <a href="{{ route('login') }}" class="py-2 rounded-lg text-[var(--ink-muted)] hover:text-[var(--ink)]">{{ $isId ? 'Masuk' : 'Sign In' }}</a>
          <a href="{{ route('register') }}" class="py-2 rounded-lg bg-[var(--surface)] text-[var(--ink)] shadow-xs">{{ $isId ? 'Daftar Mahasiswa' : 'Student Register' }}</a>
        </div>

        <h2 class="text-xl font-extrabold tracking-tight">{{ $isId ? 'Daftar Akun Mahasiswa' : 'Create Student Account' }}</h2>
        <p class="text-xs text-[var(--ink-muted)] mt-1 mb-5">{{ $isId ? 'Daftarkan NIM mahasiswa untuk mulai mengajukan pemakaian lab.' : 'Register your student NIM once to submit lab reservations.' }}</p>

        <form method="POST" action="{{ route('register') }}" class="space-y-3.5">
          @csrf
          <div>
            <label for="name" class="block text-xs font-bold mb-1">{{ $isId ? 'Nama Lengkap' : 'Full Name' }}</label>
            <input id="name" name="name" type="text" value="{{ old('name') }}" required autofocus placeholder="{{ $isId ? 'Nama lengkap mahasiswa' : 'Student full name' }}" class="w-full px-3.5 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-sm">
            @error('name') <p class="text-xs text-[var(--busy-ink)] mt-1">{{ $message }}</p> @enderror
          </div>

          <div class="grid sm:grid-cols-2 gap-3">
            <div>
              <label for="nim" class="block text-xs font-bold mb-1">NIM</label>
              <input id="nim" name="nim" type="text" value="{{ old('nim') }}" required placeholder="L200250001" class="w-full px-3.5 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-sm font-mono">
              @error('nim') <p class="text-xs text-[var(--busy-ink)] mt-1">{{ $message }}</p> @enderror
            </div>
            <div>
              <label for="email" class="block text-xs font-bold mb-1">{{ $isId ? 'Email UMS' : 'UMS Email' }}</label>
              <input id="email" name="email" type="email" value="{{ old('email') }}" required placeholder="nim@student.ums.ac.id" class="w-full px-3.5 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-sm">
              @error('email') <p class="text-xs text-[var(--busy-ink)] mt-1">{{ $message }}</p> @enderror
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-3">
            <div>
              <label for="password" class="block text-xs font-bold mb-1">{{ $isId ? 'Kata Sandi' : 'Password' }}</label>
              <input id="password" name="password" type="password" required minlength="8" class="w-full px-3.5 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-sm">
              @error('password') <p class="text-xs text-[var(--busy-ink)] mt-1">{{ $message }}</p> @enderror
            </div>
            <div>
              <label for="password_confirmation" class="block text-xs font-bold mb-1">{{ $isId ? 'Ulangi Sandi' : 'Confirm Password' }}</label>
              <input id="password_confirmation" name="password_confirmation" type="password" required minlength="8" class="w-full px-3.5 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-sm">
            </div>
          </div>

          <button type="submit" class="w-full py-2.5 rounded-[10px] bg-[var(--accent)] text-[var(--accent-ink)] text-sm font-semibold hover:bg-[var(--accent-hover)]">
            {{ $isId ? 'Buat Akun & Masuk' : 'Create Account & Sign In' }}
          </button>
        </form>
      </div>
    </div>
  </div>
@endsection
