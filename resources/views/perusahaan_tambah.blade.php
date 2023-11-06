<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Perusahaan | Karir Tako</title>
    @vite('resources/css/app.css')

    {{-- <script src="{{ asset('js/cdn.jsdelivr.net_npm_vue@2.6.14_dist_vue.js') }}"></script> --}}
    <script src="{{ asset('js/vue.global.js') }}"></script>
    <script src="{{ asset('js/jquery.min.js') }}"></script>



</head>

<body class="bg-BgTako text-DarkTako h-full">
    <div class="py-16 px-16">
        <div class="p-8 container mx-auto bg-white h-full rounded-2xl">
            <div class="flex items-center gap-4">
                <div>
                    <img src="/images/plus.svg" alt="">
                </div>
                <h1 class="text-3xl font-bold">
                    Tambah Perusahaan
                </h1>
            </div>

            <form id="vue" action="{{ url('/admin/perusahaan') }}" method="POST" class="w-full"
                enctype="multipart/form-data">
                @csrf
                <div class="flex flex-wrap pt-8 gap-4">
                    <label for="perusahaan" class="w-[49%]">
                        <h1 class="mb-2">Nama Perusahaan</h1>
                        <input type="text" name="perusahaan" required class="rounded-2xl w-full"
                            placeholder="Masukkan Nama Perusahaan">
                    </label>
                    <label for="link" class="w-[49%]">
                        <h1 class="mb-2">Link Perusahaan (jika ada)</h1>
                        <input type="text" name="link" required class="rounded-2xl w-full"
                            placeholder="Masukkan Link Perusahaan">
                    </label>

                    <label for="alamat" class="w-full">
                        <h1 class="mb-2">Alamat Perusahaan</h1>
                        <input type="text" name="alamat" required class="rounded-2xl w-full"
                            placeholder="Masukkan Alamat Perusahaan">
                    </label>

                    <label for="tentang" class="w-full h-full">
                        <h1 class="mb-2">Tentang Perusahaan</h1>
                        <textarea type="text" name="tentang" required class="rounded-2xl w-full" placeholder="Masukkan Tentang Perusahaan"
                            style="height: 200px;"></textarea>
                    </label>

                    <label for="image" class="w-full">
                        <h1 class="mb-2">Logo Perusahaan</h1>
                        <input type="file" name="image" required placeholder="Masukkan Logo Perusahaan" "></input>
                    </label>

                </div>
                <div class="flex gap-4 items-center">
                    <div class="pt-8">
                        <button type="submit" class="bg-BlueTako text-white px-4 py-2 rounded-2xl">Simpan</button>
                    </div>
                    <div class="pt-8">
                        <a href="/admin/dashboard/perusahaan_dashboard">
                            <span class="bg-RedTako text-white px-4 py-[9.5px] rounded-2xl">Batal</span>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>

</html>
