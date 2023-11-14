<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Loker | Karir Tako</title>
    @vite('resources/css/app.css')

    {{-- <script src="{{ asset('js/cdn.jsdelivr.net_npm_vue@2.6.14_dist_vue.js') }}"></script> --}}
    <script src="{{ asset('js/vue.global.js') }}"></script>
    <script src="{{ asset('js/jquery.min.js') }}"></script>

    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

    <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.0/dist/trix.css">
    <script type="text/javascript" src="https://unpkg.com/trix@2.0.0/dist/trix.umd.min.js"></script>

    <style>
        trix-toolbar [data-trix-button-group= 'file-tools'] {
            display: none;
        }

        .select2-container--default .select2-selection--single {
            padding-top: 20px;
            padding-bottom: 20px;
            display: flex;
            align-items: center;
        }

        .select2-container--default .select2-selection--single {
            background-color: #fff;
            border: 1.5px solid #6B7280;
            border-radius: 16px;
        }

        .select2-container--default .select2-selection--single .select2-selection__arrow {
            height: 26px;
            position: absolute;
            top: 9px;
            right: 8px;
            width: 20px;
        }
    </style>

</head>

<body class="bg-BgTako text-DarkTako h-full">
    <div class="py-16 px-16">

        <div class="p-8 container mx-auto bg-white h-full rounded-2xl">
            <div class="flex items-center gap-4">
                <div>
                    <img src="/images/plus.svg" alt="">
                </div>
                <h1 class="text-3xl font-bold">
                    Tambah Loker
                </h1>
            </div>

            <form id="vue" action="{{ url('/form') }}" method="POST" class="w-full">
                @csrf
                <div class="flex flex-wrap pt-8 gap-4">
                    <label for="nama" class="w-[49%]">
                        <h1 class="mb-2">Pekerjaan</h1>
                        <input type="text" name="pekerjaan" required class="rounded-2xl w-full"
                            placeholder="Masukkan Nama Pekerjaan">
                    </label>

                    {{-- <label for="perusahaan" class="w-[49%]">
                        <h1 class="mb-2">Perusahaan</h1>
                        <input type="text" name="perusahaan" required class="rounded-2xl w-full"
                            placeholder="Masukkan Nama Perusahaan">
                    </label> --}}

                    <label for="perusahaan" class="w-[49%]">
                        <h1 class="mb-2">Perusahaan</h1>
                        <select class="js-example-basic-single w-full rounded-2xl" name="perusahaan" required
                            style="width: 100%;">
                            <option value=""></option>
                        </select>
                    </label>

                    <label for="jenis_pekerjaan" class="w-[49%]">
                        <h1 class="mb-2">Jenis Pekerjaan</h1>
                        <select class="w-full rounded-2xl" name="jenis_pekerjaan">
                            <option class="">Pilih Program</option>
                            <option value="Internship">Internship</option>
                            <option value="Profesional">Profesional</option>
                        </select>
                    </label>

                    <label for="batas_lamaran" class="w-[49%] relative">
                        <h1 class="mb-2">Batas Lamaran</h1>
                        {{-- <img src="/images/calendar.svg" alt=""
                            class="absolute right-2 bottom-1 pointer-events-none scale-90 opacity-75"> --}}
                        <input type="date" name="batas_lamaran" required class="rounded-2xl w-full">
                    </label>

                    <div class="flex w-full gap-4 flex-wrap">
                        <template v-for="(item, index) in namaskill">
                            <div>
                                <h1 class="mb-2">Skill</h1>
                                <label for="skill" class="flex gap-2">
                                    <input type="text" name="skill[]" required class="rounded-2xl w-full"
                                        placeholder="Masukkan Nama Skill">
                                    <span v-on:Click='hapusKonten(index, item)'
                                        class="cursor-pointer flex items-center  bg-RedTako px-4 py-2 rounded-2xl text-white">Delete
                                    </span>
                                </label>
                            </div>
                        </template>
                        <div class="flex items-end">
                            <span v-on:Click='onClickSkill()'
                                class="cursor-pointer flex items-center  bg-BlueTako px-4 py-2 rounded-2xl text-white">Add
                                Req Skill +</span>
                        </div>
                    </div>

                    {{-- <div class="flex w-full gap-4 flex-wrap">
                        <template v-for="(item, index) in idskilldelete":key="index">
                            <input type="text" name="idskilldelete[]" v-model="item.id" hidden>
                        </template>
                        <template v-for="(item, index) in namaskill" :key="index">
                            <div>
                                <h1 class="mb-2">Skill</h1>
                                <label for="skill" class="flex gap-2">
                                    <input type="text" name="idskill[]" v-model="item.id" hidden>
                                    <input type="text" name="skill[]" v-model="item.nama" required
                                        class="rounded-2xl w-full">
                                    <span v-on:Click='hapusKonten(index, item.id)'
                                        class="cursor-pointer flex items-center  bg-RedTako px-4 py-2 rounded-2xl text-white">Delete
                                    </span>
                                </label>
                            </div>
                        </template>
                        <div class="flex items-end">
                            <span v-on:Click='onClickSkill()'
                                class="cursor-pointer flex items-center  bg-BlueTako px-4 py-2 rounded-2xl text-white">
                                Add</span>
                        </div>
                        <div class="flex items-end">
                        </div>
                    </div> --}}

                    <label for="isi_konten" class="w-full">Deskripsi
                        <input type="text" name="isi_konten" required class="rounded-2xl w-full"
                            placeholder="Masukkan Deskripsi">
                    </label>

                    {{-- <label for="deskripsi">
                        <h1 class="mb-2">Isi Konten</h1>
                        <textarea id="summernote" type="text" name="deskripsi" class="rounded-2xl w-full"></textarea>
                    </label> --}}

                    <label for="deskripsi" class="w-full">
                        <h1 class="mb-2">Isi Konten</h1>
                        <input id="deskripsi" type="hidden" name="deskripsi">
                        <trix-editor input="deskripsi" class="h-64 hover:cursor-auto"></trix-editor>
                    </label>
                </div>

                {{-- <div class="flex gap-4">
                    <div class="pt-8">
                        <button type="submit" class="bg-BlueTako text-white px-4 py-2 rounded-2xl">Simpan</button>
                    </div>

                </div> --}}

                <div class="flex gap-4 items-center">
                    <div class="pt-8">
                        <button type="submit" class="bg-BlueTako text-white px-4 py-2 rounded-2xl">Simpan</button>
                    </div>
                    <div class="pt-[33px]">
                        <a href="/admin/dashboard/lowongan_pekerjaan">
                            <span class="bg-RedTako text-white px-4 py-[9.5px] rounded-2xl ">Batal</span>
                        </a>
                    </div>
                </div>
        </div>
        </form>
        {{-- <div class="pt-8">
            <a href="/admin/dashboard/lowongan_pekerjaan">
                <button class="bg-RedTako text-white px-4 py-2 rounded-2xl">Batal</button>
            </a>
        </div> --}}
    </div>
    </div>

    <script>
        $(document).ready(function() {
            $('.js-example-basic-single').select2({
                placeholder: 'Pilih Program',
                ajax: {
                    url: '/json_perusahaan', // Ganti dengan URL API yang sesuai
                    dataType: 'json',
                    // processResults: function(data) {
                    //     return {
                    //         results: data.perusahaan
                    //     };
                    // }
                    processResults: function(data) {
                        return {
                            results: $.map(data, function(item) {
                                return {
                                    text: item.perusahaan,
                                    id: item.id
                                }
                            })
                        };
                    },
                    cache: true
                }
            });
        });
    </script>

    <script>
        const {
            createApp
        } = Vue;

        createApp({
            data() {
                return {
                    namaskill: [],
                    id: [],
                    idskilldelete: [],
                };
            },
            mounted() {

            },
            methods: {

                onClickSkill() {
                    if (this.namaskill.length < 6) {
                        this.namaskill.push({
                            nama: '',
                            id: ''
                        });
                    }
                    // console.log(this.skill);
                },
                hapusKonten(index, idLama) {
                    this.namaskill.splice(index, 1);
                    // deleteEvent: function(event) {
                    //     this.events.splice(this.event);
                    // }
                }
            },
        }).mount("#vue");
    </script>

    {{-- <script>
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
                    $.ajax('/admin/table/viewskill/' + id, {
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
    </script> --}}

</body>

</html>
