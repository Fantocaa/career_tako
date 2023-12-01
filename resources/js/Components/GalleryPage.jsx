import React, { useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const GalleryPage = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 lg:pt-48 pb-16">
            <div className="pb-8 flex flex-col items-center">
                <h1
                    className="text-4xl font-bold text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Gallery
                </h1>
                <p
                    className="text-center py-4 lg:w-[720px]"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Kami memiliki tempat kerja yang menyenangkan dan penuh
                    semangat. Kami bangga dengan budaya kerja kami yang positif
                    dan produktif. Lihatlah galeri kami untuk mengetahui lebih
                    lanjut!
                </p>
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
                                src="/images/1.jpg"
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
                                src="/images/1.jpg"
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
                                src="/images/2.jpg"
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
                                src="/images/2.jpg"
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
                                src="/images/3.jpg"
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
                                src="/images/3.jpg"
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
                                src="/images/4.jpg"
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
                                src="/images/4.jpg"
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
                                src="/images/5.jpg"
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
                                src="/images/5.jpg"
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
                                src="/images/6.jpg"
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
                                src="/images/6.jpg"
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
