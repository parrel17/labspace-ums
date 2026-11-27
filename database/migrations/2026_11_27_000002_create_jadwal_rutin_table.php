<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('jadwal_rutin', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lab_id')->constrained('labs')->cascadeOnDelete();
            $table->string('kelas', 50);
            $table->string('mata_kuliah');
            $table->string('pengampu');
            $table->unsignedTinyInteger('hari');
            $table->string('jam_mulai', 5);
            $table->string('jam_selesai', 5);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('jadwal_rutin');
    }
};
