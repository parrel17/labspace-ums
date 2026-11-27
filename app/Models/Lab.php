<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lab extends Model
{
    protected $fillable = [
        'kode_lab',
        'nama_lab',
        'nama_lab_id',
        'kapasitas_pc',
        'spesifikasi',
        'status',
    ];

    public function jadwalRutin(): HasMany
    {
        return $this->hasMany(JadwalRutin::class);
    }

    public function reservasis(): HasMany
    {
        return $this->hasMany(Reservasi::class);
    }

    public function displayName(?string $locale = null): string
    {
        $loc = $locale ?? app()->getLocale();
        return ($loc === 'id' && $this->nama_lab_id) ? $this->nama_lab_id : $this->nama_lab;
    }
}
