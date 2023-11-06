import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import "../../css/style.css";

const NavElseMobile = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    // Fungsi untuk mengganti keadaan menu mobile saat tombol hamburger diklik
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="fixed w-full font-inter bg-white shadow-sm z-50">
            <nav className="container py-2 px-4 md:px-8 xl:px-16 mx-auto">
                <div className="flex justify-between items-center">
                    <div className="w-10 h-10 md:w-16 md:h-16">
                        <Link href="/">
                            <img
                                src="/images/logo-footer.png"
                                alt="Tako Logo"
                                className="scale-75"
                            />
                        </Link>
                    </div>

                    {/* Tombol hamburger untuk tampilan mobile */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-DarkTako hover:text-gray-200 focus:outline-none"
                        >
                            {/* hamburger icon */}
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                            >
                                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Menu Mobile */}
                {isMobileMenuOpen && (
                    <div className="relative z-50 top-0">
                        <div className="md:hidden flex mt-6 absolute bg-BlueTako bg-opacity-90 flex-col text-white p-4 rounded-2xl right-0">
                            <Link
                                className="my-2 hover:text-BlueTako border-b border-white"
                                href="/"
                            >
                                Beranda
                            </Link>
                            <Link
                                className="my-2 hover:text-BlueTako border-b border-white"
                                href="/companyprofile"
                            >
                                Profil Perusahaan
                            </Link>
                            <Link
                                className="my-2 hover:text-BlueTako border-b border-white"
                                href="/job"
                            >
                                Lowongan Pekerjaan
                            </Link>
                            <Link
                                className="my-2 hover:text-BlueTako border-b border-white"
                                href="/faq"
                            >
                                FAQ
                            </Link>
                            <Link
                                className="my-2 hover:text-BlueTako border-b border-white"
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default NavElseMobile;
