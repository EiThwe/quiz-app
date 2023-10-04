<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $schoolDepartments = [
            "Administration",
            "Admissions",
            "Finance/Business Office",
            "Human Resources",
            "Student Services",
            "Facilities Management",
            "Information Technology (IT)",
            "Library/Media Center",
            "Transportation",
            "Security/Safety",
            "Public Relations/Communications",
            "Curriculum Development",
            "Testing and Assessment",
            "Legal and Compliance",
            "Extracurricular Activities"
        ];
        $departments = [];
        foreach ($schoolDepartments as $department) {
            $departments[] = [
                "name" => $department,
                "created_at" => now(),
                "updated_at" => now()
            ];
        }
        Department::insert($departments);
    }
}
