import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import "../../css/style.css";
import he from "he";
import axios from "axios";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

    const changeLanguage = (language) => {
        const elementsToTranslate = document.querySelectorAll(".translate"); // Select elements with class 'translate'
        setIsLoading(true); // Mulai menampilkan loading
        document.body.style.overflow = "hidden"; // Disable scroll

        elementsToTranslate.forEach((element, index) => {
            // Save the original text
            if (!element.dataset.originalText) {
                element.dataset.originalText = element.innerText;
            }

            setTimeout(() => {
                if (language === "id") {
                    // If the language is Indonesian, revert to the original text
                    element.innerText = element.dataset.originalText;

                    // Jika ini adalah elemen terakhir, hentikan penampilan loading
                    if (index === elementsToTranslate.length - 1) {
                        setIsLoading(false);
                        document.body.style.overflow = "auto"; // Enable scroll
                    }
                } else {
                    axios
                        .post("/api/translate", {
                            text: element.innerText,
                            target: language,
                        })
                        .then((response) => {
                            element.innerText = he.decode(response.data);
                            // Jika ini adalah elemen terakhir, hentikan penampilan loading
                            if (index === elementsToTranslate.length - 1) {
                                setIsLoading(false);
                                document.body.style.overflow = "auto"; // Enable scroll
                            }
                        })
                        .catch((error) => {
                            console.error(error);
                            setIsLoading(false); // Hentikan penampilan loading jika terjadi error
                            document.body.style.overflow = "auto"; // Enable scroll
                        });
                }
            }, index * 300); // Menunda setiap permintaan sebanyak 1 detik
        });
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 ${
                scrolled ? "scrolled-bg" : "bg-transparent"
            }`}
        >
            <>
                {isLoading && (
                    <div className="w-screen h-screen bg-BlueTako bg-opacity-90 flex justify-center absolute z-50">
                        <span className="loading loading-dots loading-lg bg-white"></span>
                    </div>
                )}
            </>
            <div className="container max-w-[1440px] px-4 md:px-8 xl:px-16 2xl:px-32 mx-auto w-full z-50 ">
                <div className="flex justify-between items-center">
                    <a href="https://tako.co.id/" target="__blank">
                        {scrolled ? (
                            <div className="w-10 h-10 md:w-24 md:h-16 flex items-center">
                                <img
                                    src="/images/tako_new.webp"
                                    alt="Tako Logo"
                                />
                            </div>
                        ) : (
                            <div className="w-10 h-10 md:w-24 md:h-16 flex items-center">
                                <img
                                    src="/images/tako_white.webp"
                                    alt="Tako Logo"
                                />
                            </div>
                        )}
                    </a>
                    <div className="md:flex text-BlueTako items-center">
                        <Link
                            className={`mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold translate ${
                                scrolled ? "text-scrolled" : "text-white"
                            }`}
                            href="/"
                        >
                            Beranda
                        </Link>
                        {/* <Link
                            className={`mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold ${
                                scrolled ? "text-scrolled" : "text-white"
                            }`}
                            href="/companyprofile"
                        >
                            Profil Perusahaan
                        </Link> */}
                        <Link
                            className={`mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold translate ${
                                scrolled ? "text-scrolled" : "text-white"
                            }`}
                            href="/loker"
                        >
                            Lowongan Pekerjaan
                        </Link>
                        <Link
                            className={`mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold translate ${
                                scrolled ? "text-scrolled" : "text-white"
                            }`}
                            href="/faq"
                        >
                            FAQ
                        </Link>
                        <Link
                            className={`mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold translate ${
                                scrolled ? "text-scrolled" : "text-white"
                            }`}
                            href="/contact"
                        >
                            Contact
                        </Link>
                        <div>
                            <select
                                onChange={(event) =>
                                    changeLanguage(event.target.value)
                                }
                                className={`bg-transparent border-1 border-BlueTako rounded-full mt-4 md:mt-0 md:ml-2 opacity-75 hover:opacity-100 font-semibold ${
                                    scrolled
                                        ? "text-scrolled"
                                        : "text-white border-transparent"
                                }`}
                            >
                                <option
                                    value="id"
                                    className={` ${
                                        scrolled
                                            ? "text-scrolled"
                                            : "text-DarkTako"
                                    }`}
                                >
                                    Bahasa Indonesia
                                </option>
                                <option
                                    value="en"
                                    className={` ${
                                        scrolled
                                            ? "text-scrolled"
                                            : "text-DarkTako"
                                    }`}
                                >
                                    English
                                </option>
                                <option
                                    value="zh"
                                    className={` ${
                                        scrolled
                                            ? "text-scrolled"
                                            : "text-DarkTako"
                                    }`}
                                >
                                    中文 (Chinese)
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
