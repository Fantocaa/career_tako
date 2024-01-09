import React from "react";
import Aos from "aos";
// import "aos/dist/aos.css";
// import "../../../css/style.css";

const Warn = () => {
    return (
        <section className=" bg-RedTako font-inter text-white py-16 2xl:py-32 md:pb-[464px] lg:pb-40 2xl:pb-64">
            <div className="container mx-auto px-4 md:px-8 xl:px-16 2xl:px-32">
                <div className="flex gap-4 items-center">
                    <div className="md:w-1/2 pb-8 md:pt-8">
                        {/* <p className="hidden lg:block text-2xl">WARNING!!!</p> */}
                        <div data-aos="fade-up" data-aos-duration="1200">
                            <h1 className="text-center md:text-left font-bold text-2xl md:text-4xl pb-4 lg:pt-4">
                                HATI-HATI PENIPUAN !!!
                            </h1>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1400">
                            <p className="text-center md:text-left md:w-80 lg:w-[428px]">
                                {/* Hati-hati terhadap penipuan perekrutan yang
                                mengatasnamakan
                                <span className="font-bold">
                                    {" "}
                                    PT. TAKO ANUGERAH KOPORASI
                                </span>
                                . Kami sangat memprioritaskan keamanan dan
                                integritas dalam proses perekrutan kami, oleh
                                karena itu, pastikan untuk selalu memverifikasi
                                sumber informasi rekrutmen sebelum mengambil
                                langkah selanjutnya. */}
                                PT. Tako Anugerah Koporasi adalah perusahaan
                                terkemuka di bidang logistik, distribusi,
                                chicken integration, dan hospitality. Kami
                                berkomitmen untuk menyediakan lingkungan kerja
                                yang aman dan nyaman bagi seluruh karyawan kami.
                                Termasuk komitmen kami untuk melindungi kandidat
                                dari penipuan perekrutan. Oleh karena itu, kami
                                sangat memprioritaskan keamanan dan integritas
                                dalam proses rekrutmen kami.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block md:w-1/2">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <img
                                src="/images/icon/5.svg"
                                className="w-auto"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="flex justify-center relative pt-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="bg-white rounded-2xl text-DarkTako p-8 2xl:p-10 md:flex md:flex-wrap md:gap-4 2xl:gap-10 md:justify-between md:absolute shadow-md -translate-y-4 lg:-translate-y-20 2xl:-translate-y-24">
                        <div className="flex flex-col items-center justify-start text-center md:w-[48%] lg:w-[20%] 2xl:w-[48%] 2xl:flex-wrap pt-16 md:pt-0">
                            <img
                                src="/images/icon/2.svg"
                                alt=""
                                className="animate-float-m"
                            />
                            <h1 className="pt-4 pb-2 font-bold text-2xl lg:text-base">
                                {/* Saluran Resmi */}
                                Melamar di Saluran Resmi
                            </h1>
                            <p className="lg:text-xs text-DarkTako 2xl:text-base">
                                {/* Kami hanya memposting lowongan pekerjaan di
                                situs Glints, JobStreet, Indeed, & Web resmi
                                Karir kami. */}
                                Kami hanya memposting lowongan pekerjaan di{" "}
                                <span className="font-bold">
                                    situs resmi kami
                                </span>{" "}
                                dan di job portal terpercaya lainnya seperti{" "}
                                <span className="font-bold">
                                    LinkedIn, Glints, Jobstreet, dan Indeed
                                </span>{" "}
                                dengan nama{" "}
                                <span className="font-bold">
                                    PT. Tako Anugerah Koporasi{" "}
                                </span>
                                . Jika menemukan lowongan pekerjaan yang
                                mengatasnamakan PT. Tako Anugerah Koporasi di
                                situs lain, harap berhati-hati. Lowongan
                                tersebut mungkin merupakan penipuan!
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-start text-center md:w-[48%] lg:w-[20%] 2xl:w-[48%] 2xl:flex-wrap">
                            <img
                                src="/images/icon/1.svg"
                                alt=""
                                className="animate-float-m"
                            />
                            <h1 className="pt-4 pb-2 font-bold text-2xl lg:text-base">
                                {/* Undangan Palsu */}
                                Verifikasi Undangan Rekrutmen
                            </h1>
                            <p className="lg:text-xs 2xl:text-base text-DarkTako">
                                {/* Waspadai pekerjaan yang mencurigakan yang
                                mengklaim berasal dari PT. Tako Anugerah
                                Koporasi. */}
                                Pastikan setiap informasi berasal dari sumber
                                resmi PT. Tako Anugerah Koporasi sebelum
                                melanjutkan proses rekrutmen. PT. Tako Anugerah
                                Koporasi hanya akan menghubungi kandidat melalui
                                WhatsApp atau email recruitment@tako.co.id
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-start text-center md:w-[48%] lg:w-[20%] 2xl:w-[48%] 2xl:flex-wrap lg:pt-0 pt-16">
                            <img
                                src="/images/icon/3.svg"
                                alt=""
                                className="animate-float-m"
                            />
                            <h1 className="pt-4 pb-2 font-bold text-2xl lg:text-base">
                                {/* Tidak Ada Biaya */}
                                100% Tanpa Biaya
                            </h1>
                            <p className="lg:text-xs text-DarkTako 2xl:text-base">
                                {/* Kami dan Rekruter yang kami tunjuk tidak pernah
                                meminta pembayaran apa pun dari para kandidat. */}
                                PT. Tako Anugerah Koporasi tidak pernah meminta
                                pembayaran apa pun dari kandidat selama proses
                                rekrutmen. Oleh karena itu, jika Anda diminta
                                untuk membayar biaya apa pun yang
                                mengatasnamakan PT. Tako Anugerah Koporasi,
                                harap berhati-hati!
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-start text-center md:w-[48%] lg:w-[20%] 2xl:w-[48%] 2xl:flex-wrap lg:pt-0 pt-16">
                            <img
                                src="/images/icon/4.svg"
                                alt=""
                                className="animate-float-m"
                            />
                            <h1 className="pt-4 pb-2 font-bold text-2xl lg:text-base">
                                {/* Harap Melapor */}Segera Laporkan
                            </h1>
                            <p className="lg:text-xs text-DarkTako 2xl:text-base">
                                {/* Jika rekruter menemui lowongan pekerjaan
                                mencurigakan harap laporkan ke email
                                recruitment@tako.co.id */}
                                Jika Anda menemukan lowongan pekerjaan atau
                                panggilan proses rekrutmen yang mencurigakan
                                mengatasnamakan PT. Tako Anugerah Koporasi,
                                harap segera hubungi kami di
                                recruitment@tako.co.id
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Warn;
