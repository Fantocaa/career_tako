import React from "react";
import Footer from "@/Components/Shared/Footer";
import { Link } from "@inertiajs/react";
import NavElse from "@/Components/Shared/Else/NavElse";
import Layout from "@/Layouts/Layout";

const Job = () => {
    return (
        <Layout pageTitle="Lowongan Pekerjaan | Tako Karir">
            <section>
                <NavElse />
                <div className="bg-DarkTako text-white font-inter w-full z-50 pt-24 py-16">
                    <div className="container mx-auto px-4 md:px-8 xl:px-16">
                        <h1 className="font-bold text-2xl lg:text-4xl pt-8">
                            Lowongan Pekerjaan
                        </h1>
                        <p className="text-xs md:text-base pt-2 lg:pt-4">
                            Kami membuka kesempatan yang sama, baik untuk para
                            talenta muda dan untuk para profesional. Pilih
                            kategori yang sesuai dengan pengalaman kerjamu!
                        </p>
                    </div>
                </div>
                <div className="block md:flex text-DarkTako bg-BgTako ">
                    <div className="container mx-auto md:flex">
                        <div className=" py-8 px-4 md:w-1/2 md:pl-8 xl:pl-16">
                            <div className="p-8 bg-white rounded-lg mx-auto ">
                                <div className="lg:flex lg:gap-4 items-center">
                                    <div>
                                        <img
                                            src="/images/intern.svg"
                                            alt=""
                                            className="mx-auto lg:w-56 lg:h-36"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold text-center pt-2 lg:text-start">
                                            Internship
                                        </h1>
                                        <p className="text-xs text-center pt-2 lg:text-start">
                                            Berpeluang untuk memiliki pengalaman
                                            kerja bagi mahasiswa dari
                                            universitas terkemuka.
                                        </p>
                                        <Link href="/job/internship">
                                            <div className="pt-8 lg:pt-4 flex mx-auto">
                                                <button className=" bg-BlueTako text-white px-4 py-2  rounded-lg w-full lg:w-1/2 lg:text-xs">
                                                    Lihat Detail
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-BgTako md:pt-8 pb-16 px-4 md:w-1/2 md:pr-8 xl:pr-16 2x">
                            <div className="p-8 bg-white rounded-lg mx-auto ">
                                <div className="lg:flex lg:gap-4 items-center">
                                    <div>
                                        <img
                                            src="/images/pro.svg"
                                            alt=""
                                            className="mx-auto lg:w-56 lg:h-36"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold text-center pt-2 lg:text-start">
                                            Profesional
                                        </h1>
                                        <p className="text-xs text-center pt-2 lg:text-start">
                                            Tersedia untuk Anda yang memiliki
                                            pengalaman kerja atau fresh graduate
                                            terhadap lowongan pekerjaan yang
                                            tersedia.
                                        </p>
                                        <Link href="/job/profesional">
                                            <div className="pt-4 lg:pt-4 flex mx-auto">
                                                <button className=" bg-BlueTako text-white px-4 py-2  rounded-lg w-full lg:w-1/2 lg:text-xs">
                                                    Lihat Detail
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </Layout>
    );
};

export default Job;
