import React from "react";
import Nav from "@/Components/Shared/Homepage/Nav";
import Footer from "@/Components/Shared/Footer";
import NavElse from "@/Components/Shared/Else/NavElse";
import Layout from "@/Layouts/Layout";

const Contact = () => {
    return (
        <Layout pageTitle="Contact | Tako Karir">
            <section className="bg-BgTako font-inter text-DarkTako md:pt-16">
                <NavElse />
                <div className="container flex mx-auto px-4 md:px-8 xl:px-16 pt-24 lg:pt-16 pb-16 md:py-8 justify-between items-center">
                    <div className="bg-white rounded-lg p-6 md:flex items-center gap-4">
                        <div className="hidden md:block md:w-1/2 ">
                            <img src="images/contact.svg" alt="" className="" />
                        </div>
                        <div className="md:w-1/2 rounded-lg">
                            <h1 className="font-bold text-2xl lg:text-3xl ">
                                Terhubung dengan Kami
                            </h1>
                            <p className="pt-4 text-xs md:pb-4 lg:text-base">
                                Kami percaya bahwa membangun hubungan yang kuat
                                dengan pelanggan, mitra, dan karyawan adalah
                                kunci untuk kesuksesan. Kami ingin terhubung
                                dengan Anda di berbagai platform untuk berbagi
                                berita dan informasi terbaru kami, menjawab
                                pertanyaan Anda, dan berkolaborasi dalam
                                proyek-proyek baru.
                            </p>
                            <div className="block md:hidden">
                                <img
                                    src="images/contact.svg"
                                    alt=""
                                    className=""
                                />
                            </div>
                            <div className="rounded-lg lg:flex gap-8">
                                <div className="flex items-center gap-2 pb-2 lg:pb-0 lg:pt-2 border-b border-opacity-10 lg:border-none border-DarkTako">
                                    <img
                                        src="images/location2.svg"
                                        alt=""
                                        className="scale-75"
                                    />
                                    <h1>Surabaya, Jawa Timur</h1>
                                </div>
                                <div className="flex items-center gap-2 pt-2">
                                    <img
                                        src="images/mail.svg"
                                        alt=""
                                        className="scale-75"
                                    />
                                    <h1>recruitment@tako.co.id</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </Layout>
    );
};

export default Contact;
