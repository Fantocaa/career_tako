<?php

namespace App\Http\Controllers;

use App\Models\md_loker;
use App\Http\Requests\Storemd_lokerRequest;
use App\Http\Requests\Updatemd_lokerRequest;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MdLokerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = md_loker::get();

        //return view
        // return response()->json([$posts]);
        return response()->json($posts);
    }

    public function provinsi()
    {
        $query = DB::select("SELECT kode,nama FROM wilayah WHERE CHAR_LENGTH(kode)= 2 ORDER BY nama");
        return response()->json($query);
    }

    public function kabupaten($id)
    {
        $query = DB::select("SELECT * FROM wilayah_2022 WHERE LEFT(kode, 2 )=$id AND CHAR_LENGTH(kode)=5 ORDER BY `wilayah_2022`.`kode` ASC");
        return response()->json($query);
    }

    public function kecamatan($id, $filter)
    {
        $filter1 = $filter + '%';
        $query = DB::select("SELECT * FROM wilayah_2022 WHERE LEFT(kode, 2 )=$id AND CHAR_LENGTH(kode)=8 and kode LIKE $filter1  ORDER BY `wilayah_2022`.`kode` ASC");
        return response()->json($query);
    }
    public function index_internship()
    {
        // dd("berhasil");
        $posts = DB::table('md_lokers')->where('jenis_pekerjaan', '=', 'internship')->get();

        // return response()->json([$posts]);
        return response()->json($posts);
    }

    public function index_profesional()
    {
        $posts = DB::table('md_lokers')->where('jenis_pekerjaan', '=', 'profesional')->get();

        //return view
        // return response()->json([$posts]);
        return response()->json($posts);
    }

    public function md_loker(md_loker $post)
    {

        // $post = [];
        $post[] = DB::table('forms')->get();
        // return response()->json([$post]);
        return response()->json($post);
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
    public function store(Storemd_lokerRequest $request)
    {
        // dd($request->all());

        if ($request->password == 'meong') {
            $form = new md_loker();
            $form->pekerjaan = $request->pekerjaan;
            $form->perusahaan = $request->perusahaan;
            $form->jenis_pekerjaan = $request->jenis_pekerjaan;
            // req ke deskripsi = string varchar
            $form->isi_konten = $request->deskripsi;
            // req ke isi_konten = mediumtext
            $form->deskripsi = $request->isi_konten;
            $form->batas_lamaran = $request->batas_lamaran;
            $form->save();
            return redirect('/table');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(md_loker $md_loker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(md_loker $md_loker)
    {
        // 
    }

    public function edit_loker($id)
    {
        // dd();
        $md_loker = md_loker::find($id);

        // Menggunakan Inertia::render
        return Inertia::render('EditLokerEdit', [
            'md_loker' => $md_loker,
        ]);
    }
    /**
     * Update the specified resource in storage.
     */

    public function update_loker(Updatemd_lokerRequest $request, md_loker $md_loker)
    {
        // dd($request->all());
        // dd($request);

        if ($request->password == 'meong') {
            $form =  md_loker::find($request->id);
            $form->pekerjaan = $request->pekerjaan;
            $form->perusahaan = $request->perusahaan;
            $form->jenis_pekerjaan = $request->jenis_pekerjaan;
            $form->isi_konten = $request->deskripsi;
            $form->deskripsi = $request->isi_konten;
            $form->batas_lamaran = $request->batas_lamaran;
            $form->save();
            return redirect('/table');
        }
    }

    public function delete_loker($id)
    {
        // dd($id);
        $delete = md_loker::find($id);
        $delete->delete();
        return redirect('/table');
    }

    public function update(Updatemd_lokerRequest $request, md_loker $md_loker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(md_loker $md_loker)
    {
        //
    }
}
