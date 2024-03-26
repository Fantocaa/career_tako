import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "@inertiajs/react";

const DashboardPage = () => {
    return (
        <>
            <div className="flex h-full">
                <Dashboard />
                <div className="w-full h-screen ml-64 bg-BgTako flex justify-center items-center flex-col text-DarkTako">
                    <h1 className="pb-8 text-xl">
                        Selamat Anda Berhasil Login
                    </h1>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
