<?php

use App\Http\Controllers\ConsoleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScheduleController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/schedule', [ScheduleController::class, 'index'])->name('schedule');
Route::get('/dashboard', fn () => redirect()->route('schedule'))->name('dashboard');
Route::get('/locale/{lang}', [HomeController::class, 'switchLocale'])->name('locale.switch');

Route::middleware(['auth', 'role:laboran'])->group(function () {
    Route::get('/console', [ConsoleController::class, 'index'])->name('console');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
