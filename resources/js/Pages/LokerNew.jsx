import React, { useState, useEffect } from "react";
import Layout from "@/Layouts/Layout";
import Footer from "@/Components/Shared/Footer";
import NavElse from "@/Components/Shared/Else/NavElse";
import PerusahaanCard from "@/Components/Loker/PerusahaanCard";
import SectionLoker from "@/Components/Shared/Job/SelectJob/SectionLoker";
import axios from "axios";
import { usePage } from "@inertiajs/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LokerNew = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setpostsPerPage] = useState(8);
    const [formData, setFormData] = useState([]);
    const [formDataLoker, setFormDataLoker] = useState([]);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = formData.slice(firstPostIndex, lastPostIndex);

    const { state } = usePage();

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", options);
    }

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

    // Fungsi untuk menghitung jumlah total lowongan pekerjaan
    const hitungJumlahLowongan = (perusahaanId) => {
        // Filter data dari formDataLoker berdasarkan perusahaanId dan hitung jumlahnya
        const totalLowongan = formDataLoker.filter(
            (item) => item.perusahaan_id === perusahaanId
        ).length;

        return totalLowongan;
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    // Menghitung jumlah lowongan untuk setiap perusahaan
    const perusahaanDenganJumlahLowongan = formData.map((perusahaan) => {
        const jumlahLowongan = formDataLoker.filter(
            (loker) => loker.perusahaan_id === perusahaan.id
        ).length;

        return { ...perusahaan, jumlahLowongan };
    });

    return (
        <Layout pageTitle="Lowongan Pekerjaan | Tako Karir">
            <section className="bg-BgTako font-inter text-DarkTako md:pt-16">
                <NavElse />
                {/* <div dangerouslySetInnerHTML={{ __html: bladeView }} /> */}
                <div className="flex mx-auto px-4 md:px-8 xl:px-16 pt-24 lg:pt-16 pb-16 md:py-8 flex-wrap items-center text-white bg-BlueTako">
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
                        <div className="carousel w-full pt-8">
                            <Carousel responsive={responsive}>
                                <PerusahaanCard
                                    data={perusahaanDenganJumlahLowongan}
                                />
                            </Carousel>
                            {/* <div
                                // id="item1"
                                className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                <PerusahaanCard formData={currentPosts} />
                            </div> */}
                            {/* <div
                                id="item2"
                                className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                            ></div>
                            <div
                                id="item3"
                                className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                            ></div>
                            <div
                                id="item4"
                                className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                            ></div> */}
                        </div>
                        {/* <div className="flex justify-center w-full py-2 gap-2 pt-8">
                            <a href="#item1" className="btn btn-xs">
                                1
                            </a>
                            <a href="#item2" className="btn btn-xs">
                                2
                            </a>
                            <a href="#item3" className="btn btn-xs">
                                3
                            </a>
                            <a href="#item4" className="btn btn-xs">
                                4
                            </a>
                        </div> */}
                    </div>
                </div>
                {/* <PerusahaanInfo /> */}
                {/* <SectionView /> */}
                <SectionLoker />
                <Footer />
            </section>
        </Layout>
    );
};

export default LokerNew;
