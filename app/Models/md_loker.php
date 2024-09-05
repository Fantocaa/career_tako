<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;

class md_loker extends Model implements TranslatableContract
{
    use HasFactory, SoftDeletes, Translatable;

    public $translatedAttributes = ['isi_konten', 'deskripsi'];
    protected $fillable = ['pekerjaan', 'jenis_pekerjaan', 'batas_lamaran', 'lokasi', 'status'];

    protected $casts = [
        'deskripsi' => 'array',
        'isi_konten' => 'array',
    ];

    public function skills()
    {
        return $this->hasMany(Skill::class, 'id_kotak_loker', 'id')->whereNull('deleted_at');
    }
}
