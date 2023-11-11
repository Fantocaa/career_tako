import React from "react";
import Dashboard from "./Dashboard";

const DashboardPage = () => {
    return (
        <>
            <div className="flex">
                <Dashboard />
                <div className="w-full h-screen ml-[328px] bg-BgTako  flex justify-center items-center">
                    <h1>Selamat Anda Berhasil Login</h1>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
