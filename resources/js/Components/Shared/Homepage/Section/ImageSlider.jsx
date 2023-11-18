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
        { url: "/images/image-4.png", caption: "Caption 1" },
        { url: "/images/image-9.png", caption: "Caption 2" },
        { url: "/images/image-10.png", caption: "Caption 3" },
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
            <div className=" relative flex items-center font-inter h-full">
                {/* <Link href="/job"> */}
                <Search />
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    showArrows={false}
                    stopOnHover={false}
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
