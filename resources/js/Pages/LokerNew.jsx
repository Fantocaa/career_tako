import React, { useState, useEffect, useRef } from "react";
import Layout from "@/Layouts/Layout";
import Footer from "@/Components/Shared/Footer";
import NavElse from "@/Components/Shared/Else/NavElse";
import PerusahaanCard from "@/Components/Loker/PerusahaanCard";
import SectionLoker from "@/Components/Shared/Job/SelectJob/SectionLoker";
import axios from "axios";
import { usePage } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../Components/css/style.css";
import Pagination from "@/Components/Shared/Job/SelectJob/Pagination/Pagination";
import { Link } from "@inertiajs/react";

const LokerNew = () => {
    const { state } = usePage();
    const [formData, setFormData] = useState([]);

    // const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(2);

    const [formDataLoker, setFormDataLoker] = useState([]); //pake ini
    const [currentPageLoker, setCurrentPageLoker] = useState(1);
    const [postsPerPageLoker, setPostsPerPageLoker] = useState(3);

    const lastPostIndexLoker = currentPageLoker * postsPerPageLoker;
    const firstPostIndexLoker = lastPostIndexLoker - postsPerPageLoker;
    const currentPostsLoker = formDataLoker.slice(
        firstPostIndexLoker,
        lastPostIndexLoker
    );

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

    // Fungsi untuk menghitung jumlah total lowongan pekerjaan
    const hitungJumlahLowongan = (perusahaanId) => {
        // Filter data dari formDataLoker berdasarkan perusahaanId dan hitung jumlahnya
        const totalLowongan = formDataLoker.filter(
            (item) => item.id === perusahaanId
        ).length;

        return totalLowongan;
    };

    // Menghitung jumlah lowongan untuk setiap perusahaan
    const perusahaanDenganJumlahLowongan = formData.map((perusahaan) => {
        const jumlahLowongan = formDataLoker.filter(
            (loker) => loker.perusahaan === perusahaan.id
        ).length;

        return { ...perusahaan, jumlahLowongan };
    });

    const settings = {
        dots: true,
        infinite: true, // Set to false to limit the number of slides
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // afterChange: (current) => setSliderIndex(current),
    };

    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }

    // console.log(formDataLoker);
    // console.log(formData);

    return (
        <Layout pageTitle="Lowongan Pekerjaan | Tako Karir">
            <section className="bg-BgTako font-inter text-DarkTako md:pt-16">
                <NavElse />
                <div className="flex mx-auto px-4 md:px-8 xl:px-16 pt-24 lg:pt-16 pb-16 md:py-8 flex-wrap items-center text-white bg-BlueTako w-full">
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
                            <Slider {...settings}>
                                {formData.map((item) => (
                                    <div className="">
                                        {/* <PerusahaanCard /> */}

                                        <Link
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
                                                    <h3 className="font-semibold pt-4 overflow-hidden">
                                                        {item.perusahaan}
                                                    </h3>
                                                    <p className="text-DarkTako text-opacity-75 bottom-0">
                                                        {hitungJumlahLowongan(
                                                            item.id
                                                        )}{" "}
                                                        Lowongan Tersedia
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <SectionLoker
                    // coinsData={currentPosts}
                    formDataLoker={currentPostsLoker}
                />
                <Pagination
                    totalPosts={formDataLoker.length}
                    postsPerPageLoker={postsPerPageLoker}
                    setCurrentPageLoker={setCurrentPageLoker}
                    currentPageLoker={currentPageLoker}
                />
                <Footer />
            </section>
        </Layout>
    );
};

export default LokerNew;
