import { Link } from "@inertiajs/react";
import React from "react";

const HeaderFAQ = () => {
    return (
        <div className="bg-BlueTako text-white font-inter w-full py-16 md:py-8">
            <div className="container max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 md:py-24">
                <div className="md:flex gap-8 2xl:gap-16 items-center">
                    <div className="md:w-[65%]">
                        <h1 className="font-bold text-3xl lg:text-4xl 2xl:text-[40px] pt-14 md:pt-8 w-[90%] md:w-full">
                            <span className="text-YellowTako">FAQ</span>{" "}
                            (Frequently Asked Question)
                        </h1>
                        <p className="text-xs md:text-base 2xl:text-lg pt-2 lg:pt-4 2xl:pt-6">
                            Temukan informasi lengkap dan jawaban untuk
                            pertanyaan-pertanyaan umum agar memahami lebih
                            lanjut tentang proses rekrutmen dan peluang
                            berkarier bersama kami.
                        </p>
                        {/* <img
                            src="/images/bg.jpg"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{
                                opacity: "0.1", // Sesuaikan tingkat opacity sesuai keinginan Anda
                            }}
                        /> */}
                    </div>
                    <div className="hidden md:block w-full md:w-1/2 lg:block">
                        <img
                            src="/images/faq.svg"
                            alt="faq"
                            className="lg:scale-125"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderFAQ;
