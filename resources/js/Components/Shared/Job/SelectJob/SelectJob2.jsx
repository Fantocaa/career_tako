import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import Axios from "axios";
import { useTranslation } from "react-i18next";

const SelectJob2 = ({ active, formData: formDataProp }) => {
    const [formDataSkill, setFormDataSkill] = useState([]);
    const { t } = useTranslation();

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", options);
    }

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

    return (
        <div className={active ? "flex flex-wrap gap-4 w-full" : "hidden"}>
            <>
                {formDataProp.map((item) => (
                    <div
                        className="bg-white p-8 rounded-xl h-full flex justify-between w-full items-center"
                        key={item.id}
                    >
                        <div className="w-[75%]">
                            <h1 className="font-bold translate text-xl">
                                {item.pekerjaan}
                            </h1>
                            {/* <h2 className="text-BlueTako pt-2">
                                {item.perusahaan}
                            </h2> */}
                            <p className="text-xs md:text-base pt-4 translate">
                                {item.deskripsi}
                            </p>
                            <div className="flex items-center gap-8 pt-4 pb-1">
                                <div className="flex gap-2">
                                    <img
                                        src="/images/program.svg"
                                        alt="program"
                                    />
                                    <h1>{item.jenis_pekerjaan}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <img src="/images/clock.svg" alt="clock" />
                                    <h1>{formatDate(item.batas_lamaran)}</h1>
                                </div>
                                <div className="flex gap-2">
                                    <img
                                        src="/images/icon/location.svg"
                                        alt="location"
                                    />
                                    <h1 className="">{item.lokasi}</h1>
                                </div>
                            </div>
                            <div className="pt-4 flex flex-wrap gap-2">
                                {formDataSkill
                                    .filter(
                                        (skills) =>
                                            skills.id_kotak_loker === item.id,
                                    )
                                    .map((skillItem) => (
                                        <div key={skillItem.id}>
                                            {/* Tampilkan skill sesuai kebutuhan */}

                                            <div className="px-4 py-2 bg-BlueTako rounded-full text-white text-xs md:text-sm">
                                                <p className="translate">
                                                    {skillItem.nama_skill}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            {/* <div className="text-xs pt-4">

                            Batas Lamaran : {formatDate(item.batas_lamaran)}
                        </div> */}
                        </div>
                        <div className="flex flex-col gap-4 w-36">
                            <div className="w-full">
                                <Link href={`/loker/pekerjaan/${item.id}`}>
                                    <button className="bg-BlueTako text-BlueTako bg-opacity-10 py-2 rounded-lg w-full">
                                        {t("loker.detail")}
                                    </button>
                                </Link>
                            </div>
                            <div className="w-full">
                                <Link
                                    href={`/loker/pekerjaan/formulir/${item.id}`}
                                >
                                    <button className="bg-BlueTako text-white py-2 rounded-lg w-full">
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

export default SelectJob2;
