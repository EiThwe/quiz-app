<?php

namespace Database\Seeders;

use App\Models\Subject;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subjects_3 = ["Myanmar", "English", "Mathematics", "Science", "Geology", "History"];
        for ($i = 5; $i <= 8; $i++) {
            $data = [];

            for ($x = 0; $x < count($subjects_3); $x++) {
                $data[] = [
                    "name" => $subjects_3[$x],
                    "grade_id" => $i,
                    "created_at" => now(),
                    "updated_at" => now(),
                ];
            }

            Subject::insert($data);
        }

        $subjects_4 = ["Myanmar", "English", "Mathematics", "Chemistry", "Physics", "Biology"];
        for ($i = 9; $i <= 10; $i++) {
            $data = [];

            for ($x = 0; $x < count($subjects_4); $x++) {
                $data[] = [
                    "name" => $subjects_4[$x],
                    "grade_id" => $i,
                    "created_at" => now(),
                    "updated_at" => now(),
                ];
            }

            Subject::insert($data);
        }
    }
}
