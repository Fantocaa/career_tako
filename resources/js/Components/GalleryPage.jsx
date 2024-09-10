import React, { useState } from "react";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../css/app.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryPage = () => {
    const { t } = useTranslation(); // Tambahkan ini
    const [open, setOpen] = useState(false); // State untuk Lightbox
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fungsi untuk membuka lightbox di gambar yang dipilih
    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    const images = [
        {
            id: 1,
            src: "/images/photo/DSC08028 (1)_1_11zon.webp",
        },
        {
            id: 2,
            src: "/images/photo/DSC08059 (1)_4_11zon.webp",
        },
        {
            id: 3,
            src: "/images/photo/DSC08042 (1)_3_11zon.webp",
        },
        {
            id: 4,
            src: "/images/photo/DSC08110 (1)_1_11zon.webp",
        },
        {
            id: 5,
            src: "/images/photo/DSC08141 (1)_5_11zon.webp",
        },
        {
            id: 6,
            src: "/images/photo/DSC08116 (1)_2_11zon.webp",
        },
    ];

    return (
        <div className="container max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 md:pt-16 pb-16">
            <div className="pb-8 flex flex-col items-center">
                <h1
                    className="text-4xl font-bold text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Gallery
                </h1>
                <p
                    className="text-center py-4 lg:w-[720px] 2xl:w-[1024px] 2xl:pb-8 2xl:pt-6 translate"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    {t("gal.title")}
                </p>
                <h1
                    className="pt-2 md:pt-0 font-bold text-2xl text-center translate"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    {t("gal.body")}
                </h1>
            </div>

            <>
                {/* Tampilkan gambar dengan LazyLoadImage */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            onClick={() => handleImageClick(index)}
                        >
                            <LazyLoadImage
                                src={image.src}
                                className="object-cover w-full cursor-pointer rounded-2xl"
                                effect="blur"
                                alt={`image-${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)} // Tutup Lightbox
                    index={currentIndex} // Tampilkan gambar yang sesuai dengan index
                    slides={images.map((image) => ({
                        src: image.src, // Gunakan src dari array images
                        alt: `image-${image.id}`,
                    }))}
                />
            </>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                <div
                    className=" overflow-hidden rounded-xl h-full"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >
                    <button
                        className="w-full rounded-xl h-full"
                        onClick={() =>
                            document.getElementById("my_modal_5").showModal()
                        }
                    >
                        <div className="col-span-2 overflow-hidden rounded-xl h-full">
                            <LazyLoadImage
                                src="/images/photo/DSC08028 (1)_1_11zon.webp"
                                className="w-full rounded-xl object-cover h-full"
                                effect="blur"
                                alt="image-1"
                            />
                        </div>
                    </button>
                    <dialog id="my_modal_5" className="modal px-4 lg:px-16">
                        <div className="w-full 2xl:w-1/2  relative">
                            <form method="dialog" className="w-full">
                                <button
                                    className="btn border-0 btn-circle absolute -right-5 lg:-right-8 -top-5 bg-RedTako outline-none hover:bg-white z-10"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke={hover ? "#C12127" : "#FFFFFF"}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </form>
                            <LazyLoadImage
                                src="/images/photo/DSC08028 (1)_1_11zon.webp"
                                className="object-cover w-full"
                                effect="blur"
                                alt="image-1"
                            />
                        </div>
                    </dialog>
                </div>
                <div
                    className=" overflow-hidden rounded-xl h-full"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >
                    <button
                        className="w-full rounded-xl h-full"
                        onClick={() =>
                            document.getElementById("my_modal_6").showModal()
                        }
                    >
                        <div className="col-span-2 overflow-hidden rounded-xl h-full">
                            <LazyLoadImage
                                src="/images/photo/DSC08059 (1)_4_11zon.webp"
                                className="w-full rounded-xl object-cover h-full"
                                alt="Galery"
                                effect="blur"
                            />
                        </div>
                    </button>
                    <dialog id="my_modal_6" className="modal px-4 lg:px-16">
                        <div className="w-full 2xl:w-1/2  relative">
                            <form method="dialog" className="w-full">
                                <button
                                    className="btn border-0 btn-circle absolute -right-5 lg:-right-8 -top-5 bg-RedTako outline-none hover:bg-white z-10"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke={hover ? "#C12127" : "#FFFFFF"}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </form>
                            <LazyLoadImage
                                src="/images/photo/DSC08059 (1)_4_11zon.webp"
                                className="object-cover w-full h-96"
                                alt="Galery"
                                effect="blur"
                            />
                        </div>
                    </dialog>
                </div>
                <div
                    className=" overflow-hidden rounded-xl h-full"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >
                    <button
                        className="w-full rounded-xl h-full"
                        onClick={() =>
                            document.getElementById("my_modal_7").showModal()
                        }
                    >
                        <div className="col-span-2 overflow-hidden rounded-xl h-full">
                            <LazyLoadImage
                                src="/images/photo/DSC08042 (1)_3_11zon.webp"
                                className="w-full rounded-xl object-cover h-full"
                                alt="Galery"
                                effect="blur"
                            />
                        </div>
                    </button>
                    <dialog id="my_modal_7" className="modal px-4 lg:px-16">
                        <div className="w-full 2xl:w-1/2  relative">
                            <form method="dialog" className="w-full">
                                <button
                                    className="btn border-0 btn-circle absolute -right-5 lg:-right-8 -top-5 bg-RedTako outline-none hover:bg-white z-10"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke={hover ? "#C12127" : "#FFFFFF"}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </form>
                            <LazyLoadImage
                                src="/images/photo/DSC08042 (1)_3_11zon.webp"
                                className="object-cover w-full"
                                alt="Galery"
                                effect="blur"
                            />
                        </div>
                    </dialog>
                </div>
                <div
                    className=" overflow-hidden rounded-xl h-full"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >
                    <button
                        className="w-full rounded-xl h-full"
                        onClick={() =>
                            document.getElementById("my_modal_8").showModal()
                        }
                    >
                        <div className="overflow-hidden rounded-xl h-full">
                            <LazyLoadImage
                                src="/images/photo/DSC08110 (1)_1_11zon.webp"
                                className="w-full rounded-xl object-cover h-full"
                                alt="Galery"
                                effect="blur"
                            />
                        </div>
                    </button>
                    <dialog id="my_modal_8" className="modal px-4 lg:px-16">
                        <div className="w-full 2xl:w-1/2  relative">
                            <form method="dialog" className="w-full">
                                <button
                                    className="btn border-0 btn-circle absolute -right-5 lg:-right-8 -top-5 bg-RedTako outline-none hover:bg-white z-10"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke={hover ? "#C12127" : "#FFFFFF"}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </form>
                            <LazyLoadImage
                                src="/images/photo/DSC08110 (1)_1_11zon.webp"
                                className="object-cover w-full"
                                alt="Galery"
                                effect="blur"
                            />
                        </div>
                    </dialog>
                </div>
                <div
                    className=" overflow-hidden rounded-xl h-full"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >
                    <button
                        className="w-full rounded-xl h-full"
                        onClick={() =>
                            document.getElementById("my_modal_9").showModal()
                        }
                    >
                        <div className="overflow-hidden rounded-xl h-full">
                            <LazyLoadImage
                                src="/images/photo/DSC08141 (1)_5_11zon.webp"
                                className="w-full rounded-xl object-cover h-full"
                                alt="Galery"
                                effect="blur"
                            />
                        </div>
                    </button>
                    <dialog id="my_modal_9" className="modal px-4 lg:px-16">
                        <div className="w-full 2xl:w-1/2  relative">
                            <form method="dialog" className="w-full">
                                <button
                                    className="btn border-0 btn-circle absolute -right-5 lg:-right-8 -top-5 bg-RedTako outline-none hover:bg-white z-10"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke={hover ? "#C12127" : "#FFFFFF"}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </form>
                            <LazyLoadImage
                                src="/images/photo/DSC08141 (1)_5_11zon.webp"
                                className="object-cover w-full"
                                alt="Galery"
                                effect="blur"
                            />
                        </div>
                    </dialog>
                </div>
                <div
                    className=" overflow-hidden rounded-xl h-full"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >
                    <button
                        className="w-full rounded-xl h-full"
                        onClick={() =>
                            document.getElementById("my_modal_10").showModal()
                        }
                    >
                        <div className="overflow-hidden rounded-xl h-full">
                            <LazyLoadImage
                                src="/images/photo/DSC08116 (1)_2_11zon.webp"
                                className="w-full rounded-xl object-cover h-full"
                                alt="Galery"
                                effect="blur"
                            />
                        </div>
                    </button>
                    <dialog
                        id="my_modal_10"
                        className="modal px-4 lg:px-16 xl:p-24"
                    >
                        <div className="w-full 2xl:w-1/2 relative">
                            <form method="dialog" className="w-full">
                                <button
                                    className="btn border-0 btn-circle absolute -right-5 lg:-right-8 -top-5 bg-RedTako outline-none hover:bg-white z-10"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke={hover ? "#C12127" : "#FFFFFF"}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </form>
                            <LazyLoadImage
                                src="/images/photo/DSC08116 (1)_2_11zon.webp"
                                className="object-cover w-full"
                                alt="Galery"
                                effect="blur"
                            />
                        </div>
                    </dialog>
                </div>
            </div> */}
        </div>
    );
};

export default GalleryPage;
