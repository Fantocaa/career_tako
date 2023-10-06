import DataTable from "react-data-table-component";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Axios from "axios";

const TableDashboard = () => {
    const columns = [
        {
            name: "Nomor",
            selector: (row) => row.id,
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
            name: "Isi Konten",
            selector: (row) => row.isi_konten,
        },
        {
            name: "Deskripsi",
            selector: (row) => row.deskripsi,
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
        <div>
            <Link href="/table/edit">
                <button className="bg-BlueTako text-white">Tambah</button>
            </Link>
            {Array.isArray(dataFromAPI) && dataFromAPI.length > 0 ? (
                <DataTable columns={columns} data={dataFromAPI} />
            ) : (
                <p>Tidak ada data yang ditemukan.</p>
            )}
        </div>
    );
};

export default TableDashboard;
