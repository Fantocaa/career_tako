import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import "../../css/style.css";

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

    return (
        <nav
            className={`fixed top-0 w-full z-50 ${
                scrolled ? "scrolled-bg" : "bg-transparent"
            }`}
        >
            <div className="container px-4 md:px-8 xl:px-16 mx-auto w-full z-50 ">
                <div className="flex justify-between items-center">
                    <div className="w-10 h-10 md:w-16 md:h-16 flex items-center">
                        <Link href="/">
                            <img
                                src="/images/logo-footer.png"
                                alt="Tako Logo"
                                className="flex scale-75 items-center"
                            />
                        </Link>
                    </div>
                    <div className="md:flex text-BlueTako">
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
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
