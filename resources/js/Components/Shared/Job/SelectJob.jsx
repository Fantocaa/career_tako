import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import Axios from "axios";

const SelectJob = ({ active }) => {
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
        <div
            className={
                active
                    ? "flex md:grid grid-cols-2 lg:grid-cols-3 flex-wrap gap-4"
                    : "hidden"
            }
        >
            <>
                {formData.map((item) => (
                    <div
                        className="bg-white p-8 rounded-xl h-full flex flex-col justify-between"
                        key={item.id}
                    >
                        <h1 className="font-bold">{item.pekerjaan}</h1>
                        <h2 className="text-BlueTako pt-2">
                            {item.perusahaan}
                        </h2>
                        <p className="text-xs pt-4">{item.deskripsi}</p>
                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex gap-2">
                                <img src="/images/program.svg" alt="" />
                                <h1>{item.jenis_pekerjaan}</h1>
                            </div>
                            <div className="flex gap-2">
                                <img src="/images/clock.svg" alt="" />
                                <h1>{item.batas_lamaran}</h1>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="flex gap-2 pt-4 flex-wrap">
                                <div className="px-4 py-2 bg-BlueTako rounded-full text-white text-xs">
                                    Marketing strategy
                                </div>
                                <div className="px-4 py-2 bg-BlueTako rounded-full text-white text-xs">
                                    Negotiation
                                </div>
                                <div className="px-4 py-2 bg-BlueTako rounded-full text-white text-xs">
                                    Problem Solver
                                </div>
                                <div className="px-4 py-2 bg-BlueTako rounded-full text-white text-xs">
                                    Time Management
                                </div>
                            </div>

                            {/* <div className="text-xs pt-4">
                                Batas Lamaran : {formatDate(item.batas_lamaran)}
                            </div> */}

                            <div className="flex pt-8 gap-2">
                                <div className="w-full">
                                    <Link href={`/job/internship/${item.id}`}>
                                        <button className="bg-BlueTako text-BlueTako bg-opacity-10  py-2 rounded-lg w-full">
                                            Lihat Detail
                                        </button>
                                    </Link>
                                </div>
                                <div className="w-full">
                                    <Link href={`/job/formulir/${item.id}`}>
                                        <button className="bg-BlueTako text-white py-2 rounded-lg w-full">
                                            Lamar
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        </div>
    );
};

export default SelectJob;