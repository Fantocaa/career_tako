import { Link } from "@inertiajs/react";
import React from "react";

const CTA = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 xl:px-16 py-16">
            <div className="bg-BgTako py-4 rounded-lg md:flex justify-between items-center">
                <div className="lg:w-[40%] text-center lg:text-left">
                    <h1 className="font-bold text-4xl lg:text-5xl pb-4 lg:leading-[56px]">
                        Segera Bergabung bersama Kami!
                    </h1>
                    <p className="pb-8">
                        Temukan peluang tak terbatas dan berkontribusi dalam
                        perjalanan menuju sukses bersama kami. Mari bergabung
                        dan ciptakan masa depan yang cerah.
                    </p>
                    <Link href="/job">
                        <button className="bg-YellowTako  text-DarkTako p-4 font-bold rounded-lg w-full md:w-auto md:text-center">
                            Daftar Lowongan Kerja
                        </button>
                    </Link>
                </div>
                <div className="flex">
                    <img
                        src="images/Business.svg"
                        alt=""
                        srcset=""
                        className="hidden lg:block scale-125 float-right"
                    />
                </div>
            </div>
        </div>
    );
};

export default CTA;
