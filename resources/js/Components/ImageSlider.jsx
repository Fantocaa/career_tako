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

    const [tooltipText, setTooltipText] = useState(""); // State untuk teks tooltip
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const handleMouseEnter = (text) => {
        setTooltipText(text); // Mengatur teks tooltip sesuai dengan opsi program
        setTooltipVisible(true); // Menampilkan tooltip saat kursor masuk
    };

    const handleMouseLeave = () => {
        setTooltipVisible(false); // Menyembunyikan tooltip saat kursor meninggalkan
    };

    return (
        <>
            <div className=" relative flex items-center font-inter ">
                {/* <Link href="/job"> */}
                <div className="absolute z-10 container md:pl-8 lg:pl-16 max-w-full md:w-[70%] lg:w-1/2">
                    <div className="px-[10px] md:px-0">
                        <p className="text-white pb-2 md:pb-4 lg:text-2xl">
                            Selamat Datang di Karir Tako
                        </p>
                        <h1 className="text-white text-2xl lg:text-6xl font-bold pb-2 md:pb-4">
                            Temukan Karier Impianmu dengan Lebih Mudah
                        </h1>
                        <p className="text-white">
                            Temukan Posisi yang Sesuai dengan Profesionalismu,
                            Baik Lowongan Pekerjaan atau Ragam Proyek Lainnya
                        </p>

                        <div className="w-full">
                            <div className="flex w-full py-8 font-inter justify-between text-white ">
                                <h1 className="font-semibold text-white text-xl">
                                    (132) Pekerjaan Tersedia
                                </h1>
                                <a href="/loker">
                                    <span className="cursor-pointer underline text-white">
                                        Lihat Semua -{">"}
                                    </span>
                                </a>
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="flex flex-wrap gap-4 w-full justify-between ">
                                    <div className="flex gap-4">
                                        <div className="relative w-full lg:w-72">
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
                                                className="rounded-2xl border-white border-2 border-opacity-25 w-full h-12 block pl-12 bg-transparent text-white placeholder-white placeholder:opacity-30"
                                            />
                                        </div>
                                        <select
                                            name=""
                                            id=""
                                            className="rounded-2xl border-white border-2 text-white text-opacity-30 border-opacity-25 bg-transparent "
                                        >
                                            <option
                                                value=""
                                                className="text-DarkTako"
                                            >
                                                Semua Program
                                            </option>
                                            <option
                                                value="Internship"
                                                className="text-DarkTako"
                                            >
                                                Internship
                                            </option>
                                            <option
                                                value="Profesional"
                                                className="text-DarkTako"
                                            >
                                                Profesional
                                            </option>
                                        </select>

                                        {/* <div className="relative">
                                            <select
                                                name=""
                                                id=""
                                                className="rounded-2xl border-white border-2 text-white text-opacity-30 border-opacity-25 bg-transparent "
                                            >
                                                <option
                                                    value=""
                                                    className="text-DarkTako"
                                                >
                                                    Semua Program
                                                </option>
                                                <option
                                                    value="Internship"
                                                    className="text-DarkTako"
                                                    onMouseEnter={() =>
                                                        handleMouseEnter(
                                                            "Ini adalah program internship"
                                                        )
                                                    }
                                                    onMouseLeave={
                                                        handleMouseLeave
                                                    }
                                                >
                                                    Internship
                                                </option>
                                                <option
                                                    value="Profesional"
                                                    className="text-DarkTako"
                                                    onMouseEnter={() =>
                                                        handleMouseEnter(
                                                            "Ini adalah program profesional"
                                                        )
                                                    }
                                                    onMouseLeave={
                                                        handleMouseLeave
                                                    }
                                                >
                                                    Profesional
                                                </option>
                                            </select>

                                            {isTooltipVisible && (
                                                <div className="absolute bg-black text-white text-sm p-2 rounded-md -top-8 -left-1/2 transform -translate-x-1/2">
                                                    {tooltipText}
                                                </div>
                                            )}
                                        </div> */}

                                        <div className="">
                                            <button className="btn bg-BlueTako hover:bg-BlueTako hover:bg-opacity-90 text-white border-none w-full lg:w-24 normal-case">
                                                Cari
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div dangerouslySetInnerHTML={{ __html: bladeView }} /> */}
                    </div>
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
