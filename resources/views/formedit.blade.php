<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Edit Loker | Karir Tako</title>
    @vite('resources/css/app.css')

    <script src="{{ asset('js/cdn.jsdelivr.net_npm_vue@2.6.14_dist_vue.js') }}"></script>
    <script src="{{ asset('js/vue.global.js') }}"></script>
    <script src="{{ asset('js/jquery.min.js') }}"></script>

    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

    <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.0/dist/trix.css">
    <script type="text/javascript" src="https://unpkg.com/trix@2.0.0/dist/trix.umd.min.js"></script>

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
</head>

<body class="bg-BgTako text-DarkTako h-full">
    <div class="py-16 px-16">
        <div class="p-8 container mx-auto bg-white h-full rounded-2xl">
            <div class="flex items-center gap-4">
                <div>
                    <img src="/images/plus.svg" alt="">
                </div>
                <h1 class="text-3xl font-bold">
                    Edit Loker
                </h1>
            </div>
            <form id="vue" action="{{ url('/admin/table/update_loker') }}" method="POST" class="w-full">
                @csrf

                <div class="w-full flex justify-end">
                    <button type="button" @click="changeLanguage('id')"
                        :class="{ 'bg-BlueTako text-white': selectedLanguage === 'id' }"
                        class="px-4 py-2 rounded-lg">Bahasa Indonesia</button>
                    <button type="button" @click="changeLanguage('en')"
                        :class="{ 'bg-BlueTako text-white': selectedLanguage === 'en' }"
                        class="px-4 py-2 rounded-lg">English</button>
                    <button type="button" @click="changeLanguage('zh')"
                        :class="{ 'bg-BlueTako text-white': selectedLanguage === 'zh' }"
                        class="px-4 py-2 rounded-lg ">Chinese</button>
                </div>

                <input class="" type="text" name="id" id="id" value="{{ $md_loker->id }}" hidden>

                <div class="grid grid-cols-2 pt-8 gap-4">
                    <div>
                        <label for="nama" class="w-[49%]">
                            <h1 class="mb-2">Pekerjaan</h1>
                            {{-- <input type="text" name="pekerjaan" value="{{ $md_loker->pekerjaan }}" required
                                class="rounded-2xl w-full" placeholder="Masukkan Nama Pekerjaan"> --}}
                            <div v-show="selectedLanguage === 'id'">
                                <input v-model="pekerjaan.id" name="pekerjaan[id]" class="rounded-2xl w-full"
                                    placeholder="Masukkan Nama Pekerjaan (ID)"
                                    maxlength="255">{{ $md_loker->translate('id')->pekerjaan ?? '' }}</input>
                            </div>
                            <div v-show="selectedLanguage === 'en'">
                                <input v-model="pekerjaan.en" name="pekerjaan[en]" class="rounded-2xl w-full"
                                    placeholder="Entry Name of Jobs (EN)"
                                    maxlength="255">{{ $md_loker->translate('en')->pekerjaan ?? '' }}</input>
                            </div>
                            <div v-show="selectedLanguage === 'zh'">
                                <input v-model="pekerjaan.zh" name="pekerjaan[zh]" class="rounded-2xl w-full"
                                    placeholder="Masukkan Nama Pekerjaan (ZH)"
                                    maxlength="255">{{ $md_loker->translate('zh')->pekerjaan ?? '' }}</input>
                            </div>
                            @error('pekerjaan')
                                <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                            @enderror
                        </label>

                        {{-- <label for="perusahaan" class="w-[49%]">
                        <h1>Perusahaan</h1>
                        <input type="text" name="perusahaan" value="{{ $md_loker[0]->perusahaan }}" required
                            class="rounded-2xl w-full">
                    </label> --}}

                        {{-- <label for="perusahaan" class="w-[49%]">
                        <h1 class="mb-2">Perusahaan</h1>
                        <select class="js-example-basic-single w-full rounded-2xl" name="perusahaan" required
                            style="width: 100%;" value="{{ $md_loker[0]->perusahaan }}">
                            @foreach ($pt as $pt)
                                <option value="{{ $pt->id }}" @if ($pt->perusahaan == $md_loker[0]->perusahaan) selected @endif>
                                    {{ $pt->perusahaan }}</option>
                            @endforeach
                        </select>
                    </label> --}}

                        <div class="grid grid-cols-3 gap-4 mt-4">

                            <label for="jenis_pekerjaan" class="w-full">
                                <h1 class="mb-2">Jenis Pekerjaan</h1>
                                <select class="w-full rounded-2xl" name="jenis_pekerjaan"
                                    value="{{ $md_loker->jenis_pekerjaan }}">
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
                                <input type="date" name="batas_lamaran" value="{{ $md_loker->batas_lamaran }}"
                                    required class="rounded-2xl w-full">
                                @error('batas_lamaran')
                                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                                @enderror
                            </label>

                            <label for="lokasi" class="w-full relative">
                                <h1 class="mb-2">Lokasi</h1>
                                <input type="text" name="lokasi" required class="rounded-2xl w-full"
                                    value="{{ $md_loker->lokasi }}" placeholder="Masukkan Lokasi">
                                @error('lokasi')
                                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                                @enderror
                            </label>
                        </div>

                        <div class="flex w-full gap-4 flex-wrap mt-4">
                            <template v-for="(item, index) in idskilldelete":key="index">
                                <input type="text" name="idskilldelete[]" v-model="item.id" hidden>
                            </template>
                            <template v-for="(item, index) in namaskill" :key="index">
                                <div class="w-full">
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
                                    Add
                                    Req Skill +</span>
                            </div>
                        </div>
                        <div class="mt-8">
                            <label for="status" class="w-full">
                                <h1 class="mb-2">Status</h1>
                                <div class="grid grid-cols-3 items-center gap-4">
                                    <select class="w-full rounded-2xl col-span-2" name="status"
                                        value="{{ $md_loker->status }}">
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
                                            <a href="/admin/dashboard/lowongan_pekerjaan">
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

                    <div class="w-full">
                        <div>
                            <label for="isi_konten" class="w-full">
                                <h1 class="mb-2">Deskripsi Singkat</h1>
                                <div v-show="selectedLanguage === 'id'">
                                    <textarea v-model="isi_konten.id" name="isi_konten[id]" class="w-full rounded-2xl h-44"
                                        placeholder="Masukkan Deskripsi (ID)">{{ $md_loker->translate('id')->deskripsi ?? '' }}</textarea>
                                </div>
                                <div v-show="selectedLanguage === 'en'">
                                    <textarea v-model="isi_konten.en" name="isi_konten[en]" class="w-full rounded-2xl h-44"
                                        placeholder="Masukkan Deskripsi (EN)">{{ $md_loker->translate('en')->deskripsi ?? '' }}</textarea>
                                </div>
                                <div v-show="selectedLanguage === 'zh'">
                                    <textarea v-model="isi_konten.zh" name="isi_konten[zh]" class="w-full rounded-2xl h-44"
                                        placeholder="Masukkan Deskripsi (ZH)">{{ $md_loker->translate('zh')->deskripsi ?? '' }}</textarea>
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
                                    <textarea value="{{ $md_loker->translate('id')->isi_konten ?? '' }}" rows="3" class="mb-3 d-none"
                                        name="deskripsi[id]" id="quill-editor-area-id" style="display:none;"></textarea>
                                </div>

                                <div v-show="selectedLanguage === 'en'">
                                    <div id="quill-editor-en" class="mb-3" style="height: 300px;"></div>
                                    <textarea value="{{ $md_loker->translate('en')->isi_konten ?? '' }}" rows="3" class="mb-3 d-none"
                                        name="deskripsi[en]" id="quill-editor-area-en" style="display:none;"></textarea>
                                </div>

                                <div v-show="selectedLanguage === 'zh'">
                                    <div id="quill-editor-zh" class="mb-3" style="height: 300px;"></div>
                                    <textarea value="{{ $md_loker->translate('zh')->isi_konten ?? '' }}" rows="3" class="mb-3 d-none"
                                        name="deskripsi[zh]" id="quill-editor-area-zh" style="display:none;"></textarea>
                                </div>

                                @error('deskripsi')
                                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                                @enderror
                            </label>
                        </div>
                    </div>


                </div>

            </form>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Quill instance for Indonesian ('id') language
            if (document.getElementById('quill-editor-area-id')) {
                var editorId = new Quill('#quill-editor-id', {
                    theme: 'snow',
                    placeholder: 'Masukkan Isi Konten dalam Bahasa Indonesia'
                });
                var quillEditorId = document.getElementById('quill-editor-area-id');

                // Set the initial content from the textarea
                editorId.root.innerHTML = quillEditorId.value;

                // Update textarea value when Quill content changes
                editorId.on('text-change', function() {
                    quillEditorId.value = editorId.root.innerHTML;
                });

                // Update Quill content if the textarea value changes manually (if needed)
                quillEditorId.addEventListener('input', function() {
                    editorId.root.innerHTML = quillEditorId.value;
                });
            }

            // Quill instance for English ('en') language
            if (document.getElementById('quill-editor-area-en')) {
                var editorEn = new Quill('#quill-editor-en', {
                    theme: 'snow',
                    placeholder: 'Enter Main Content in English'
                });
                var quillEditorEn = document.getElementById('quill-editor-area-en');

                // Set the initial content from the textarea
                editorEn.root.innerHTML = quillEditorEn.value;

                // Update textarea value when Quill content changes
                editorEn.on('text-change', function() {
                    quillEditorEn.value = editorEn.root.innerHTML;
                });

                // Update Quill content if the textarea value changes manually (if needed)
                quillEditorEn.addEventListener('input', function() {
                    editorEn.root.innerHTML = quillEditorEn.value;
                });
            }


            if (document.getElementById('quill-editor-area-zh')) {
                var editorZh = new Quill('#quill-editor-zh', {
                    theme: 'snow',
                    placeholder: 'Enter Main Content in Chinese'
                });
                var quillEditorZh = document.getElementById('quill-editor-area-zh');

                // Set the initial content from the textarea
                editorZh.root.innerHTML = quillEditorZh.value;

                // Update textarea value when Quill content changes
                editorZh.on('text-change', function() {
                    quillEditorZh.value = editorZh.root.innerHTML;
                });

                // Update Quill content if the textarea value changes manually (if needed)
                quillEditorZh.addEventListener('input', function() {
                    editorZh.root.innerHTML = quillEditorZh.value;
                });
            }


        });
    </script>


    <script src="{{ asset('js/jquery.min.js') }}"></script>

    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

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
        $(document).ready(function() {
            $('.js-example-basic-single').select2({});
        });
    </script>

    <script>
        Vue.createApp({
            data() {
                return {
                    namaskill: [],
                    id: [],
                    idskilldelete: [],
                    errors: window.errors || {},
                    selectedLanguage: 'id',
                    pekerjaan: {
                        id: '{{ $md_loker->translate('id')->pekerjaan ?? '' }}',
                        en: '{{ $md_loker->translate('en')->pekerjaan ?? '' }}',
                        zh: '{{ $md_loker->translate('zh')->pekerjaan ?? '' }}',
                    },
                    isi_konten: {
                        id: '{{ $md_loker->translate('id')->deskripsi ?? '' }}',
                        en: '{{ $md_loker->translate('en')->deskripsi ?? '' }}',
                        zh: '{{ $md_loker->translate('zh')->deskripsi ?? '' }}',
                    },
                    deskripsi: {
                        id: '{{ $md_loker->translate('id')->isi_konten ?? '' }}',
                        en: '{{ $md_loker->translate('en')->isi_konten ?? '' }}',
                        zh: '{{ $md_loker->translate('zh')->isi_konten ?? '' }}',
                    },
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
                changeLanguage(lang) {
                    this.selectedLanguage = lang;
                    console.log(this.selectedLanguage);
                }

            },
        }).mount("#vue");
    </script>

</body>

</html>
