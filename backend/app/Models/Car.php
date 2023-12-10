<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use SebastianBergmann\CodeCoverage\Driver\Driver;

class Car extends Model
{
    use HasFactory;

    public function user(): BelongsTo
    {
        return $this->belongsTo(Driver::class);
    }
}
