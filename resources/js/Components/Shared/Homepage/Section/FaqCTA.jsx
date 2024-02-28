import { Link } from "@inertiajs/react";
import React from "react";
import he from "he";
import { useTranslation } from "react-i18next";

const translatedText = "Let&#39;s check the FAQ below"; // Misalkan ini adalah teks yang sudah diterjemahkan
const decodedText = he.decode(translatedText);

const FaqCTA = () => {
    const { t } = useTranslation(); // Tambahkan ini
    return (
        <section className="bg-BlueTako font-inter text-white">
            <div className="relative">
                <div className="container w-full mx-auto px-4 md:px-8 py-32 text-center relative z-10">
                    <div data-aos="zoom-in-up" data-aos-duration="800">
                        <h1 className="font-bold text-2xl md:text-4xl pb-2 translate">
                            {/* Masih punya pertanyaan? */}
                            {t("faqcta.title")}
                        </h1>
                        <h1 className="font-bold text-2xl md:text-4xl pb-12 translate">
                            {/* Yuk cek FAQ di bawah */}
                            {t("faqcta.title.1")}
                        </h1>
                    </div>

                    <Link href="/faq">
                        <button
                            className="font-bold bg-YellowTako text-DarkTako hover:bg-YellowTako hover:bg-opacity-80 transition-all p-4 rounded-lg cursor-pointer z-10 translate"
                            data-aos="zoom-in-up"
                            data-aos-duration="800"
                        >
                            {/* Lihat FAQ Rekrutmen */}
                            {t("faqcta.title.2")}
                        </button>
                    </Link>
                    <p
                        className="pt-8 md:text-lg 2xl:text-xl w-full md:w-[80%] lg:w-[50%] mx-auto translate"
                        data-aos="zoom-in-up"
                        data-aos-duration="800"
                    >
                        {t("faqcta.body")}
                        {/* Jika Anda memiliki pertanyaan yang belum terjawab di FAQ
                        ini, jangan ragu untuk menghubungi kami di
                        recruitment@tako.co.id */}
                    </p>
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
