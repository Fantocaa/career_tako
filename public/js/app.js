import React from "react";
import ReactDOM from "react-dom";
// import Footer from "@/Components/Shared/Footer";
// import NavElse from "@/Components/Shared/Else/NavElse";
// import PerusahaanCard from "@/Components/Loker/PerusahaanCard";
import NavElse from "../../resources/js/Components/Shared/Else/NavElse";

if (document.getElementById("navbar")) {
    ReactDOM.render(NavElse, document.getElementById("navbar"));
}
// if (document.getElementById("footer")) {
//     ReactDOM.render(<Footer />, document.getElementById("footer"));
// }
// const App = () => {
//     return <div>Meong</div>;
// };

// export default App;

// if (document.getElementById("navbar")) {
//     ReactDOM.render(<App />, document.getElementById("navbar"));
// }

// const Navbar = (props) => {
//     return <button>I am a react component</button>;
// };

// ReactSupervisor.registerComponen(".navbar", Navbar);
// ReactSupervisor.initialize();

// if (document.getElementById("navbar")) {
//     ReactDOM.render(<NavElse />, document.getElementById("navbar"));
// }
