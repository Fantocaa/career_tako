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
        Schema::create('md_loker_translations', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('md_loker_id'); // Foreign key ke tabel md_loker
            $table->string('locale')->index(); // Kolom untuk bahasa
            $table->text('isi_konten')->nullable(); // Kolom terjemahan isi_konten
            $table->text('deskripsi')->nullable(); // Kolom terjemahan deskripsi
            $table->foreign('md_loker_id')->references('id')->on('md_loker')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('md_loker_translations');
    }
};
