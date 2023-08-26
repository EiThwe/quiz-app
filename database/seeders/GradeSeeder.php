<?php

namespace Database\Seeders;

use App\Models\Grade;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $grades = [];
        for ($i = 1; $i <= 11; $i++) {
            $grades[] = [
                "name" => "Grade - " . $i,
                "created_at" => now(),
                "updated_at" => now()
            ];
        }
        Grade::insert($grades);
    }
}
