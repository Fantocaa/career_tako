import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
// import { router } from "@inertiajs/react";
// import usePage from "@inertiajs/react";

const Search = () => {
    // const [query, setQuery] = useState("");
    // const [selectedProgram, setSelectedProgram] = useState("");
    // const [searchResults, setSearchResults] = useState([]);
    // const [jobCount, setJobCount] = useState(0); // State untuk menyimpan jumlah pekerjaan tersedia

    // const fetchJobCount = async () => {
    //     try {
    //         // Lakukan permintaan ke endpoint /form atau sesuaikan dengan endpoint yang sesuai
    //         const response = await axios.get("/form");

    //         // Dapatkan jumlah ID dari respons
    //         const count = response.data.length;

    //         // Setel jumlah pekerjaan ke state
    //         setJobCount(count);
    //     } catch (error) {
    //         console.error("Error fetching job count:", error);
    //     }
    // };

    // useEffect(() => {
    //     // Panggil fungsi untuk mengambil jumlah pekerjaan saat komponen dimuat
    //     fetchJobCount();
    // }, []);

    // const getCsrfToken = async () => {
    //     // Ambil token CSRF dari elemen <meta>
    //     const csrfToken = document.querySelector(
    //         'meta[name="csrf-token"]'
    //     ).content;
    //     return csrfToken;
    // };

    // const handleSearch = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // Kirim permintaan POST dengan menggunakan Axios
    //         const response = await axios.post("/api/search", {
    //             query,
    //             selectedProgram,
    //         });
    //         setSearchResults(response.data);

    //         // router.visit("/loker", {
    //         //     replace: false, // Ubah menjadi `true` jika Anda ingin mengganti entri di riwayat
    //         //     data: {
    //         //         query: query,
    //         //         selectedProgram: selectedProgram,
    //         //     },
    //         // });
    //     } catch (error) {
    //         console.error("Error searching:", error);
    //     }
    // };

    // useEffect(() => {
    //     axios.get("api/search").then(({ data }) => {
    //         console.log();
    //     });
    // });

    return (
        // <form onSubmit={}>
        <div className="absolute z-10 container md:pl-8 lg:pl-16 max-w-full md:w-[70%] lg:w-1/2">
            <div className="px-[10px] md:px-0">
                <p className="text-white pb-2 md:pb-4 lg:text-2xl">
                    Selamat Datang di Karir Tako
                </p>
                <h1 className="text-white text-2xl lg:text-6xl font-bold pb-2 md:pb-4">
                    Temukan Karier Impianmu dengan Lebih Mudah
                </h1>
                <p className="text-white">
                    Temukan Posisi yang Sesuai dengan Profesionalismu, Baik
                    Lowongan Pekerjaan atau Ragam Proyek Lainnya
                </p>

                <div className="w-full pt-8">
                    <Link href="/loker" className="inline-block">
                        <button className="bg-BlueTako hover:bg-white hover:text-BlueTako fill-white hover:fill-BlueTako py-3 px-4 rounded-xl text-white flex gap-4 items-center transition-all duration-300 ease-in-out shadow-sm">
                            <h1 className="text-lg font-semibold">
                                Daftar Lowongan Kerja
                            </h1>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.53 12.53L14.24 16.82C14.09 16.97 13.9 17.04 13.71 17.04C13.52 17.04 13.33 16.97 13.18 16.82C12.89 16.53 12.89 16.05 13.18 15.76L16.19 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H16.19L13.18 8.24C12.89 7.95 12.89 7.47 13.18 7.18C13.47 6.89 13.95 6.89 14.24 7.18L18.53 11.47C18.67 11.61 18.75 11.8 18.75 12C18.75 12.2 18.67 12.39 18.53 12.53Z" />
                            </svg>
                        </button>
                    </Link>

                    {/*<div className="flex w-full py-8 font-inter justify-between text-white items-center">
                        <h1 className="font-semibold text-white text-xl">
                            ({jobCount}) Pekerjaan Tersedia
                        </h1>
                        <a href="/loker">
                            <span className="cursor-pointer underline text-white">
                                Lihat Semua -{">"}
                            </span>
                        </a>
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="flex flex-wrap gap-4 w-full justify-between ">
                            <div className="flex gap-4 w-full flex-wrap lg:flex-nowrap">
                                <div className="relative w-full lg:w-96">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2"
                                        >
                                            <path
                                                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                                stroke="#FFFFFF"
                                                stroke-opacity="0.5"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M22 22L20 20"
                                                stroke="#FFFFFF"
                                                stroke-opacity="0.5"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Cari Lowongan yang anda inginkan"
                                        className="rounded-2xl border-white border-2 border-opacity-25 w-full h-12 block pl-12 bg-transparent text-white placeholder-white placeholder:opacity-30 lg:w-72"
                                        value={query}
                                        onChange={(e) =>
                                            setQuery(e.target.value)
                                        }
                                    />
                                </div>
                                <select
                                    // name=""
                                    // id=""
                                    className="rounded-2xl border-white border-2 text-white text-opacity-75 border-opacity-25 bg-transparent w-full lg:w-44"
                                    onChange={(e) =>
                                        setSelectedProgram(e.target.value)
                                    }
                                >
                                    <option value="" className="text-DarkTako">
                                        Semua Program
                                    </option>
                                    <option
                                        value="Internship"
                                        className="text-DarkTako"
                                    >
                                        Internship (Magang/Praktik Kerja)
                                    </option>
                                    <option
                                        value="Profesional"
                                        className="text-DarkTako"
                                    >
                                        Profesional (Fresh Graduate /
                                        Berpengalaman)
                                    </option>
                                </select>

                                <div className="w-full">
                                    <button
                                        className="btn bg-BlueTako hover:bg-BlueTako hover:bg-opacity-90 text-white border-none w-full lg:w-24 normal-case"
                                        onClick={handleSearch}
                                    >
                                        Cari
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
        // </form>
    );
};

export default Search;
