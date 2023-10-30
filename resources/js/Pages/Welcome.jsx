import Footer from "@/Components/Shared/Footer";
import CTA from "@/Components/CTA";
import ContentRecruitment from "@/Components/Shared/Homepage/Section/ContentRecruitment";
import Nav from "@/Components/Shared/Homepage/Nav";
import Warn from "@/Components/Shared/Homepage/Section/Warn";
import GalleryPage from "@/Components/GalleryPage";
import FaqCTA from "@/Components/FaqCTA";
import BackToTop from "@/Components/BackToTop";
import Layout from "@/Layouts/Layout";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
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
                <div className="pb-16">
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
