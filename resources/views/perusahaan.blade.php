<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Perusahaan | Tako Karir</title>
    @vite('resources/css/app.css')

    <script src="{{ asset('js/vue.global.js') }}"></script>
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>



</head>

<body>
    <section class="h-screen w-full mx-auto text-DarkTako">
        <div class="ml-[328px] px-4 py-8 h-full">
            <div class="bg-white container mx-auto px-8 h-full rounded-2xl py-8">
                <h1 class="text-2xl font-bold pb-8">Tambah Perusahaan Baru</h1>
                <div class="flex justify-between pb-4">
                    <div>
                        <!-- You can open the modal using ID.showModal() method -->
                        <button class="btn normal-case bg-BlueTako border-none text-white"
                            onclick="my_modal_3.showModal()">+
                            Tambah</button>
                        <dialog id="my_modal_3" class="modal">
                            <div class="modal-box w-11/12 max-w-5xl bg-white">
                                <form method="dialog" action="#" method="POST" enctype="multipart/form-data"
                                    id="add_employee_form">
                                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                        onclick="my_modal_3.close()">✕</button>
                                    @csrf
                                    <div class="modal-body p-4 bg-light">
                                        <div class="flex gap-4 w-full">
                                            <div class="col-lg w-full">
                                                <label for="perusahaan">Nama Perusahaan</label>
                                                <input type="text" name="perusahaan" class="form-control w-full"
                                                    placeholder="Nama Perusahaan" required>
                                            </div>
                                            <div class="col-lg w-full">
                                                <label for="link">Link Perusahaan</label>
                                                <input type="text" name="link" class="form-control w-full"
                                                    placeholder="Link Perusahaan" required>
                                            </div>
                                        </div>
                                        <div class="my-2 w-full">
                                            <label for="tentang">Tentang Perusahaan</label>
                                            <textarea type="text" name="tentang" class="form-control w-full" placeholder="Tentang Perusahaan" required></textarea>
                                        </div>

                                        <div class="col-lg w-full">
                                            <label for="alamat">Alamat Perusahaan</label>
                                            <input type="text" name="alamat" class="form-control w-full"
                                                placeholder="Alamat Perusahaan" required>
                                        </div>

                                        <div class="my-2">
                                            <label for="image">Pilih Foto</label>
                                            <input type="file" name="image" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="modal-footer ml-4">
                                        <button type="submit" id="add_employee_btn" class="btn btn-primary">Tambahkan
                                            Perusahaan</button>
                                        {{-- <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button> --}}
                                    </div>
                                </form>
                                {{-- <h3 class="font-bold text-lg">Hello!</h3>
                                <p class="py-4">Press ESC key or click on ✕ button to close</p> --}}
                            </div>
                        </dialog>
                    </div>
                    <input type="text" className="px-8 rounded-full h-10 text-xs " placeholder="Cari aku disini"
                        {{-- onChange={(e) => handleSearch(e.target.value)} --}} />
                </div>
                <div id="perusahaanTableContainer"></div>
                {{-- table disini --}}
            </div>

        </div>
    </section>

    <script>
        $(document).ready(function() {
            // Mengambil elemen tempat tabel
            var perusahaanTableContainer = $('#perusahaanTableContainer');

            // Mengambil data perusahaan dan mengisi elemen dengan tabel yang dihasilkan
            $.ajax({
                url: '/admin/fetch_perusahaan', // Ganti dengan URL Anda
                method: 'get',
                success: function(response) {
                    // Mengisi elemen dengan tabel yang dihasilkan dari response
                    perusahaanTableContainer.html(response);
                }
            });
        });
    </script>

    <script>
        $(function() {
            // Inisialisasi DataTable pada tabel dengan ID "perusahaanTable"

            //Add New employee ajax request
            $("#add_employee_form").submit(function(e) {
                e.preventDefault();
                const fd = new FormData(this);
                $("add_employee_btn").text('Adding...')

                $.ajax({
                    url: '/admin/store', // Memperbarui URL menjadi '/admin/store'
                    method: 'post',
                    data: fd,
                    cache: false,
                    contentType: false,
                    processData: false,
                    dataType: 'json',
                    success: function(response) {
                        console.log(response);
                    }
                });
            });

            // Panggil fungsi fetchPerusahaan untuk menginisialisasi data pertama kali
            fetchPerusahaan();

            // fetch all employee ajax request

            // function fetchPerusahaan() {
            //     $.ajax({
            //         url: '/admin/fetch_perusahaan', // Memperbarui URL menjadi '/admin/fetch_perusahaan'
            //         method: 'get',
            //         success: function(response) {
            //             $("#show_perusahaan").html(response);
            //         }
            //     });
            // }

            function fetchPerusahaan() {
                $.ajax({
                    url: '/admin/fetch_perusahaan',
                    method: 'get',
                    dataType: 'json',
                    success: function(response) {
                        var table = $('#perusahaanTableContainer').DataTable();
                        table.clear().draw();

                        if (response.length > 0) {
                            $.each(response, function(index, perusahaan) {
                                var editButton = '<a href="#" data-id="' + perusahaan.id +
                                    '" class="editButton">Edit</a>';
                                var deleteButton = '<a href="#" data-id="' + perusahaan.id +
                                    '" class="deleteButton">Delete</a>';

                                table.row.add([
                                    perusahaan.id,
                                    '<img src="storage/images/' + perusahaan.image +
                                    '" width="50" class="img-thumbnail rounded-circle">',
                                    perusahaan.perusahaan,
                                    perusahaan.tentang,
                                    perusahaan.alamat,
                                    perusahaan.link,
                                    editButton + ' | ' + deleteButton
                                ]).draw();
                            });
                        }
                    }
                });
            }

            // Event handler untuk tombol "Edit"
            $('#perusahaanTableContainer').on('click', '.editButton', function() {
                var perusahaanId = $(this).data('id');
                // Lakukan sesuatu ketika tombol "Edit" ditekan, misalnya, tampilkan formulir edit.
            });

            // Event handler untuk tombol "Delete"
            $('#perusahaanTableContainer').on('click', '.deleteButton', function() {
                var perusahaanId = $(this).data('id');
                // Lakukan sesuatu ketika tombol "Delete" ditekan, misalnya, konfirmasi penghapusan.
            });
        });
    </script>
</body>

</html>
