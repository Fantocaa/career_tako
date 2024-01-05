import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "@inertiajs/react";
import Search from "./Search";

const ImageSlider = () => {
    // const [bladeView, setBladeView] = useState(null);

    // useEffect(() => {
    //     // Lakukan permintaan ke server untuk mendapatkan tampilan Blade
    //     fetch("/search") // Ganti dengan rute yang sesuai
    //         .then((response) => response.text())
    //         .then((data) => setBladeView(data));
    // }, []);

    const images = [
        { url: "/images/banner-1.webp", caption: "Caption 1" },
        { url: "/images/banner-2.webp", caption: "Caption 2" },
        { url: "/images/banner-3.webp", caption: "Caption 3" },
    ];

    // const [isSliderActive, setIsSliderActive] = useState(true);

    // const [tooltipText, setTooltipText] = useState(""); // State untuk teks tooltip
    // const [isTooltipVisible, setTooltipVisible] = useState(false);

    // const handleMouseEnter = (text) => {
    //     setTooltipText(text); // Mengatur teks tooltip sesuai dengan opsi program
    //     setTooltipVisible(true); // Menampilkan tooltip saat kursor masuk
    // };

    // const handleMouseLeave = () => {
    //     setTooltipVisible(false); // Menyembunyikan tooltip saat kursor meninggalkan
    // };

    return (
        <>
            <div className="container mx-auto relative flex items-center justify-start font-inter h-screen w-full px-4 md:px-8 xl:px-16 2xl:px-32">
                {/* <Search /> */}
                <div className="absolute z-10 md:w-[70%] lg:w-1/2">
                    <div className="px-4 md:px-0 text-center md:text-left ">
                        <p
                            className="text-white pb-2 md:pb-4 text-xl lg:text-2xl pt-8 md:pt-0"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Selamat Datang di Karir Tako
                        </p>
                        <h1
                            className="text-white text-4xl lg:text-6xl font-bold pb-2 md:pb-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Temukan Karier Impianmu dengan Lebih Mudah
                        </h1>
                        <p
                            className="text-white text-xl"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            Temukan Posisi yang Sesuai dengan Profesionalismu,
                            Baik Lowongan Pekerjaan atau Ragam Proyek Lainnya
                        </p>
                        <div className="w-full pt-8">
                            <Link href="/loker" className="inline-block">
                                <button
                                    className="bg-BlueTako hover:bg-white hover:text-BlueTako fill-white hover:fill-BlueTako py-3 px-4 rounded-xl text-white flex gap-4 items-center transition-all duration-300 ease-in-out shadow-sm"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <h1 className="text-lg font-semibold">
                                        Daftar Lowongan Kerja
                                    </h1>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.53 12.53L14.24 16.82C14.09 16.97 13.9 17.04 13.71 17.04C13.52 17.04 13.33 16.97 13.18 16.82C12.89 16.53 12.89 16.05 13.18 15.76L16.19 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H16.19L13.18 8.24C12.89 7.95 12.89 7.47 13.18 7.18C13.47 6.89 13.95 6.89 14.24 7.18L18.53 11.47C18.67 11.61 18.75 11.8 18.75 12C18.75 12.2 18.67 12.39 18.53 12.53Z" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
                stopOnHover={false}
                // centerMode={true}
                // emulateTouch={false}
                swipeable={false}
                // onClickItem={() => setIsSliderActive(false)} // Set isSliderActive to false when clicking an item
                // onClickThumb={() => setIsSliderActive(false)} // Set isSliderActive to false when clicking a thumb
                className="absolute w-full h-full top-0 left-0"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="bg-left bg-cover pointer-events-none h-[800px] lg:h-screen"
                    >
                        <img
                            src={image.url}
                            alt={`Image ${index}`}
                            className="md:mx-auto h-[800px] lg:h-screen object-cover bg-cover md:bg-center"
                        />
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default ImageSlider;
