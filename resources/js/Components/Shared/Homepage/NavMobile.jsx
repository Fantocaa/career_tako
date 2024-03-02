import React, { useState, useEffect, useContext } from "react";
import { Link } from "@inertiajs/react";
import "../../css/style.css";
import he from "he";
import axios from "axios";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageContext from "./LanguageContext";

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

const NavMobile = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { selectedLanguage, setSelectedLanguage } =
        useContext(LanguageContext);

    const { t } = useTranslation(); // Tambahkan ini

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Fungsi untuk mengganti keadaan menu mobile saat tombol hamburger diklik
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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

    return (
        <div
            className={`fixed w-full font-inter z-50 ${
                scrolled ? "scrolled-bg" : "bg-transparent"
            }`}
        >
            {/* <>
                {isLoading && (
                    <div className="w-screen h-screen bg-BlueTako bg-opacity-90 flex justify-center absolute z-50">
                        <span className="loading loading-dots loading-lg bg-white"></span>
                    </div>
                )}
            </> */}
            <nav className="container py-2 px-4 md:px-8 xl:px-16 mx-auto">
                <div className="flex justify-between items-center">
                    <div className="w-24 md:w-16 md:h-16 -translate-x-3">
                        <a href="https://tako.co.id/" target="__blank">
                            {scrolled ? (
                                <img
                                    src="/images/tako_new.webp"
                                    alt="Tako Logo"
                                    className="scale-75"
                                />
                            ) : (
                                <img
                                    src="/images/tako_white.webp"
                                    alt="Tako Logo"
                                    className="scale-75"
                                />
                            )}
                        </a>
                    </div>

                    {/* Tombol hamburger untuk tampilan mobile */}

                    <label className="md:hidden btn btn-circle swap swap-rotate border-none w-8 h-8 ">
                        {/* this hidden checkbox controls the state */}
                        <input
                            type="checkbox"
                            className="hidden"
                            checked={isMobileMenuOpen}
                            onChange={toggleMobileMenu} // Tambahkan ini
                        />

                        {/* hamburger icon */}
                        <svg
                            className={`swap-off  ${
                                scrolled ? "fill-BlueTako" : "fill-white"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512"
                        >
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        {/* close icon */}
                        <svg
                            className={`swap-on  ${
                                scrolled ? "fill-RedTako" : "fill-white"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512"
                        >
                            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                </div>
                {/* Menu Mobile */}
                {isMobileMenuOpen && (
                    <div className="relative z-50 top-0">
                        <div
                            className={`md:hidden flex mt-12 mr-6 absolute bg-BlueTako bg-opacity-90 flex-col text-white p-4 scale-125 rounded-2xl right-0 ${
                                isMobileMenuOpen ? "open" : "closed"
                            }`}
                        >
                            <Link
                                className="my-2 hover:text-BlueTako border-b border-white"
                                href="/"
                            >
                                {/* Beranda */}
                                {t("Beranda")}
                            </Link>
                            {/* <Link
                                className="my-2 hover:text-BlueTako border-b border-white"
                                href="/companyprofile"
                            >
                                Profil Perusahaan
                            </Link> */}
                            <Link
                                className="my-2 hover:text-BlueTako border-b border-white"
                                href="/loker"
                            >
                                {/* Lowongan Pekerjaan */}
                                {t("Lowongan Pekerjaan")}
                            </Link>
                            <Link
                                className="my-2 hover:text-BlueTako border-b border-white"
                                href="/faq"
                            >
                                {/* FAQ */}
                                {t("FAQ")}
                            </Link>
                            <Link
                                className="my-2 hover:text-BlueTako border-b border-white"
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
                                    className={`bg-white border-1 border-BlueTako rounded-full mt-4 md:mt-0 md:ml-2 opacity-75 hover:opacity-100 font-semibold ${
                                        scrolled
                                            ? "text-scrolled"
                                            : "text-BlueTako border-transparent"
                                    }`}
                                >
                                    <option
                                        value="id"
                                        className={`${scrolled ? "text-scrolled" : "text-DarkTako"}`}
                                    >
                                        Bahasa Indonesia
                                    </option>
                                    <option
                                        value="en"
                                        className={`${scrolled ? "text-scrolled" : "text-DarkTako"}`}
                                    >
                                        English
                                    </option>
                                    <option
                                        value="zh"
                                        className={`${scrolled ? "text-scrolled" : "text-DarkTako"}`}
                                    >
                                        中文 (Chinese)
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default NavMobile;
