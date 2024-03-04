<?php

namespace App\Http\Controllers;

use App\Models\md_loker;
use App\Http\Requests\Storemd_lokerRequest;
use App\Http\Requests\Updatemd_lokerRequest;
use App\Models\perusahaan;
use App\Models\skill;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Return_;
use Illuminate\Support\Facades\Mail;
// use App\Mail\MailLoker;
use Illuminate\Http\JsonResponse;
// use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Response;
use Google\Cloud\Translate\V2\TranslateClient;

class MdLokerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $posts = DB::table('md_lokers')  // Memulai query dengan tabel 'md_lokers'
            // ->selectRaw('md_lokers.id, md_lokers.pekerjaan, md_lokers.jenis_pekerjaan, md_lokers.batas_lamaran, md_lokers.deskripsi,md_lokers.isi_konten, perusahaans.perusahaan, skills.nama_skill')

            // ->selectRaw('md_lokers.id, md_lokers.pekerjaan, md_lokers.jenis_pekerjaan, md_lokers.batas_lamaran, md_lokers.deskripsi,md_lokers.isi_konten, md_lokers.deleted_at, perusahaans.perusahaan')

            // ->join('perusahaans', 'md_lokers.perusahaan', 'perusahaans.id')

            // ->leftjoin('skills', 'md_lokers.id', '=', 'skills.id_kotak_loker') 

            ->whereNull('md_lokers.deleted_at')

            ->get();

        return response()->json($posts);
    }

    public function api_form()
    {
        $posts = DB::table('md_lokers')
            // ->selectRaw('md_lokers.id, md_lokers.pekerjaan, md_lokers.jenis_pekerjaan, md_lokers.batas_lamaran, md_lokers.deskripsi,md_lokers.isi_konten, md_lokers.deleted_at, perusahaans.perusahaan')

            // ->join('perusahaans', 'md_lokers.perusahaan', 'perusahaans.id')

            ->get();
        return response()->json($posts);
    }


    public function skill()
    {
        $posts = skill::get();
        return response()->json($posts);


        // $skill = md_loker::with('skills')->get();
        // return response()->json($skill);
    }


    public function loker()
    {
        return view('loker');
    }

    public function search()
    {
        // dd($request);

        return Inertia::render('LokerNew');
        // return view('loker');
    }

    public function api_program_perusahaan($id)
    {

        $program = DB::table('md_lokers')

            ->selectRaw('md_lokers.id, md_lokers.pekerjaan, md_lokers.jenis_pekerjaan, md_lokers.batas_lamaran, md_lokers.deskripsi,md_lokers.isi_konten, perusahaans.perusahaan')

            ->join('perusahaans', 'md_lokers.perusahaan', 'perusahaans.id')

            ->where('perusahaans.id', '=', $id)

            ->whereNull('md_lokers.deleted_at')

            ->get();

        return response()->json($program);
    }


    public function api_program($program)
    {

        if ($program == 'All') {
            $program = '';
        }
        $program = DB::table('md_lokers')
            ->selectRaw('md_lokers.id, md_lokers.pekerjaan, md_lokers.jenis_pekerjaan, md_lokers.batas_lamaran, md_lokers.deskripsi,md_lokers.isi_konten, perusahaans.perusahaan')
            ->join('perusahaans', 'md_lokers.perusahaan', 'perusahaans.id')
            ->where('md_lokers.jenis_pekerjaan', 'LIKE', '%' . $program . '%')
            ->whereNull('md_lokers.deleted_at')

            ->get();

        return response()->json($program);
    }

    public function api_program_id($program, $id)
    {
        if ($program == 'All') {
            $program = '';
        }
        $program = DB::table('md_lokers')

            ->selectRaw('md_lokers.id, md_lokers.pekerjaan, md_lokers.jenis_pekerjaan, md_lokers.batas_lamaran, md_lokers.deskripsi,md_lokers.isi_konten, perusahaans.perusahaan')

            ->join('perusahaans', 'md_lokers.perusahaan', 'perusahaans.id')

            ->where('md_lokers.jenis_pekerjaan', 'LIKE', '%' . $program . '%')

            ->where('perusahaans.id', '=', $id)

            ->whereNull('md_lokers.deleted_at')

            ->get();

        return response()->json($program);
    }


    public function tambah_baru()
    {
        return view('form');
    }

    // public function perusahaan_list(Request $request): JsonResponse
    // {
    //     $data = [];

    //     if ($request->filled('q')) {
    //         $data = perusahaan::select("perusahaan", "id")
    //             ->where('perusahaan', 'LIKE', '%' . $request->get('q') . '%')
    //             ->get();
    //     }
    //     return response()->json($data);
    // }

    public function provinsi()
    {
        $query = DB::select("SELECT kode,nama FROM wilayah WHERE CHAR_LENGTH(kode)= 2 ORDER BY nama");
        return response()->json($query);
    }

    // public function kabupaten($id)
    // {
    //     $query = DB::select("SELECT * FROM wilayah WHERE LEFT(kode, 2 )=$id AND CHAR_LENGTH(kode)=5 ORDER BY `wilayah`.`kode` ASC");
    //     return response()->json($query);
    // }

    public function kabupaten()
    {
        $query = DB::select("SELECT * FROM wilayah WHERE CHAR_LENGTH(kode)=5 ORDER BY `wilayah`.`kode` ASC");
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

    public function view_skill($id)
    {
        $skill = db::table('skills')->where('id_kotak_loker', $id)->get()->whereNull('deleted_at');

        return response()->json([$skill]);
    }

    public function edit_loker($id)
    {
        // dd();
        // Menggunakan Inertia::render
        // return Inertia::render('EditLokerEdit', [
        //     'md_loker' => $md_loker,
        // ]);

        $md_loker = db::table('md_lokers')->where('id', $id)->get();
        $skill = db::table('skills')->where('id_kotak_loker', $md_loker[0]->id)->get();
        $pt = db::table('perusahaans')->whereNull('deleted_at')->get();

        return view(
            'formedit',
            ['skill' => $skill, 'md_loker' => $md_loker, 'pt' => $pt]
        );
    }

    public function delete_loker($id)
    {
        // dd($id);
        // $delete = md_loker::find($id);

        $md_loker = db::table('md_lokers')->where('id', $id);
        $skill = db::table('skills')->where('id_kotak_loker', $id);

        $md_loker->delete();
        $skill->delete();

        return redirect('/admin/dashboard/lowongan_pekerjaan');
    }

    public function show_lamar_loker($id)
    {

        $md_loker = DB::table('md_lokers')

            // ->selectRaw('md_lokers.id, md_lokers.pekerjaan, md_lokers.jenis_pekerjaan, md_lokers.batas_lamaran, md_lokers.deskripsi,md_lokers.isi_konten, perusahaans.perusahaan')

            // ->join('perusahaans', 'md_lokers.perusahaan', 'perusahaans.id')

            ->where('md_lokers.id', '=', $id)

            ->whereNull('md_lokers.deleted_at')

            ->get();

        return Inertia::render('FormEmail', [
            'md_loker' => $md_loker,
        ]);
        // return Inertia::render('Form', [
        //     'md_loker' => $md_loker,
        // ]);
    }

    public function show_detail_loker_intern($id)
    {
        // dd($id);

        // $md_loker = md_loker::find($id);

        $md_loker = DB::table('md_lokers')

            ->selectRaw('md_lokers.id, md_lokers.pekerjaan, md_lokers.jenis_pekerjaan, md_lokers.batas_lamaran, md_lokers.deskripsi,md_lokers.isi_konten')

            // ->join('perusahaans', 'md_lokers.perusahaan', 'perusahaans.id')

            ->where('md_lokers.id', '=', $id)

            ->whereNull('md_lokers.deleted_at')

            ->get();

        // Menggunakan Inertia::render
        return Inertia::render('DetailLokerIntern', [
            'md_loker' => $md_loker,
        ]);
    }

    // public function show_detail_loker_pro($id)
    // {
    //     // dd();
    //     $md_loker = md_loker::find($id);

    //     // Menggunakan Inertia::render
    //     return Inertia::render('DetailLokerPro', [
    //         'md_loker' => $md_loker,
    //     ]);
    // }

    public function show_detail_perusahaan_loker($id)
    {
        $perusahaan = perusahaan::find($id);
        // $md
        $query = DB::table('md_lokers')

            ->selectRaw('md_lokers.id, md_lokers.pekerjaan, md_lokers.jenis_pekerjaan, md_lokers.batas_lamaran, md_lokers.deskripsi,md_lokers.isi_konten, perusahaans.perusahaan')

            ->join('perusahaans', 'md_lokers.perusahaan', 'perusahaans.id')

            ->where('md_lokers.perusahaan', '=', $id)

            ->whereNull('md_lokers.deleted_at')

            ->get();

        // ->where('md_lokers.jenis_pekerjaan', 'LIKE', '%' . $program . '%')

        // Menggunakan Inertia::render
        return Inertia::render('LokerDetailPerusahaan', [
            'perusahaan' => $perusahaan,
            'id' => $query
        ]);
    }

    public function submit_loker(Request $request)
    {

        // dd($request->all());
        dd($request);
        $request->validate([
            // 'nama' => 'required|string|min:5',
            'nama' => 'required',
            'nik' => 'required',
            'jenis_kelamin' => 'required',
            'agama' => 'required',
            'tanggal_lahir' => 'required',
            'emails' => 'required',
            'no_telp' => 'required',
            // 'provinsi' => 'required',
            'kabupaten' => 'required',
            // 'kecamatan' => 'required',
            // 'kodepos' => 'required',
            'alamat' => 'required',
            'pendidikan' => 'required',
            'instansi' => 'required',
            "prodi" => 'required',
            "thn_in" => 'required',
            "thn_out" => 'required',
            "riwayat_nama_perusahaan" => 'required',
            "riwayat_alamat_perusahaan" => 'required',
            "riwayat_tahun_in" => 'required',
            "riwayat_tahun_out" => 'required',
            "riwayat_posisi" => 'required',
            "riwayat_tugas" => 'required',
            "riwayat_berhenti" => 'required',
            'gaji' => 'required',
            // 'promosi' => 'required',
        ], [
            'nama.required' => 'Nama harus diisi.',
            'nik.required' => 'Nik harus diisi.',
            'jenis_kelamin.required' => 'Jenis Kelamin harus dipilih.',
            'agama.required' => 'Agama harus dipilih.',
            'tanggal_lahir.required' => ' Tanggal Lahir harus diisi.',
            'emails.required' => 'Email harus diisi.',
            'no_telp.required' => 'Nomor Telepon harus diisi.',
            // 'provinsi.required' => 'Provinsi harus dipilih.',
            'kabupaten.required' => 'Kabupaten harus dipilih.',
            // 'kecamatan.required' => 'Kecamatan harus dipilih.',
            // 'kodepos.required' => 'Kode Pos harus dipilih.',
            'alamat.required' => 'Alamat harus diisi.',
            // 'promosi.required' => 'Promosi harus diisi.',
            'pendidikan.required' => 'Pendidikan harus diisi.',
            'instansi.required' => 'Instansi Pendidikan harus diisi.',
            'prodi.required' => 'Program Studi harus diisi.',
            'thn_in.required' => 'Tahun Masuk Pendidikan harus diisi.',
            'thn_out.required' => 'Tahun Keluar Pendidikan harus diisi.',
            'riwayat_nama_perusahaan.required' => 'Riwayat Nama Perusahaan harus diisi.',
            'riwayat_alamat_perusahaan.required' => 'Riwayat Alamat Perusahaan harus diisi.',
            'riwayat_tahun_in.required' => 'Tahun Masuk Perusahaan harus diisi.',
            'riwayat_tahun_out.required' => 'Tahun Keluar Perusahaan harus diisi.',
            'riwayat_posisi.required' => 'Riwayat Posisi Perusahaan harus diisi.',
            'riwayat_tugas.required' => 'Riwayat Tugas Perusahaan harus diisi.',
            'riwayat_berhenti.required' => 'Riwayat Berhenti Perusahaan harus diisi.',
            'gaji.required' => 'Gaji harus diisi.',
            // 'ipk.required' => 'IPK/GPA harus diisi.',
        ]);

        // $data["email"] = "fantocaa17@gmail.com";
        $data["email"] = "recruitment@tako.co.id";
        $data["title"] = "[Web Karir Tako] ";
        $data["body"] = "Ada yang baru saja melamar Pekerjaan : ";
        $data["pekerjaan"] = $request->pekerjaan;
        $data["jenis_pekerjaan"] = $request->jenis_pekerjaan;
        // $data["perusahaan"] = $request->perusahaan;
        $data["nama"] = $request->nama;
        $data["nik"] = $request->nik;
        $data["jenis_kelamin"] = $request->jenis_kelamin;
        $data["agama"] = $request->agama;
        $data["tanggal_lahir"] = $request->tanggal_lahir;
        $data["emails"] = $request->emails;
        $data["no_telp"] = $request->no_telp;
        // $data["provinsi"] = $request->provinsi;
        $data["kabupaten"] = $request->kabupaten;
        // $data["kecamatan"] = $request->kecamatan;
        // $data["kodepos"] = $request->kodepos;
        $data["alamat"] = $request->alamat;
        // $data['promosi'] = $request->promosi;
        $data['pendidikan'] = $request->pendidikan;
        $data['instansi'] = $request->instansi;
        $data['prodi'] = $request->prodi;
        $data['thn_in'] = $request->thn_in;
        $data['thn_out'] = $request->thn_out;
        $data['riwayat_nama_perusahaan'] = $request->riwayat_nama_perusahaan;
        $data['riwayat_alamat_perusahaan'] = $request->riwayat_alamat_perusahaan;
        $data['riwayat_tahun_in'] = $request->riwayat_tahun_in;
        $data['riwayat_tahun_out'] = $request->riwayat_tahun_out;
        $data['riwayat_posisi'] = $request->riwayat_posisi;
        $data['riwayat_tugas'] = $request->riwayat_tugas;
        $data['riwayat_berhenti'] = $request->riwayat_berhenti;
        $data["gaji"] = $request->gaji;
        // $data['ipk'] = $request->ipk;

        // dd($data);

        $file = $request->file('file'); // Dapatkan objek file dari permintaan

        $maxSize = 2 * 1024 * 1024; // 2MB in bytes
        // $maxSize = 2048;
        // dd($maxSize);


        if ($file->getSize() <= $maxSize) {
            // Pastikan file ada sebelum melampirkannya
            Mail::send('Test_mail', $data, function ($message) use ($data, $file) {
                $message->to($data["email"])

                    // ->subject($data["title"]);
                    ->subject($data["title"] . ' ' . $data["pekerjaan"] . ' - ' . $data["nama"]); // Menggabungkan title dan pekerjaan dalam subjek

                $message->attach($file->getRealPath(), [
                    'as' => 'CV.pdf', // Nama file yang akan digunakan dalam email
                    'mime' => 'application/pdf', // MIME type file PDF
                ]);
            });
            // dd($file->getSize());

            echo "Email berhasil dikirim";
        } else {
            echo "File tidak ditemukan dalam permintaan.";
        }

        // return response()->json([$request]);

        // return redirect()->route('finish');
        return Inertia::render('Finish');
    }
    /**
     * Update the specified resource in storage.
     */

    public function store(Storemd_lokerRequest $request)
    {
        // dd($request->all());

        // Validasi
        $request->validate([
            'pekerjaan' => 'required|string|min:5',
            // 'perusahaan' => 'required',
            'jenis_pekerjaan' => 'required',
            'deskripsi' => 'required',
            'isi_konten' => 'required',
            'batas_lamaran' => 'required',
            'skill.*' => 'required',
        ], [
            'pekerjaan.required' => 'Pekerjaan harus diisi.',
            // 'perusahaan.required' => 'Perusahaan harus diisi.',
            'jenis_pekerjaan.required' => 'Jenis Pekerjaan harus diisi.',
            'isi_konten.required' => 'Isi Konten harus diisi.',
            'batas_lamaran.required' => 'Batas Lamaran harus diisi.',
            'skill.*.required' => 'Skill Harus Diisi'
        ]);

        $form = new md_loker();
        $form->pekerjaan = $request->pekerjaan;
        // $form->perusahaan = $request->perusahaan;
        $form->jenis_pekerjaan = $request->jenis_pekerjaan;
        $form->isi_konten = $request->deskripsi;
        $form->deskripsi = $request->isi_konten;
        $form->batas_lamaran = $request->batas_lamaran;
        $form->save();

        foreach ($request->skill as $skill => $value) {
            $skill = new skill();
            $skill->id_kotak_loker = $form->id;
            $skill->nama_skill = $value;
            $skill->save();
        }

        return redirect('/admin/dashboard/lowongan_pekerjaan');

        // Tanggapan JSON sukses
        return response()->json(['message' => 'Data berhasil disimpan.']);


        // Tanggapan jika validasi gagal
        // return redirect()->back()->withErrors(['password' => 'Password tidak valid.']);

        // Tanggapan JSON jika validasi gagal
        return response()->json(['errors' => $request->validator->errors()]);
    }


    public function update_loker(Updatemd_lokerRequest $request, md_loker $md_loker)
    {
        // dd($request->all());
        // dd($request->pekerjaan);

        // Validasi
        $request->validate([
            'pekerjaan' => 'required|string|min:5',
            // 'perusahaan' => 'required',
            'jenis_pekerjaan' => 'required',
            'deskripsi' => 'required',
            'isi_konten' => 'required',
            'batas_lamaran' => 'required',
            'skill.*' => 'required',
        ], [
            'pekerjaan.required' => 'Pekerjaan harus diisi.',
            // 'perusahaan.required' => 'Perusahaan harus diisi.',
            'jenis_pekerjaan.required' => 'Jenis Pekerjaan harus diisi.',
            'isi_konten.required' => 'Isi Konten harus diisi.',
            'batas_lamaran.required' => 'Batas Lamaran harus diisi.',
            'skill.*.required' => 'Skill Harus Diisi'
        ]);

        $form = md_loker::find($request->id);
        // dd($form);
        $form->pekerjaan = $request->pekerjaan;
        // $form->perusahaan = $request->perusahaan;
        $form->jenis_pekerjaan = $request->jenis_pekerjaan;
        $form->isi_konten = $request->deskripsi;
        $form->deskripsi = $request->isi_konten;
        $form->batas_lamaran = $request->batas_lamaran;
        $form->save();

        // $i itu sama dengan i++
        foreach ($request->idskill as $i => $value) {
            // $skill = new skill();
            if ($value != null) {
                $skill = skill::find($value);
                $skill->nama_skill = $request->skill[$i];
                $skill->save();
            } else {
                $skill = new skill();
                $skill->id_kotak_loker = $request->id;
                $skill->nama_skill = $request->skill[$i];
                $skill->save();
            }
        }

        if ($request->idskilldelete) {

            foreach ($request->idskilldelete as $i => $value) {
                $idskilldelete = skill::find($value);
                $idskilldelete->delete();
            }
        }

        return redirect('/admin/dashboard/lowongan_pekerjaan');

        // Tanggapan JSON sukses
        return response()->json(['message' => 'Data berhasil diperbarui.']);

        // return redirect()->back()->withErrors(['password' => 'Password tidak valid.']);
        // Tanggapan JSON jika validasi gagal
        return response()->json(['errors' => $request->validator->errors()]);
    }

    public function api_perusahaan(Request $request, $req)
    {
        $data = [];
        $query = DB::table('md_lokers')
            // ->selectRaw('md_lokers.id, md_lokers.pekerjaan, md_lokers.jenis_pekerjaan, md_lokers.batas_lamaran, md_lokers.deskripsi, md_lokers.isi_konten, perusahaans.perusahaan')
            // ->join('perusahaans', 'md_lokers.perusahaan', 'perusahaans.id')
            ->whereNull('md_lokers.deleted_at');

        // Check if the search parameter exists in the request

        //jika search ada isi dan select itu all
        if ($request->has('search') && $request->input('selection') == 'All') {

            $searchTerm = $request->input('search');
            $query->where('md_lokers.pekerjaan', 'like', '%' . $searchTerm . '%');
        }

        // jika search gak ada & select bukan all
        else if ($request->input('search') == null && $request->input('selection') != 'All') {

            $selection = $request->input('selection');
            $query->where('md_lokers.jenis_pekerjaan', '=', '' . $selection);
            // ->orWhere('perusahaans.perusahaan', 'like', '%' . $searchTerm . '%');
        }

        // jika search ada & select bukan all
        else if ($request->input('search') && $request->input('selection') != 'All') {

            $searchTerm = $request->input('search');
            $selection = $request->input('selection');
            // $perusahaan = $request->input('perusahaan');

            if (isset($searchTerm)) {
                if (strlen($searchTerm) == 1) {
                    $searchTerm = '';
                } else {
                    $query
                        ->where('md_lokers.jenis_pekerjaan', '=', $selection)
                        ->where('md_lokers.pekerjaan', 'like', '%' . $searchTerm . '%');
                    // ->where('md_lokers.perusahaan', '=', $perusahaan);

                }
            }
        }
        // dd($query->toSql());
        $data['pagi'] = $query;

        $data['beritaTerbaru'] = DB::table('md_lokers')->whereNull('deleted_at')->latest()->limit(12)->get();

        if ($req == 0) {
            $currentPage = 1;
        } else {
            $currentPage = $req;
        }

        $paginate = $data['pagi']->orderBy('md_lokers.created_at', 'desc')->paginate(12, ['*'], 'page', $currentPage);

        return response()->json($paginate);
    }

    public function api_perusahaan_selected(Request $request, $req)
    {
        $data = [];
        $query = DB::table('md_lokers')
            ->selectRaw('md_lokers.id, md_lokers.pekerjaan, md_lokers.jenis_pekerjaan, md_lokers.batas_lamaran, md_lokers.deskripsi, md_lokers.isi_konten, perusahaans.perusahaan')
            ->join('perusahaans', 'md_lokers.perusahaan', 'perusahaans.id')
            ->where('md_lokers.perusahaan', '=', $request->input('perusahaan'))
            ->whereNull('md_lokers.deleted_at');

        //jika search ada isi dan select itu all
        if ($request->has('search') && $request->input('selection') == 'All') {
            $searchTerm = $request->input('search');
            $query->where('md_lokers.pekerjaan', 'like', '%' . $searchTerm . '%');
        }

        // jika search gak ada & select bukan all
        else if ($request->input('search') == null && $request->input('selection') != 'All') {
            $selection = $request->input('selection');
            $query->where('md_lokers.jenis_pekerjaan', '=', '' . $selection);
            // ->orWhere('perusahaans.perusahaan', 'like', '%' . $searchTerm . '%');
        }

        // jika search ada & select bukan all
        else if ($request->input('search') && $request->input('selection') != 'All') {

            $searchTerm = $request->input('search');
            $selection = $request->input('selection');
            $perusahaan = $request->input('perusahaan');

            if (isset($searchTerm)) {
                if (strlen($searchTerm) == 1) {
                    $searchTerm = '';
                } else {
                    $query
                        ->where('md_lokers.jenis_pekerjaan', '=', $selection)
                        // ->where('md_lokers.pekerjaan', 'like', '%' . $searchTerm . '%')
                        ->where('md_lokers.pekerjaan', 'like', '%' . $searchTerm . '%')
                        ->where('md_lokers.perusahaan', '=', $perusahaan);

                    // ->orWhere('perusahaans.perusahaan', 'like', '%' . $searchTerm . '%');
                }
            }
        }
        // dd($query->toSql());
        $data['pagi'] = $query;

        $data['beritaTerbaru'] = DB::table('md_lokers')->whereNull('deleted_at')->latest()->limit(12)->get();

        if ($req == 0) {
            $currentPage = 1;
        } else {
            $currentPage = $req;
        }

        $paginate = $data['pagi']->orderBy('md_lokers.created_at', 'desc')->paginate(12, ['*'], 'page', $currentPage);

        return response()->json($paginate);
    }

    public function time_expired()
    {
        $time = date('Y-m-d');
        $query = DB::table('md_lokers')
            ->where('batas_lamaran', '<', $time)
            ->get();

        foreach ($query as $key => $value) {
            if (!empty($value->id)) {
                $delete = md_loker::find($value->id);

                // Check if the record is found before attempting to delete
                if ($delete) {
                    $delete->delete();
                }
            }
        }

        return response()->json('meong');
    }

    public function translate(Request $request)
    {
        $translate = new TranslateClient([
            'key' => 'AIzaSyAIAyTqwdElG1l8dWkqzElE14zvg_-gc9I'
        ]);

        $result = $translate->translate($request->text, [
            'target' => $request->target,
        ]);

        return response()->json($result['text']);
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
