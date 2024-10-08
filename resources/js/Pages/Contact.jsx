import React from "react";
import { useEffect, useState } from "react";
import Nav from "@/Components/Shared/Homepage/Nav";
import Footer from "@/Components/Shared/Footer";
import NavElse from "@/Components/Shared/Else/NavElse";
import Layout from "@/Layouts/Layout";
import BackToTop from "@/Components/BackToTop";
import HeaderContact from "@/Components/HeaderContact";
import { useTranslation } from "react-i18next";
import { Head } from "@inertiajs/react";

const Contact = () => {
    const [data, setData] = useState([]); // State untuk data perusahaan
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const { t } = useTranslation(); // Tambahkan ini

    useEffect(() => {
        // Lakukan permintaan AJAX untuk mendapatkan data perusahaan
        const fetchData = async () => {
            try {
                const response = await fetch("/api/time_expired"); // Ganti dengan rute yang sesuai
                const result = await response.json();
                setData(result);
                // setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                // setLoading(false);
            } finally {
                setIsPageLoaded(true);
            }
        };

        fetchData(); // Panggil fungsi fetchData saat komponen di-mount
    }, []); // Dependensi kosong agar hanya dipanggil sekali

    // Render halaman setelah data diambil dan halaman ter-load
    // if (!isPageLoaded) {
    //     return null; // Atau tampilkan loader/loading indicator
    // }

    return (
        // <Layout pageTitle="Contact | Tako Karier">
        <>
            <Head title="Contact" />
            <section className="bg-BgTako font-inter text-DarkTako">
                <Nav />
                <HeaderContact />
                <div className="container max-w-[1440px] flex mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 pt-24 lg:py-16 pb-16 md:py-8 justify-between items-center">
                    <div className="bg-white rounded-lg p-6 md:flex items-center gap-4 py-16 md:px-32">
                        {/* <div className="hidden md:block md:w-1/2 ">
                            <img src="images/contact.svg" alt="" className="" />
                        </div> */}
                        <div className="rounded-lg text-center ">
                            <h1 className="font-bold text-2xl lg:text-3xl translate">
                                {/* Terhubung dengan Kami */}
                                {t("contact.title")}
                            </h1>
                            <p className="pt-4 mb-8 text-xs md:pb-4 lg:text-base translate">
                                {/* Kami percaya bahwa membangun hubungan yang kuat
                                dengan pelanggan, mitra, dan karyawan adalah
                                kunci untuk kesuksesan. Kami ingin terhubung
                                dengan Anda di berbagai platform untuk berbagi
                                berita dan informasi terbaru kami, menjawab
                                pertanyaan Anda, dan berkolaborasi dalam
                                proyek-proyek baru. */}
                                {t("contact.body")}
                            </p>
                            <div className="rounded-lg lg:flex gap-2 lg:gap-8 py-4 lg:py-4 bg-BlueTako bg-opacity-10 flex flex-col lg:flex-row items-start justify-center pl-4">
                                <div className="flex items-center lg:pb-0   gap-2">
                                    <img
                                        src="images/location2.svg"
                                        alt=""
                                        className="scale-75"
                                    />
                                    <h1>Surabaya, Jawa Timur</h1>
                                </div>
                                <div className="flex items-center gap-2">
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
                <BackToTop />
                <Footer />
            </section>
        </>
        // </Layout>
    );
};

export default Contact;
