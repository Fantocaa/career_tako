import React, { useEffect, useState } from "react";
import Nav from "@/Components/Shared/Else/NavElse";
import Footer from "@/Components/Shared/Footer";
import { Link } from "@inertiajs/react";
import { router, usePage } from "@inertiajs/react";
import Axios from "axios";

const DetailLokerBackup = () => {
    const { props } = usePage();
    const { md_loker } = props;

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", options);
    }

    // const [values, setValues] = useState({
    //     password: "meong",
    //     id: md_loker.id,
    //     pekerjaan: md_loker.pekerjaan,
    //     perusahaan: md_loker.perusahaan,
    //     jenis_pekerjaan: md_loker.jenis_pekerjaan,
    //     batas_lamaran: md_loker.batas_lamaran, // Inisialisasi properti batas_lamaran
    //     isi_konten: md_loker.deskripsi,
    //     deskripsi: md_loker.isi_konten,
    // });

    const [formData, setFormData] = useState([]);
    useEffect(() => {
        // Panggil fungsi API di sini saat komponen pertama kali di-mount
        const fetchData = async () => {
            try {
                // Kirim data ke server
                const response = await Axios.get("/form/view_pro");
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
        <>
            {formData.map((item) => (
                <section
                    className="bg-BgTako font-inter text-DarkTako md:pt-16"
                    key={item.id}
                >
                    <Nav />
                    <div className="container flex-wrap mx-auto px-4 md:px-8 xl:px-16 py-16 pt-28 md:pt-16 justify-between">
                        <div className="bg-white p-4 rounded-lg py-8 md:px-8">
                            <div className="flex items-end">
                                <div className="w-full">
                                    <h1 className="font-bold lg:text-2xl">
                                        {/* {values.pekerjaan} */}
                                        {item.pekerjaan}
                                    </h1>
                                    <p className="text-BlueTako pt-1 text-xs lg:text-base ">
                                        {/* {values.perusahaan} */}
                                        {item.perusahaan}
                                    </p>
                                    <div className="flex gap-4 pt-6">
                                        <div className="flex items-center text-xs lg:text-base gap-2 lg:gap-4">
                                            <img
                                                src="/images/program.svg"
                                                className="scale-150 lg:ml-2"
                                                alt=""
                                            />
                                            <p className="">
                                                {/* {values.jenis_pekerjaan} */}
                                                {item.jenis_pekerjaan}
                                            </p>
                                        </div>
                                        <div className="flex items-center text-xs gap-2 lg:text-base lg:gap-4">
                                            <img
                                                src="/images/clock.svg"
                                                alt=""
                                                className="scale-150 lg:ml-2"
                                            />
                                            <p>
                                                Batas Lamaran :{" "}
                                                {item.batas_lamaran}
                                                {/* {
                                                    formatDate()
                                                    // values.batas_lamaran
                                                } */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8 lg:pt-0 gap-2 w-36 hidden lg:block">
                                    <div className="w-full md:pb-2">
                                        <Link href="/">
                                            <button className="bg-BlueTako text-BlueTako bg-opacity-10 py-2 rounded-lg w-full text-xs">
                                                Share
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="w-full">
                                        <Link href={`/job/formulir/${item.id}`}>
                                            <button className="bg-BlueTako text-white py-2 rounded-lg w-full text-xs">
                                                Lamar
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="w-fullb bg-BlueTako bg-opacity-10 p-[1px] "></div>
                            </div>
                            {/* Harusnya disini baru isi RichText */}
                            <div
                                className="pt-6"
                                dangerouslySetInnerHTML={{
                                    __html: item.isi_konten,
                                }}
                            ></div>

                            {/* __html: values.deskripsi, */}
                            {/* {values.deskripsi} */}
                            {/* Yauda dibawah cuman data dummy aja */}
                            {/* {/* <div> */}

                            <div className="lg:hidden">
                                {/* <div className="w-fullb bg-BlueTako bg-opacity-10 p-[1px]"></div> */}
                                <div className="flex pt-8 gap-2 ">
                                    <div className="w-full">
                                        <Link href="/job/detail">
                                            <button className="bg-BlueTako text-BlueTako bg-opacity-10  py-2 rounded-lg w-full">
                                                Share
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
                    </div>
                    <Footer />
                </section>
            ))}
        </>
    );
};

export default DetailLokerBackup;
