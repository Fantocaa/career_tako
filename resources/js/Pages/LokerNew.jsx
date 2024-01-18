import React, { useState, useEffect, useRef } from "react";
import Layout from "@/Layouts/Layout";
import Footer from "@/Components/Shared/Footer";
// import NavElse from "@/Components/Shared/Else/NavElse";
import Nav from "@/Components/Shared/Homepage/Nav";
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
                // const response = await axios.get("/json_perusahaan");
                const response = await axios.get("/api/json_perusahaan");
                setFormData(response.data);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        };

        const fetchDataTime = async () => {
            try {
                const response = await fetch("/api/time_expired"); // Ganti dengan rute yang sesuai
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
                <section className="bg-BgTako font-inter text-DarkTako">
                    <Nav />
                    <HeaderPro />
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
