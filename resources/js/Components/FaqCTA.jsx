import { Link } from "@inertiajs/react";
import React from "react";

const FaqCTA = () => {
    return (
        <section className="bg-BlueTako font-inter text-white">
            <div className="container mx-auto px-4 md:px-8 py-16 text-center">
                <h1 className="font-bold text-4xl pb-4">
                    Masih punya pertanyaan?
                </h1>
                <p className="pb-4">
                    Kamu masih bingung atau punya pertanyaan lebih lanjut, kami
                    siap membantu kamu!
                </p>
                <Link href="/faq">
                    <button className="font-bold bg-YellowTako text-DarkTako p-4 rounded-lg ">
                        Lihat FAQ
                    </button>
                </Link>
                {/* <div className="pt-8">
                    <div className="w-full bg-white p-[1px] rounded-lg   opacity-50"></div>
                </div> */}
            </div>
        </section>
    );
};

export default FaqCTA;
