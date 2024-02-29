import React, { useState, useEffect, useContext } from "react";
import { Link } from "@inertiajs/react";
import "../../css/style.css";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageContext from "../Homepage/LanguageContext";

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: "/locales/{{lng}}/translation.json",
        },
        lng: "id",
        fallbackLng: "id",
        interpolation: {
            escapeValue: false,
        },
    });

const NavElseDesk = () => {
    const { selectedLanguage, setSelectedLanguage } =
        useContext(LanguageContext);

    const { t } = useTranslation(); // Tambahkan ini

    useEffect(() => {
        const language = localStorage.getItem("language") || "id"; // Get the selected language from local storage, default to 'id' if not found
        i18n.changeLanguage(language);
    }, []);

    const changeLanguage = (language) => {
        // setIsLoading(true); // Mulai menampilkan loading
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
        localStorage.setItem("language", language); // Save the selected language in local storage
    };

    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 0) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <nav
            // className={`fixed top-0 w-full z-50 ${
            //     scrolled ? "scrolled-bg" : "bg-transparent"
            // }`}
            className="bg-white fixed top-0 w-full z-50 shadow-sm"
        >
            <div className="container max-w-[1440px] px-4 md:px-8 xl:px-16 2xl:px-32 mx-auto">
                <div className="flex justify-between items-center">
                    <div className="w-10 h-10 md:w-24 md:h-16 flex items-center">
                        <a href="https://tako.co.id/" target="__blank">
                            <img
                                src="/images/tako_new.webp"
                                alt="Tako Logo"
                                className=" flex items-center"
                            />
                        </a>
                    </div>
                    <div className="md:flex text-BlueTako items-center">
                        <Link
                            className="mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold"
                            href="/"
                        >
                            {/* Beranda */}
                            {t("Beranda")}
                        </Link>
                        {/* <Link
                            className="mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold"
                            href="/companyprofile"
                        >
                            Profil Perusahaan
                        </Link> */}
                        {/* <Link
                            className="mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold"
                            href="/lowongan_kerja"
                        >
                            Lowongan Pekerjaan
                        </Link> */}
                        <Link
                            className="mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold"
                            href="/loker"
                        >
                            {/* Lowongan Pekerjaan */}
                            {t("Lowongan Pekerjaan")}
                        </Link>
                        <Link
                            className="mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold"
                            href="/faq"
                        >
                            {/* FAQ */}
                            {t("FAQ")}
                        </Link>
                        <Link
                            className="mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold"
                            href="/contact"
                        >
                            {/* Contact */}
                            {t("Contact")}
                        </Link>
                        <div>
                            <select
                                value={selectedLanguage}
                                onChange={(event) =>
                                    changeLanguage(event.target.value)
                                }
                                className="rounded-full"
                            >
                                <option value="id">Bahasa Indonesia</option>
                                <option value="en">English</option>
                                <option value="zh">中文 (Chinese)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavElseDesk;
