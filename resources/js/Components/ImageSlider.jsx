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

                        <div dangerouslySetInnerHTML={{ __html: bladeView }} />
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
