<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Thwe Thwe',
            'email' => 'tth@gmail.com',
            'password' => Hash::make("11223344"),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'role' => 'super_admin'
        ]);

        $this->call([
            QuizSeeder::class,
            SubjectSeeder::class,
            GradeSeeder::class,
        ]);
    }
}
