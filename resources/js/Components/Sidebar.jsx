import React from "react";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";

const Sidebar = ({ children }) => {
    return (
        <aside className="h-screen">
            <nav className="h-full flex  flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center bg-slate-50">
                    <img
                        src="https://img.logoipsum.com/243.svg"
                        alt=""
                        // className={`overflow-hidden transition-all ${
                        //     expanded ? "w-32" : "w-0"
                        // }`}
                        className="w-32"
                    />
                    <button
                        // onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-100"
                    >
                        {/* {expanded ? <ChevronFirst /> : <ChevronLast />} */}
                        <ChevronFirst />
                    </button>
                </div>
                <ul className="flex-1 px-3">{children}</ul>
                <div className="border-t flex p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        srcset=""
                        className="w-10 h-10 rounded-md"
                    />
                    <div
                        className={`flex justify-between items-center w-52 ml-3`}
                    >
                        <div className="leading-4">
                            <h4>HRD</h4>
                            <span className="text-xs text-DarkTako bg-opacity-60">
                                rekrutment@gmail.com
                            </span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;

export function SidebarItem({ icon, text, active, alert }) {
    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors 
        
        ${
            active
                ? "bg-gradient-to-tr from-BlueTako bg-opacity-20 to-BlueTako to-bg-opacity-10 text-white"
                : "hover:bg-BlueTako opacity-50 text-DarkTako"
        }
        `}
        >
            {icon}
            <span>{text}</span>
        </li>
    );
}
