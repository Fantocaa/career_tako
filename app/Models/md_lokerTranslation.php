<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class md_lokerTranslation extends Model
{
    use HasFactory, SoftDeletes;

    // Tentukan atribut yang dapat diterjemahkan
    public $timestamps = false;
    protected $fillable = ['isi_konten', 'deskripsi'];

    // Relasi ke model utama
    public function mdLoker()
    {
        return $this->belongsTo(md_loker::class);
    }
}
