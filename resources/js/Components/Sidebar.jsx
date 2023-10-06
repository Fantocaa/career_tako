import React from "react";
// import { InertiaLink } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/react";
import SidebarLayout from "./SidebarLayout";

const Sidebar = () => {
    return <div>Sidebar</div>;
};

export default Sidebar;

// const Sidebar = () => {
//     const Menus = [
//         { menu: "Home", href: "/" },
//         { menu: "Users", href: "/users" },
//         { menu: "Profile", href: "/profile" },
//     ];

//     return (
//         <DataDashboard>
//             <SidebarLayout />
//             <React.Fragment>
//                 <div className="text-white">
//                     {/* <p className="text-2xl">{count}</p> */}
//                     <p className="text-2xl"></p>
//                     <div className="flex justify-center items-center p-2">
//                         <p className="text-2xl font-semibold ">Transfer</p>
//                     </div>
//                     {Menus.map((menu, index) => (
//                         <Menu
//                             // pageActive={pageActive}
//                             key={index}
//                             href={menu.href}
//                         >
//                             {menu.menu}
//                         </Menu>
//                     ))}
//                 </div>
//             </React.Fragment>
//         </DataDashboard>
//     );
// };

// export default Sidebar;

// const Menu = React.memo(({ children, href }) => {
//     return (
//         <div>
//             <Link className="ml-4   " href={href}>
//                 <button className=" py-2 font-semibold text-lg flex items-center px-8 w-full">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         className="w-5 h-5"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M4 6h16M4 12h16M4 18h7"
//                         />
//                     </svg>
//                     <p>{children}</p>
//                 </button>
//             </Link>
//         </div>
//     );
// });
