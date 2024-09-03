import React from "react";
import NavElse from "@/Components/Shared/Else/NavElse";
import Footer from "@/Components/Shared/Footer";
import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

const Finish = () => {
    return (
        // <Layout pageTitle="Finish | Tako Karier">
        <>
            <Head title="Finish" />
            <section className="bg-BgTako font-inter text-DarkTako md:pt-16 mx-auto min-h-screen flex flex-col">
                <NavElse />
                <div className="flex flex-col justify-center pt-24 pb-16 md:pb-24 container mx-auto">
                    <img
                        src="images/mailfinish.svg"
                        alt=""
                        className="h-32 md:h-56"
                    />
                    <div className="text-center">
                        <h1 className="text-xl md:text-2xl font-bold pt-2">
                            Terima Kasih Sudah Melamar
                        </h1>
                        <p className="pt-2 px-4 text-xs md:text-base">
                            Kami akan merespon lamaran anda melalui WhatsApp
                            atau Email. Terima Kasih!
                        </p>
                    </div>
                    <div className="text-center pt-4">
                        <Link href="/">
                            <button className=" bg-BlueTako text-white px-4 py-2 rounded-lg text-xs md:text-base">
                                Kembali ke Beranda
                            </button>
                        </Link>
                    </div>
                </div>

                <Footer />
            </section>
        </>
        // </Layout>
    );
};

export default Finish;
