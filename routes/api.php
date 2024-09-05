<?php

use App\Http\Controllers\MdLokerController;
use App\Http\Controllers\MKaryawanController;
use App\Http\Controllers\PerusahaanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('/formulir/submit/', [MKaryawanController::class, 'submit_loker']);
Route::post('/formulir/submit/', [MdLokerController::class, 'submit_loker']);
// Route::post('/formulir/submit_custom/', [MdLokerController::class, 'submit_loker_custom']);

// Route::get('/provinsi', [MdLokerController::class, 'provinsi']);
// Route::get('/kabupaten/{id}', [MdLokerController::class, 'kabupaten']);
// Route::get('/kecamatan/{id1}/{id2}', [MdLokerController::class, 'kecamatan']);

Route::get('/kabupaten', [MdLokerController::class, 'kabupaten']);

Route::resource('form', MdLokerController::class);

Route::get('/json_perusahaan', [PerusahaanController::class, 'json_perusahaan'])->name('json_perusahaan');

Route::get('/json_perusahaan_table', [PerusahaanController::class, 'json_perusahaan_table'])->name('json_perusahaan_table');

Route::post('/search', [MdLokerController::class, 'loker'])->name('search');

Route::get('/skill', [MdLokerController::class, 'skill']);

Route::get('/api_program/{id}', [MdLokerController::class, 'api_program']);
Route::get('/api_program_perusahaan/{id}', [MdLokerController::class, 'api_program_perusahaan']);

Route::get('/api_program_id/{id1}/{id2}', [MdLokerController::class, 'api_program_id']);

Route::get('/perusahaan', [MdLokerController::class, 'api_all_perusahaan']);

Route::get('/perusahaan/{id}', [MdLokerController::class, 'api_perusahaan']);

Route::get('/perusahaan_select/{id}', [MdLokerController::class, 'api_perusahaan_selected']);
Route::get('/api_form', [MdLokerController::class, 'api_form']);

Route::get('/time_expired', [MdLokerController::class, 'time_expired']);

Route::post('/translate', [MdLokerController::class, 'translate']);
