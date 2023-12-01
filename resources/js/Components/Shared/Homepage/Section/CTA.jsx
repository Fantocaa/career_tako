import { Link } from "@inertiajs/react";
import React from "react";

const CTA = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 py-16">
            <div className="bg-BgTako py-4 rounded-lg md:flex justify-between items-center">
                <div className="lg:w-[40%] text-center lg:text-left">
                    <h1
                        className="font-bold text-2xl md:text-4xl lg:text-5xl pb-4 lg:leading-[56px]"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Segera Bergabung bersama Kami!
                    </h1>
                    <p
                        className="pb-8"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Temukan peluang tak terbatas dan berkontribusi dalam
                        perjalanan menuju sukses bersama kami. Mari bergabung
                        dan ciptakan masa depan yang cerah.
                    </p>
                    <Link href="/loker">
                        <button
                            className="bg-YellowTako  text-DarkTako p-4 font-bold rounded-lg md:w-auto md:text-center"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Daftar Lowongan Kerja
                        </button>
                    </Link>
                </div>
                <div
                    className="flex"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <img
                        src="images/Business.svg"
                        alt="bussiness"
                        // srcset=""
                        className="hidden lg:block scale-125 animate-float-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default CTA;
