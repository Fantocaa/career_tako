import React from "react";

const Why = () => {
    return (
        <div className="pt-16 md:pt-32 container mx-auto px-4">
            <div className="bg-BlueTako py-16 md:py-32 flex text-white flex-wrap relative rounded-2xl">
                <img
                    src="/images/bg.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{
                        opacity: "0.1", // Sesuaikan tingkat opacity sesuai keinginan Anda
                    }}
                />
                {/* <div
                    className="absolute inset-0 w-full h-full object-fill rounded-2xl"
                    style={{
                        backgroundImage: 'url("/images/bg.jpg")',
                        opacity: "0.1", // Sesuaikan tingkat opacity sesuai keinginan Anda
                    }}
                /> */}

                <div className="absolute inset-0 bg-blue-900 opacity-20" />

                <div className="w-full px-4 text-center relative z-10">
                    <h1 className="font-bold text-3xl">
                        Mengapa harus memilih Tako?
                    </h1>
                    <p className="py-8">
                        Kami di Tako Group sangat mendukung pengembangan talenta
                        muda, namun kami juga membuka peluang bagi individu yang
                        memiliki jiwa kepemimpinan dan pengalaman. Bergabunglah
                        dengan kami untuk memulai perjalanan karier yang penuh
                        potensi!
                    </p>
                    <span className="underline">Lihat Selengkapnya</span>
                </div>
                <div className="w-full flex mx-auto justify-center px-4 pt-8">
                    <div className="carousel rounded-box">
                        <div className="carousel-item w-full">
                            <img
                                src="/images/image-1.jpg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                        <div className="carousel-item w-full">
                            <img
                                src="/images/image-2.jpg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                        <div className="carousel-item w-full">
                            <img
                                src="/images/image-3.jpg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                        <div className="carousel-item w-full">
                            <img
                                src="/images/image-4.jpg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                        <div className="carousel-item w-full">
                            <img
                                src="/images/image-5.jpg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                        <div className="carousel-item w-full">
                            <img
                                src="/images/image-6.jpg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;
