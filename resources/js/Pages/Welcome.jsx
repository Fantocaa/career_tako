import Footer from "@/Components/Shared/Footer";
import CTA from "@/Components/Shared/Homepage/Section/CTA";
import ContentRecruitment from "@/Components/Shared/Homepage/Section/ContentRecruitment";
import Nav from "@/Components/Shared/Homepage/Nav";
import Warn from "@/Components/Shared/Homepage/Section/Warn";
import GalleryPage from "@/Components/GalleryPage";
import FaqCTA from "@/Components/Shared/Homepage/Section/FaqCTA";
import BackToTop from "@/Components/BackToTop";
import Layout from "@/Layouts/Layout";
import ContentRecruitmentNew from "@/Components/Shared/Homepage/Section/ContentRecruitmentNew";
import WarnNew from "@/Components/Shared/Homepage/Section/WarnNew";
import { useEffect, useState } from "react";
import "../../css/app.css";
import { useTranslation } from "react-i18next";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    const [data, setData] = useState([]); // State untuk data perusahaan
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        // Lakukan permintaan AJAX untuk mendapatkan data perusahaan
        const fetchData = async () => {
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
    }, []); // Dependensi kosong agar hanya dipanggil sekali

    // Render halaman setelah data diambil dan halaman ter-load
    return (
        <>
            {/* <Layout pageTitle="Beranda | Tako Karier"> */}
            <Head title="Beranda" />
            {/* <Head>
            <title>Meong</title>
            // <meta name="description" content="Your page description" /> */}
            <section className="bg-BgTako font-inter text-DarkTako">
                <Nav />
                {/* <div className="pt-56"> */}

                <ContentRecruitmentNew />
                {/* </div> */}
                {/* <ContentRecruitment /> */}
                {/* <div className="py-96"></div> */}
                <div className="py-16">
                    {/* <Warn /> */}
                    <WarnNew />
                </div>
                {/* <Gallery /> */}
                <div className="md:pt-96 lg:pt-0 2xl:pt-16 pb-16">
                    <GalleryPage />
                </div>
                <FaqCTA />
                {/* <CTA /> */}
                <BackToTop />
                <Footer />
            </section>
            {/* </Head> */}
            {/* </Layout> */}
        </>
    );
}
