import React from "react";

const HeaderIntern = () => {
    return (
        <div className="bg-GreenTako text-white font-inter w-full py-16 md:py-8">
            <div className="container mx-auto px-4 md:px-8 pt-8 md:pt-16">
                <div className="md:flex items-center">
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold text-YellowTako">
                            Internship{" "}
                            <span className="text-white">Program</span>
                        </h1>
                        <p className="text-xs lg:text-base pt-2 lg:w-[80%]">
                            Dapatkan pengalaman kerja nyata di perusahaan
                            terkemuka dan pelajari keterampilan baru yang akan
                            membantumu meraih kesuksesan.
                        </p>
                        <img
                            src="/images/internship.svg"
                            alt=""
                            className=" scale-90 py-4 md:hidden"
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
                            src="/images/internship.svg"
                            alt=""
                            className="translate-y-12 md:translate-y-0 md:translate-x-0 scale-100 py-8"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderIntern;
