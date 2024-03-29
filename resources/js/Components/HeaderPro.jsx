import React from "react";
import { useTranslation } from "react-i18next";

const HeaderPro = () => {
    const { t } = useTranslation(); // Tambahkan ini
    return (
        <>
            <div className="text-white font-inter w-full relative">
                <img
                    // src="/images/photo/frame_463.webp"
                    src="/images/frame_496.webp"
                    alt="loker"
                    className="w-full h-[480px] md:h-[640px] object-cover object-top md:hidden"
                />
                <img
                    // src="/images/photo/frame_463.webp"
                    src="/images/Frame 503.png"
                    alt="loker"
                    className="w-screen h-[480px] md:h-full object-cover object-top hidden md:block"
                />
                <div className="container max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 md:py-24 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                    <div className="md:flex gap-8 2xl:gap-16 items-center">
                        <div className="md:w-[65%]">
                            <h1 className="font-bold text-3xl lg:text-4xl 2xl:text-[40px] pt-14 md:pt-8 w-[90%] xl:w-[65%] md:w-full 2xl:w-full">
                                {/* Temukan Peluang  */}
                                {t("loker.title.1")}
                                <span className="text-YellowTako">
                                    {/* Karier */}
                                    {t("loker.title.2")}
                                </span>{" "}
                                {t("loker.title.3")}
                                {/* yang Tepat */}
                            </h1>
                            <p className="text-base md:text-base 2xl:text-lg pt-4 md:pt-2 lg:pt-4 2xl:pt-6 xl:w-[65%] 2xl:w-full">
                                {/* Kami memahami bahwa setiap orang memiliki
                                potensi dan minat yang berbeda-beda. Oleh karena
                                itu, kami menyediakan berbagai peluang karier
                                yang dapat Anda pilih sesuai dengan minat dan
                                kemampuan Anda. Kami memiliki berbagai posisi
                                yang tersedia, mulai dari posisi intern,
                                entry-level hingga posisi senior. */}
                                {t("loker.body")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderPro;
