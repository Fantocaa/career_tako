import React, { useEffect, useState, useContext } from "react";
import { Link } from "@inertiajs/react";
import Axios from "axios";
import LanguageContext from "../../Homepage/LanguageContext";

const SelectJobPerusahaan = ({ active, formData: formDataProp }) => {
    const [formData, setFormData] = useState([]);
    const [formDataSkill, setFormDataSkill] = useState([]);
    const { selectedLanguage } = useContext(LanguageContext);

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", options);
    }

    useEffect(() => {
        // Panggil fungsi API di sini saat komponen pertama kali di-mount
        // const fetchData = async () => {
        //     try {
        //         // Kirim data ke server
        //         const response = await Axios.get("/api/form");
        //         // const response = await Axios.post("/form");
        //         setFormData(response.data);
        //     } catch (error) {
        //         console.error("Error sending data:", error);
        //     }
        // };

        const fetchData = async () => {
            try {
                const response = await Axios.get("/api/form");
                const translatedData = await Promise.all(
                    response.data.map(async (item) => {
                        const translatedItem = { ...item };
                        const fieldsToTranslate = [
                            "pekerjaan",
                            "deskripsi",
                            "jenis_pekerjaan",
                            "batas_lamaran",
                            "nama_skill",
                        ]; // tambahkan field lain yang perlu diterjemahkan

                        for (const field of fieldsToTranslate) {
                            const translationResponse = await Axios.post(
                                "/api/translate",
                                {
                                    text: item[field],
                                    target: selectedLanguage, // asumsikan selectedLanguage berisi kode bahasa yang dipilih pengguna
                                },
                            );

                            translatedItem[field] = translationResponse.data;
                        }

                        return translatedItem;
                    }),
                );

                setFormData(formDataProp);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        };

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

        fetchData(); // Panggil fungsi fetchData saat komponen di-mount

        // Hanya perlu dijalankan saat komponen pertama kali di-mount,
        // sehingga dependensi di bawah ini kosong
    }, [formDataProp, selectedLanguage]);
    // }, []);

    // console.log(values);
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
                        className="bg-white p-8 rounded-xl h-full flex flex-col justify-between w-full shadow-md"
                        key={item.id}
                    >
                        <h1 className="font-bold translate">
                            {item.pekerjaan}
                        </h1>

                        {/* {values && (
                            <h1 className="font-bold">{item.perusahaan}</h1>
                        )} */}

                        {/* <h2 className="text-BlueTako pt-2">
                            {item.perusahaan}
                        </h2> */}
                        <p className="text-xs pt-4 translate">
                            {item.deskripsi}
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex gap-2">
                                <img src="/images/program.svg" alt="" />
                                <h1 className="translate">
                                    {item.jenis_pekerjaan}
                                </h1>
                            </div>
                            <div className="flex gap-2">
                                <img src="/images/clock.svg" alt="" />
                                <h1 className="translate">
                                    {item.batas_lamaran}
                                </h1>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="flex gap-2 pt-4 flex-wrap">
                                {/* Marketing strategy */}
                                {formDataSkill
                                    .filter(
                                        (skills) =>
                                            skills.id_kotak_loker === item.id,
                                    )
                                    .map((skillItem) => (
                                        <div key={skillItem.id}>
                                            {/* Tampilkan skill sesuai kebutuhan */}

                                            <div className="px-4 py-2 bg-BlueTako rounded-full text-white text-xs">
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
                    </div>
                ))}
            </>
        </div>
    );
};

export default SelectJobPerusahaan;
