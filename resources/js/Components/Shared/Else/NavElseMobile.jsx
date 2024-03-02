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

const NavElseMobile = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const [scrolled, setScrolled] = useState(false);
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

    // Fungsi untuk mengganti keadaan menu mobile saat tombol hamburger diklik
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="fixed w-full font-inter bg-white shadow-sm z-50">
            <nav className="container py-2 px-4 md:px-8 xl:px-16 mx-auto">
                <div className="flex justify-between items-center">
                    <div className="w-24 md:w-16 md:h-16 -translate-x-3">
                        <a href="https://tako.co.id/" target="__blank">
                            <img
                                src="/images/tako_new.webp"
                                alt="Tako Logo"
                                className="scale-75"
                            />
                        </a>
                    </div>

                    <label className="md:hidden btn btn-circle swap swap-rotate border-none w-8 h-8">
                        {/* this hidden checkbox controls the state */}
                        <input
                            type="checkbox"
                            className="hidden"
                            onClick={toggleMobileMenu}
                        />

                        {/* hamburger icon */}
                        <svg
                            className="swap-off fill-BlueTako"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512"
                        >
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        {/* close icon */}
                        <svg
                            className="swap-on fill-RedTako"
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
                        <div className="md:hidden flex mt-6 absolute bg-BlueTako bg-opacity-90 flex-col text-white p-4 rounded-2xl right-0">
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
                                    className="border-1 border-BlueTako rounded-full mt-4 md:mt-0 md:ml-2 opacity-75 hover:opacity-90 font-semibold text-BlueTako"
                                >
                                    <option
                                        value="id"
                                        className="text-DarkTako"
                                    >
                                        Bahasa Indonesia
                                    </option>
                                    <option
                                        value="en"
                                        className="text-DarkTako"
                                    >
                                        English
                                    </option>
                                    <option
                                        value="zh"
                                        className="text-DarkTako"
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

export default NavElseMobile;
