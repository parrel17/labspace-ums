<?php

namespace App\Http\Controllers;

use App\Models\JadwalRutin;
use App\Models\Lab;
use App\Models\Reservasi;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ScheduleController extends Controller
{
    public function index(Request $request): View
    {
        $wibNow = Carbon::now('Asia/Jakarta');
        $dateStr = (string) $request->query('date', $wibNow->toDateString());
        try {
            $selectedDate = Carbon::parse($dateStr, 'Asia/Jakarta');
        } catch (\Throwable) {
            $selectedDate = $wibNow->copy();
        }

        $isoDate = $selectedDate->toDateString();
        $dow = $selectedDate->dayOfWeekIso;
        $statusFilter = (string) $request->query('status', 'all');
        $query = trim((string) $request->query('q', ''));

        $labs = Lab::orderBy('kode_lab')->get();
        $rutins = JadwalRutin::where('hari', $dow)->get()->groupBy('lab_id');
        $bookings = Reservasi::with('user')
            ->whereDate('tanggal', $isoDate)
            ->whereIn('status', ['approved', 'pending'])
            ->get()
            ->groupBy('lab_id');

        $totalOpen = 0;
        $totalPracticum = 0;
        $totalBooked = 0;

        $cards = $labs->map(function (Lab $lab) use ($rutins, $bookings, $dow, &$totalOpen, &$totalPracticum, &$totalBooked) {
            $labRutins = $rutins->get($lab->id, collect());
            $labBookings = $bookings->get($lab->id, collect());
            $slots = [];
            $openCount = 0;

            foreach (HomeController::TIME_SLOTS as [$start, $end]) {
                if ($lab->status === 'maintenance') {
                    $slots[] = ['start' => $start, 'end' => $end, 'kind' => 'maintenance', 'title' => 'Maintenance', 'sub' => ''];
                    continue;
                }
                if ($dow === 7) {
                    $slots[] = [
                        'start' => $start,
                        'end' => $end,
                        'kind' => 'maintenance',
                        'title' => app()->getLocale() === 'id' ? 'Tutup (Minggu)' : 'Closed',
                        'sub' => '',
                    ];
                    continue;
                }

                $rutin = $labRutins->first(fn ($j) => $j->jam_mulai < $end && $j->jam_selesai > $start);
                if ($rutin) {
                    $totalPracticum++;
                    $slots[] = [
                        'start' => $start,
                        'end' => $end,
                        'kind' => 'praktikum',
                        'title' => $rutin->mata_kuliah,
                        'sub' => $rutin->kelas,
                    ];
                    continue;
                }

                $booking = $labBookings->first(fn ($r) => $r->jam_mulai < $end && $r->jam_selesai > $start);
                if ($booking) {
                    $totalBooked++;
                    $slots[] = [
                        'start' => $start,
                        'end' => $end,
                        'kind' => $booking->status === 'approved' ? 'reserved' : 'pending',
                        'title' => $booking->status === 'approved'
                            ? (app()->getLocale() === 'id' ? 'Ter-reservasi' : 'Reserved')
                            : 'Pending',
                        'sub' => $booking->user?->name ?? '',
                    ];
                    continue;
                }

                $openCount++;
                $totalOpen++;
                $slots[] = [
                    'start' => $start,
                    'end' => $end,
                    'kind' => 'open',
                    'title' => app()->getLocale() === 'id' ? 'Tersedia' : 'Available',
                    'sub' => app()->getLocale() === 'id' ? 'Siap dipakai' : 'Ready to book',
                ];
            }

            return [
                'lab' => $lab,
                'slots' => $slots,
                'openCount' => $openCount,
            ];
        })->filter(function (array $card) use ($statusFilter, $query) {
            /** @var Lab $lab */
            $lab = $card['lab'];
            if ($statusFilter === 'available' && ! ($lab->status === 'aktif' && $card['openCount'] > 0)) {
                return false;
            }
            if ($statusFilter === 'aktif' && $lab->status !== 'aktif') {
                return false;
            }
            if ($statusFilter === 'maintenance' && $lab->status !== 'maintenance') {
                return false;
            }
            if ($query !== '') {
                $hay = strtolower($lab->kode_lab.' '.$lab->nama_lab.' '.$lab->nama_lab_id.' '.$lab->spesifikasi);
                if (! str_contains($hay, strtolower($query))) {
                    return false;
                }
            }

            return true;
        })->values();

        return view('schedule', [
            'wibTime' => $wibNow->format('H:i').' WIB',
            'selectedDate' => $isoDate,
            'prevDate' => $selectedDate->copy()->subDay()->toDateString(),
            'nextDate' => $selectedDate->copy()->addDay()->toDateString(),
            'todayDate' => $wibNow->toDateString(),
            'displayDate' => $selectedDate->locale(app()->getLocale())->isoFormat('dddd, D MMM YYYY'),
            'statusFilter' => $statusFilter,
            'query' => $query,
            'cards' => $cards,
            'totalLabs' => $labs->count(),
            'activeLabs' => $labs->where('status', 'aktif')->count(),
            'totalOpen' => $totalOpen,
            'totalPracticum' => $totalPracticum,
            'totalBooked' => $totalBooked,
            'pendingCount' => Reservasi::where('status', 'pending')->count(),
        ]);
    }
}
