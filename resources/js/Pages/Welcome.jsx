import Footer from "@/Components/Shared/Footer";
import CTA from "@/Components/CTA";
import ContentRecruitment from "@/Components/ContentRecruitment";
import Nav from "@/Components/Shared/Homepage/Nav";
import Warn from "@/Components/Warn";
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
                <Warn />
                {/* <Gallery /> */}
                <GalleryPage />
                <FaqCTA />
                <CTA />
                <BackToTop />
                <Footer />
            </section>
            {/* </Head> */}
        </Layout>
    );
}
