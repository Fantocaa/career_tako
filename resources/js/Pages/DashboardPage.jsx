import React from "react";
import Dashboard from "./Dashboard";

const DashboardPage = () => {
    return (
        <>
            <div className="flex">
                <Dashboard />
                <div className="w-full h-full ml-[328px] flex justify-center items-center pt-80">
                    <h1>Selamat Anda Berhasil Login</h1>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
