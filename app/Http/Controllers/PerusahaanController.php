<?php

namespace App\Http\Controllers;

use App\Models\perusahaan;
use App\Http\Requests\StoreperusahaanRequest;
use App\Http\Requests\UpdateperusahaanRequest;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PerusahaanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        // $posts = perusahaan::get();
        $posts = DB::select("SELECT DISTINCT perusahaans.id, perusahaans.perusahaan,perusahaans.image, COUNT(md_lokers.perusahaan) AS jumlah_data_sama
        FROM perusahaans
        LEFT JOIN md_lokers ON perusahaans.id = md_lokers.perusahaan
        GROUP BY perusahaans.id, perusahaans.perusahaan;");

        //return view
        // return response()->json([$posts]);

        // return perusahaan::all();    
        return response()->json($posts);
    }

    public function perusahaan()
    {


        return view('perusahaan');
    }

    public function tambah_baru_perusahaan()
    {
        return view('perusahaan_tambah');
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
    public function store(StoreperusahaanRequest $request)
    {
        // dd($request);

        $request->validate([
            'perusahaan' => 'required|string|min:5',
            'link' => 'required',
            'tentang' => 'required',
            'alamat' => 'required',
            'image' => 'required',
        ], [
            'perusahaan.required' => 'Nama Perusahaan harus diisi.',
            'link.required' => 'Link Perusahaan harus diisi.',
            'tentang.required' => 'About Perusahaan harus diisi.',
            'alamat.required' => 'Alamat Perusahaan harus diisi.',
            'image.required' => 'Gambar Harus diisi',

        ]);

        try {
            $empData = new perusahaan();
            $empData->perusahaan = $request->perusahaan;
            $empData->link = $request->link;
            $empData->tentang = $request->tentang;
            $empData->alamat = $request->alamat;
            // Periksa apakah ada file gambar yang diunggah
            if ($request->hasFile('image')) {
                $image = time() . '.' . $request->image->extension();
                $request->image->storeAs('public/images/', $image);
                $empData->image = $image; // Setel atribut gambar dengan nama gambar yang baru
            }
            $empData->save();

            // return response()->json([
            //     'status' => 200,
            // ]);

            return redirect('admin/dashboard/perusahaan_dashboard');
        } catch (\Exception $e) {
            report($e);
            return response()->json([
                'status' => 500,
                'message' => 'Terjadi kesalahan dalam menyimpan data: ' . $e->getMessage()
            ]);
        }
    }

    public function update(UpdateperusahaanRequest $request, perusahaan $perusahaan)
    {

        // dd($request);

        $request->validate([
            'perusahaan' => 'required|string|min:5',
            'link' => 'required',
            'tentang' => 'required',
            'alamat' => 'required',
            // 'image' => 'required',
        ], [
            'perusahaan.required' => 'Nama Perusahaan harus diisi.',
            'link.required' => 'Link Perusahaan harus diisi.',
            'tentang.required' => 'About Perusahaan harus diisi.',
            'alamat.required' => 'Alamat Perusahaan harus diisi.',
            // 'image.required' => 'Gambar Harus diisi',
        ]);



        $empData = perusahaan::find($request->id);

        // dd($request);

        if ($request->hasFile('image')) {
            $image = time() . '.' . $request->image->extension();
            $request->image->storeAs('public/images/', $image);
            $empData->image = $image; // Setel atribut gambar dengan nama gambar yang baru
        } else {
            $empData->perusahaan = $request->perusahaan;
            $empData->tentang = $request->tentang;
            $empData->alamat = $request->alamat;
            $empData->link = $request->link;
            $empData->save();
        }

        if ($request->hasFile('image')) {

            // $hapus = 'public/images/' . $request->id . '/' . $image->image;
            // Storage::delete($hapus);
            $hapus = 'public/images/' . $request->id . '/' . $image;
            Storage::delete($hapus);

            $image = time() . '.' . $request->image->extension();

            // Simpan gambar baru ke penyimpanan
            $request->image->storeAs('public/images/', $image);

            // Setel atribut 'image' dari model dengan nama gambar yang baru
            $empData->image = $image;
        }

        return redirect('admin/dashboard/perusahaan_dashboard');
    }

    public function edit_perusahaan($id)
    {
        // dd($id);
        $perusahaan = db::table('perusahaans')->where('id', $id)->get();
        return view('perusahaan_edit', ['perusahaan' => $perusahaan]);
    }

    public function hapus_perusahaan($id)
    {
        // dd($id);
        // $perusahaan = db::table('perusahaans')->where('id', $id);
        // $perusahaan->delete();

        $perusahaan = Perusahaan::find($id);
        $perusahaan->delete();

        return redirect('admin/dashboard/perusahaan_dashboard');
    }

    // public function image_link()
    // {
    //     return perusahaan::all();
    // }

    /**
     * Display the specified resource.
     */
    public function show(perusahaan $perusahaan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(perusahaan $perusahaan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(perusahaan $perusahaan)
    {
        //
    }
}
