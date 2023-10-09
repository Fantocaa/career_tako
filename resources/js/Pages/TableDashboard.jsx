import DataTable from "react-data-table-component";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Axios from "axios";

const TableDashboard = () => {
    const handleDelete = (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus item ini?")) {
            Axios.delete(`/form/${id}`)
                .then((response) => {
                    // Handle jika penghapusan berhasil
                    // Misalnya, Anda bisa memperbarui ulang dataFromAPI untuk merefresh tampilan tabel
                    // setDataFromAPI(response.data);
                    alert("Item berhasil dihapus.");
                })
                .catch((error) => {
                    // Handle jika terjadi kesalahan saat menghapus
                    console.error("Error deleting item:", error);
                    alert("Terjadi kesalahan saat menghapus item.");
                });
        }
    };

    const columns = [
        {
            // name: "Nomor",
            // selector: (row) => row.id,
            // sortable: true, // Mengaktifkan pengurutan untuk kolom ini
            name: "Nomor",
            selector: (row, index) => index + 1, // Use index to generate a sequential number
            sortable: true, // Mengaktifkan pengurutan untuk kolom ini
        },
        {
            name: "Pekerjaan",
            selector: (row) => row.pekerjaan,
            sortable: true, // Mengaktifkan pengurutan untuk kolom ini
        },
        {
            name: "Perusahaan",
            selector: (row) => row.perusahaan,
        },
        {
            name: "Jenis Pekerjaan",
            selector: (row) => row.jenis_pekerjaan,
        },
        {
            name: "Batas Lamaran",
            selector: (row) => row.batas_lamaran,
        },
        {
            name: "Deskripsi",
            selector: (row) => row.deskripsi,
        },
        {
            name: "Isi Konten",
            selector: (row) => row.isi_konten,
        },
        {
            name: "Aksi",
            cell: (row) => (
                <>
                    <Link href={`/table/edit/${row.id}`}>
                        <button className="bg-blue-500 text-DarkTako mr-2">
                            Edit
                        </button>
                    </Link>
                    <Link href={`/table/hapus/${row.id}`}>
                        <button
                            className="bg-red-500 text-DarkTako"
                            onClick={() => handleDelete(row.id)}
                        >
                            Hapus
                        </button>
                    </Link>
                </>
            ),
        },
    ];

    const [dataFromAPI, setDataFromAPI] = useState([]);

    useEffect(() => {
        // Axios.get("/form") // Gantilah '/api/data' dengan rute API yang sesuai
        //     .then((response) => {
        //         // Handle respons dari server
        //         setDataFromAPI(response.data);
        //     })
        //     .catch((error) => {
        //         // Handle kesalahan jika terjadi
        //         console.error("Error fetching data:", error);
        //     });

        Axios.get("/form") // Gantilah '/api/data' dengan rute API yang sesuai
            .then((response) => {
                // Handle respons dari server
                setDataFromAPI(response.data);
            })
            .catch((error) => {
                // Handle kesalahan jika terjadi
                console.error("Error fetching data:", error);
            });
    }, []); // Kosongkan array dependensi untuk memastikan permintaan hanya dipanggil sekali

    return (
        <div className="bg-BgTako py-16">
            <div className="bg-white container  mx-auto p-8 rounded-lg">
                <Link href="/table/tambah_baru">
                    <button className="bg-BlueTako text-white rounded-lg px-4 py-2 ">
                        Tambah
                    </button>
                </Link>
                <div className="pb-8"></div>
                {Array.isArray(dataFromAPI) && dataFromAPI.length > 0 ? (
                    <DataTable columns={columns} data={dataFromAPI} />
                ) : (
                    <p>Tidak ada data yang ditemukan.</p>
                )}
            </div>
        </div>
    );
};

export default TableDashboard;
