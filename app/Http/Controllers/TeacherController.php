<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Http\Requests\StoreTeacherRequest;
use App\Http\Requests\UpdateTeacherRequest;
use App\Models\Grade;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class TeacherController extends Controller
{
    public function index()
    {
    }

    public function create()
    {
        $grades = Grade::all();
        return Inertia::render("Teachers/Create", ["grades" => $grades]);
    }

    public function store(StoreTeacherRequest $request)
    {
        logger($request->hasFile("photos"));

        $request->validate([
            'name' => 'required|string|max:255',
            "phone_number" => "required|numeric|min:9",
            "date_of_birth" => "required|date",
            "gender" => "required|in:male,female",
            "role" => "required|in:teacher,stuff",
            "address" => "required|min:50",
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'photos' => "required|array"
        ]);

        if ($request->hasFile("photos")) {
            $photos = $request->file('photos');
            $firstPhoto = $photos[0];
            $savedPhoto = $firstPhoto->store("public/media");
            $photoUrl = asset(Storage::url($savedPhoto));
        }

        $user = User::create([
            "name" => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'user_photo' => $photoUrl
        ]);
        if ($request->role == "teacher") {
            Teacher::create([
                "name" => $request->name,
                "date_of_birth" => $request->date_of_birth,
                "address" => $request->address,
                "phone_number" => $request->phone_number,
                "gender" => $request->gender,
                "user_id" => $user->id,
                "grade_id" => $request->grade_id
            ]);
        }
        return redirect("/create-teacher")->with(["message" => "A teacher is created successfully", "token" => rand(1, 10000)])->with('errors', $request->session()->get('errors'));;
    }

    public function show(Teacher $teacher)
    {
    }

    public function edit(Teacher $teacher)
    {
    }

    public function update(UpdateTeacherRequest $request, Teacher $teacher)
    {
    }

    public function destroy(Teacher $teacher)
    {
    }
}
