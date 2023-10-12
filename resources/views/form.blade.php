<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test mail</title>
    @vite('resources/css/app.css')
</head>

<body>
    {{-- <h1>{{ $title }}</h1>

    <p>{{ $body }}</p>

    <p>
        Regrads, <br>
        Meong news
    </p> --}}


    {{-- <form action="{{ route('show.form') }}" method="post" enctype="multipart/form-data"> --}}

    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>

    <form>
        @csrf
        <label for="nama">Nama Lengkap:</label>
        <input type="text" name="nama" required>
        <br>

        <label for="jenis_kelamin" class="pb-2">Jenis Kelamin:</label>
        <select name="jenis_kelamin" required>
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
        </select>
        <br>

        <label for="program">Program:</label>
        <input type="text" name="program" required>
        <br>

        <label for="agama">Agama:</label>
        <input type="text" name="agama" required>
        <br>

        <label for="tanggal_lahir">Tanggal Lahir:</label>
        <input type="date" name="tanggal_lahir" required>
        <br>

        <label for="email">Email:</label>
        <input type="email" name="email" required>
        <br>

        <label for="tempat_lahir">Tempat Lahir:</label>
        <input type="text" name="tempat_lahir" required>
        <br>

        <label for="alamat">Alamat Tempat Tinggal:</label>
        <input type="text" name="alamat" required>
        <br>

        <label for="no_telpon">No. Telepon:</label>
        <input type="text" name="no_telpon" required>
        <br>

        <label for="gaji">Gaji:</label>
        <input type="number" name="gaji" required>
        <br>

        <label for="cv">Upload CV (PDF):</label>
        <input type="file" name="cv" accept=".pdf" required>
        <br>

        <button type="submit">Kirim</button>
    </form>

</body>

</html>
