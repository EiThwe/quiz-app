<?php

namespace App\Http\Controllers;

use App\Models\Stuff;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules;


class UserController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            "phone_number" => "required|numeric|min:9",
            "date_of_birth" => "required|date",
            "gender" => "required|in:male,female",
            "role" => "required|in:teacher,stuff",
            "address" => "required|min:50",
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'user_photo' => "required|file"
        ]);
        if ($request->hasFile("user_photo")) {
            $photo = $request->file('user_photo');
            $savedPhoto = $photo->store("public/media");
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
        } else if ($request->role == "stuff") {
            Stuff::create([
                "name" => $request->name,
                "date_of_birth" => $request->date_of_birth,
                "address" => $request->address,
                "phone_number" => $request->phone_number,
                "gender" => $request->gender,
                "user_id" => $user->id,
                "department_id" => $request->department_id
            ]);
        }
        return response()->json(["message" => "User created successfully"]);
    }
}
