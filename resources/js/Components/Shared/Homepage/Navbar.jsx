import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import "../../css/style.css";
import he from "he";
import axios from "axios";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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

    // const changeLanguage = (language) => {
    //     const elementsToTranslate = document.querySelectorAll(".translate"); // Select elements with class 'translate'

    //     elementsToTranslate.forEach((element, index) => {
    //         setTimeout(() => {
    //             fetch("/api/translate", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     text: element.innerText,
    //                     target: language,
    //                 }),
    //             })
    //                 .then((response) => response.json())
    //                 .then((data) => {
    //                     element.innerText = he.decode(data); // Gunakan he.decode di sini
    //                 });
    //         }, index * 200); // Menunda setiap permintaan sebanyak 1 detik
    //     });
    // };

    const changeLanguage = (language) => {
        const elementsToTranslate = document.querySelectorAll(".translate"); // Select elements with class 'translate'

        elementsToTranslate.forEach((element, index) => {
            setTimeout(() => {
                axios
                    .post("/api/translate", {
                        text: element.innerText,
                        target: language,
                    })
                    .then((response) => {
                        element.innerText = he.decode(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }, index * 400); // Menunda setiap permintaan sebanyak 1 detik
        });
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 ${
                scrolled ? "scrolled-bg" : "bg-transparent"
            }`}
        >
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
                            className={`mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold ${
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
                            className={`mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold ${
                                scrolled ? "text-scrolled" : "text-white"
                            }`}
                            href="/loker"
                        >
                            Lowongan Pekerjaan
                        </Link>
                        <Link
                            className={`mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold ${
                                scrolled ? "text-scrolled" : "text-white"
                            }`}
                            href="/faq"
                        >
                            FAQ
                        </Link>
                        <Link
                            className={`mt-4 md:mt-0 md:mx-4 opacity-75 hover:opacity-100 font-semibold ${
                                scrolled ? "text-scrolled" : "text-white"
                            }`}
                            href="/contact"
                        >
                            Contact
                        </Link>
                        {/* <div>
                            <select
                                onChange={(event) =>
                                    changeLanguage(event.target.value)
                                }
                                className="rounded-xl"
                            >
                                <option value="id">Bahasa Indonesia</option>
                                <option value="en">English</option>
                                <option value="zh">中文 (Chinese)</option>
                            </select>
                        </div> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
