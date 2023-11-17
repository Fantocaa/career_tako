import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "@inertiajs/react";

const DashboardPage = () => {
    return (
        <>
            <div className="flex">
                <Dashboard />
                <div className="w-full h-screen ml-[328px] bg-BgTako flex justify-center items-center flex-col text-DarkTako">
                    <h1 className="pb-8 text-xl font-bold">
                        Selamat Anda Berhasil Login
                    </h1>
                    <h1 className="pb-8 text-base">
                        Apa yang ingin kamu lakukan?
                    </h1>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <Link href={route("admin.lowongan_pekerjaan")}>
                            <div className="bg-white px-24 py-16 rounded-2xl">
                                Tambah Lowongan Pekerjaan
                            </div>
                        </Link>
                        <Link href={route("admin.perusahaan_dashboard")}>
                            <div className="bg-white px-24 py-16 rounded-2xl">
                                Tambah Daftar Perusahaan
                            </div>
                        </Link>
                        <Link href={route("admin.history")}>
                            <div className="bg-white px-24 py-16 rounded-2xl">
                                Riwayat
                            </div>
                        </Link>
                        <Link href={route("admin.logout")}>
                            <div className="bg-white px-24 py-16 rounded-2xl">
                                Logout
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
