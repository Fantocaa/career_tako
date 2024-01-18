import React, { useState } from "react";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../css/app.css";

const GalleryPage = () => {
    const [hover, setHover] = useState(false);

    return (
        // <div className="container mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 md:pt-16 lg:pt-64 pb-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 md:pt-16 pb-16">
            <div className="pb-8 flex flex-col items-center">
                <h1
                    className="text-4xl font-bold text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Gallery
                </h1>
                <p
                    className="text-center py-4 lg:w-[720px] 2xl:w-[1024px] 2xl:pb-8 2xl:pt-6"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    {/* Kami memiliki tempat kerja yang menyenangkan dan penuh
                    semangat. Kami bangga dengan budaya kerja kami yang positif
                    dan produktif. Lihatlah galeri kami untuk mengetahui lebih
                    lanjut! */}
                    PT. Tako Anugerah Koporasi adalah perusahaan yang
                    berkomitmen untuk menciptakan lingkungan dengan kerjasama
                    tim yang kuat, solutif, inovatif, dan saling percaya. Budaya
                    kerja tersebut tercermin dalam setiap aspek kehidupan
                    perusahaan, mulai dari cara kami bekerja hingga cara kami
                    berinteraksi satu sama lain.
                </p>
                <h1
                    className="pt-2 md:pt-0 font-bold text-2xl text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Cek galeri untuk melihat keseruannya!
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
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
            </div>
        </div>
    );
};

export default GalleryPage;
