<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Http\Requests\StoreTeacherRequest;
use App\Http\Requests\UpdateTeacherRequest;
use App\Models\Grade;

use App\Models\Subject;
use App\Models\TeacherGrade;
use App\Models\TeacherSubject;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class TeacherController extends Controller
{
    public function index()
    {
        $teachers = Teacher::with('user')->paginate(10);
        return Inertia::render("Teachers/Index", ["teachers" => $teachers]);
    }

    public function create()
    {
        $grades = Grade::all();
        $subjects = Subject::all();
        return Inertia::render("Teachers/Create", ["grades" => $grades, "subjects" => $subjects]);
    }

    public function store(StoreTeacherRequest $request)
    {
        // logger($request->hasFile("photos"));


        $validators = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            "phone_number" => "required|numeric|min:9",
            "date_of_birth" => "required|date",
            "gender" => "required|in:male,female",
            "role" => "required|in:teacher,stuff",
            "address" => "required|min:50",
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            "grade_id" => "required|array",
            "subject_id" => "required|array",
            'photos' => "required|array"
        ]);
        if ($validators->fails()) {
            session()->flash('message', 'Registration has been failed.');
            session()->flash('type', 'error');

            return redirect("/create-teacher")->with("errors", $validators->errors()->messages());
        }

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
            $teacher = Teacher::create([
                "name" => $request->name,
                "date_of_birth" => $request->date_of_birth,
                "address" => $request->address,
                "phone_number" => $request->phone_number,
                "gender" => $request->gender,
                "user_id" => $user->id,
            ]);
        }

        $teacher_grade_arr = [];
        foreach ($request->grade_id as $grade) {
            $teacher_grade_arr[] = [
                "teacher_id" => $teacher->id,
                "grade_id" => $grade
            ];
        }
        TeacherGrade::insert($teacher_grade_arr);

        $teacher_subject_arr = [];
        foreach ($request->subject_id as $subject) {
            $teacher_subject_arr[] = [
                "teacher_id" => $teacher->id,
                "subject_id" => $subject
            ];
        }
        TeacherSubject::insert($teacher_subject_arr);


        session()->flash('message', 'A teacher is successfully registered');
        session()->flash('type', 'success');
        // return Inertia::render("Teachers/Create", ["message" => "A teacher is created successfully", "grades" => $grades, "errors" => $request->session()->get('errors')]);
        // return redirect("/create-teacher")->with('errors', $request->session()->get('errors'));
        return redirect("/create-teacher");
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
