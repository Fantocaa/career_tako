import React from "react";
import NavElse from "@/Components/Shared/Else/NavElse";
import Footer from "@/Components/Shared/Footer";
import { Link } from "@inertiajs/react";

const Finish = () => {
    return (
        <section className="bg-BgTako font-inter text-DarkTako md:pt-16 mx-auto">
            <NavElse />
            <div className="flex flex-col justify-center py-24">
                <div className="text-center ">
                    <h1 className="">Terima Kasih Sudah Melamar</h1>
                    <p>
                        Kami akan merespon lamaran kamu melalui Email. Terima
                        Kasih!
                    </p>
                </div>
                <div className="text-center pt-4">
                    <Link href="/">
                        <button className=" bg-BlueTako text-white px-4 py-2 rounded-lg">
                            Kembali ke Beranda
                        </button>
                    </Link>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Finish;
