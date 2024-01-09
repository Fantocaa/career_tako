import React, { useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const GalleryPage = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 md:pt-16 lg:pt-64 pb-16">
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
                            <img
                                src="/images/photo/DSC08028.webp"
                                className="w-full rounded-xl object-cover h-full hover:scale-105 transition-all duration-500"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                    </button>
                    <dialog id="my_modal_5" className="modal">
                        <div className="w-1/2">
                            <form method="dialog" className="w-full">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-64 top-28 bg-white text-DarkTako hover:bg-RedTako hover:text-white border-0 border-none">
                                    ✕
                                </button>
                            </form>
                            <img
                                src="/images/photo/DSC08028.webp"
                                className="object-cover w-full"
                                alt="Tailwind CSS Carousel component"
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
                            <img
                                src="/images/photo/DSC08059.webp"
                                className="w-full rounded-xl object-cover h-full hover:scale-105 transition-all duration-500"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                    </button>
                    <dialog id="my_modal_6" className="modal">
                        <div className="w-1/2">
                            <form method="dialog" className="w-full">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-64 top-28 bg-white text-DarkTako hover:bg-RedTako hover:text-white border-0 border-none">
                                    ✕
                                </button>
                            </form>
                            <img
                                src="/images/photo/DSC08059.webp"
                                className="object-cover w-full"
                                alt="Tailwind CSS Carousel component"
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
                            <img
                                src="/images/photo/DSC08042.webp"
                                className="w-full rounded-xl object-cover h-full hover:scale-105 transition-all duration-500"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                    </button>
                    <dialog id="my_modal_7" className="modal">
                        <div className="w-1/2">
                            <form method="dialog" className="w-full">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-64 top-28 bg-white text-DarkTako hover:bg-RedTako hover:text-white border-0 border-none">
                                    ✕
                                </button>
                            </form>
                            <img
                                src="/images/photo/DSC08042.webp"
                                className="object-cover w-full"
                                alt="Tailwind CSS Carousel component"
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
                            <img
                                src="/images/photo/DSC08110.webp"
                                className="w-full rounded-xl object-cover h-full hover:scale-105 transition-all duration-500"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                    </button>
                    <dialog id="my_modal_8" className="modal">
                        <div className="w-1/2">
                            <form method="dialog" className="w-full">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-64 top-28 bg-white text-DarkTako hover:bg-RedTako hover:text-white border-0 border-none">
                                    ✕
                                </button>
                            </form>
                            <img
                                src="/images/photo/DSC08110.webp"
                                className="object-cover w-full"
                                alt="Tailwind CSS Carousel component"
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
                            <img
                                src="/images/photo/DSC08141.webp"
                                className="w-full rounded-xl object-cover h-full hover:scale-105 transition-all duration-500"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                    </button>
                    <dialog id="my_modal_9" className="modal">
                        <div className="w-1/2">
                            <form method="dialog" className="w-full">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-64 top-28 bg-white text-DarkTako hover:bg-RedTako hover:text-white border-0 border-none">
                                    ✕
                                </button>
                            </form>
                            <img
                                src="/images/photo/DSC08141.webp"
                                className="object-cover w-full"
                                alt="Tailwind CSS Carousel component"
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
                            <img
                                src="/images/photo/DSC08116.webp"
                                className="w-full rounded-xl object-cover h-full hover:scale-105 transition-all duration-500"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                    </button>
                    <dialog id="my_modal_10" className="modal">
                        <div className="w-1/2">
                            <form method="dialog" className="w-full">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-64 top-28 bg-white text-DarkTako hover:bg-RedTako hover:text-white border-0 border-none">
                                    ✕
                                </button>
                            </form>
                            <img
                                src="/images/photo/DSC08116.webp"
                                className="object-cover w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
