import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Layout from "@/Layouts/Layout";
import Axios from "axios";

const HistoryTable = () => {
    const [data, setData] = useState([]); // State untuk data perusahaan
    const [loading, setLoading] = useState(true);

    // Gunakan useEffect untuk memuat data melalui AJAX saat komponen dimuat
    useEffect(() => {
        // Lakukan permintaan AJAX untuk mendapatkan data perusahaan
        fetch("/form") // Ganti dengan rute yang sesuai
            .then((response) => response.json())
            .then((data) => {
                // const updatedData = data.map((item, index) => ({
                //     ...item,
                //     id: index + 1,
                // }));
                setData(data);
                // setData(data);
                setLoading(false);
            });
    }, []); // Gunakan array kosong sebagai dependencies untuk menjalankan useEffect sekali saat komponen dimuat

    // const handleDelete = (id) => {
    //     Axios.get(`/admin/perusahaan/hapus/` + id)
    //         .then((response) => {
    //             // Handle jika penghapusan berhasil
    //             // Hapus item dari data
    //             const updatedData = data.filter((item) => item.id !== id);
    //             setData(updatedData);
    //         })
    //         .catch((error) => {
    //             console.error("Error deleting item:", error);
    //         });
    // };

    //     <style>
    //         .hBPTft {
    //     position: relative;
    //     width: 100%;
    //     display: block;
    // }
    //     </style>

    const columns = [
        {
            name: "No",
            // selector: "id",
            selector: (row, index) => index + 1,
            sortable: true,
        },
        // {
        //     name: "Logo Perusahaan",
        //     selector: "image",
        // },
        {
            name: "Pekerjaan",
            selector: "pekerjaan",
            // sortable: true,
        },
        {
            name: "Perusahaan",
            selector: "perusahaan",
        },
        {
            name: "Tanggal",
            selector: "batas_lamaran",
        },
        {
            name: "Status",
            selector: "link",
        },

        // Tambahkan kolom lain sesuai kebutuhan
    ];

    return (
        <Layout pageTitle="Dashboard | Tako Karir">
            <div className="bg-BgTako px-[14px] h-full py-8">
                <div className="bg-white container mx-auto p-8 rounded-lg h-full ">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl pb-6 text-DarkTako">
                            Riwayat
                        </h1>
                        <input
                            type="text"
                            className="px-8 rounded-lg h-10 text-xs "
                            placeholder="Cari aku disini"
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                    <div className="pb-8"></div>
                    <div className="w-full block">
                        <DataTable
                            // title="Data Perusahaan"
                            columns={columns}
                            data={data}
                            progressPending={loading}
                            progressComponent={<div>Loading...</div>}
                            pagination
                            fixedHeader
                            allowOverflow
                            // style={

                            // }
                            customStyles={{
                                rows: {
                                    style: {
                                        maxWidth: "874px",
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
            </div>
        </Layout>
    );
};

export default HistoryTable;
