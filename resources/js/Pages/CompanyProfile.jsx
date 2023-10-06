import React from "react";
import Footer from "@/Components/Shared/Footer";
import { useForm } from "react-hook-form";
import { Link } from "@inertiajs/react";
// import Nav from "@/Components/Shared/Homepage/Nav";
import NavElse from "@/Components/Shared/Else/NavElse";
import Layout from "@/Layouts/Layout";

const CompanyProfile = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <Layout pageTitle="Profil Perusahaan | Tako Karir">
            <section className="bg-BgTako font-inter text-DarkTako">
                <NavElse />
                <div className="container flex mx-auto px-4 md:px-8 xl:px-16 py-16 pb-24 pt-24 md:pt-8 lg:pt-32 justify-between md:items-end">
                    <div className="md:w-[51%]">
                        <div className="flex justify-center  md:hidden">
                            <img src="images/logo.svg" alt="" />
                        </div>
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl lg:pt-8 text-center md:text-left">
                            PT. TAKO ANUGERAH KOPORASI
                        </h1>
                        <p className="pt-4 text-xs lg:text-base text-center md:text-left">
                            Menjadi koporasi yang kuat & sehat untuk menaungi
                            perusahaan-perusahaan yang terintegrasi. Perusahaan
                            Koporasi yang menaungi 45 Perusahaan yang
                            terintegrasi dengan 4 linear bisnis yaitu Logistic,
                            Chicken Integration, Distributor, serta Food
                            Beverage
                        </p>
                        <div className="flex justify-center gap-6 lg:gap-12 pt-8 md:hidden">
                            <div>
                                <div className="flex gap-2 pb-4 items-center">
                                    <img src="images/location.svg" alt="" />
                                    <p className="text-xs lg:text-base">
                                        Surabaya, Jawa Timur
                                    </p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <img src="images/category.svg" alt="" />
                                    <p className="text-xs lg:text-base">
                                        Logistic & Supply Chain
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2 pb-4 items-center">
                                    <img src="images/web.svg" alt="" />
                                    <Link
                                        href="http://tako.co.id/"
                                        target="_blank"
                                    >
                                        <p className="text-xs lg:text-base">
                                            http://tako.co.id/
                                        </p>
                                    </Link>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <img src="images/location.svg" alt="" />
                                    <p className="text-xs lg:text-base">
                                        50 - 200 Karyawan
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8 md:pt-4 lg:pt-8 flex gap-4 justify-center md:justify-start">
                            <Link>
                                <button className="p-2 xl:py-4 px-8 bg-BlueTako text-white rounded-2xl text-xs lg:text-base flex items-center">
                                    <span className="flex items-center gap-2">
                                        Lihat Detail
                                        <img
                                            src="images/arrow-right.svg"
                                            alt=""
                                            className="scale-75"
                                        />
                                    </span>
                                </button>
                            </Link>
                            <Link>
                                <button className="p-2 xl:py-4 px-4 bg-RedTako text-white rounded-2xl flex items-center text-xs lg:text-base">
                                    <span className="flex items-center gap-2">
                                        Company Profile
                                        <img
                                            src="images/arrow-right.svg"
                                            alt=""
                                            className="scale-75"
                                        />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="md:flex justify-center flex-wrap w-[45%] hidden xl:justify-center">
                        <img
                            src="images/logo.svg"
                            alt=""
                            className="scale-75 lg:scale-100 md:translate-y-6 lg:translate-y-0"
                        />
                        <div className="flex gap-6 lg:gap-12 ">
                            <div>
                                <div className="flex gap-4 pb-4">
                                    <img src="images/location.svg" alt="" />
                                    <p className="text-xs lg:text-base">
                                        Surabaya, Jawa Timur
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <img src="images/category.svg" alt="" />
                                    <p className="text-xs lg:text-base">
                                        Logistic & Supply Chain
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="flex gap-4 pb-4">
                                    <img src="images/web.svg" alt="" />
                                    <Link
                                        href="http://tako.co.id/"
                                        target="_blank"
                                    >
                                        <p className="text-xs lg:text-base">
                                            http://tako.co.id/
                                        </p>
                                    </Link>
                                </div>

                                <div className="flex gap-4">
                                    <img src="images/location.svg" alt="" />
                                    <p className="text-xs lg:text-base">
                                        50 - 200 Karyawan
                                    </p>
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

export default CompanyProfile;
