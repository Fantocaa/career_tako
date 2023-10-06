import React from "react";
import { Helmet } from "react-helmet";
import Footer from "@/Components/Shared/Footer";
import Nav from "@/Components/Shared/Homepage/Nav";

const Layout = ({ children, pageTitle }) => {
    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            {/* <Nav /> Tambahkan komponen navbar di sini */}
            {children}
            {/* <Footer /> Tambahkan komponen footer di sini */}
        </div>
    );
};

export default Layout;
