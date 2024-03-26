import React from "react";
import "../style.css";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@inertiajs/react";
import LanguageContext from "@/Components/Shared/Homepage/LanguageContext";

const InterviewPage = () => {
    const { t } = useTranslation(); // Tambahkan ini

    const { selectedLanguage } = useContext(LanguageContext);

    // Objek yang menyimpan URL video untuk setiap bahasa
    const videoUrls = {
        id: "https://www.youtube.com/embed/Zks9MAh8ppk?si=y_UdEHT54RerWIDx",
        en: "https://www.youtube.com/embed/wphJTqG7eZ4?si=orjvg3eWUrKQKyPD",
        zh: "https://www.youtube.com/embed/a4dltwf4tKA?si=0GevH1MJ2-bogRES",
    };

    // Memilih URL video berdasarkan bahasa yang dipilih
    const selectedVideoUrl = videoUrls[selectedLanguage] || videoUrls["id"];

    return (
        <div className="container max-w-[1440px] mx-auto px-4 py-8 md:px-8 xl:px-16 2xl:px-32 pt-16 lg:pt-32 ">
            <div className="bg-BlueTako p-4 md:p-8 py-16 rounded-xl gap-8">
                <div className="w-full md:flex gap-4">
                    <div className="w-full md:w-[50%] lg:w-[40%] pb-8 md:pb-0 lg:pb-8 md:flex lg:block items-center">
                        <h1 className="text-[36px] leading-[40px] font-bold text-white lg:w-[95%]">
                            {t("video.title.1")}{" "}
                            <span className="text-YellowTako">
                                {t("video.title.2")}
                            </span>{" "}
                            {t("video.title.3")}
                        </h1>
                        <p className="text-white py-8 md:hidden lg:block 2xl:w-[95%]">
                            {t("video.body")}
                        </p>
                        <Link href="/loker">
                            <button
                                className="md:hidden lg:block bg-white hover:opacity-75 hover:text-BlueTako fill-white hover:fill-BlueTako py-3 px-4 rounded-xl text-BlueTako flex gap-4 items-center transition-all duration-300 ease-in-out font-semibold shadow-sm"
                                // data-aos="fade-up"
                                // data-aos-duration="1000"
                            >
                                {t("video.button")}
                            </button>
                        </Link>
                    </div>
                    <div className="bg-white p-4 rounded-xl mx-auto">
                        <div className="relative rounded-xl overflow-hidden w-full h-[178.88px] md:w-[318px] lg:w-[480px] lg:h-full xl:w-[480px] xl:h-[360px]">
                            <iframe
                                // src="https://www.youtube.com/embed/KKKd_aEVdew?si=j1QnnuwK_YtTtFf6"
                                src={selectedVideoUrl}
                                title="PT. TAKO ANUGERAH KOPORASI - Interview with MANAGER"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed"
                    style={{
                        backgroundImage: "url(images/SCL_1333.JPG)",
                        zIndex: -1,
                    }}
                ></div> */}
                </div>
                <p className="text-white py-4 pb-8 lg:py-8 hidden md:block lg:hidden">
                    {/* Bergabunglah dengan kami untuk mengejar impian bersama PT.
                    TAKO ANUGERAH KOPORASI! Kamu adalah Talenta Terbaik yang
                    kami cari untuk membangun masa depan yang gemilang. Bersama,
                    kita akan menciptakan inovasi, menghadirkan solusi kreatif,
                    dan menjalani perjalanan karier yang penuh prestasi. Jadi,
                    siap untuk menjadi bagian dari tim unggul kami? Ayo,
                    bergabung dan wujudkan potensimu bersama PT. TAKO ANUGERAH
                    KOPORASI! */}
                    {t("video.body")}
                </p>
                <Link href="/loker">
                    <button
                        className="hidden md:block lg:hidden bg-white hover:opacity-75 hover:text-BlueTako fill-white hover:fill-BlueTako py-3 px-4 rounded-xl text-BlueTako gap-4 items-center transition-all duration-300 ease-in-out font-semibold shadow-sm"
                        // data-aos="fade-up"
                        // data-aos-duration="1000"
                    >
                        {t("video.button")}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default InterviewPage;
