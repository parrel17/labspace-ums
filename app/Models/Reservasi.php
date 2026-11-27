<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Reservasi extends Model
{
    protected $table = 'reservasis';

    protected $fillable = [
        'kode_tiket',
        'user_id',
        'lab_id',
        'tanggal',
        'jam_mulai',
        'jam_selesai',
        'peserta',
        'keperluan',
        'anggota',
        'status',
        'catatan_laboran',
    ];

    protected function casts(): array
    {
        return [
            'tanggal' => 'date:Y-m-d',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function lab(): BelongsTo
    {
        return $this->belongsTo(Lab::class);
    }
}
