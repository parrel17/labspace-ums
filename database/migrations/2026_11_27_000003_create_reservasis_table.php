<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('reservasis', function (Blueprint $table) {
            $table->id();
            $table->string('kode_tiket', 30)->unique();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('lab_id')->constrained('labs')->cascadeOnDelete();
            $table->date('tanggal');
            $table->string('jam_mulai', 5);
            $table->string('jam_selesai', 5);
            $table->unsignedInteger('peserta');
            $table->string('keperluan');
            $table->text('anggota');
            $table->string('status', 20)->default('pending');
            $table->text('catatan_laboran')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reservasis');
    }
};
