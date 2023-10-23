<?php

namespace App\Http\Controllers;

use App\Models\Stuff;
use App\Http\Requests\StoreStuffRequest;
use App\Http\Requests\UpdateStuffRequest;
use App\Models\Department;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;

use Inertia\Inertia;

class StuffController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $staffs = Stuff::with('user')->paginate(10);
        return Inertia::render("Staffs/Index", ["staffs" => $staffs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $departments = Department::all();
        return Inertia::render("Staffs/Create", ["departments" => $departments]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStuffRequest $request)
    {
        // return $request;
        $validators = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            "phone_number" => "required|numeric|min:9",
            "date_of_birth" => "required|date",
            "gender" => "required|in:male,female",
            "role" => "required|in:teacher,stuff",
            "address" => "required|min:50",
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            "department_id" => "required",
            'photos' => "required|array"
        ]);
        if ($validators->fails()) {
            session()->flash('message', 'Registration has been failed.');
            session()->flash('type', 'error');

            return redirect("/create-staff")->with("errors", $validators->errors()->messages());
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
        if ($request->role == "stuff") {
            $staff = Stuff::create([
                "name" => $request->name,
                "date_of_birth" => $request->date_of_birth,
                "address" => $request->address,
                "phone_number" => $request->phone_number,
                "department_id" => $request->department_id,
                "gender" => $request->gender,
                "user_id" => $user->id,
            ]);
        }

        // $teacher_grade_arr = [];
        // foreach ($request->grade_id as $grade) {
        //     $teacher_grade_arr[] = [
        //         "teacher_id" => $teacher->id,
        //         "grade_id" => $grade
        //     ];
        // }
        // TeacherGrade::insert($teacher_grade_arr);

        // $teacher_subject_arr = [];
        // foreach ($request->subject_id as $subject) {
        //     $teacher_subject_arr[] = [
        //         "teacher_id" => $teacher->id,
        //         "subject_id" => $subject
        //     ];
        // }
        // TeacherSubject::insert($teacher_subject_arr);


        session()->flash('message', 'A staff is successfully registered');
        session()->flash('type', 'success');
        // return Inertia::render("Teachers/Create", ["message" => "A teacher is created successfully", "grades" => $grades, "errors" => $request->session()->get('errors')]);
        // return redirect("/create-teacher")->with('errors', $request->session()->get('errors'));
        return redirect("/create-staff");
    }

    /**
     * Display the specified resource.
     */
    public function show(Stuff $stuff)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stuff $stuff)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStuffRequest $request, Stuff $stuff)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stuff $stuff)
    {
        //
    }
}
