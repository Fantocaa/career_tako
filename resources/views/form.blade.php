<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Loker | Karir Tako</title>
    @vite('resources/css/app.css')

    <script src="{{ asset('js/cdn.jsdelivr.net_npm_vue@2.6.14_dist_vue.js') }}"></script>
    <script src="{{ asset('js/vue.global.js') }}"></script>
    <script src="{{ asset('js/jquery.min.js') }}"></script>

    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

    <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.0/dist/trix.css">
    <script type="text/javascript" src="https://unpkg.com/trix@2.0.0/dist/trix.umd.min.js"></script>

    <style>
        .trix-button--icon-decrease-nesting-level,
        .trix-button--icon-strike,
        .trix-button--icon-code {
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

    <script>
        window.errors =
            @json($errors->toArray());
    </script>
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

            <form id="vue" action="{{ url('/api/form') }}" method="POST" class="w-full">
                @csrf
                <div class="flex flex-wrap pt-8 gap-4">
                    <label for="nama" class="w-[49%]">
                        <h1 class="mb-2">Pekerjaan</h1>
                        <input type="text" name="pekerjaan" required class="rounded-2xl w-full"
                            placeholder="Masukkan Nama Pekerjaan">
                        @error('pekerjaan')
                            <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                        @enderror
                    </label>

                    {{-- <label for="perusahaan" class="w-[49%]">
                        <h1 class="mb-2">Perusahaan</h1>
                        <input type="text" name="perusahaan" required class="rounded-2xl w-full"
                            placeholder="Masukkan Nama Perusahaan">
                    </label> --}}

                    {{-- <label for="perusahaan" class="w-[49%]">
                        <h1 class="mb-2">Perusahaan</h1>
                        <select class="js-example-basic-single w-full rounded-2xl" name="perusahaan" required
                            style="width: 100%;">
                            <option value=""></option>
                        </select>
                    </label> --}}

                    <label for="jenis_pekerjaan" class="w-[49%]">
                        <h1 class="mb-2">Jenis Pekerjaan</h1>
                        <select class="w-full rounded-2xl" name="jenis_pekerjaan">
                            <option class="">Pilih Program</option>
                            <option value="Internship">Internship</option>
                            <option value="Profesional">Profesional</option>
                        </select>
                        @error('jenis_pekerjaan')
                            <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                        @enderror
                    </label>

                    <label for="batas_lamaran" class="w-[49%] relative">
                        <h1 class="mb-2">Batas Lamaran</h1>
                        {{-- <img src="/images/calendar.svg" alt=""
                            class="absolute right-2 bottom-1 pointer-events-none scale-90 opacity-75"> --}}
                        <input type="date" name="batas_lamaran" required class="rounded-2xl w-full">
                        @error('batas_lamaran')
                            <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                        @enderror
                    </label>

                    <label for="lokasi" class="w-[49%] relative">
                        <h1 class="mb-2">Lokasi</h1>
                        {{-- <img src="/images/calendar.svg" alt=""
                            class="absolute right-2 bottom-1 pointer-events-none scale-90 opacity-75"> --}}
                        <input type="text" name="lokasi" required class="rounded-2xl w-full"
                            placeholder="Masukkan Lokasi">
                        @error('lokasi')
                            <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                        @enderror
                    </label>

                    <div class="flex w-full gap-4 flex-wrap">
                        <template v-for="(item, index) in namaskill">
                            <div>
                                <h1 class="mb-2">Skill</h1>
                                <label for="skill" class="flex gap-2">
                                    <input type="text" :name="`skill[${index}]`" required class="rounded-2xl w-full"
                                        placeholder="Masukkan Nama Skill" v-model="item.nama">
                                    <span v-on:click='hapusKonten(index, item)'
                                        class="cursor-pointer flex items-center bg-RedTako px-4 py-2 rounded-2xl text-white">Delete</span>
                                    {{-- <span v-if="errors[`skill.${index}`]"
                                        class="text-red-500">{{ errors[`skill.${index}`][0] }}</span> --}}
                                </label>
                            </div>
                        </template>
                        <div class="flex items-end">
                            <span v-on:click='onClickSkill()'
                                class="cursor-pointer flex items-center bg-BlueTako px-4 py-2 rounded-2xl text-white">Add
                                Req Skill +</span>
                        </div>
                    </div>


                    <div class="grid grid-cols-2 gap-4 w-full">
                        <div>
                            <label for="isi_konten" class="w-full">Deskripsi Singkat
                                <textarea id="isi_konten" type="text" name="isi_konten" required class="rounded-2xl w-full h-32"
                                    placeholder="Masukkan Deskripsi" maxlength="255"></textarea>
                                @error('isi_konten')
                                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                                @enderror
                                <div class="flex gap-2 justify-end pt-2">
                                    <p>Maksimal Karakter =</p>
                                    <p id="charCount"> 0 / 255</p>
                                </div>
                            </label>
                            <label for="status" class="w-[49%]">
                                <h1 class="mb-2">Status</h1>
                                <select class="w-full rounded-2xl" name="status">
                                    <option class="">Pilih Status Post</option>
                                    <option value="Aktif">Aktif</option>
                                    <option value="Tidak Aktif">Tidak Aktif</option>
                                </select>
                                @error('status')
                                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                                @enderror
                            </label>
                            <div class="flex gap-4 items-center">
                                <div class="pt-8">
                                    <button type="submit"
                                        class="bg-BlueTako text-white px-4 py-2 rounded-2xl">Simpan</button>
                                </div>
                                <div class="pt-[33px]">
                                    <a href="/admin/dashboard/lowongan_pekerjaan">
                                        <span class="bg-RedTako text-white px-4 py-[9.5px] rounded-2xl">Batal</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {{-- <label for="deskripsi">
                            <h1 class="mb-2">Isi Konten</h1>
                            <textarea id="summernote" type="text" name="deskripsi" class="rounded-2xl w-full"></textarea>
                        </label> --}}

                        <label for="deskripsi" class="w-full">
                            <h1 class="mb-2">Isi Konten</h1>
                            <input id="deskripsi" type="hidden" name="deskripsi">
                            <trix-editor input="deskripsi"
                                class="h-80 overflow-scroll hover:cursor-auto overflow-x-hidden rounded-2xl"
                                placeholder="Masukkan Isi Konten"></trix-editor>
                            @error('deskripsi')
                                <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                            @enderror
                        </label>
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
            $('.js-example-basic-single').select2({});
        });
    </script>

    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
            const input = document.getElementById('isi_konten');
            const charCount = document.getElementById('charCount');

            if (input && charCount) {
                input.addEventListener('input', () => {
                    charCount.textContent = `${input.value.length} / 255`;
                });
            }
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
                    errors: window.errors || {}, // Mengambil pesan error dari window.errors
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
                },
                onSubmit() {
                    // Reset error messages
                    this.errors = {};

                    // Validasi setiap field
                    if (!this.pekerjaan) {
                        this.errors.pekerjaan = "Pekerjaan harus diisi.";
                    }
                    if (!this.jenis_pekerjaan) {
                        this.errors.jenis_pekerjaan = "Jenis pekerjaan harus dipilih.";
                    }
                    if (!this.batas_lamaran) {
                        this.errors.batas_lamaran = "Batas lamaran harus diisi.";
                    }
                    if (!this.lokasi) {
                        this.errors.lokasi = "Lokasi harus diisi.";
                    }
                    if (this.namaskill.length === 0) {
                        this.errors.namaskill = "Minimal 1 skill harus diisi.";
                    } else {
                        this.namaskill.forEach((skill, index) => {
                            if (!skill.nama) {
                                this.errors[`namaskill_${index}`] = "Nama skill harus diisi.";
                            }
                        });
                    }
                    if (!this.isi_konten) {
                        this.errors.isi_konten = "Deskripsi singkat harus diisi.";
                    }
                    if (!this.deskripsi) {
                        this.errors.deskripsi = "Isi konten harus diisi.";
                    }

                    // Jika tidak ada error, submit form
                    if (Object.keys(this.errors).length === 0) {
                        this.$refs.form.submit();
                    }
                },
            },
        }).mount("#vue");
    </script>
</body>

</html>
