import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "@inertiajs/react";

const ImageSlider = () => {
    const [bladeView, setBladeView] = useState(null);

    useEffect(() => {
        // Lakukan permintaan ke server untuk mendapatkan tampilan Blade
        fetch("/search") // Ganti dengan rute yang sesuai
            .then((response) => response.text())
            .then((data) => setBladeView(data));
    }, []);

    const images = [
        { url: "/images/image-4.png", caption: "Caption 1" },
        { url: "/images/image-4.png", caption: "Caption 2" },
        { url: "/images/image-4.png", caption: "Caption 3" },
    ];

    const [isSliderActive, setIsSliderActive] = useState(true);

    return (
        <>
            <div className="relative flex items-center font-inter">
                {/* <Link href="/job"> */}
                <div className="absolute z-10 container px-4 md:pl-8 lg:pl-32 max-w-full md:w-[70%] lg:w-[60%]">
                    <p className="text-white pb-2 md:pb-4 lg:text-2xl">
                        Selamat Datang di Karir Tako
                    </p>
                    <h1 className="text-white text-4xl lg:text-6xl font-bold pb-2 md:pb-4">
                        Temukan Karier Impianmu dengan Lebih Mudah
                    </h1>
                    <p className="text-white">
                        Temukan Posisi yang Sesuai dengan Profesionalismu, Baik
                        Lowongan Pekerjaan atau Ragam Proyek Lainnya
                    </p>

                    <div dangerouslySetInnerHTML={{ __html: bladeView }} />
                    {/* <div className="flex flex-wrap gap-4">
                            <div className="flex justify-between w-full items-end">
                                <h1 className="font-semibold text-white text-xl">
                                    (123) Pekerjaan Tersedia
                                </h1>
                                <a href="/loker">
                                    <p className="underline text-white">
                                        Lihat Semua
                                    </p>
                                </a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-2"
                                    >
                                        <path
                                            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                            stroke="#FFFFFF"
                                            stroke-opacity="0.5"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M22 22L20 20"
                                            stroke="#FFFFFF"
                                            stroke-opacity="0.5"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Cari Lowongan yang anda inginkan"
                                    className="rounded-xl border-white focus:border-solid border-2 border-opacity-50 w-full lg:w-72 h-12 block pl-12 bg-transparent text-white focus:border-opacity-100  focus:outline-none focus:border-2"
                                />
                            </div>
                            <div className="dropdown dropdown-bottom bg-transparent rounded-xl w-full lg:w-0">
                                <label
                                    tabindex="0"
                                    className="btn bg-transparent outline-white hover:bg-transparent hover:border-white border-white border-opacity-50 normal-case font-normal text-opacity-60 text-white hover:border-opacity-50 border-2 focus:border-opacity-80 focus:border-BlueTako focus:border-4 w-full lg:w-56 text-center rounded-xl flex justify-between "
                                >
                                    <span>Program</span>
                                    <span>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
                                                stroke="#FFFFFF"
                                                stroke-opacity="0.5"
                                                stroke-width="1.5"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </label>
                                <ul
                                    tabindex="0"
                                    className="dropdown-content z-[1] menu p-2 shadow rounded-box w-full md:w-52 bg-white"
                                >
                                    <li>
                                        <a>Semua Program</a>
                                    </li>
                                    <li>
                                        <a>Internship</a>
                                    </li>
                                    <li>
                                        <a>Profesional</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-0 lg:translate-x-[224px] border-white ">
                                <span className="btn bg-BlueTako outline-white hover:bg-transparent hover:border-white border-white border-opacity-50 normal-case font-normal text-white hover:border-opacity-50 border-2 focus:border-opacity-80 hover:bg-BlueTako hover:bg-opacity-90  border-none w-full lg:w-24 ">
                                    Cari
                                </span>
                            </div>
                        </div> */}
                </div>

                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    showArrows={false}
                    onClickItem={() => setIsSliderActive(false)} // Set isSliderActive to false when clicking an item
                    onClickThumb={() => setIsSliderActive(false)} // Set isSliderActive to false when clicking a thumb
                >
                    {images.map((image, index) => (
                        <div key={index} className="bg-left bg-cover">
                            <img
                                src={image.url}
                                alt={`Image ${index}`}
                                className="md:mx-auto h-[640px] lg:h-screen object-cover bg-cover md:bg-center"
                            />
                        </div>
                    ))}
                </Carousel>
                {/* </Link> */}
            </div>
        </>
    );
};

export default ImageSlider;
