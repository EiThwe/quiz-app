<?php

namespace Database\Seeders;

use App\Models\GradeSubject;
use App\Models\Subject;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GradeSubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subjects_3 = [1, 2, 3, 4, 5, 6];
        for ($i = 5; $i <= 8; $i++) {
            $data = [];

            for ($x = 0; $x < count($subjects_3); $x++) {
                $data[] = [
                    "subject_id" => $subjects_3[$x],
                    "grade_id" => $i,
                ];
            }

            GradeSubject::insert($data);
        }

        $subjects_4 = [1, 2, 3, 7, 8, 9, 10];
        for ($i = 9; $i <= 10; $i++) {
            $data = [];

            for ($x = 0; $x < count($subjects_4); $x++) {
                $data[] = [
                    "subject_id" => $subjects_4[$x],
                    "grade_id" => $i,
                ];
            }

            GradeSubject::insert($data);
        }
    }
}
