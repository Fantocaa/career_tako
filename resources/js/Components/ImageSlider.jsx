import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "@inertiajs/react";

const ImageSlider = () => {
    const images = [
        { url: "/images/image-1.jpg", caption: "Caption 1" },
        { url: "/images/image-2.jpg", caption: "Caption 2" },
        { url: "/images/image-3.jpg", caption: "Caption 3" },
    ];

    const [isSliderActive, setIsSliderActive] = useState(true);

    return (
        <div className="relative">
            <Link href="/job">
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
                                className="mx-auto h-[480px] object-cover bg-cover bg-center"
                            />
                        </div>
                    ))}
                </Carousel>
            </Link>
        </div>
    );
};

export default ImageSlider;
