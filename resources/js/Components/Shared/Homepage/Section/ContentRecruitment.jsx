import React, { useEffect, useState } from "react";
import aos from "aos";
import ImageSlider from "@/Components/ImageSlider";
import "aos/dist/aos.css";
import "../../../css/style.css";
import Why from "./Why";

const ContentRecruitment = () => {
    useEffect(() => {
        aos.init({
            duration: 1000, // Durasi animasi dalam milidetik
        });
    }, []);

    const isMediumScreen = window.innerWidth > 767.9;
    return (
        <div className="max-w-[1440px] mx-auto">
            <ImageSlider />
            <Why />
            <div className="container mx-auto px-4 py-8 md:px-8 xl:px-16 pt-32">
                <div className="px-4 bg-white py-8 rounded-md md:px-8 xl:px-16 lg:py-16">
                    <>
                        <h1
                            className="text-center font-bold text-2xl lg:text-4xl"
                            data-aos="fade-in"
                        >
                            Proses Rekrutmen
                        </h1>
                        <p
                            className="text-xs mx-auto text-center pt-2 opacity-90 md:w-[460px] lg:text-base lg:w-[600px]"
                            data-aos="fade-in"
                        >
                            Tim Pencarian Rekruter kami akan dengan cermat
                            mengelola proses rekrutmen, dan kandidat akan
                            dinilai berdasarkan kompetensinya selama proses
                            seleksi.
                        </p>
                        <div className="lg:flex lg:pt-24 gap-40 justify-center items-center">
                            <img
                                src="/images/applyimage.svg"
                                alt="apply"
                                className={`mx-auto lg:ml-16 py-8 md:py-16 lg:scale-150 ${
                                    isMediumScreen ? "animate-float" : ""
                                }`}
                                data-aos="fade-in"
                            />
                            <div data-aos="fade-in">
                                <h1 className="text-2xl font-bold lg:text-4xl">
                                    <span className="text-BlueTako text-base font-normal mr-2 lg:mr-4 lg:text-2xl">
                                        01.
                                    </span>
                                    Apply
                                </h1>
                                <p className="text-xs pt-2 lg:pt-4 opacity-90 lg:text-base">
                                    Temukan pekerjaan yang sesuai dengan
                                    keterampilan dan minat Anda. Anda dapat
                                    menemukan pada Lowongan Pekerjaan yang
                                    tersedia di bagian di atas.
                                </p>
                                <div className="pt-4">
                                    <h2 className="text-xs font-semibold lg:text-base">
                                        Tips untuk Pendaftar :
                                    </h2>
                                    <p className="text-xs pt-2 opacity-90 lg:text-base">
                                        Buatlah resume yang menonjolkan
                                        keterampilan dan pengalaman Anda yang
                                        terkait dengan pekerjaan yang ingin Anda
                                        lamar.
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
                                <h1 className="text-2xl font-bold lg:text-4xl">
                                    <span className="text-BlueTako text-base font-normal mr-2 lg:mr-4 lg:text-2xl">
                                        02.
                                    </span>
                                    Assessment
                                </h1>
                                <p className="text-xs pt-2 lg:pt-4 opacity-90 lg:text-base">
                                    Pelaksanaan penilaian bergantung pada posisi
                                    yang Anda lamar. Secara umum, Lamaran Anda
                                    akan melalui tahapan-tahapan berikut:
                                    Penyaringan Resume, Wawancara, Diskusi
                                    Kelompok, Wawancara Lanjutan, dan Tawaran
                                    Pekerjaan.
                                </p>
                                <div className="pt-4">
                                    <h2 className="text-xs font-semibold lg:text-base">
                                        Tips untuk Pendaftar :
                                    </h2>
                                    <ul className="text-xs pt-2 opacity-90 list-disc list-inside lg:text-base">
                                        <li>
                                            Tanyakan rincian tentang setiap
                                            proses penilaian kepada perekrut
                                            saat Anda diundang.
                                        </li>
                                        <li className="pt-1">
                                            Percaya diri dan Jadilah diri
                                            sendiri
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
                                <h1 className="text-2xl font-bold lg:text-4xl">
                                    <span className="text-BlueTako text-base font-normal mr-2 lg:mr-4 lg:text-2xl">
                                        03.
                                    </span>
                                    Acceptance
                                </h1>
                                <p className="text-xs pt-2 lg:pt-4 opacity-90 lg:text-base">
                                    Lamaran yang berhasil akan ditinjau ulang
                                    oleh tim kami berdasarkan kompetensi Anda.
                                    Anda akan diinformasikan oleh tim Rekruter
                                    kami tentang hasilnya.
                                    <br />
                                    <br />
                                    Ketika Anda bergabung dengan kami,
                                    bersiaplah untuk mengembangkan masa depan
                                    Anda. Selalu bangun dengan semangat untuk
                                    membuat pembaruan dalam hidup. Ambillah
                                    tindakan, berani mengambil tantangan, dan
                                    terus maju.
                                </p>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};

export default ContentRecruitment;
