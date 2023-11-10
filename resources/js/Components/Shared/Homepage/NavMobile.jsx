import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import "../../css/style.css";

const NavMobile = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    // Fungsi untuk mengganti keadaan menu mobile saat tombol hamburger diklik
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div
            className={`fixed w-full font-inter z-50 ${
                scrolled ? "scrolled-bg" : "bg-transparent"
            }`}
        >
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
                    {/* <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-DarkTako focus:outline-none"
                        >
                            <svg
                                className={`w-6 h-6 fill-current text-${
                                    scrolled ? "BlueTako" : "white"
                                } transform transition-transform ${
                                    isMobileMenuOpen ? "rotate-90" : ""
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    d={isMobileMenuOpen ? "M5 7h14" : "M5 7h14"}
                                    transform={
                                        isMobileMenuOpen
                                            ? "rotate(45 12 12)"
                                            : ""
                                    }
                                />

                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    d={
                                        isMobileMenuOpen
                                            ? "M5 12h14"
                                            : "M5 12h14"
                                    }
                                    opacity={isMobileMenuOpen ? 0 : 1}
                                    transform={
                                        isMobileMenuOpen
                                            ? "rotate(45 12 12)"
                                            : ""
                                    }
                                />

                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    d={
                                        isMobileMenuOpen
                                            ? "M5 17h14"
                                            : "M5 17h14"
                                    }
                                    transform={
                                        isMobileMenuOpen
                                            ? "rotate(45 12 12)"
                                            : ""
                                    }
                                />
                            </svg>
                        </button>
                    </div> */}

                    <label className="md:hidden btn btn-circle swap swap-rotate border-none w-8 h-8 ">
                        {/* this hidden checkbox controls the state */}
                        <input
                            type="checkbox"
                            className="hidden"
                            onClick={toggleMobileMenu}
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
                            className={`md:hidden flex mt-6 absolute bg-BlueTako bg-opacity-90 flex-col text-white p-4 rounded-2xl right-0 ${
                                isMobileMenuOpen ? "open" : "closed"
                            }`}
                        >
                            <Link
                                className="my-2 hover:text-BlueTako border-b border-white"
                                href="/"
                            >
                                Beranda
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

export default NavMobile;
