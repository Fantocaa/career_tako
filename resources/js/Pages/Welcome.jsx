import Footer from "@/Components/Shared/Footer";
import CTA from "@/Components/Shared/Homepage/Section/CTA";
import ContentRecruitment from "@/Components/Shared/Homepage/Section/ContentRecruitment";
import Nav from "@/Components/Shared/Homepage/Nav";
import Warn from "@/Components/Shared/Homepage/Section/Warn";
import GalleryPage from "@/Components/GalleryPage";
import FaqCTA from "@/Components/Shared/Homepage/Section/FaqCTA";
import BackToTop from "@/Components/BackToTop";
import Layout from "@/Layouts/Layout";
import { useEffect, useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [data, setData] = useState([]); // State untuk data perusahaan
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        // Lakukan permintaan AJAX untuk mendapatkan data perusahaan
        const fetchData = async () => {
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
    }, []); // Dependensi kosong agar hanya dipanggil sekali

    // Render halaman setelah data diambil dan halaman ter-load
    return (
        <Layout pageTitle="Beranda | Tako Karir">
            {/* <Head>
            <title>Meong</title>
            // <meta name="description" content="Your page description" /> */}
            <section className="bg-BgTako font-inter text-DarkTako">
                <Nav />
                <ContentRecruitment />
                {/* <div className="py-96"></div> */}
                <div className="py-16">
                    <Warn />
                </div>
                {/* <Gallery /> */}
                <div className="md:pt-96 lg:pt-0 pb-16">
                    <GalleryPage />
                </div>
                <FaqCTA />
                <CTA />
                <BackToTop />
                <Footer />
            </section>
            {/* </Head> */}
        </Layout>
    );
}
