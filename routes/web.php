<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\email;
use App\Http\Controllers\LokerController;
use App\Http\Controllers\MdLokerController;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route link Start

// Route::get('/', function () {
//     return Inertia::render('Welcome');
// });

Route::get('/formulir', function () {
    return inertia('FormEmail');
});

// Route::post('/send-email', [EmailController::class, 'sendEmail']);

Route::get('/companyprofile', function () {
    return Inertia::render('CompanyProfile');
});

Route::get('/job', function () {
    return Inertia::render('Job');
});

Route::get('/job/internship', function () {
    return Inertia::render('Internship');
});

Route::get('/job/profesional', function () {
    return Inertia::render('Profesional');
});

Route::get('/job/detail', function () {
    return Inertia::render('DetailLoker');
});

Route::get('/faq', function () {
    return Inertia::render('Faq');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/finish', function () {
    return Inertia::render('Finish');
});

// Route::get('/table', function () {
//     return Inertia::render('DataDashboard');
// });

Route::get('/table', function () {
    return Inertia::render('TableDashboard');
});

Route::get('/table/edit', function () {
    return Inertia::render('EditLoker');
});

Route::resource('form', MdLokerController::class);
// Route::resource('form', LokerController::class);

// Route Link End

// Route::resource('form', FormController::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
    // })->middleware(['auth', 'verified'])->name('dashboard');
})->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
