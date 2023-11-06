import React from "react";

const PerusahaanInfo = () => {
    return (
        <section className="bg-BgTako pt-8 md:pt-32 ">
            <div className="container mx-auto text-DarkTako px-4 md:px-8 xl:px-16">
                <div className="p-4 md:p-8 bg-white rounded-xl flex gap-4">
                    <div className="md:w-full">
                        <div className="flex items-center gap-8">
                            <div className="p-8 border border-BlueTako border-opacity-25 rounded-xl">
                                {/* <img src="/images/logo-footer.png" alt=""> */}
                                <img src="/images/logo-footer.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-base md:text-2xl font-bold pb-2">
                                    PT. TAKO ANUGERAH KOPORASI
                                </h1>
                                <a
                                    href="www.tako.co.id"
                                    className="text-DarkTako text-opacity-75 underline "
                                >
                                    www.tako.co.id
                                </a>
                            </div>
                        </div>
                        <div className="pt-8 flex flex-wrap gap-8">
                            <div>
                                <p className="text-xl font-semibold pb-4 text-BlueTako">
                                    Tentang Perusahaan
                                </p>
                                <p className="text-DarkTako text-opacity-75">
                                    Menjadi koporasi yang kuat & sehat untuk
                                    menaungi perusahaan-perusahaan yang
                                    terintegrasi. Perusahaan Koporasi yang
                                    menaungi 45 Perusahaan yang terintegrasi
                                    dengan 4 linear bisnis yaitu Logistic,
                                    Chicken Integration, Distributor, serta Food
                                    Beverage
                                </p>
                            </div>
                            <div className="pb-8">
                                <p className="text-xl font-semibold pb-4 text-BlueTako">
                                    Alamat Perusahaan
                                </p>
                                <p className="text-DarkTako text-opacity-75">
                                    Jl. Perak Barat No.69, RT.002/RW.12, Perak
                                    Barat, Kec. Krembangan, Surabaya, Jawa Timur
                                    60177
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-8 py-3 bg-BlueTako text-white rounded-xl btn normal-case border-none hover:bg-BlueTako hover:bg-opacity-90">
                                Cari Lowongan
                            </button>
                            <a href="www.tako.co.id">
                                <button className="px-8 py-3 bg-BlueTako bg-opacity-5 text-BlueTako rounded-xl btn normal-case border-none hover:bg-BlueTako hover:bg-opacity-10">
                                    Kunjungi Laman
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* <div className="w-1/3 flex flex-col gap-4">
                <img
                    src="/images/1.jpg"
                    alt=""
                    className="h-1/2 object-cover rounded-2xl"
                />

                <img
                    src="/images/1.jpg"
                    alt=""
                    className="h-1/2 object-cover rounded-2xl"
                />
            </div> */}
                </div>
            </div>
        </section>
    );
};

export default PerusahaanInfo;
