import React from "react";
import { useMediaQuery } from "react-responsive";
import NavElseDesk from "./NavElseDesk";
import NavElseMobile from "./NavElseMobile";

const Nav = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Ubah batas lebar sesuai kebutuhan

    return <div>{isMobile ? <NavElseMobile /> : <NavElseDesk />}</div>;
};

export default Nav;
