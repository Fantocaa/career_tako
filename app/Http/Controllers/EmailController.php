<?php

namespace App\Http\Controllers;

use App\Models\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendEmail;
use Illuminate\Mail\Mailable;
// use PDF;
// use Mail;
use Barryvdh\DomPDF\PDF;
use App\Mail\SendPdfEmail;


class EmailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        $data = $request->all();

        try {
            // Mail::to('tujuan@example.com')->send(new SendEmail($data));
            return response()->json(['message' => 'Email telah terkirim'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Terjadi kesalahan saat mengirim email'], 500);
        }
    }

    public function sendEmailWithPdf()
    {
        $data['email'] = "server.gitlab.fantoca@gmail.com";
        $data['title'] = "Email testing uwu";
        $data['body'] = "Email Testing body";

        $pdf = PDF::loadView('mail', $data);
    }

    public function uploadPdf(Request $request)
    {
        $request->validate([
            'pdfFile' => 'required|mimes:pdf|max:2048', // PDF, max 2MB
        ]);

        $pdfFile = $request->file('pdfFile');
        $pdfFile->store('pdfs'); // Simpan file PDF di direktori 'pdfs' di storage

        // Kirim email dengan file PDF sebagai lampiran
        // Mail::to('tujuan@email.com')->send(new SendPdfEmail($pdfFile));

        return response()->json(['message' => 'File PDF berhasil diunggah dan dikirim via email.']);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Email $email)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Email $email)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Email $email)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Email $email)
    {
        //
    }
}
