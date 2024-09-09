import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import Axios from "axios";

const SelectJobPerusahaan = ({ active, formData: formDataProp }) => {
    const [formDataSkill, setFormDataSkill] = useState([]);

    useEffect(() => {
        const fetchDataSkill = async () => {
            try {
                // Kirim data ke server
                const response_3 = await Axios.get("/api/skill");
                setFormDataSkill(response_3.data);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        };

        fetchDataSkill();
    }, []);

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", options);
    }

    return (
        <div
            className={
                active
                    ? "flex md:grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 flex-wrap gap-4 2xl:gap-8"
                    : "hidden"
            }
        >
            <>
                {formDataProp.map((item) => (
                    <div
                        className="bg-white p-8 rounded-xl h-full w-full shadow-md flex flex-col justify-between"
                        key={item.id}
                    >
                        <div>
                            <h1 className="font-bold translate text-xl">
                                {item.pekerjaan}
                            </h1>
                            {/* {values && (
                            <h1 className="font-bold">{item.perusahaan}</h1>
                        )} */}

                            {/* <h2 className="text-BlueTako pt-2">
                            {item.perusahaan}
                        </h2> */}
                            <p className="text-base pt-4 translate lg:text-sm xl:text-base line-clamp-6">
                                {item.deskripsi}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <div className="flex gap-2">
                                    <img
                                        src="/images/program.svg"
                                        alt="program"
                                    />
                                    <h1 className="">{item.jenis_pekerjaan}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <img src="/images/clock.svg" alt="clock" />
                                    <h1 className="">
                                        {formatDate(item.batas_lamaran)}
                                    </h1>
                                </div>
                                <div className="flex gap-2">
                                    <img
                                        src="/images/icon/location.svg"
                                        alt="location"
                                    />
                                    <h1 className="">{item.lokasi}</h1>
                                </div>
                            </div>

                            <div className="flex gap-2 pt-6 flex-wrap">
                                {formDataSkill
                                    .filter(
                                        (skills) =>
                                            skills.id_kotak_loker === item.id,
                                    )
                                    .map((skillItem) => (
                                        <div key={skillItem.id}>
                                            <div className="px-4 py-2 bg-BlueTako rounded-full text-white text-xs">
                                                <p className="translate">
                                                    {skillItem.nama_skill}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* <div className="text-xs pt-4">
                                Batas Lamaran : {formatDate(item.batas_lamaran)}
                            </div> */}

                        <div className="flex pt-8 gap-2">
                            <div className="w-full">
                                <Link href={`/loker/pekerjaan/${item.id}`}>
                                    <button className="bg-BlueTako text-BlueTako bg-opacity-10  py-2 rounded-lg w-full translate">
                                        Lihat Detail
                                    </button>
                                </Link>
                            </div>
                            <div className="w-full">
                                <Link
                                    href={`/loker/pekerjaan/formulir/${item.id}`}
                                >
                                    <button className="bg-BlueTako text-white py-2 rounded-lg w-full translate">
                                        Apply
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        </div>
    );
};

export default SelectJobPerusahaan;
