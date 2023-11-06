import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import SelectJob from "../Shared/Job/SelectJob";
import Axios from "axios";

const SectionView = () => {
    const [formData, setFormData] = useState([]);

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", options);
    }

    useEffect(() => {
        // Panggil fungsi API di sini saat komponen pertama kali di-mount
        const fetchData = async () => {
            try {
                // Kirim data ke server
                const response = await Axios.get("/form");
                // const response = await Axios.post("/form");
                setFormData(response.data);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        };

        fetchData(); // Panggil fungsi fetchData saat komponen di-mount

        // Hanya perlu dijalankan saat komponen pertama kali di-mount,
        // sehingga dependensi di bawah ini kosong
    }, []);

    return (
        <section className="flex mx-auto px-4 md:px-8 xl:px-16 pt-24 lg:pt-16 pb-16 md:py-8 flex-wrap items-center text-DarkTako container">
            <>
                <div className="flex justify-between items-end pb-8 flex-wrap gap-4 w-full">
                    <h1 className="text-BlueTako font-bold text-2xl">
                        Pekerjaan yang tersedia
                    </h1>
                </div>
            </>
            <div className="flex justify-between w-full">
                <div className="flex flex-wrap gap-4 w-full justify-between ">
                    <div className="flex gap-4">
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
                                        stroke="#1E1E1E"
                                        stroke-opacity="0.5"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M22 22L20 20"
                                        stroke="#1E1E1E"
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
                                className="rounded-xl border-DarkTako border-opacity-25 w-full h-12 block pl-12"
                            />
                        </div>
                        <select
                            name=""
                            id=""
                            className="rounded-2xl border-DarkTako border-opacity-25"
                        >
                            <option value="">Semua Program</option>
                            <option value="">Internship</option>
                            <option value="">Profesional</option>
                        </select>

                        <div className="">
                            <button className="btn bg-BlueTako hover:bg-BlueTako hover:bg-opacity-90 text-white border-none w-full lg:w-24 normal-case">
                                Cari
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex">
                    <div className="bg-BlueTako flex items-center rounded-l-xl px-4 w-14 cursor-pointer">
                        <img src="/images/logo/menu1.svg" alt="" />
                    </div>
                    <div className="bg-white flex items-center rounded-r-xl px-4 border border-BlueTako border-opacity-50 w-14 cursor-pointer">
                        <img src="/images/logo/menu2.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className="pt-8">
                <h1>
                    Menampilkan (190) Pekerjaan yang tersedia dari "PT. TAKO
                    ANUGERAH KOPORASI"
                </h1>
            </div>

            <div className="pt-8 md:grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                <SelectJob />
            </div>

            <Pagination
                count={18}
                shape="rounded"
                className="flex w-full justify-center py-16"
            />
        </section>
    );
};

export default SectionView;
