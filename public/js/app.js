import React from "react";
import ReactDOM from "react-dom";
// import Footer from "@/Components/Shared/Footer";
// import NavElse from "@/Components/Shared/Else/NavElse";
// import PerusahaanCard from "@/Components/Loker/PerusahaanCard";
// import NavElse from "../../resources/js/Components/Shared/Else/NavElse";

export default class Example extends Component {
    render() {
        return (
            <div>
                <h1>
                    Meong Uuwu sadfhsajdfsadjfkhdsjkf Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Porro, quidem eius soluta
                    illum quam praesentium esse sapiente maxime odit sunt
                    consequuntur deserunt cumque voluptates voluptate minima,
                    fugiat vero alias iusto facere repudiandae inventore libero
                    voluptatem quibusdam. Ipsum provident iste voluptatibus
                    dignissimos vero maxime corporis autem, deserunt, facere
                    corrupti, possimus consequuntur!
                </h1>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
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
