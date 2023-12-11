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
        Schema::create('car_rides', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('driver_id')->constrained()->onDelete('cascade');
            $table->string('from_long');
            $table->string('from_lat');
            $table->string('to_long');
            $table->string('to_lat');
            $table->decimal('price', 10, 2);
            $table->decimal('rate');
            $table->time('duration');
            $table->enum('status', ['pending', 'accepted', 'finished', 'canceled', 'denied']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('car_rides');
    }
};