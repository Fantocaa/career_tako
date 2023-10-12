import React, { useEffect, useState } from "react";
import Nav from "@/Components/Shared/Else/NavElse";
import Footer from "@/Components/Shared/Footer";
import { Link } from "@inertiajs/react";
import { router, usePage } from "@inertiajs/react";
import Axios from "axios";

const DetailLoker = () => {
    const { props } = usePage();
    const { md_loker } = props;

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", options);
    }

    const [values, setValues] = useState({
        password: "meong",
        id: md_loker.id,
        pekerjaan: md_loker.pekerjaan,
        perusahaan: md_loker.perusahaan,
        jenis_pekerjaan: md_loker.jenis_pekerjaan,
        batas_lamaran: md_loker.batas_lamaran, // Inisialisasi properti batas_lamaran
        isi_konten: md_loker.deskripsi,
        deskripsi: md_loker.isi_konten,
    });

    return (
        <section className="bg-BgTako font-inter text-DarkTako md:pt-16">
            <Nav />
            <div className="container flex-wrap mx-auto px-4 md:px-8 xl:px-16 py-16 pt-28 md:pt-16 justify-between">
                <div className="bg-white p-4 rounded-lg py-8 md:px-8">
                    <div className="flex items-end">
                        <div className="w-full">
                            <h1 className="font-bold lg:text-2xl">
                                {values.pekerjaan}
                            </h1>
                            <p className="text-BlueTako pt-1 text-xs lg:text-base ">
                                {values.perusahaan}
                            </p>
                            <div className="flex gap-4 pt-6">
                                <div className="flex items-center text-xs lg:text-base gap-2 lg:gap-4">
                                    <img
                                        src="/images/program.svg"
                                        className="scale-150 lg:ml-2"
                                        alt=""
                                    />
                                    <p className="">{values.jenis_pekerjaan}</p>
                                </div>
                                <div className="flex items-center text-xs gap-2 lg:text-base lg:gap-4">
                                    <img
                                        src="/images/clock.svg"
                                        alt=""
                                        className="scale-150 lg:ml-2"
                                    />
                                    <p>
                                        Batas Lamaran :{" "}
                                        {formatDate(values.batas_lamaran)}
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
                                <Link href="/formulir">
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
                    <div className="pt-6">{values.isi_konten}</div>
                    {/* Yauda dibawah cuman data dummy aja */}
                    {/* <div>
                        <div>
                            <h1 className="font-bold pb-2 pt-6">
                                Deskripsi Pekerjaan
                            </h1>
                            <ul className="text-xs flex flex-wrap gap-2 list-decimal list-outside ml-3 lg:text-sm">
                                <li>
                                    Mengembangkan rencana merek dan strategi
                                    pemasaran yang efektif dan inovatif untuk
                                    membangun merek yang kuat
                                </li>
                                <li>
                                    Menciptakan pesan merek yang akan
                                    meningkatkan penjualan
                                </li>
                                <li>
                                    Mengembangkan strategi merek untuk
                                    meningkatkan citra merek
                                </li>
                                <li>
                                    Mengelola agensi dan klien eksternal untuk
                                    meningkatkan penjualan pasar
                                </li>
                                <li>
                                    Bekerja sama erat dengan tim berbeda di
                                    perusahaan untuk memastikan konsistensi
                                    merek
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold pb-2 pt-6">Persyaratan</h1>
                            <ul className="text-xs flex flex-col gap-2 list-decimal list-outside ml-3">
                                <li>Laki-laki</li>
                                <li>
                                    Domisili Surabaya dan sekitarnya (lebih
                                    disukai)
                                </li>
                                <li>Pendidikan minimal S1 semua jurusan</li>
                                <li>
                                    Pengalaman minimal 2 tahun di bidang
                                    pemasaran
                                </li>
                                <li>
                                    Kemampuan komunikasi verbal dan tertulis
                                    yang sangat baik
                                </li>
                                <li>Kemampuan riset dan analisis yang kuat</li>
                                <li>
                                    Kemampuan komunikasi verbal dan tertulis
                                    yang sangat baik
                                </li>
                                <li>
                                    Kemampuan komunikasi verbal dan tertulis
                                    yang sangat baik
                                </li>
                            </ul>
                        </div>
                        <div className="pb-8">
                            <h1 className="font-bold pb-2 pt-6">
                                Kemampuan yang Dibutuhkan
                            </h1>
                            <ul className="text-xs flex flex-col gap-2 list-decimal list-outside ml-3">
                                <li>Strategi Marketing</li>
                                <li>Negosiasi</li>
                                <li>Problem Solving</li>
                                <li>Time Management</li>
                            </ul>
                        </div>
                    </div> */}
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
                                <Link href="/formulir">
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
    );
};

export default DetailLoker;
