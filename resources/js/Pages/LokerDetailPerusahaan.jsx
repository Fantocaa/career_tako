import React, { useState, useEffect, useRef } from "react";
import Layout from "@/Layouts/Layout";
import Footer from "@/Components/Shared/Footer";
import NavElse from "@/Components/Shared/Else/NavElse";
import PerusahaanInfo from "@/Components/Loker/PerusahaanInfo";
import axios from "axios";
import { usePage } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "@inertiajs/react";
import "../Components/css/style.css";
import { useMediaQuery } from "react-responsive";

const LokerDetailPerusahaan = () => {
    const { state } = usePage();
    const [formData, setFormData] = useState([]);
    const [formDataLoker, setFormDataLoker] = useState([]); //pake ini

    useEffect(() => {
        // Panggil fungsi API di sini saat komponen pertama kali di-mount
        const fetchData = async () => {
            try {
                // Kirim data ke server
                const response = await axios.get("/json_perusahaan");
                setFormData(response.data);
                // const perusahaanChunks = chunkArray(response.data, 5);
                // setFormData(perusahaanChunks);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        };

        const fetchDataLoker = async () => {
            try {
                // Kirim data ke server
                const response_2 = await axios.get("/form");
                setFormDataLoker(response_2.data);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        };
        // console.log(state);
        fetchData(); // Panggil fungsi fetchData saat komponen di-mount
        fetchDataLoker(); // Panggil fungsi fetchDataLoker saat komponen di-mount
    }, [state]);

    const settingsMobile = {
        dots: true,
        infinite: true, // Set to false to limit the number of slides
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        // afterChange: (current) => setSliderIndex(current),
    };

    const settingsMedium = {
        dots: true,
        infinite: true, // Set to false to limit the number of slides
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: false,
        // afterChange: (current) => setSliderIndex(current),
    };

    const settings = {
        dots: true,
        infinite: true, // Set to false to limit the number of slides
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        // afterChange: (current) => setSliderIndex(current),
    };

    const settings1280 = {
        dots: true,
        infinite: true, // Set to false to limit the number of slides
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // afterChange: (current) => setSliderIndex(current),
    };

    const settings1920 = {
        dots: true,
        infinite: true, // Set to false to limit the number of slides
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
    };

    const isMobile = useMediaQuery({ maxWidth: 767.9 });
    const isMedium = useMediaQuery({ maxWidth: 1023.9 });
    const isLarge = useMediaQuery({ maxWidth: 1279.9 });
    const isXL = useMediaQuery({ maxWidth: 1919.9 });
    const isDekstop = useMediaQuery({ minWidth: 1920 });

    let sliderActive;

    if (isMobile) {
        sliderActive = settingsMobile;
    } else if (isMedium) {
        sliderActive = settingsMedium;
    } else if (isLarge) {
        sliderActive = settings;
    } else if (isXL) {
        // Default settings if none of the above conditions are met
        sliderActive = settings1280;
    } else if (isDekstop) {
        // Default settings if none of the above conditions are met
        sliderActive = settings1920;
    }

    return (
        <Layout pageTitle="Lowongan Pekerjaan | Tako Karir">
            <section className="bg-BgTako font-inter text-DarkTako md:pt-16">
                <NavElse />
                <div className="flex mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 pt-24 lg:pt-16 pb-16 md:py-8 flex-wrap items-center text-white bg-BlueTako w-full md:pb-20">
                    <div className="text-center container mx-auto">
                        <div className="w-full">
                            <h1 className="font-semibold text-2xl lg:text-4xl">
                                Temukan Lowongan Berdasarkan Perusahaan
                            </h1>
                            <p className="pt-4">
                                Lebih mudah daripada mencari satu per satu,
                                Jelajahi Peluang Karir yang Tepat untukmu,
                                Temukan Lowongan Kerja yang Sesuai dengan
                                Perusahaan Impianmu!
                            </p>
                        </div>
                        <div className="w-full pt-8">
                            <Slider {...sliderActive} className="slick-slider">
                                {formData.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/loker/perusahaan/${item.id}`}
                                    >
                                        <div
                                            className="bg-white p-6 rounded-xl text-DarkTako cursor-pointer h-full flex flex-col"
                                            key={item.id}
                                        >
                                            <img
                                                src={`/storage/images/${item.image}`}
                                                alt="logo perusahaan"
                                                className="mx-auto w-32 h-32 object-contain"
                                            />
                                            <div className="flex flex-col h-24 justify-between">
                                                <h3 className="font-semibold pt-4">
                                                    {item.perusahaan}
                                                </h3>
                                                <p className="text-DarkTako text-opacity-75 bottom-0">
                                                    {item.jumlah_data_sama}{" "}
                                                    Lowongan Tersedia
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <PerusahaanInfo />
                <Footer />
            </section>
        </Layout>
    );
};

export default LokerDetailPerusahaan;
