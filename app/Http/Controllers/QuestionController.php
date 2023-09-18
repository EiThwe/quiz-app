<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $questions = Question::with("answers")->get();
        return Inertia::render("Question/Index", [
            "questions" => $questions
        ]);
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
        $question = Question::create([
            "question" => $request->question
        ]);
        $answers = [];
        foreach ($request->answers as $answer) {
            $answer['question_id'] = $question->id;
            array_push($answers, $answer);
        }
        $question->answers()->createMany($answers);
       
        return redirect("/question")->with(["message" => "Questions and answers are created successfully", "token" => rand(1, 10000)]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Question $question)

    {
        $question->question = $request->question;
        $question->save();
        return redirect("/question")->with(["message" => "Question is updated successfully", "token" => rand(1, 10000)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        $question->delete();
        // return redirect("/question")->with(["message" => "Question is deleted successfully", "token" => rand(1, 10000)]);
    }
}
