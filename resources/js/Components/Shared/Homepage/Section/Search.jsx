import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [jobCount, setJobCount] = useState(0); // State untuk menyimpan jumlah pekerjaan tersedia

    useEffect(() => {
        // Panggil fungsi untuk mengambil jumlah pekerjaan saat komponen dimuat
        fetchJobCount();
    }, []);

    const fetchJobCount = async () => {
        try {
            // Lakukan permintaan ke endpoint /form atau sesuaikan dengan endpoint yang sesuai
            const response = await axios.get("/form");

            // Dapatkan jumlah ID dari respons
            const count = response.data.length;

            // Setel jumlah pekerjaan ke state
            setJobCount(count);
        } catch (error) {
            console.error("Error fetching job count:", error);
        }
    };

    // const handleSearch = () => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open("POST", `/search?query=${query}`, true);
    //     // xhr.open("POST", `/search/${query}`, true);

    //     xhr.setRequestHeader("Content-Type", "application/json");

    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             const response = JSON.parse(xhr.responseText);
    //             // Proses data hasil pencarian
    //             setSearchResults(response);
    //         } else if (xhr.readyState === 4) {
    //             console.error("Error searching:", xhr.statusText);
    //         }
    //     };
    //     xhr.send();
    // };

    const getCsrfToken = async () => {
        // Ambil token CSRF dari elemen <meta>
        const csrfToken = document.querySelector(
            'meta[name="csrf-token"]'
        ).content;
        return csrfToken;
    };

    const handleSearch = async () => {
        try {
            // Dapatkan token CSRF
            const csrfToken = await getCsrfToken();

            // Buat objek konfigurasi untuk mengirim token CSRF
            const config = {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                },
            };

            // Kirim permintaan POST dengan menggunakan Axios
            // const response = await axios.post("/search", { query }, config);
            // setSearchResults(response.data);

            const xhr = new XMLHttpRequest();
            xhr.open("POST", `/search?query=${query}`, true);
            // xhr.open("POST", `/search/${query}`, true);

            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    // Proses data hasil pencarian
                    setSearchResults(response);
                } else if (xhr.readyState === 4) {
                    console.error("Error searching:", xhr.statusText);
                }
            };
            xhr.send();

            // console.log(data);
        } catch (error) {
            console.error("Error searching:", error);
        }
    };

    return (
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

                <div className="w-full">
                    <div className="flex w-full py-8 font-inter justify-between text-white items-center">
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
                                    name=""
                                    id=""
                                    className="rounded-2xl border-white border-2 text-white text-opacity-75 border-opacity-25 bg-transparent w-full lg:w-48"
                                >
                                    <option value="" className="text-DarkTako">
                                        Semua Program
                                    </option>
                                    <option
                                        value="Internship"
                                        className="text-DarkTako"
                                    >
                                        Internship
                                    </option>
                                    <option
                                        value="Profesional"
                                        className="text-DarkTako"
                                    >
                                        Profesional
                                    </option>
                                </select>

                                <div className="w-full">
                                    <button
                                        className="btn bg-BlueTako hover:bg-BlueTako hover:bg-opacity-90 text-white border-none w-full lg:w-24 normal-case"
                                        onClick={handleSearch}
                                    >
                                        Cari
                                    </button>
                                    {searchResults.map((result, index) => (
                                        <div key={index}>{result.name}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: bladeView }} /> */}
            </div>
        </div>
    );
};

export default Search;
