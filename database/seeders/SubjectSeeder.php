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
        $subjects = ["Myanmar", "English", "Mathematics", "Science", "Geology", "History", "Chemistry", "Physics", "Biology", "Ecology"];
        $subjectsArr = [];
        foreach ($subjects as $subject) {
            $subjectsArr[] = [
                "name" => $subject,
                "created_at"=>now(),
                "updated_at"=>now()
            ];
        }
        Subject::insert($subjectsArr);
    }
}
