import React from "react";

const Warn = () => {
    return (
        <section className=" bg-RedTako font-inter text-white">
            <div className="container mx-auto px-4 md:px-8 xl:px-16 py-16">
                <div className="text-center text-2xl font-bold">
                    <h1>PERHATIAN!!!</h1>
                    <p className="text-base font-normal py-4 pb-8">
                        Hati-hati dengan penipuan yang mengatasnamakan{" "}
                        <span className="font-bold">
                            PT. TAKO ANUGERAH KOPORASI
                        </span>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white text-DarkTako rounded-lg text-center p-4 py-8">
                        <img
                            src="images/warn-1.svg"
                            alt=""
                            className="flex mx-auto translate-x-6"
                        />
                        <p className="pt-2">
                            Hati-hati terhadap Penipuan Rekrutmen, waspadai
                            undangan pekerjaan yang mencurigakan yang mengklaim
                            berasal dari PT. Tako Anugerah Koporasi.
                        </p>
                    </div>
                    <div className="bg-white text-DarkTako rounded-lg text-center p-4 py-8">
                        <img
                            src="images/warn-2.svg"
                            alt=""
                            className="flex mx-auto"
                        />
                        <p className="pt-2">
                            Kami hanya memposting lowongan pekerjaan di situs
                            Glints, JobStreet, Indeed, & Web resmi Karir kami.
                        </p>
                    </div>
                    <div className="bg-white text-DarkTako rounded-lg text-center p-4 py-8 md:translate-x-44 lg:translate-x-0">
                        <img
                            src="images/warn-3.svg"
                            alt=""
                            className="flex mx-auto translate-x-6"
                        />
                        <p className="pt-2">
                            Kami dan Rekruter yang kami tunjuk tidak pernah
                            meminta, mengharuskan, atau mengumpulkan pembayaran
                            apa pun dari para kandidat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Warn;
