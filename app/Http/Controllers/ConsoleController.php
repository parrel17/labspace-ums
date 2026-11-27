<?php

namespace App\Http\Controllers;

use App\Models\JadwalRutin;
use App\Models\Lab;
use App\Models\Reservasi;
use Illuminate\View\View;

class ConsoleController extends Controller
{
    public function index(): View
    {
        return view('console', [
            'pendingCount' => Reservasi::where('status', 'pending')->count(),
            'approvedCount' => Reservasi::where('status', 'approved')->count(),
            'activeLabsCount' => Lab::where('status', 'aktif')->count(),
            'totalLabsCount' => Lab::count(),
            'rutinCount' => JadwalRutin::count(),
            'recentBookings' => Reservasi::with(['user', 'lab'])->latest()->take(6)->get(),
        ]);
    }
}
