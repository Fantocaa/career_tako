import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Layout from "../../Layouts/Layout";
import Axios from "axios";

const PerusahaanTable = () => {
    const [data, setData] = useState([]); // State untuk data perusahaan
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    // Gunakan useEffect untuk memuat data melalui AJAX saat komponen dimuat
    useEffect(() => {
        // Lakukan permintaan AJAX untuk mendapatkan data perusahaan
        fetch("/json_perusahaan_table") // Ganti dengan rute yang sesuai
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []); // Gunakan array kosong sebagai dependencies untuk menjalankan useEffect sekali saat komponen dimuat

    const handleDelete = (id) => {
        Axios.get(`/admin/perusahaan/hapus/` + id)
            .then((response) => {
                // Handle jika penghapusan berhasil
                // Hapus item dari data
                const updatedData = data.filter((item) => item.id !== id);
                setData(updatedData);
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
    };

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
            selector: (row) => row.id,
            // selector: (row, index) => index + 1,
            sortable: true,
            sortactive: true,
        },
        // {
        //     name: "Logo Perusahaan",
        //     selector: "image",
        // },
        {
            name: "Nama Perusahaan",
            // selector: "perusahaan",
            selector: (row) => row.perusahaan,
            // sortable: true,
        },
        {
            name: "Tentang",
            // selector: "tentang",
            selector: (row) => row.tentang,
        },
        {
            name: "Alamat Perusahaan",
            // selector: "alamat",
            selector: (row) => row.alamat,
        },
        {
            name: "Link Perusahaan",
            // selector: "link",
            selector: (row) => row.link,
        },

        {
            name: "Aksi",
            cell: (row) => (
                <>
                    <a href={`/admin/perusahaan/edit/${row.id}`}>
                        <button>
                            <img
                                src="../../images/edit.svg"
                                alt=""
                                className="scale-50  transition-all"
                            />
                        </button>
                    </a>

                    <button
                        className="btn  border-none hover:bg-transparent transition-all "
                        // onClick={() => handleDelete(row.id)}
                        onClick={(e) =>
                            document
                                .getElementById(`hapus-` + row.id)
                                .showModal()
                        } // Menambahkan id unik dengan item.id
                        data-id={row.id}
                    >
                        <img
                            src="../../images/delete.svg"
                            alt=""
                            className="scale-50"
                        />
                    </button>

                    {/* <dialog id="hapus" className="modal"> */}
                    <dialog
                        id={`hapus-${row.id}`}
                        className="hapus-modal modal"
                    >
                        <div className="modal-box text-DarkTako bg-white">
                            <h3 className="font-bold text-lg">
                                Kamu yakin ingin mengshapus?
                            </h3>
                            <p className="py-4">
                                Press ESC key or click the button below to close
                            </p>
                            <div className="modal-action ">
                                <form method="dialog" className="flex gap-4">
                                    {/* if there is a button in form, it will close the modal */}
                                    <a
                                        href={`/admin/perusahaan/hapus/${row.id}`}
                                    >
                                        <button
                                            className="btn border-none hover:bg-BlueTako hover:bg-opacity-10"
                                            onClick={() => handleDelete(row.id)}
                                        >
                                            Yakin
                                        </button>
                                    </a>
                                    <button className="btn border-none hover:bg-RedTako hover:bg-opacity-10">
                                        Tidak
                                    </button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </>
            ),
        },

        // Tambahkan kolom lain sesuai kebutuhan
    ];

    const filteredData = data.filter((item) => {
        return (
            item &&
            item.perusahaan &&
            item.perusahaan.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <Layout pageTitle="Dashboard | Tako Karir">
            <div className="bg-BgTako px-4 ml-[6px] h-full py-8">
                <div className="bg-white container mx-auto p-8 rounded-lg h-full ">
                    <h1 className="font-bold text-2xl pb-6 text-DarkTako">
                        Tambah Perusahaan
                    </h1>
                    <div className="flex justify-between gap-4">
                        <a href="/admin/perusahaan/tambah_baru">
                            <button className="bg-BlueTako text-white rounded-lg px-4 py-2 ">
                                + Tambah
                            </button>
                        </a>
                        <div className="relative">
                            <img
                                src="/images/logo/search.svg"
                                alt="search"
                                className="absolute left-2 bottom-2 scale-90    "
                            />
                            <input
                                type="text"
                                className="pl-10 rounded-lg h-10 text-xs"
                                placeholder="Cari Loker"
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="pb-8"></div>
                    <div className="w-full block">
                        <DataTable
                            // title="Data Perusahaan"
                            columns={columns}
                            // data={data}
                            data={filteredData}
                            progressPending={loading}
                            progressComponent={<div>Loading...</div>}
                            pagination
                            fixedHeader
                            allowOverflow
                            highlightOnHover
                            // style={

                            // }
                            customStyles={{
                                rows: {
                                    style: {
                                        maxWidth: "874px",
                                        margin: "",
                                    },
                                },
                            }}
                            noDataComponent={<div>No data available</div>} // Prop kustom untuk menyembunyikan pesan warning
                        />
                    </div>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
            </div>
        </Layout>
    );
};

export default PerusahaanTable;
