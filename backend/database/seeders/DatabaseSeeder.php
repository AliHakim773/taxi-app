<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\ChatMessages;
use App\Models\Drivers;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use SebastianBergmann\CodeCoverage\Driver\Driver;

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
            'name' => 'Test User',
            'role_id' => 1,
            'email' => 'test@example.com',
            'password' => Hash::make('password'),
            'location' => 'somewhere',
            'img_url' => 'img.png',
            'phone_number' => 12355,

        ]);
        User::factory()->create([
            'name' => 'Test User',
            'role_id' => 3,
            'email' => 'test1@example.com',
            'password' => Hash::make('password'),
            'location' => 'somewhere',
            'img_url' => 'img.png',
            'phone_number' => 12355,

        ]);
        User::factory()->create([
            'name' => 'Test User',
            'role_id' => 3,
            'email' => 'test2@example.com',
            'password' => Hash::make('password'),
            'location' => 'somewhere',
            'img_url' => 'img.png',
            'phone_number' => 12355,

        ]);
        User::factory()->create([
            'name' => 'Test User',
            'role_id' => 2,
            'email' => 'test3@example.com',
            'password' => Hash::make('password'),
            'location' => 'somewhere',
            'img_url' => 'img.png',
            'phone_number' => 12355,

        ]);
        User::factory()->create([
            'name' => 'Test User',
            'role_id' => 2,
            'email' => 'test4@example.com',
            'password' => Hash::make('password'),
            'location' => 'somewhere',
            'img_url' => 'img.png',
            'phone_number' => 12355,
        ]);
        ChatMessages::create([
            'sender_id'=>1,
            'receiver_id'=>2,
            "content"=>"Hello team leader ali"
        ]);
        ChatMessages::create([
            'sender_id'=>1,
            'receiver_id'=>3,
            "content"=>"Hello team leader ali"
        ]);
        ChatMessages::create([
            'sender_id'=>1,
            'receiver_id'=>4,
            "content"=>"Hello team leader ali"
        ]);
        ChatMessages::create([
            'sender_id'=>2,
            'receiver_id'=>1,
            "content"=>"Hello team leader ali"
        ]);
    }
}
