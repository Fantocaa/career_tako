import React, { useState, useEffect, useRef } from "react";
import Layout from "@/Layouts/Layout";
import Footer from "@/Components/Shared/Footer";
import NavElse from "@/Components/Shared/Else/NavElse";
import SectionLoker from "@/Components/Loker/SectionLoker";
import axios from "axios";
import { usePage } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "@inertiajs/react";
import "../Components/css/style.css";
import { useMediaQuery } from "react-responsive";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NoLoker from "@/Components/NoLoker";
import HeaderPro from "@/Components/HeaderPro";
import BackToTop from "@/Components/BackToTop";

const LokerNew = () => {
    const { state } = usePage();
    const [formData, setFormData] = useState([]);
    const [data, setData] = useState([]); // State untuk data perusahaan
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        // Panggil fungsi API di sini saat komponen pertama kali di-mount
        const fetchData = async () => {
            try {
                // Kirim data ke server
                const response = await axios.get("/json_perusahaan");
                setFormData(response.data);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        };

        const fetchDataTime = async () => {
            try {
                const response = await fetch("/time_expired"); // Ganti dengan rute yang sesuai
                const result = await response.json();
                setData(result);
                // setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                // setLoading(false);
            } finally {
                setIsPageLoaded(true);
            }
        };

        fetchData(); // Panggil fungsi fetchData saat komponen di-mount
        fetchDataTime(); // Panggil fungsi fetchData saat komponen di-mount
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
        <Layout pageTitle="Lowongan Pekerjaan | Tako Karier">
            <SkeletonTheme baseColor="#202020" highlightColor="#444444">
                <section className="bg-BgTako font-inter text-DarkTako md:pt-16">
                    <NavElse />
                    <HeaderPro />
                    {/* <div className="bg-DarkTako text-white font-inter w-full py-32 relative">
                        <div className="container mx-auto px-4 md:px-8 xl:px-16 2xl:px-32">
                            <h1 className="font-bold text-2xl lg:text-4xl pt-8">
                                Temukan Peluang Karier yang Tepat
                            </h1>
                            <p className="text-xs md:text-base 2xl:text-lg pt-2 lg:pt-4 2xl:pt-6">
                                Kami memahami bahwa setiap orang memiliki
                                potensi dan minat yang berbeda-beda. Oleh karena
                                itu, kami menyediakan berbagai peluang karier
                                yang dapat Anda pilih sesuai dengan minat dan
                                kemampuan Anda. Kami memiliki berbagai posisi
                                yang tersedia, mulai dari posisi intern,
                                entry-level hingga posisi senior.
                            </p>
                            <img
                                src="/images/bg.jpg"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{
                                    opacity: "0.15", // Sesuaikan tingkat opacity sesuai keinginan Anda
                                }}
                            />
                        </div>
                    </div> */}
                    {/* <div className="flex mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 pt-24 lg:pt-16 pb-16 md:py-8 flex-wrap items-center text-white bg-BlueTako w-full md:pb-20">
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
                                <Slider
                                    {...sliderActive}
                                    className="slick-slider"
                                >
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
                    </div> */}
                    <NoLoker />
                    <SectionLoker />
                    <BackToTop />
                    <Footer />
                </section>
            </SkeletonTheme>
        </Layout>
    );
};

export default LokerNew;
