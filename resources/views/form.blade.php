<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Baru | Karir Tako</title>
    @vite('resources/css/app.css')

    {{-- <script src="{{ asset('js/cdn.jsdelivr.net_npm_vue@2.6.14_dist_vue.js') }}"></script> --}}
    {{-- <script src="{{ asset('js/vue.global.js') }}"></script> --}}

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
    </script>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>

</head>

<body class="bg-BgTako text-DarkTako h-full">
    <div class="py-16 px-16">
        <div class="p-8 container mx-auto bg-white h-full rounded-2xl">
            <h1 class="text-3xl font-bold  ">
                Tambah Baru
            </h1>

            <form id="vue" action="{{ url('/form') }}" method="post" class="w-full">
                @csrf
                <div class="flex flex-wrap pt-8 gap-4">
                    <label for="nama" class="w-[49%]">
                        <h1>Pekerjaan</h1>
                        <input type="text" name="pekerjaan" required class="rounded-2xl w-full"
                            placeholder="Masukkan Nama Pekerjaan">
                    </label>
                    <label for="perusahaan" class="w-[49%]">
                        <h1>Perusahaan</h1>
                        <input type="text" name="perusahaan" required class="rounded-2xl w-full">
                    </label>
                    <label for="jenis_pekerjaan" class="w-[49%]">
                        <h1>Jenis Pekerjaan</h1>

                        {{-- <input type="text" name="jenis_pekerjaan" required class="rounded-2xl w-full"> --}}

                        <select class="js-example-basic-single full-height w-full h-full" name="jenis_pekerjaan">
                            <option value="Internship">Internship</option>
                            <option value="Profesional">Profesional</option>
                        </select>
                    </label>

                    <label for="batas_lamaran" class="w-[49%] relative">
                        <h1>Batas Lamaran</h1>
                        <img src="/images/calendar.svg" alt=""
                            class="absolute right-2 bottom-1 pointer-events-none scale-90 opacity-75">
                        <input type="date" name="batas_lamaran" required class="rounded-2xl w-full">
                    </label>
                    <div class="flex w-full gap-4">
                        <template v-for="(item, index) in skill">
                            <label for="skill">
                                <h1>Skill</h1>
                                <input type="text" name="skill[]" required class="rounded-2xl w-full">
                            </label>
                        </template>
                        <div class="flex items-end">
                            <span v-on:Click='onClickSkill()'
                                class="cursor-pointer flex items-center  bg-BlueTako px-4 py-2 rounded-2xl text-white">Add</span>
                        </div>
                    </div>
                    <label for="isi_konten" class="w-full">Deskripsi
                        <input type="text" name="isi_konten" required class="rounded-2xl w-full">
                    </label>
                    <label for="deskripsi">
                        <h1>Isi Konten</h1>
                        <textarea type="text" name="deskripsi" class="rounded-2xl w-full" id="summernote"></textarea>
                    </label>

                </div>
                <div class="pt-8">
                    <button type="submit" class="bg-BlueTako text-white px-4 py-2 rounded-2xl">Simpan</button>
                </div>
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

    <script>
        $(document).ready(function() {
            $('.js-example-basic-single').select2({
                placeholder: 'Meong',
                cascading: "height"
            });
        });
    </script>

    {{-- <script type="module">
        {{ asset('js/vue.js') }}
    </script> --}}


    <script>
        const {
            createApp
        } = Vue;

        createApp({
            data() {
                return {
                    skill: 1,
                };
            },
            mounted() {

            },
            methods: {

                onClickSkill() {
                    if (this.skill < 6) {
                        this.skill += 1;
                    }

                    // console.log(this.skill);
                }
            },
        }).mount("#vue");
    </script>

    <script>
        $('#summernote').summernote({
            placeholder: 'Masukkan Isi Konten',
            tabsize: 8,
            height: 256,
            width: 1104,
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']]
            ]
        });
    </script>

</body>

</html>
