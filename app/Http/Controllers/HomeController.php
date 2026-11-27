<?php

namespace App\Http\Controllers;

use App\Models\JadwalRutin;
use App\Models\Lab;
use App\Models\Reservasi;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class HomeController extends Controller
{
    public const TIME_SLOTS = [
        ['07:00', '09:00'],
        ['09:00', '11:00'],
        ['11:00', '13:00'],
        ['13:00', '15:00'],
        ['15:00', '17:00'],
        ['17:00', '19:00'],
        ['19:00', '21:00'],
    ];

    public function index(): View
    {
        $wibNow = Carbon::now('Asia/Jakarta');
        $today = $wibNow->toDateString();
        $dow = $wibNow->dayOfWeekIso;
        $nowMinutes = $wibNow->hour * 60 + $wibNow->minute;

        $labs = Lab::orderBy('kode_lab')->get();
        $rutins = JadwalRutin::where('hari', $dow)->get()->groupBy('lab_id');
        $bookings = Reservasi::whereDate('tanggal', $today)
            ->whereIn('status', ['approved', 'pending'])
            ->get()
            ->groupBy('lab_id');

        $totalOpenToday = 0;
        $activeLabsCount = $labs->where('status', 'aktif')->count();

        $labCards = $labs->map(function (Lab $lab) use ($rutins, $bookings, $dow, $nowMinutes, &$totalOpenToday) {
            $labRutins = $rutins->get($lab->id, collect());
            $labBookings = $bookings->get($lab->id, collect());
            $openCount = 0;

            if ($lab->status === 'aktif' && $dow !== 7) {
                foreach (self::TIME_SLOTS as [$start, $end]) {
                    $hasRutin = $labRutins->contains(fn ($j) => $j->jam_mulai < $end && $j->jam_selesai > $start);
                    $hasBooking = $labBookings->contains(fn ($r) => $r->jam_mulai < $end && $r->jam_selesai > $start);
                    if (! $hasRutin && ! $hasBooking) {
                        $openCount++;
                    }
                }
            }

            $totalOpenToday += $openCount;

            $liveLabel = __('Maintenance');
            $liveTone = 'maintenance';
            if ($lab->status === 'aktif') {
                if ($dow === 7) {
                    $liveLabel = app()->getLocale() === 'id' ? 'Tutup (Minggu)' : 'Closed (Sunday)';
                } else {
                    $inClass = $labRutins->first(fn ($j) => self::toMin($j->jam_mulai) <= $nowMinutes && $nowMinutes < self::toMin($j->jam_selesai));
                    $inBooking = $labBookings->first(fn ($r) => $r->status === 'approved' && self::toMin($r->jam_mulai) <= $nowMinutes && $nowMinutes < self::toMin($r->jam_selesai));

                    if ($inClass) {
                        $liveLabel = (app()->getLocale() === 'id' ? 'Dipakai: ' : 'In class: ').$inClass->mata_kuliah;
                        $liveTone = 'busy';
                    } elseif ($inBooking) {
                        $liveLabel = (app()->getLocale() === 'id' ? 'Ter-reservasi s.d. ' : 'Reserved until ').$inBooking->jam_selesai;
                        $liveTone = 'reserved';
                    } elseif ($nowMinutes < 420 || $nowMinutes >= 1260) {
                        $liveLabel = app()->getLocale() === 'id' ? 'Di luar jam layanan' : 'After hours (07:00-21:00)';
                    } else {
                        $liveLabel = app()->getLocale() === 'id' ? 'Kosong sekarang' : 'Open now';
                        $liveTone = 'open';
                    }
                }
            }

            return [
                'lab' => $lab,
                'openCount' => $openCount,
                'totalSlots' => count(self::TIME_SLOTS),
                'liveLabel' => $liveLabel,
                'liveTone' => $liveTone,
            ];
        });

        return view('home', [
            'wibTime' => $wibNow->format('H:i').' WIB',
            'activeLabsCount' => $activeLabsCount,
            'totalLabsCount' => $labs->count(),
            'totalOpenToday' => $totalOpenToday,
            'labCards' => $labCards,
        ]);
    }

    public function switchLocale(string $lang): RedirectResponse
    {
        if (in_array($lang, ['en', 'id'], true)) {
            session(['locale' => $lang]);
        }

        return back();
    }

    public static function toMin(string $hhmm): int
    {
        [$h, $m] = array_map('intval', explode(':', $hhmm));

        return $h * 60 + $m;
    }
}
