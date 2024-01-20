import React from "react";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-DarkTako text-white font-inter w-full z-50 py-8 mt-auto">
            <div className="container max-w-[1440px] py-4 px-4 md:px-8 xl:px-16 2xl:px-32 mx-auto ">
                <div className="block md:flex justify-between items-center pb-12">
                    <div className="mb-16 md:mb-0">
                        <div className="flex items-center gap-4">
                            <a href="https://tako.co.id/">
                                <img
                                    src="/images/logo-footer.png"
                                    alt="Tako Logo"
                                    className="w-16 h-16"
                                />
                            </a>
                            <div>
                                <h1 className="font-bold">
                                    PT. TAKO ANUGERAH KOPORASI
                                </h1>
                                <h2>United For Success</h2>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-6">
                            <a
                                href="https://www.instagram.com/tako.koporasi/"
                                target="__blank"
                                alt="instagram"
                                aria-label="Instagram"
                            >
                                <img src="/images/ig.svg" alt="instagram" />
                            </a>
                            {/* <Link href="">
                            <img src="/images/fb.svg" alt="" />
                        </Link> */}
                            <a href="https://www.youtube.com/@takoanugerahkoporasi5554">
                                <img src="/images/yt.svg" alt="youtube" />
                            </a>
                            {/* <Link href="">
                            <img src="/images/x.svg" alt="" />
                        </Link> */}
                            <a
                                href="https://www.linkedin.com/company/tako-anugerah-koporasi-pt/"
                                target="_blank"
                                alt="linkedin"
                                aria-label="Linkedin"
                            >
                                <img
                                    src="/images/linkedin.svg"
                                    alt="linkedin"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col justify-end">
                        <div className="flex gap-4 justify-start md:justify-end">
                            <div>
                                <img src="/images/call.webp" alt="call" />
                            </div>
                            <h1 className="md:w-1/2">081 280 578 717</h1>
                            <div className="md:hidden flex gap-4">
                                <div className="flex-shrink-0">
                                    <img src="/images/mail.webp" alt="mail" />
                                </div>
                                <h1 className="w-full md:w-1/2">
                                    info@tako.co.id
                                </h1>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-end">
                            <div>
                                <img src="/images/pin.webp" alt="pin" />
                            </div>
                            <h1 className="w-full md:w-1/2">
                                Spazio Building PT TAKO ANUGERAH KOPORASI Lt 6
                                Unit 602 Surabaya
                            </h1>
                        </div>
                        <div className="gap-4 justify-end hidden md:flex">
                            <div>
                                <img src="/images/mail.webp" alt="mail" />
                            </div>
                            <h1 className="w-full md:w-1/2">info@tako.co.id</h1>
                        </div>
                    </div>
                </div>

                <div className="w-full h-1 bg-white rounded-2xl"></div>
                <div>
                    <h1 className="text-xs md:text-base text-center pt-12">
                        © 2024 PT. TAKO ANUGERAH KOPORASI, All Rights Reserved
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
