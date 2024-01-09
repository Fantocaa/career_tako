import React, { useEffect, useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "../../../css/style.css";
import Why from "./Why";
import ImageSlider from "@/Components/Shared/Homepage/Section/ImageSlider";

const ContentRecruitment = () => {
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
            <div className="container mx-auto px-4 py-8 md:px-8 xl:px-16 2xl:px-32 pt-16 lg:pt-16">
                <div className="px-4 bg-white py-8 rounded-md md:px-8 xl:px-16 2xl:px-32 lg:py-16">
                    <>
                        <h1
                            className="text-center font-bold text-2xl lg:text-4xl"
                            data-aos="fade-in"
                        >
                            Proses Rekrutmen
                        </h1>
                        <p
                            className="text-xs mx-auto text-center pt-4 opacity-90 md:w-[460px] lg:text-base lg:w-[864px]"
                            data-aos="fade-in"
                        >
                            {/* Tim Pencarian Rekruter kami akan dengan cermat
                            mengelola proses rekrutmen, dan kandidat akan
                            dinilai berdasarkan kompetensinya selama proses
                            seleksi. */}
                            Bergabunglah dengan kami dalam mengukir jejak sukses
                            melalui proses seleksi PT. Tako Anugerah Koporasi
                            yang berfokus pada potensi, kompetensi, dan
                            kesesuaian dengan visi & misi PT. Tako Anugerah
                            Koporasi. Kami memastikan setiap langkah proses
                            rekrutmen dilakukan secara transparan, profesional,
                            dan membawa kita lebih dekat dengan bakat terbaik.
                        </p>
                        <div className="lg:flex lg:pt-24 gap-40 justify-center items-center">
                            <img
                                src="/images/applyimage2.svg"
                                alt="apply"
                                className={`mx-auto lg:ml-16 py-8 md:py-16 lg:scale-150 ${
                                    isMediumScreen ? "animate-float" : ""
                                }`}
                                data-aos="fade-in"
                            />
                            <div data-aos="fade-in">
                                <h1 className="text-2xl font-bold lg:text-3xl">
                                    <span className="text-BlueTako text-base font-normal mr-2 lg:mr-4 lg:text-2xl">
                                        01.
                                    </span>
                                    Apply
                                </h1>
                                <p className="text-xs pt-2 lg:pt-4 opacity-90 lg:text-base">
                                    {/* Temukan pekerjaan yang sesuai dengan
                                    keterampilan dan minat Anda. Anda dapat
                                    menemukan pada Lowongan Pekerjaan yang
                                    tersedia di bagian di atas. */}
                                    Temukan pekerjaan yang sesuai dengan
                                    kompetensi Anda. Anda dapat menemukan dengan
                                    klik “Kembangkan Karier Anda” yang tersedia
                                    di bagian atas.
                                </p>
                                <div className="pt-4">
                                    <h2 className="text-xs font-semibold lg:text-base">
                                        Tips untuk Pendaftar :
                                    </h2>
                                    <p className="text-xs pt-2 opacity-90 lg:text-base">
                                        {/* Buatlah resume yang menonjolkan
                                        keterampilan dan pengalaman Anda yang
                                        terkait dengan pekerjaan yang ingin Anda
                                        lamar. */}
                                        Isi data dengan jujur, pastikan CV Anda
                                        lengkap dan relevan dengan posisi yang
                                        dilamar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                    <>
                        <div className="lg:flex lg:flex-row-reverse lg:pt-24 gap-12 justify-center items-center">
                            <img
                                src="/images/assessmentimage.svg"
                                alt="assessment"
                                className={`mx-auto py-8 md:py-16 lg:scale-150 ${
                                    isMediumScreen ? "animate-float" : ""
                                }`}
                                data-aos="fade-in"
                            />
                            <div className="w-full lg:w-1/2" data-aos="fade-in">
                                <h1 className="text-2xl font-bold lg:text-3xl">
                                    <span className="text-BlueTako text-base font-normal mr-2 lg:mr-4 lg:text-2xl">
                                        02.
                                    </span>
                                    Assessment
                                </h1>
                                <p className="text-xs pt-2 lg:pt-4 opacity-90 lg:text-base">
                                    {/* Pelaksanaan penilaian bergantung pada posisi
                                    yang Anda lamar. Secara umum, Lamaran Anda
                                    akan melalui tahapan-tahapan berikut:
                                    Penyaringan Resume, Wawancara, Diskusi
                                    Kelompok, Wawancara Lanjutan, dan Tawaran
                                    Pekerjaan. */}
                                    Tahap ini bertujuan untuk menilai kemampuan
                                    dan kesesuaian Anda dengan posisi yang
                                    dilamar. Assessment berupa tes teknikal, tes
                                    kepribadian, dan wawancara.
                                </p>
                                <div className="pt-4">
                                    <h2 className="text-xs font-semibold lg:text-base">
                                        Tips untuk Pendaftar :
                                    </h2>
                                    <ul className="text-xs pt-2 opacity-90 list-disc lg:text-base">
                                        <li>
                                            {/* Tanyakan rincian tentang setiap
                                            proses penilaian kepada perekrut
                                            saat Anda diundang. */}
                                            Persiapkan diri Anda secara matang
                                            untuk mengikuti rangkaian tes di
                                            atas
                                        </li>
                                        <li className="pt-1">
                                            {/* Percaya diri dan Jadilah diri
                                            sendiri */}
                                            Pelajari secara detail tentang
                                            perusahaan dan posisi yang dilamar
                                        </li>
                                        <li className="pt-1">
                                            Jadi diri sendiri, terus berlatih,
                                            dan percaya diri
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                    <>
                        <div className="lg:flex lg:pt-24 gap-40 justify-center items-center">
                            <img
                                src="/images/acceptanceimage.svg"
                                alt="apply"
                                className={`mx-auto lg:ml-16 py-8 md:py-16 lg:scale-150 ${
                                    isMediumScreen ? "animate-float" : ""
                                }`}
                                data-aos="fade-in"
                            />
                            <div data-aos="fade-in">
                                <h1 className="text-2xl font-bold lg:text-3xl">
                                    <span className="text-BlueTako text-base font-normal mr-2 lg:mr-4 lg:text-2xl">
                                        03.
                                    </span>
                                    Acceptance & Onboarding
                                </h1>
                                <p className="text-xs pt-2 lg:pt-4 opacity-90 lg:text-base">
                                    Tahap ini adalah tahap terakhir dari seluruh
                                    rangkaian rekrutmen. Pada tahap ini, pelamar
                                    yang lolos seleksi akan menerima surat
                                    penawaran kerja dan yang belum lolos akan
                                    diinformasikan oleh Tim Rekrutmen
                                </p>
                                <div className="pt-4">
                                    <h2 className="text-xs font-semibold lg:text-base">
                                        Tips untuk Pendaftar :
                                    </h2>
                                    <ul className="text-xs pt-2 opacity-90 list-disc lg:text-base">
                                        <li>
                                            Bacalah surat penawaran kerja dengan
                                            cermat sebelum menandatanganinya
                                        </li>
                                        <li className="pt-1">
                                            Tanyakan hal-hal yang belum jelas
                                            kepada rekruter
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
    );
};

export default ContentRecruitment;
