<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Http\Requests\StoreTeacherRequest;
use App\Http\Requests\UpdateTeacherRequest;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Teachers/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeacherRequest $request)
    {
        return $request;
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     "phone_number" => "required|numeric|min:9",
        //     "date_of_birth" => "required|date",
        //     "gender" => "required|in:male,female",
        //     "role" => "required|in:teacher,stuff",
        //     "address" => "required|min:50",
        //     'email' => 'required|string|email|max:255|unique:' . User::class,
        //     'password' => ['required', 'confirmed', Rules\Password::defaults()],
        //     // 'photos' =>
        // ]);
        // logger($request->file('photos'));
        // if ($request->hasFile("photos")) {
        //     $photos = $request->file('photos');
        //     $firstPhoto = $photos[0];
        //     $savedPhoto = $firstPhoto->store("public/media");
        //     $photoUrl = asset(Storage::url($savedPhoto));
        // }

        // // $user = User::create([
        // //     "name" => $request->name,
        // //     'email' => $request->email,
        // //     'password' => Hash::make($request->password),
        // //     'role' => $request->role,
        // //     'user_photo' => $photoUrl
        // // ]);
        // // if ($request->role == "teacher") {
        // //     Teacher::create([
        // //         "name" => $request->name,
        // //         "date_of_birth" => $request->date_of_birth,
        // //         "address" => $request->address,
        // //         "phone_number" => $request->phone_number,
        // //         "gender" => $request->gender,
        // //         "user_id" => $user->id,
        // //         "grade_id" => $request->grade_id
        // //     ]);
        // // } else if ($request->role == "stuff") {
        // //     Stuff::create([
        // //         "name" => $request->name,
        // //         "date_of_birth" => $request->date_of_birth,
        // //         "address" => $request->address,
        // //         "phone_number" => $request->phone_number,
        // //         "gender" => $request->gender,
        // //         "user_id" => $user->id,
        // //         "department_id" => $request->department_id
        // //     ]);
        // // }
        // return response()->json(["message" => "User created successfully"]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Teacher $teacher)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Teacher $teacher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeacherRequest $request, Teacher $teacher)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teacher $teacher)
    {
        //
    }
}
