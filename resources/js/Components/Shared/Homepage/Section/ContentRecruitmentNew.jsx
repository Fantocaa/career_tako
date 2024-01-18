import React, { useEffect, useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "../../../css/style.css";
import Why from "./Why";
import ImageSlider from "@/Components/Shared/Homepage/Section/ImageSlider";

const ContentRecruitmentNew = () => {
    useEffect(() => {
        aos.init({
            duration: 1000, // Durasi animasi dalam milidetik
        });
    }, []);

    const isMediumScreen = window.innerWidth > 767.9;
    return (
        <div className="mx-auto">
            <ImageSlider />
            {/* <Why /> */}
            <div className="container max-w-[1440px] mx-auto px-4 py-8 md:px-8 xl:px-16 2xl:px-32 pt-16 lg:pt-32">
                <h1
                    className="text-center font-bold text-2xl lg:text-4xl"
                    data-aos="fade-in"
                >
                    Proses Rekrutmen
                </h1>
                <p
                    className="text-xs mx-auto text-center pt-4 opacity-90 md:w-[460px] lg:text-base lg:w-[864px] pb-12"
                    data-aos="fade-in"
                >
                    Bergabunglah dengan kami dalam mengukir jejak sukses melalui
                    proses seleksi PT. Tako Anugerah Koporasi yang berfokus pada
                    potensi, kompetensi, dan kesesuaian dengan visi & misi PT.
                    Tako Anugerah Koporasi. Kami memastikan setiap langkah
                    proses rekrutmen dilakukan secara transparan, profesional,
                    dan membawa kita lebih dekat dengan bakat terbaik.
                </p>
                <div
                    className="px-4 bg-white py-8 rounded-2xl md:px-8 xl:px-16 lg:py-16"
                    data-aos="fade-up"
                >
                    <>
                        <div className="lg:flex items-end w-full lg:gap-16">
                            <div data-aos="fade-in" data-aos-duration="5000">
                                <h1 className="text-xl md:text-2xl font-bold lg:text-3xl">
                                    <span className="text-BlueTako text-base font-normal mr-2 lg:mr-4 lg:text-2xl">
                                        01.
                                    </span>
                                    Apply
                                </h1>
                                <p className="text-xs pt-2 lg:pt-4 opacity-90 lg:text-base">
                                    Temukan pekerjaan yang sesuai dengan
                                    kompetensi Anda. Anda dapat menemukan dengan
                                    klik “Kembangkan Karier Anda” yang tersedia
                                    di bagian atas.
                                </p>
                                <div className="pt-4">
                                    <h2 className="text-xs font-semibold lg:text-base">
                                        Tips untuk Pendaftar :
                                    </h2>
                                    <p className="text-xs pt-2 opacity-90 lg:text-base pb-4">
                                        Isi data dengan jujur, pastikan CV Anda
                                        lengkap dan relevan dengan posisi yang
                                        dilamar.
                                    </p>
                                </div>
                            </div>
                            <img
                                data-aos="fade-in"
                                src="/images/group_31.webp"
                                alt="apply"
                            />
                        </div>
                    </>
                </div>
                <div className="md:flex md:gap-8 mt-8">
                    <div className="px-4 bg-white py-8 rounded-2xl md:px-8 xl:px-16 lg:py-16 md:w-1/2">
                        <>
                            <div>
                                <div className="w-full" data-aos="fade-in">
                                    <h1 className="text-xl md:text-2xl font-bold lg:text-3xl">
                                        <span className="text-BlueTako text-base font-normal mr-2 lg:mr-4 lg:text-2xl">
                                            02.
                                        </span>
                                        Assessment
                                    </h1>
                                    <p className="text-xs pt-2 lg:pt-4 opacity-90 lg:text-base">
                                        Tahap ini bertujuan untuk menilai
                                        kemampuan dan kesesuaian Anda dengan
                                        posisi yang dilamar. Assessment berupa
                                        tes teknikal, tes kepribadian, dan
                                        wawancara.
                                    </p>
                                    <div className="pt-4">
                                        <h2 className="text-xs font-semibold lg:text-base">
                                            Tips untuk Pendaftar :
                                        </h2>
                                        <ul className="text-xs pt-2 opacity-90 list-disc lg:text-base ml-5">
                                            <li>
                                                {/* Tanyakan rincian tentang setiap
                                            proses penilaian kepada perekrut
                                            saat Anda diundang. */}
                                                Persiapkan diri Anda secara
                                                matang untuk mengikuti rangkaian
                                                tes di atas
                                            </li>
                                            <li className="pt-1">
                                                {/* Percaya diri dan Jadilah diri
                                            sendiri */}
                                                Pelajari secara detail tentang
                                                perusahaan dan posisi yang
                                                dilamar
                                            </li>
                                            <li className="pt-1">
                                                Jadi diri sendiri, terus
                                                berlatih, dan percaya diri
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>

                    <div className="px-4 bg-white py-8 rounded-2xl md:px-8 xl:px-16 lg:py-16 md:w-1/2 mt-8 md:mt-0">
                        <>
                            <div>
                                <div className="w-full" data-aos="fade-in">
                                    <h1 className="text-xl md:text-2xl font-bold lg:text-3xl">
                                        <span className="text-BlueTako text-base font-normal mr-2 lg:mr-4 lg:text-2xl">
                                            03.
                                        </span>
                                        Acceptance & Onboarding
                                    </h1>
                                    <p className="text-xs pt-2 lg:pt-4 opacity-90 lg:text-base">
                                        Tahap ini adalah tahap terakhir dari
                                        seluruh rangkaian rekrutmen. Pada tahap
                                        ini, pelamar yang lolos seleksi akan
                                        menerima surat penawaran kerja dan yang
                                        belum lolos akan diinformasikan oleh Tim
                                        Rekrutmen.
                                    </p>
                                    <div className="pt-4">
                                        <h2 className="text-xs font-semibold lg:text-base">
                                            Tips untuk Pendaftar :
                                        </h2>
                                        <ul className="text-xs pt-2 opacity-90 list-disc lg:text-base ml-5">
                                            <li>
                                                Bacalah surat penawaran kerja
                                                dengan cermat sebelum
                                                menandatanganinya
                                            </li>
                                            <li className="pt-1">
                                                Tanyakan hal-hal yang belum
                                                jelas kepada rekruter
                                            </li>
                                            <li className="pt-1">
                                                Pastikan Anda siap untuk memulai
                                                pekerjaan dan perjalanan baru
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentRecruitmentNew;
