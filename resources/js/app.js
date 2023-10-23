import React from "react";
import ReactDOM from "react-dom";
import Footer from "@/Components/Shared/Footer";
import NavElse from "@/Components/Shared/Else/NavElse";
import PerusahaanCard from "@/Components/Loker/PerusahaanCard";
import { ReactSupervisor } from "react-supervisor";

// const Navbar = (props) => {
//     return <button>I am a react component</button>;
// };

// ReactSupervisor.registerComponen(".navbar", Navbar);
// ReactSupervisor.initialize();

if (document.getElementById("navbar")) {
    ReactDOM.render(<NavElse />, document.getElementById("navbar"));
}
if (document.getElementById("footer")) {
    ReactDOM.render(<Footer />, document.getElementById("footer"));
}

// ReactDOM.render(<NavElse />, document.getElementById("navbar"));
// ReactDOM.render(<Footer />, document.getElementById("footer"));
