<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\email;
use App\Http\Controllers\LokerController;
use App\Http\Controllers\MdLokerController;
use Illuminate\Http\Request;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PerusahaanController;

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
        // 'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('WelcomePage');

// Route link Start

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

Route::get('/loker', function () {
    return Inertia::render('LokerNew');
});

Route::get('/loker/perusahaan/{id}', [MdLokerController::class, 'show_detail_perusahaan_loker']);

Route::get('/loker/pekerjaan/{id}', [MdLokerController::class, 'show_detail_pekerjaan']);

// Route::get('/lowongan_kerja', function () {
//     return view('loker.loker');
// });

Route::get('/lowongan_kerja', [MdLokerController::class, 'loker']);

Route::post('/search', [MdLokerController::class, 'search']);

// Nonaktifkan pemeriksaan CSRF sementara
// Route::post('/search', [MdLokerController::class, 'search'])->withoutMiddleware(['verifyCsrfToken']);

// Route::get('/login', [LoginController::class, 'index'])->name('login');

Route::get('/faq', function () {
    return Inertia::render('Faq');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/finish', function () {
    return Inertia::render('Finish');
})->name('finish');


Route::post('/formulir/submit/', [MdLokerController::class, 'submit_loker']);

Route::get('/form/view_pro', [MdLokerController::class, 'index_profesional']);
Route::get('/form/view_intern', [MdLokerController::class, 'index_internship']);
Route::resource('form', MdLokerController::class);

Route::get('/job/internship/{id}', [MdLokerController::class, 'show_detail_loker_intern']);
Route::get('/job/profesional/{id}', [MdLokerController::class, 'show_detail_loker_pro']);

Route::get('/job/formulir/{id}', [MdLokerController::class, 'show_lamar_loker']);

Route::get('/provinsi', [MdLokerController::class, 'provinsi']);
Route::get('/kabupaten/{id}', [MdLokerController::class, 'kabupaten']);
Route::get('/kecamatan/{id1}/{id2}', [MdLokerController::class, 'kecamatan']);

// Route Link End

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login_proses', [LoginController::class, 'login_proses'])->name('login_proses');

Route::get('/register', [LoginController::class, 'register'])->name('register');
Route::post('/register_proses', [LoginController::class, 'register_proses'])->name('register_proses');

Route::get('/json_perusahaan', [PerusahaanController::class, 'index'])->name('json_perusahaan');


Route::group(['prefix' => 'admin', 'middleware' =>  ['auth'], 'as' => 'admin.'], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('DashboardPage');
        // })->middleware(['auth', 'verified'])->name('dashboard');
    })->name('dashboard');

    Route::get('/dashboard/beranda', function () {
        return Inertia::render('BerandaDS');
        // })->middleware(['auth', 'verified'])->name('dashboard');
    })->name('beranda');

    Route::get('/dashboard/profil_perusahaan', function () {
        return Inertia::render('ProfilPerusahaanDS');
        // })->middleware(['auth', 'verified'])->name('dashboard');
    })->name('profil_perusahaan');

    Route::get('/dashboard/lowongan_pekerjaan', function () {
        return Inertia::render('LokerDS');
        // })->middleware(['auth', 'verified'])->name('dashboard');
    })->name('lowongan_pekerjaan');

    Route::get('/dashboard/perusahaan_dashboard', function () {
        return Inertia::render('TablePerusahaan');
        // })->middleware(['auth', 'verified'])->name('dashboard');
    })->name('perusahaan_dashboard');

    Route::get('/table', function () {
        return Inertia::render('TableDashboard');
    });

    Route::get('/table/tambah_baru', [MdLokerController::class, 'tambah_baru']);
    Route::get('/perusahaan_list', [MdLokerController::class, 'perusahaan_list']);

    Route::get('/table/viewskill/{id}', [MdLokerController::class, 'view_skill']);

    Route::get('/table/edit/{id}', [MdLokerController::class, 'edit_loker']);
    Route::get('/table/hapus/{id}', [MdLokerController::class, 'delete_loker']);
    Route::post('/table/update_loker', [MdLokerController::class, 'update_loker']);

    Route::get('/perusahaan_db', [PerusahaanController::class, 'perusahaan'])->name('perusahaan_db');

    Route::get('/fetch_perusahaan', [PerusahaanController::class, 'fetchPerusahaan'])->name('fetch_perusahaan');

    // Route::get('/image_link', [PerusahaanController::class, 'image_link'])->name('image_link');

    Route::post('/store', [PerusahaanController::class, 'store'])->name('store_perusahaan');
    Route::get('/perusahaan/tambah_baru', [PerusahaanController::class, 'tambah_baru_perusahaan']);
    Route::get('/perusahaan/edit/{id}', [PerusahaanController::class, 'edit_perusahaan'])->name('edit_perusahaan');
    Route::get('/perusahaan/hapus/{id}', [PerusahaanController::class, 'hapus_perusahaan'])->name('hapus_perusahaan');
    Route::post('/perusahaan/update_perusahaan', [PerusahaanController::class, 'update'])->name('update_perusahaan');

    Route::resource('perusahaan', PerusahaanController::class);

    Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
    // Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
});

// Route::middleware('auth')->group(function () {
    //     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    //     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    //     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // });

// require __DIR__ . '/auth.php';
