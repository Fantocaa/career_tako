<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    {{ $body }} {{ $pekerjaan }}<br /> <br />
    Pekerjaan : {{ $pekerjaan }}<br />
    Program : {{ $jenis_pekerjaan }}<br />
    {{-- Perusahaan : {{ $perusahaan }}<br /> --}}
    Nama : {{ $nama }}<br />
    NIK : {{ $nik }}<br />
    Jenis Kelamin : {{ $jenis_kelamin }}<br />
    Agama : {{ $agama }}<br />
    Tanggal Lahir : {{ $tanggal_lahir }}<br />
    Email : {{ $emails }}<br />
    No. Telpon : {{ $no_telp }}<br />
    {{-- Provinsi Tempat Lahir : {{ $provinsi }}<br /> --}}
    Kabupaten Tempat Lahir : {{ $kabupaten }}<br />
    {{-- Kecamatan Tempat Lahir : {{ $kecamatan }}<br /> --}}
    {{-- Kode Pos Tempat Lahir : {{ $kodepos }}<br /> --}}
    Alamat Tempat Tinggal : {{ $alamat }}<br />
    <br />
    *Riwayat Pendidikan*<br />

    Pendidikan Terakhir : {{ $pendidikan }}<br />
    Intansi Pendidikan : {{ $instansi }}<br />
    Program Studi : {{ $prodi }}<br />
    Tahun Masuk : {{ $thn_in }}<br />
    Tahun Lulus : {{ $thn_out }}<br />
    {{-- IPK/GPA : {{ $ipk }}<br /> --}}
    {{-- Promosikan diri Anda : {{ $promosi }}<br /> --}}
    <br />
    *Riwayat Pekerjaan*<br />
    @foreach ($riwayat as $index => $riwayatItem)
        Nama Perusahaan : {{ $riwayatItem['riwayat_nama_perusahaan'] }}<br />
        Alamat Perusahaan : {{ $riwayatItem['riwayat_alamat_perusahaan'] }}<br />
        Tahun Masuk : {{ $riwayatItem['riwayat_tahun_in'] }}<br />
        Tahun Keluar : {{ $riwayatItem['riwayat_tahun_out'] }}<br />
        Posisi/Jabatan : {{ $riwayatItem['riwayat_posisi'] }}<br />
        Uraian Tugas : {{ $riwayatItem['riwayat_tugas'] }}<br />
        Alasan Keluar : {{ $riwayatItem['riwayat_berhenti'] }}<br />
        Gaji : {{ $riwayatItem['gaji'] }}<br />
        <br />
    @endforeach
    <br />
    <br />
    Loker Drop Request : {{ $pekerjaanyd }}

    {{-- <a href="www.instagram.com">
        <button>Accept</button>
    </a>
    <a href="www.facebook.com">
        <button>Refuse</button>
    </a> --}}
    <br />
    {{-- Selamat Bekerja Gais -Fantoca --}}
</body>

</html>
