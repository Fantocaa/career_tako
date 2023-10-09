import React from "react";
import { useState } from "react";

const Sidebar = ({ children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <React.Fragment>
            <div className="flex font-inter">
                {/* <div className="w-1/6 bg-white">
                    <div className="flex justify-center">
                        <img
                            src="/images/logo-footer.png"
                            alt=""
                            className="scale-75"
                        />
                    </div>
                    <div className="grid grid-rows-3 px-4 gap-2 pt-8">
                        <button className="text-start">Dashboard</button>
                        <div className="relative">
                            <button
                                className="text-start"
                                onClick={() =>
                                    setIsDropdownOpen(!isDropdownOpen)
                                }
                            >
                                Halaman
                                <span className="absolute right-0 bottom-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-caret-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.204 5h9.592L8 10.408 3.204 5zm1.103 11.604L7.5 8l4.196 3.604h-8.392z" />
                                    </svg>
                                </span>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-10 w-full bg-white shadow-md">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">Beranda</a>
                                        </li>
                                        <li>
                                            <a href="#">Profil Perusahaan</a>
                                        </li>
                                        <li>
                                            <a href="#">Lowongan Pekerjaan</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div> */}
                <div className="w-full">{children}</div>
            </div>
        </React.Fragment>
    );
};

export default Sidebar;
