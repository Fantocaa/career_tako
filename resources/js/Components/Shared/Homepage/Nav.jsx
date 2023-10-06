import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";

const Nav = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Ubah batas lebar sesuai kebutuhan

    return <div>{isMobile ? <NavMobile /> : <Navbar />}</div>;
};

export default Nav;
