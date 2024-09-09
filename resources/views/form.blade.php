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

    {{-- <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script> --}}
    {{-- <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"> --}}

    <script src="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css" rel="stylesheet" />

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

                <div class="w-full flex justify-end">
                    <button type="button" @click="selectedLanguage = 'id'"
                        :class="{ 'bg-BlueTako text-white': selectedLanguage === 'id' }"
                        class=" px-4 py-2 rounded-lg ">Bahasa Indonesia</button>
                    <button type="button" @click="selectedLanguage = 'en'"
                        :class="{ 'bg-BlueTako text-white': selectedLanguage === 'en' }"
                        class="px-4 py-2 rounded-lg ">English</button>
                    <button type="button" @click="selectedLanguage = 'zh'"
                        :class="{ 'bg-BlueTako text-white': selectedLanguage === 'zh' }"
                        class="px-4 py-2 rounded-lg ">Chinese</button>
                </div>
                <div class="grid grid-cols-2 pt-8 gap-4">
                    <div>
                        <label for="pekerjaan" class="w-full">
                            <h1 class="mb-2">Pekerjaan</h1>
                            {{-- <input type="text" name="pekerjaan" required class="rounded-2xl w-full"
                                placeholder="Masukkan Nama Pekerjaan"> --}}

                            <div v-show="selectedLanguage === 'id'">
                                <input v-model="pekerjaan.id" name="pekerjaan[id]" class="rounded-2xl w-full"
                                    placeholder="Masukkan Nama Pekerjaan (ID)" maxlength="255"></input>
                            </div>
                            <div v-show="selectedLanguage === 'en'">
                                <input v-model="pekerjaan.en" name="pekerjaan[en]" class="rounded-2xl w-full"
                                    placeholder="Entry Name of Jobs (EN)" maxlength="255"></input>
                            </div>
                            <div v-show="selectedLanguage === 'zh'">
                                <input v-model="pekerjaan.zh" name="pekerjaan[zh]" class="rounded-2xl w-full"
                                    placeholder="Masukkan Nama Pekerjaan (ZH)" maxlength="255"></input>
                            </div>
                            @error('pekerjaan')
                                <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                            @enderror
                        </label>

                        <div class="grid grid-cols-3 gap-4 mt-4">
                            <label for="jenis_pekerjaan" class="w-full">
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

                            <label for="batas_lamaran" class="w-full relative">
                                <h1 class="mb-2">Batas Lamaran</h1>
                                {{-- <img src="/images/calendar.svg" alt=""
                                    class="absolute right-2 bottom-1 pointer-events-none scale-90 opacity-75"> --}}
                                <input type="date" name="batas_lamaran" required class="rounded-2xl w-full">
                                @error('batas_lamaran')
                                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                                @enderror
                            </label>

                            <label for="lokasi" class="w-full relative">
                                <h1 class="mb-2">Lokasi</h1>
                                {{-- <img src="/images/calendar.svg" alt=""
                                    class="absolute right-2 bottom-1 pointer-events-none scale-90 opacity-75"> --}}
                                <input type="text" name="lokasi" required class="rounded-2xl w-full"
                                    placeholder="Masukkan Lokasi">
                                @error('lokasi')
                                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                                @enderror
                            </label>
                        </div>

                        <div class="flex w-full gap-4 flex-wrap mt-4">
                            <template v-for="(item, index) in namaskill">
                                <div class="w-full">
                                    <h1 class="mb-2">Skill</h1>
                                    <label for="skill" class="flex gap-2">
                                        <input type="text" :name="`skill[${index}]`" required
                                            class="rounded-2xl w-full" placeholder="Masukkan Nama Skill"
                                            v-model="item.nama">
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

                        <div class="mt-8">
                            <label for="status" class="w-full">
                                <h1 class="mb-2">Status</h1>
                                <div class="grid grid-cols-3 items-center gap-4">
                                    <select class="w-full rounded-2xl col-span-2" name="status">
                                        <option class="">Pilih Status Post</option>
                                        <option value="Aktif">Aktif</option>
                                        <option value="Tidak Aktif">Tidak Aktif</option>
                                    </select>

                                    <div class="flex gap-2 items-center w-full">
                                        <div class="w-full">
                                            <button type="submit"
                                                class="bg-BlueTako text-white px-4 py-2 rounded-2xl w-full">Simpan</button>
                                        </div>
                                        <div class="w-full">
                                            <a href="/admin/dashboard/lowongan_pekerjaan" class="w-full">
                                                <button
                                                    class="bg-RedTako text-white px-4 py-2 rounded-2xl w-full">Batal</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                @error('status')
                                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                                @enderror
                            </label>
                        </div>
                    </div>

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

                    <div class="w-full">
                        <div>
                            <label for="isi_konten" class="w-full">
                                <h1 class="mb-2">Deskripsi Singkat</h1>
                                {{-- <textarea id="isi_konten" type="text" name="isi_konten" required class="rounded-2xl w-full h-32"
                                    placeholder="Masukkan Deskripsi" maxlength="255"></textarea> --}}

                                <div v-show="selectedLanguage === 'id'">
                                    <textarea v-model="isi_konten.id" name="isi_konten[id]" class="w-full rounded-2xl h-44"
                                        placeholder="Masukkan Deskripsi (ID)" maxlength="255"></textarea>
                                </div>
                                <div v-show="selectedLanguage === 'en'">
                                    <textarea v-model="isi_konten.en" name="isi_konten[en]" class="w-full rounded-2xl h-44"
                                        placeholder="Masukkan Deskripsi (EN)" maxlength="255"></textarea>
                                </div>
                                <div v-show="selectedLanguage === 'zh'">
                                    <textarea v-model="isi_konten.zh" name="isi_konten[zh]" class="w-full rounded-2xl h-44"
                                        placeholder="Masukkan Deskripsi (ZH)" maxlength="255"></textarea>
                                </div>

                                @error('isi_konten')
                                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                                @enderror
                                <div class="flex gap-2 justify-end pt-2">
                                    <p>Maksimal Karakter =</p>
                                    <p id="charCount"> 0 / 255</p>
                                </div>
                            </label>
                        </div>

                        <div class="form-group">
                            <label for="deskripsi">
                                <h1 class="mb-2">Isi Konten</h1>
                                <div v-show="selectedLanguage === 'id'">
                                    <div id="quill-editor-id" class="mb-3" style="height: 300px;"></div>
                                    <textarea rows="3" class="mb-3 d-none" name="deskripsi[id]" id="quill-editor-area-id" style="display:none;"></textarea>
                                </div>

                                <div v-show="selectedLanguage === 'en'">
                                    <div id="quill-editor-en" class="mb-3" style="height: 300px;"></div>
                                    <textarea rows="3" class="mb-3 d-none" name="deskripsi[en]" id="quill-editor-area-en" style="display:none;"></textarea>
                                </div>

                                <div v-show="selectedLanguage === 'zh'">
                                    <div id="quill-editor-zh" class="mb-3" style="height: 300px;"></div>
                                    <textarea rows="3" class="mb-3 d-none" name="deskripsi[zh]" id="quill-editor-area-zh" style="display:none;"></textarea>
                                </div>

                                @error('deskripsi')
                                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                                @enderror
                            </label>
                        </div>

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
        document.addEventListener('DOMContentLoaded', function() {
            // Quill instance for Indonesian ('id') language
            if (document.getElementById('quill-editor-area-id')) {
                var editorId = new Quill('#quill-editor-id', {
                    theme: 'snow',
                    placeholder: 'Masukkan Isi Konten dalam Bahasa Indonesia' // Placeholder untuk ID
                });
                var quillEditorId = document.getElementById('quill-editor-area-id');
                editorId.on('text-change', function() {
                    quillEditorId.value = editorId.root.innerHTML;
                });

                quillEditorId.addEventListener('input', function() {
                    editorId.root.innerHTML = quillEditorId.value;
                });
            }

            // Quill instance for English ('en') language
            if (document.getElementById('quill-editor-area-en')) {
                var editorEn = new Quill('#quill-editor-en', {
                    theme: 'snow',
                    placeholder: 'Enter Main Content in English' // Placeholder untuk EN
                });
                var quillEditorEn = document.getElementById('quill-editor-area-en');
                editorEn.on('text-change', function() {
                    quillEditorEn.value = editorEn.root.innerHTML;
                });

                quillEditorEn.addEventListener('input', function() {
                    editorEn.root.innerHTML = quillEditorEn.value;
                });
            }

            // Quill instance for Chinese ('zh') language
            if (document.getElementById('quill-editor-area-zh')) {
                var editorZh = new Quill('#quill-editor-zh', {
                    theme: 'snow',
                    placeholder: 'Enter Main Content in English' // Placeholder untuk EN
                });
                var quillEditorZh = document.getElementById('quill-editor-area-zh');
                editorZh.on('text-change', function() {
                    quillEditorZh.value = editorZh.root.innerHTML;
                });

                quillEditorZh.addEventListener('input', function() {
                    editorZh.root.innerHTML = quillEditorZh.value;
                });
            }
        });
    </script>

    <script>
        $(document).ready(function() {
            $('.js-example-basic-single').select2({});
        });
    </script>

    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
            const textareaId = document.querySelector('textarea[name="isi_konten[id]"]');
            const textareaEn = document.querySelector('textarea[name="isi_konten[en]"]');
            const textareaZh = document.querySelector('textarea[name="isi_konten[zh]"]');
            const charCount = document.getElementById('charCount');

            function updateCharCount(textarea) {
                if (charCount) {
                    charCount.textContent = `${textarea.value.length} / 255`;
                }
            }

            // Untuk textarea Bahasa Indonesia (isi_konten.id)
            if (textareaId) {
                textareaId.addEventListener('input', () => {
                    updateCharCount(textareaId);
                });
                updateCharCount(textareaId); // Set initial count on load
            }

            // Untuk textarea Bahasa Inggris (isi_konten.en)
            if (textareaEn) {
                textareaEn.addEventListener('input', () => {
                    updateCharCount(textareaEn);
                });
                updateCharCount(textareaEn); // Set initial count on load
            }

            // Untuk textarea Bahasa Inggris (isi_konten.en)
            if (textareaZh) {
                textareaZh.addEventListener('input', () => {
                    updateCharCount(textareaZh);
                });
                updateCharCount(textareaZh); // Set initial count on load
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
                    selectedLanguage: 'id', // Bahasa default
                    pekerjaan: {
                        id: '',
                        en: '',
                        zh: ''
                    },
                    isi_konten: {
                        id: '',
                        en: '',
                        zh: ''
                    },
                    deskripsi: {
                        id: '',
                        en: '',
                        zh: ''
                    },
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
                // Method untuk mengatur data berdasarkan bahasa
                switchLanguage(lang) {
                    this.selectedLanguage = lang;
                    console.log(this.selectedLanguage);

                },
            },
        }).mount("#vue");
    </script>
</body>

</html>
