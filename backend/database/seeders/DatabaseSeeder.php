<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Car;
use App\Models\Driver;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        Role::create([
            "name" => 'admin',
        ]);
        Role::create([
            "name" => 'passenger',
        ]);
        Role::create([
            "name" => 'driver',
        ]);

        User::factory()->create([
            'name' => 'Admin',
            'role_id' => 1,
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'location' => 'somewhere',
            'img_url' => 'img.png',
            'phone_number' => 12355,

        ]);
        User::factory()->create([
            'name' => 'Driver 1',
            'role_id' => 3,
            'email' => 'driver1@example.com',
            'password' => Hash::make('password'),
            'location' => 'somewhere',
            'img_url' => 'img.png',
            'phone_number' => 12355,

        ]);
        User::factory()->create([
            'name' => 'Driver 2',
            'role_id' => 3,
            'email' => 'driver2@example.com',
            'password' => Hash::make('password'),
            'location' => 'somewhere',
            'img_url' => 'img.png',
            'phone_number' => 12355,

        ]);
        User::factory()->create([
            'name' => 'Passenger 1',
            'role_id' => 2,
            'email' => 'passenger1@example.com',
            'password' => Hash::make('password'),
            'location' => 'somewhere',
            'img_url' => 'img.png',
            'phone_number' => 12355,

        ]);
        User::factory()->create([
            'name' => 'Passenger 2',
            'role_id' => 2,
            'email' => 'passenger2@example.com',
            'password' => Hash::make('password'),
            'location' => 'somewhere',
            'img_url' => 'img.png',
            'phone_number' => 12355,
        ]);
        Driver::create([
            'user_id' => 2,
            'availability' => 'active'
        ]);
        Driver::create([
            'user_id' => 3,
            'availability' => 'non_active'
        ]);
        Car::create([
            'driver_id' => 1,
            'model' => 'A1',
            'color' => 'red',
            'plate_number' => 'yolomolo'
        ]);
        Car::create([
            'driver_id' => 2,
            'model' => 'B2',
            'color' => 'white',
            'plate_number' => 'Nadim'
        ]);
    }
}
