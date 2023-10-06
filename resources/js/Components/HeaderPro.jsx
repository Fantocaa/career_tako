import { Link } from "@inertiajs/react";
import React from "react";

const HeaderPro = () => {
    return (
        <div className="bg-BlueTako text-white font-inter w-full py-16 md:py-8">
            <div className="container mx-auto px-4 md:px-8 pt-8 md:pt-16 lg:pt-[104px] py-8">
                {/* <div>
                    <Link href="/job">
                        <button className="bg-white text-BlueTako py-2 px-4 rounded-lg">
                            Kembali
                        </button>
                    </Link>
                </div> */}
                <div className="md:flex items-center">
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold text-YellowTako">
                            Profesional{" "}
                            <span className="text-white">Program</span>
                        </h1>

                        <p className="text-xs lg:text-base pt-2 lg:w-[80%]">
                            Kami menawarkan lingkungan kerja yang dinamis dan
                            suportif bagi semua karyawan kami. Kami percaya
                            bahwa setiap orang memiliki potensi untuk berkembang
                            dan berkontribusi.
                        </p>

                        <img
                            src="/images/profesional.svg"
                            alt=""
                            srcset=""
                            className="scale-90 py-4 md:hidden"
                        />

                        <div className="flex gap-16 md:pt-4">
                            <div>
                                <h1 className="font-semibold lg:text-2xl">
                                    Requirement
                                </h1>
                                <ul className="text-xs list-disc list-inside pt-2 lg:text-base">
                                    <li>Gpa 3.00</li>
                                    <li className="pt-1">
                                        Bekerja di Surabaya
                                    </li>
                                    <li className="pt-1">
                                        5 hari kerja (8 jam kerja)
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="font-semibold lg:text-2xl">
                                    Benefit
                                </h1>
                                <ul className="text-xs list-disc list-inside pt-2 lg:text-base">
                                    <li>Gaji Pokok</li>
                                    <li className="pt-1">Real Project</li>
                                    <li className="pt-1">Sertifikat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img
                            src="/images/profesional.svg"
                            alt=""
                            srcset=""
                            className="py-4 lg:scale-125 lg:-translate-x-12"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderPro;
