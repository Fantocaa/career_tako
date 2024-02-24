import React from "react";
import Aos from "aos";
// import "aos/dist/aos.css";
// import "../../../css/style.css";

const WarnNew = () => {
    return (
        <section className=" bg-RedTako font-inter text-white py-16 2xl:py-32 relative overflow-hidden">
            <div className="container max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 ">
                <div className="flex gap-8">
                    <div className="md:w-1/2 pb-8 md:pt-8">
                        <div data-aos="fade-up" data-aos-duration="1200">
                            <h1 className="text-center md:text-left font-bold text-2xl md:text-4xl pb-4 lg:pt-4 translate">
                                HATI-HATI PENIPUAN !!!
                            </h1>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1400">
                            <p className="text-center md:text-left 2xl:text-xl translate">
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
                        <div
                            className="bg-white text-DarkTako mt-16 p-8 rounded-2xl"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/images/icon/2.svg"
                                alt=""
                                className="animate-float-m"
                            />
                            <h1 className="font-bold text-xl pb-2 pt-4 translate">
                                Melamar di Saluran Resmi
                            </h1>
                            <p className="translate">
                                Kami hanya memposting lowongan pekerjaan di{" "}
                                <span className="font-bold translate">
                                    situs resmi kami
                                </span>{" "}
                                dan di job portal terpercaya lainnya seperti{" "}
                                <span className="font-bold translate">
                                    LinkedIn, Glints, Jobstreet, dan Indeed
                                </span>{" "}
                                dengan nama{" "}
                                <span className="font-bold translate">
                                    PT. Tako Anugerah Koporasi
                                </span>
                                . Jika menemukan lowongan pekerjaan yang
                                mengatasnamakan PT. Tako Anugerah Koporasi di
                                situs lain, harap berhati-hati. Lowongan
                                tersebut mungkin merupakan penipuan!
                            </p>
                        </div>
                        <div
                            className="bg-white text-DarkTako mt-8 p-8 rounded-2xl"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/images/icon/1.svg"
                                alt=""
                                className="animate-float-m"
                            />
                            <h1 className="font-bold text-xl pb-2 pt-4 translate">
                                Verifikasi Undangan Rekrutmen
                            </h1>
                            <p className="translate">
                                Pastikan setiap informasi berasal dari sumber
                                resmi PT. Tako Anugerah Koporasi sebelum
                                melanjutkan proses rekrutmen. PT. Tako Anugerah
                                Koporasi hanya akan menghubungi kandidat melalui
                                WhatsApp atau email{" "}
                                <span className="">recruitment@tako.co.id</span>
                            </p>
                        </div>
                        <div
                            className="bg-white text-DarkTako p-8 rounded-2xl mt-8 md:hidden"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/images/icon/3.svg"
                                alt=""
                                className="animate-float-m"
                            />
                            <h1 className="font-bold text-xl pb-2 pt-4 translate">
                                100% Tanpa Biaya
                            </h1>
                            <p className="translate">
                                PT. Tako Anugerah Koporasi{" "}
                                <span className="font-bold translate">
                                    tidak pernah meminta pembayaran apa pun
                                </span>{" "}
                                dari kandidat selama proses rekrutmen. Oleh
                                karena itu, jika Anda diminta untuk membayar
                                biaya apa pun yang mengatasnamakan PT. Tako
                                Anugerah Koporasi, harap berhati-hati!
                            </p>
                        </div>
                        <div
                            className="bg-white text-DarkTako p-8 mt-8 rounded-2xl md:hidden"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/images/icon/4.svg"
                                alt=""
                                className="animate-float-m"
                            />
                            <h1 className="font-bold text-xl pb-2 pt-4">
                                Segera Laporkan
                            </h1>
                            <p>
                                Jika Anda menemukan lowongan pekerjaan atau
                                panggilan proses rekrutmen yang mencurigakan
                                mengatasnamakan PT. Tako Anugerah Koporasi,
                                harap segera hubungi kami di{" "}
                                <span className="">recruitment@tako.co.id</span>
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block md:w-1/2">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            className="flex justify-center items-center"
                        >
                            <img
                                src="/images/bu_deby2.webp"
                                className="-z-10"
                                alt="warn"
                            />
                        </div>
                        <div
                            className="bg-white text-DarkTako p-8 rounded-2xl z-10"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/images/icon/3.svg"
                                alt=""
                                className="animate-float-m"
                            />
                            <h1 className="font-bold text-xl pb-2 pt-4 translate">
                                100% Tanpa Biaya
                            </h1>
                            <p className="translate">
                                PT. Tako Anugerah Koporasi{" "}
                                <span className="">
                                    tidak pernah meminta pembayaran apa pun
                                </span>{" "}
                                dari kandidat selama proses rekrutmen. Oleh
                                karena itu, jika Anda diminta untuk membayar
                                biaya apa pun yang mengatasnamakan PT. Tako
                                Anugerah Koporasi, harap berhati-hati!
                            </p>
                        </div>
                        <div
                            className="bg-white text-DarkTako p-8 mt-8 rounded-2xl"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/images/icon/4.svg"
                                alt=""
                                className="animate-float-m"
                            />
                            <h1 className="font-bold text-xl pb-2 pt-4 translate">
                                Segera Laporkan
                            </h1>
                            <p className="translate">
                                Jika Anda menemukan lowongan pekerjaan atau
                                panggilan proses rekrutmen yang mencurigakan
                                mengatasnamakan PT. Tako Anugerah Koporasi,
                                harap segera hubungi kami di{" "}
                                <span className="">recruitment@tako.co.id</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0">
                <img
                    src="/images/bullet-warn.webp"
                    alt="bullet-warn.webp"
                    className=" animate-float"
                />
            </div>
        </section>
    );
};

export default WarnNew;
