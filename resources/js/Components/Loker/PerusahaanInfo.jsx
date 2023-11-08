import React from "react";
import { useState } from "react";
import { usePage } from "@inertiajs/react";

const PerusahaanInfo = () => {
    const { props } = usePage();
    const { perusahaan } = props;

    const [values, setValues] = useState({
        // password: "meong",
        id: perusahaan.id,
        perusahaan: perusahaan.perusahaan,
        tentang: perusahaan.tentang,
        alamat: perusahaan.alamat,
        link: perusahaan.link,
        image: perusahaan.image,
    });
    console.log(values);

    return (
        <section className="bg-BgTako pt-8 md:pt-32 ">
            <div className="container mx-auto text-DarkTako px-4 md:px-8 xl:px-16">
                <div className="p-4 md:p-8 bg-white rounded-xl flex gap-4">
                    <div className="md:w-full">
                        <div className="flex items-center gap-8">
                            <div className="p-8 border border-BlueTako border-opacity-25 rounded-xl">
                                <img
                                    src={`/storage/images/${values.image}`}
                                    className="w-32 h-32"
                                />
                                {/* <img src="/images/logo-footer.png" alt="" /> */}
                            </div>
                            <div>
                                <h1 className="text-base md:text-2xl font-bold pb-2 uppercase">
                                    {values.perusahaan}
                                </h1>
                                <a
                                    href="www.tako.co.id"
                                    className="text-DarkTako text-opacity-75 underline "
                                >
                                    {values.link}
                                </a>
                            </div>
                        </div>
                        <div className="pt-8 flex flex-wrap gap-8">
                            <div>
                                <p className="text-xl font-semibold pb-4 text-BlueTako">
                                    Tentang Perusahaan
                                </p>
                                <p className="text-DarkTako text-opacity-75">
                                    {values.tentang}
                                </p>
                            </div>
                            <div className="pb-8">
                                <p className="text-xl font-semibold pb-4 text-BlueTako">
                                    Alamat Perusahaan
                                </p>
                                <p className="text-DarkTako text-opacity-75">
                                    {values.alamat}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-8 py-3 bg-BlueTako text-white rounded-xl btn normal-case border-none hover:bg-BlueTako hover:bg-opacity-90">
                                Cari Lowongan
                            </button>
                            <a href={values.link}>
                                <button className="px-8 py-3 bg-BlueTako bg-opacity-5 text-BlueTako rounded-xl btn normal-case border-none hover:bg-BlueTako hover:bg-opacity-10">
                                    Kunjungi Laman
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerusahaanInfo;
