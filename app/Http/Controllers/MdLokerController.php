<?php

namespace App\Http\Controllers;

use App\Models\md_loker;
use App\Http\Requests\Storemd_lokerRequest;
use App\Http\Requests\Updatemd_lokerRequest;
use Illuminate\Support\Facades\DB;


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

        if ($request->password == 'meong') {
            $form = new md_loker();
            $form->pekerjaan = $request->pekerjaan;
            $form->perusahaan = $request->perusahaan;
            $form->jenis_pekerjaan = $request->jenis_pekerjaan;
            $form->isi_konten = $request->isi_konten;
            $form->deskripsi = $request->deskripsi;
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

    /**
     * Update the specified resource in storage.
     */
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
