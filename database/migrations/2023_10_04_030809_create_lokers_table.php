<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lokers', function (Blueprint $table) {
            $table->id();
            $table->string('pekerjaan')->nullable();
            $table->string('perusahaan')->nullable();
            $table->string('deskripsi')->nullable();
            $table->string('jenis_pekerjaan')->nullable();
            $table->date('batas_lamaran')->nullable();
            $table->mediumText('isi_konten')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lokers');
    }
};
