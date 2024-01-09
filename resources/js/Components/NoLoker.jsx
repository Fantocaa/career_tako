import React from "react";
import { Link } from "@inertiajs/react";

const NoLoker = () => {
    return (
        <section className="font-inter text-DarkTako md:pt-16">
            <div className="container px-4 md:px-8 xl:px-16 2xl:px-32 w-full mx-auto">
                <div className="md:flex items-center gap-4 xl:gap-8 bg-white px-4 2xl:px-16 py-8 rounded-xl shadow-lg">
                    <div className="w-full lg:w-1/2">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-2xl">
                            Belum menemukan lowongan kerja yang sesuai?
                        </h1>
                        <p className="pt-4 pb-8 text-lg">
                            {/* Belum menemukan lowongan kerja yang sesuai? <br />
                            <br /> */}
                            Jangan khawatir, Anda dapat mengirimkan CV Anda
                            kepada kami. Kami selalu mencari talenta-talenta
                            terbaik untuk bergabung dengan tim kami. Siapa tahu,
                            Anda adalah orang yang kami cari!
                        </p>
                        <Link href="/loker/dropcv">
                            <button className="bg-BlueTako hover:bg-white hover:text-BlueTako fill-white hover:fill-BlueTako py-3 px-4 rounded-xl text-white flex gap-4 justify-center items-center transition-all duration-300 ease-in-out shadow-lg w-full">
                                <h1 className="text-lg font-semibold">
                                    {/* Daftar Lowongan Kerja */}
                                    Melamar disini
                                </h1>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.53 12.53L14.24 16.82C14.09 16.97 13.9 17.04 13.71 17.04C13.52 17.04 13.33 16.97 13.18 16.82C12.89 16.53 12.89 16.05 13.18 15.76L16.19 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H16.19L13.18 8.24C12.89 7.95 12.89 7.47 13.18 7.18C13.47 6.89 13.95 6.89 14.24 7.18L18.53 11.47C18.67 11.61 18.75 11.8 18.75 12C18.75 12.2 18.67 12.39 18.53 12.53Z" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 hidden lg:block">
                        <img
                            src={`images/No data-cuate.svg`}
                            alt="logo perusahaan"
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NoLoker;
