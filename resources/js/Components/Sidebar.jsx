import React from "react";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { ArrowLeftCircle } from "lucide-react";
import { Link } from "@inertiajs/react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="h-screen text-DarkTako font-inter">
            <nav className="h-full flex flex-col bg-white shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    {/* <img
                        src="https://img.logoipsum.com/243.svg"
                        className={`overflow-hidden transition-all ${
                            expanded ? "w-32" : "w-0"
                        }`}
                        alt=""
                    /> */}
                    <h1
                        className={`font-bold text-2xl overflow-hidden transition-all ${
                            expanded ? "w-32 h-12" : "w-0"
                        }`}
                    >
                        Karir <span className="text-BlueTako">Tako</span>
                    </h1>
                    {/* <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-BlueTako bg-opacity-10  hover:bg-opacity-20"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button> */}
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className=" flex relative p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className="w-10 h-10 rounded-md"
                    />
                    <div
                        className={`flex justify-between items-center overflow-hidden transition-all ${
                            expanded ? "w-52 ml-3" : "w-0"
                        }`}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold">HRD</h4>
                            <span className="text-xs text-DarkTako bg-opacity-60">
                                rekrutment@gmail.com
                            </span>
                        </div>

                        <div className="dropdown dropdown-top dropdown-end absolute right-0">
                            <label
                                tabIndex={0}
                                className="btn m-1 border-none hover:bg-BlueTako hover:bg-opacity-10    "
                            >
                                <MoreVertical size={20} />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-BgTako hover:bg-BlueTako hover:bg-opacity-10"
                            >
                                {/* <li>
                                    <a>Item 1</a>
                                </li> */}
                                <li>
                                    <a
                                        href="/admin/logout"
                                        // href={route("admin.logout")}
                                        className="font-bold"
                                    >
                                        <ArrowLeftCircle size={20} />
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext);
    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors text-DarkTako group

        ${
            active
                ? "bg-BlueTako bg-opacity-90 text-white text-opacity-100"
                : "hover:bg-BlueTako hover:bg-opacity-10 hover:text-opacity-100 "
        }
        `}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
                {text}
            </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-BlueTako ${
                        expanded ? "" : "top-2"
                    }`}
                />
            )}

            {!expanded && (
                <div
                    className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-BlueTako text-DarkTako group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                    {text}
                </div>
            )}
        </li>
    );
}
