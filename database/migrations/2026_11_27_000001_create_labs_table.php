<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('labs', function (Blueprint $table) {
            $table->id();
            $table->string('kode_lab', 20)->unique();
            $table->string('nama_lab');
            $table->string('nama_lab_id')->nullable();
            $table->unsignedInteger('kapasitas_pc');
            $table->string('spesifikasi');
            $table->string('status', 20)->default('aktif');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('labs');
    }
};
