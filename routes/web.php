<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\StuffController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Quiz', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get("/", [QuizController::class, 'index'])->name('quiz.index');
Route::post("/result", [QuizController::class, 'result'])->name('quiz.result');
// Route::get("/result", function () {
//     return Inertia::render('Result');
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource("question", QuestionController::class)->only(["index", "store", "update", "destroy"]);
    Route::put('/answers', [AnswerController::class, 'update'])->name('answer.update');

    Route::controller(TeacherController::class)->group(function () {
        Route::get('/teachers', 'index')->name("teacher.index");
        Route::get('/create-teacher', 'create')->name("teacher.create");
        Route::post('/teachers', 'store')->name("teacher.store");
    });
    Route::controller(StuffController::class)->group(function () {
        Route::get('/staffs', 'index')->name("staff.index");
        Route::get('/create-staff', 'create')->name("staff.create");
        Route::post('/staffs', 'store')->name("staff.store");
    });
    //    Route::post("/users/register",[UserController::class,'register'])->name("user.register");
});

Route::fallback(function () {
    return redirect()->route("quiz.index");
});

require __DIR__ . '/auth.php';
