<?php

namespace App\Http\Controllers;


use App\Models\md_loker;
use App\Http\Requests\Storemd_lokerRequest;
use App\Http\Requests\Updatemd_lokerRequest;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Return_;
use Illuminate\Support\Facades\Mail;
// use App\Mail\MailLoker;

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

    public function loker()
    {
        return view('loker');
    }

    public function search()
    {
        return view('search');
    }

    public function provinsi()
    {
        $query = DB::select("SELECT kode,nama FROM wilayah WHERE CHAR_LENGTH(kode)= 2 ORDER BY nama");
        return response()->json($query);
    }

    public function kabupaten($id)
    {
        $query = DB::select("SELECT * FROM wilayah WHERE LEFT(kode, 2 )=$id AND CHAR_LENGTH(kode)=5 ORDER BY `wilayah`.`kode` ASC");
        return response()->json($query);
    }

    public function kecamatan($id, $filter)
    {
        $filter1 = $filter . '%';
        $query = DB::select("SELECT * FROM wilayah WHERE LEFT(kode, 2 )=$id AND CHAR_LENGTH(kode)=8 and kode LIKE '$filter1'  ORDER BY `wilayah`.`kode` ASC");
        return response()->json($query);
    }

    public function index_internship()
    {
        // dd("berhasil");
        // $posts = DB::table('md_lokers')->where('jenis_pekerjaan', '=', 'internship')->get();

        // $posts = DB::table('md_lokers')->where('jenis_pekerjaan', '=', 'Internship')->get();

        $posts = DB::table('md_lokers')
            ->where('jenis_pekerjaan', '=', 'Internship')
            ->whereNull('deleted_at')
            ->get();

        // dd($posts);

        // return response()->json([$posts]);
        return response()->json($posts);
    }

    public function index_profesional()
    {
        // $posts = DB::table('md_lokers')->where('jenis_pekerjaan', '=', 'profesional')->get();
        // $posts = DB::table('md_lokers')->where('jenis_pekerjaan', '=', 'Profesional')->get();

        // dd('cek');

        $posts = DB::table('md_lokers')
            ->where('jenis_pekerjaan', '=', 'Profesional')
            ->whereNull('deleted_at')
            ->get();

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

        // Validasi
        $request->validate([
            'pekerjaan' => 'required|string|min:5',
            'perusahaan' => 'required',
            'jenis_pekerjaan' => 'required',
            'deskripsi' => 'required',
            'isi_konten' => 'required',
            'batas_lamaran' => 'required',
        ], [
            'pekerjaan.required' => 'Pekerjaan harus diisi.',
            'perusahaan.required' => 'Perusahaan harus diisi.',
            'jenis_pekerjaan.required' => 'Jenis Pekerjaan harus diisi.',
            'isi_konten.required' => 'Isi Konten harus diisi.',
            'batas_lamaran.required' => 'Batas Lamaran harus diisi.',

        ]);

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

            // Tanggapan JSON sukses
            return response()->json(['message' => 'Data berhasil disimpan.']);
        }

        // Tanggapan jika validasi gagal
        // return redirect()->back()->withErrors(['password' => 'Password tidak valid.']);

        // Tanggapan JSON jika validasi gagal
        return response()->json(['errors' => $request->validator->errors()]);
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

    public function show_lamar_loker($id)
    {
        // $posts = md_loker::get();
        // return redirect("/formulir/");
        $md_loker = md_loker::find($id);
        // dd($md_loker);
        return Inertia::render('FormEmail', [
            'md_loker' => $md_loker,
        ]);
    }

    public function show_detail_loker_intern($id)
    {
        // dd();
        $md_loker = md_loker::find($id);

        // Menggunakan Inertia::render
        return Inertia::render('DetailLokerIntern', [
            'md_loker' => $md_loker,
        ]);
    }

    public function show_detail_loker_pro($id)
    {
        // dd();
        $md_loker = md_loker::find($id);

        // Menggunakan Inertia::render
        return Inertia::render('DetailLokerPro', [
            'md_loker' => $md_loker,
        ]);
    }


    public function submit_loker(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|min:5',
            'jenis_kelamin' => 'required',
            'agama' => 'required',
            'tanggal_lahir' => 'required',
            'emails' => 'required',
            'no_telp' => 'required',
            'provinsi' => 'required',
            'kabupaten' => 'required',
            'kecamatan' => 'required',
            'kodepos' => 'required',
            'alamat' => 'required',
            'gaji' => 'required',
            'promosi' => 'required',
        ], [
            'nama.required' => 'Nama harus diisi.',
            'jenis_kelamin.required' => 'Jenis Kelamin harus dipilih.',
            'agama.required' => 'Agama harus dipilih.',
            'tanggal_lahir.required' => ' Tanggal Lahir harus diisi.',
            'emails.required' => 'Email harus diisi.',
            'no_telp.required' => 'Nomor Telepon harus diisi.',
            'provinsi.required' => 'Provinsi harus dipilih.',
            'kabupaten.required' => 'Kabupaten harus dipilih.',
            'kecamatan.required' => 'Kecamatan harus dipilih.',
            'kodepos.required' => 'Kode Pos harus dipilih.',
            'alamat.required' => 'Alamat harus diisi.',
            'gaji.required' => 'Gaji harus diisi.',
            'promosi.required' => 'Promosi harus diisi.',
        ]);

        $data["email"] = "fantocaa17@gmail.com";
        $data["title"] = "Meong Uwu";
        $data["body"] = "Selamat Datang";
        $data["pekerjaan"] = $request->pekerjaan;
        $data["jenis_pekerjaan"] = $request->jenis_pekerjaan;
        $data["perusahaan"] = $request->perusahaan;
        $data["nama"] = $request->nama;
        $data["jenis_kelamin"] = $request->jenis_kelamin;
        $data["agama"] = $request->agama;
        $data["tanggal_lahir"] = $request->tanggal_lahir;
        $data["emails"] = $request->emails;
        $data["no_telp"] = $request->no_telp;
        $data["provinsi"] = $request->provinsi;
        $data["kabupaten"] = $request->kabupaten;
        $data["kecamatan"] = $request->kecamatan;
        $data["kodepos"] = $request->kodepos;
        $data["alamat"] = $request->alamat;
        $data["gaji"] = $request->gaji;
        $data['promosi'] = $request->promosi;

        // dd($data);

        $file = $request->file('file'); // Dapatkan objek file dari permintaan

        $maxSize = 2 * 1024 * 1024; // 2MB in bytes

        if ($file->getSize() <= $maxSize) {
            // Pastikan file ada sebelum melampirkannya
            Mail::send('Test_mail', $data, function ($message) use ($data, $file) {
                $message->to($data["email"])
                    ->subject($data["title"]);
                $message->attach($file->getRealPath(), [
                    'as' => 'CV.pdf', // Nama file yang akan digunakan dalam email
                    'mime' => 'application/pdf', // MIME type file PDF
                ]);
            });

            echo "Email berhasil dikirim";
        } else {
            echo "File tidak ditemukan dalam permintaan.";
        }

        return redirect()->route('finish');
    }
    /**
     * Update the specified resource in storage.
     */

    public function update_loker(Updatemd_lokerRequest $request, md_loker $md_loker)
    {
        // dd($request->all());
        // dd($request);

        // Validasi
        $request->validate([
            'pekerjaan' => 'required|string|min:5',
            'perusahaan' => 'required',
            'jenis_pekerjaan' => 'required',
            'deskripsi' => 'required',
            'isi_konten' => 'required',
            'batas_lamaran' => 'required',
        ], [
            'pekerjaan.required' => 'Pekerjaan harus diisi.',
            'perusahaan.required' => 'Perusahaan harus diisi.',
            'jenis_pekerjaan.required' => 'Jenis Pekerjaan harus diisi.',
            'isi_konten.required' => 'Isi Konten harus diisi.',
            'batas_lamaran.required' => 'Batas Lamaran harus diisi.',
        ]);

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

            // Tanggapan JSON sukses
            return response()->json(['message' => 'Data berhasil diperbarui.']);
        }
        // return redirect()->back()->withErrors(['password' => 'Password tidak valid.']);
        // Tanggapan JSON jika validasi gagal
        return response()->json(['errors' => $request->validator->errors()]);
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

    // public function generatePDF(Request $request)
    // {
    //     // Ambil data yang dikirim dari formulir
    //     $data = $request->all();

    //     // Load view 'form' dengan data yang dikirimkan
    //     $pdf = PDF::loadView('form', compact('data'));

    //     // Menghasilkan nama file PDF sesuai dengan timestamp
    //     $filename = 'CV_' . time() . '.pdf';

    //     // Simpan PDF ke direktori yang diinginkan
    //     $pdf->save(public_path('pdf/' . $filename));

    //     // Kembalikan tautan unduhan ke file PDF yang baru dibuat
    //     return response()->download(public_path('pdf/' . $filename));
    // }
}
