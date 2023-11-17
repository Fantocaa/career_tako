import { Link } from "@inertiajs/react";
import React from "react";

const FaqCTA = () => {
    return (
        <section className="bg-BlueTako font-inter text-white">
            <div className="relative">
                <div className="container mx-auto px-4 md:px-8 py-32 text-center relative z-10">
                    <h1
                        className="font-bold text-4xl pb-4"
                        data-aos="zoom-in-up"
                        data-aos-duration="800"
                    >
                        Masih punya pertanyaan?
                    </h1>
                    <p
                        className="pb-4"
                        data-aos="zoom-in-up"
                        data-aos-duration="800"
                    >
                        Kamu masih bingung atau punya pertanyaan lebih lanjut,
                        kami siap membantu kamu!
                    </p>
                    <Link href="/faq">
                        <button
                            className="font-bold bg-YellowTako text-DarkTako hover:bg-YellowTako hover:bg-opacity-80 transition-all p-4 rounded-lg cursor-pointer z-10"
                            data-aos="zoom-in-up"
                            data-aos-duration="800"
                        >
                            Lihat FAQ
                        </button>
                    </Link>
                </div>
                <img
                    src="/images/bg.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    style={{
                        opacity: "0.1", // Sesuaikan tingkat opacity sesuai keinginan Anda
                    }}
                />
                <div className="absolute bg-BlueTako inset-0 opacity-20 z-1" />
            </div>
        </section>
    );
};

export default FaqCTA;
