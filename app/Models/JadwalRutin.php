<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JadwalRutin extends Model
{
    protected $table = 'jadwal_rutin';

    protected $fillable = [
        'lab_id',
        'kelas',
        'mata_kuliah',
        'pengampu',
        'hari',
        'jam_mulai',
        'jam_selesai',
    ];

    public function lab(): BelongsTo
    {
        return $this->belongsTo(Lab::class);
    }
}
