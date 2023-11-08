import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import SelectJob from "../Shared/Job/SelectJob";
import SelectJob2 from "../Shared/Job/SelectJob2";
import Axios from "axios";
import PerusahaanInfo from "./PerusahaanInfo";

const SectionViewPerusahaan = () => {
    const [formData, setFormData] = useState([]);
    const [jobCount, setJobCount] = useState(0); // State untuk menyimpan jumlah pekerjaan tersedia
    const [menu1Active, setMenu1Active] = useState(true);
    const [menu2Active, setMenu2Active] = useState(false);

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", options);
    }

    const handleMenu1Click = () => {
        if (!menu1Active) {
            setMenu1Active(true);
            setMenu2Active(false);
        } else {
            setMenu1Active(false);
        }
    };

    const handleMenu2Click = () => {
        if (!menu2Active) {
            setMenu2Active(true);
            setMenu1Active(false);
        } else {
            setMenu2Active(false);
        }
    };

    useEffect(() => {
        // Panggil fungsi API di sini saat komponen pertama kali di-mount
        const fetchData = async () => {
            try {
                // Kirim data ke server
                const response = await Axios.get("/form");

                const count = response.data.length;
                // const response = await Axios.post("/form");
                setJobCount(count);
                setFormData(response.data);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        };

        fetchData(); // Panggil fungsi fetchData saat komponen di-mount
    }, []);

    return (
        <>
            {/* <PerusahaanInfo /> */}

            <section className="flex mx-auto px-4 md:px-8 xl:px-16 pt-24 lg:pt-16 pb-16 md:py-8 flex-wrap items-center text-DarkTako container">
                <>
                    <div className="flex justify-between items-end pb-8 flex-wrap gap-4 w-full">
                        <h1 className="text-BlueTako font-bold text-2xl">
                            ({jobCount}) Pekerjaan yang tersedia
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
                                <option value="Internship">Internship</option>
                                <option value="Profesional">Profesional</option>
                            </select>

                            <div className="">
                                <button className="btn bg-BlueTako hover:bg-BlueTako hover:bg-opacity-90 text-white border-none w-full lg:w-24 normal-case">
                                    Cari
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex">
                        <button
                            className={`bg-BlueTako flex items-center rounded-l-xl border border-BlueTako border-opacity-50 px-4 w-14 cursor-pointer ${
                                menu1Active ? "active" : "bg-white"
                            }`}
                            onClick={handleMenu1Click}
                            disabled={menu1Active}
                        >
                            {/* <img src="/images/logo/menu1.svg" alt="" className="" /> */}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                                    stroke={menu1Active ? "white" : "#213C90"}
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                                    stroke={menu1Active ? "white" : "#213C90"}
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                                    stroke={menu1Active ? "white" : "#213C90"}
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                                    stroke={menu1Active ? "white" : "#213C90"}
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            className={` flex items-center rounded-r-xl px-4 border border-BlueTako border-opacity-50 w-14 cursor-pointer ${
                                menu2Active ? "active bg-BlueTako" : "bg-white"
                            }`}
                            onClick={handleMenu2Click}
                            disabled={menu2Active}
                        >
                            {/* <img src="/images/logo/menu2.svg" alt="" className="" /> */}

                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z"
                                    stroke={menu2Active ? "white" : "#213C90"}
                                    // stroke-opacity="0.5"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M19.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H19.9C21.4 10.5 22 9.86 22 8.27V4.23C22 2.64 21.4 2 19.9 2Z"
                                    // stroke="#213C90"
                                    stroke={menu2Active ? "white" : "#213C90"}
                                    // stroke-opacity="0.5"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="pt-8">
                    <h1>
                        Menampilkan (190) Pekerjaan yang tersedia dari "PT. TAKO
                        ANUGERAH KOPORASI"
                    </h1>
                </div>

                <div className={`pt-8 w-full${menu1Active ? "" : "hidden"}`}>
                    <SelectJob active={menu1Active} />
                </div>
                <div className={`pt-8${menu2Active ? "" : "hidden"}`}>
                    <SelectJob2 active={menu2Active} />
                </div>

                <Pagination
                    count={18}
                    shape="rounded"
                    className="flex w-full justify-center py-16"
                />
            </section>
        </>
    );
};

export default SectionViewPerusahaan;
