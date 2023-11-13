<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class md_loker extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function skills()
    {
        return $this->hasMany(Skill::class, 'id_kotak_loker', 'id')->whereNull('deleted_at');
    }
}
