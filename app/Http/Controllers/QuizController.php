<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $questions = Question::with(["answers" => function ($query) {
            $query->inRandomOrder();
        }])->inRandomOrder()->get();
        return Inertia::render("Quiz", [
            "questions" => $questions
        ]);
    }
    public function result(Request $request)
    {
        $percentage = ($request->total_score / $request->total_question) * 100;
        if ($percentage >= 80 && $percentage <= 100) {
            $comment = "Congratulations😄";
        } else if ($percentage >= 60 && $percentage < 80) {
            $comment = "Almost there!!!😃";
        } else if ($percentage >= 40 && $percentage < 60) {
            $comment = "Not Bad😉";
        } else $comment = "Try Again😥";
         return Inertia::render("Result",["percentage"=>$percentage,"comment"=>$comment]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
