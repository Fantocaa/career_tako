<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Baru | Karir Tako</title>
    @vite('resources/css/app.css')
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

<body class="bg-white text-DarkTako h-full">
    <div class="py-16 px-16">
        <div class="p-8 container mx-auto bg-white h-full rounded-2xl">
            <h1 class="text-3xl font-bold">
                Tambah Baru
            </h1>
            <form id="vue" action="{{ url('/table/update_loker') }}" method="POST" class="w-full">
                @csrf
                <input class="" type="text" name="id" id="id" value="{{ $md_loker[0]->id }}"
                    hidden>
                <div class="flex flex-wrap pt-8 gap-4">
                    <label for="nama" class="w-[49%]">
                        <h1>Pekerjaan</h1>
                        <input type="text" name="pekerjaan" value="{{ $md_loker[0]->pekerjaan }}" required
                            class="rounded-2xl w-full" placeholder="Masukkan Nama Pekerjaan">
                    </label>
                    <label for="perusahaan" class="w-[49%]">
                        <h1>Perusahaan</h1>
                        <input type="text" name="perusahaan" value="{{ $md_loker[0]->perusahaan }}" required
                            class="rounded-2xl w-full">
                    </label>
                    <label for="jenis_pekerjaan" class="w-[49%]">
                        <h1>Jenis Pekerjaan</h1>

                        {{-- <input type="text" name="jenis_pekerjaan" required class="rounded-2xl w-full"> --}}

                        <select class="js-example-basic-single full-height w-full h-full" name="jenis_pekerjaan"
                            value="{{ $md_loker[0]->jenis_pekerjaan }}">
                            <option value="Internship">Internship</option>
                            <option value="Profesional">Profesional</option>
                        </select>
                    </label>

                    <label for="batas_lamaran" class="w-[49%] relative">
                        <h1>Batas Lamaran</h1>
                        <img src="/images/calendar.svg" alt=""
                            class="absolute right-2 bottom-1 pointer-events-none scale-90 opacity-75">
                        <input type="date" name="batas_lamaran" value="{{ $md_loker[0]->batas_lamaran }}" required
                            class="rounded-2xl w-full">
                    </label>

                    <div class="flex w-full gap-4">
                        <template v-for="(item, index) in idskilldelete":key="index">
                            <input type="text" name="idskilldelete[]" v-model="item.id" hidden>
                        </template>
                        <template v-for="(item, index) in namaskill" :key="index">
                            <label for="skill">
                                <h1>Skill</h1>
                                <input type="text" name="idskill[]" v-model="item.id" hidden>
                                <input type="text" name="skill[]" v-model="item.nama" required
                                    class="rounded-2xl w-full">
                                <span v-on:Click='hapusKonten(index, item.id)'
                                    class="cursor-pointer flex items-center  bg-BlueTako px-4 py-2 rounded-2xl text-white">Delete</span>
                            </label>
                        </template>
                        <div class="flex items-end">
                            <span v-on:Click='onClickSkill()'
                                class="cursor-pointer flex items-center  bg-BlueTako px-4 py-2 rounded-2xl text-white">Add</span>
                        </div>
                        <div class="flex items-end">

                        </div>
                    </div>

                    <label for="isi_konten" class="w-full">Deskripsi
                        <input type="text" name="isi_konten" value="{{ $md_loker[0]->deskripsi }}" required
                            class="rounded-2xl w-full">
                    </label>
                    <label for="deskripsi">
                        <h1>Isi Konten</h1>
                        <input type="text" name="deskripsi" class="rounded-2xl w-full" id="summernote"
                            value="{{ $md_loker[0]->isi_konten }}">
                    </label>
                </div>
                <div class="flex gap-4">

                    <div class="pt-8">
                        <button type="submit" class="bg-BlueTako text-white px-4 py-2 rounded-2xl">Simpan</button>
                    </div>
                    <div class="pt-8">
                        <a href="/admin/dashboard/lowongan_pekerjaan">
                            <button class="bg-RedTako text-white px-4 py-2 rounded-2xl">Batal</button>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>

    {{-- <form id="vue" action="{{ url('/form') }}" method="post">
        @csrf
        <input class="hidden" type="text" name="idloker" id="idloker" value="{{ $md_loker[0]->id }}">
        <div class="flex flex-col">
            <label for="nama">Pekerjaan
                <input type="text" name="pekerjaan" value="{{ $md_loker[0]->pekerjaan }}" required>
            </label>
            <label for="perusahaan">Perusahaan
                <input type="text" name="perusahaan" value="{{ $md_loker[0]->perusahaan }}" required>
            </label>
            <label for="jenis_pekerjaan">Jenis Pekerjaan
                <input type="text" name="jenis_pekerjaan" value="{{ $md_loker[0]->jenis_pekerjaan }}" required>
            </label>
            <span v-on:click="onClickSkill">tambah</span>
            <template v-for="(item, index) in namaskill" :key="index">
                <label for="skill">Skill
                    <input type="text" name="skill[]" v-model="item.nama" required>
                </label>
            </template>
            <label for="batas_lamaran">Batas Lamaran
                <input type="date" name="batas_lamaran" value="{{ $md_loker[0]->batas_lamaran }}" required>
            </label>
            <label for="isi_konten">Deskripsi
                <input type="text" name="isi_konten" value="{{ $md_loker[0]->deskripsi }}" required>
            </label>
            <label for="deskripsi"> Isi Konten
                <input type="text" name="deskripsi" value="{{ $md_loker[0]->isi_konten }}" required>
            </label>

            <button type="submit">Kirim</button>

        </div>

    </form>

     --}}
    <script src="{{ asset('js/jquery.min.js') }}"></script>

    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

    <script>
        $(document).ready(function() {
            $('.js-example-basic-single').select2({
                placeholder: 'Meong',
                width: 'resolve',
                height: 'resolve',
            });
        });
    </script>

    <script>
        Vue.createApp({
            data() {
                return {
                    namaskill: [],
                    id: [],
                    idskilldelete: [],
                };
            },
            mounted() {
                this.viewSkill();
            },
            methods: {
                viewSkill() {
                    var id = $('#id').val();
                    var self = this;
                    $.ajax('/table/viewskill/' + id, {
                        type: 'GET',
                        success: function(data, status, xhr) {
                            console.log(data);
                            self.namaskill = data[0].map(function(dt) {
                                return {
                                    nama: dt.nama_skill,
                                    id: dt.id
                                };
                            });
                        },
                    });
                },
                onClickSkill() {
                    if (this.namaskill.length < 6) {
                        this.namaskill.push({
                            nama: '',
                            id: ''
                        });
                    }
                },
                hapusKonten(index, idLama) {
                    this.namaskill.splice(index, 1);
                    this.idskilldelete.push({
                        id: idLama
                    });
                },
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
