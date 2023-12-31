import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "@inertiajs/react";

const DashboardPage = () => {
    return (
        <>
            <div className="flex">
                <Dashboard />
                <div className="w-full h-screen ml-[328px] bg-BgTako flex justify-center items-center flex-col text-DarkTako">
                    <h1 className="pb-8 text-xl">
                        Selamat Anda Berhasil Login
                    </h1>
                    {/* <h1 className="pb-8 text-base">
                        Apa yang ingin kamu lakukan?
                    </h1>
                    <div className="grid grid-cols-2 gap-4 text-center px-12">
                        <Link href={route("admin.lowongan_pekerjaan")}>
                            <div className="bg-white rounded-2xl relative w-64 ">
                                <img
                                    src="/images/backend/1.jpg"
                                    alt=""
                                    className="rounded-2xl"
                                />

                                <div className="absolute inset-0 bg-BlueTako opacity-50 rounded-2xl" />

                                <h1 className="absolute inset-28">
                                    Tambah Lowongan Pekerjaan
                                </h1>
                            </div>
                        </Link>
                        <Link href={route("admin.perusahaan_dashboard")}>
                            <div className="bg-white rounded-2xl">
                                <img
                                    src="/images/backend/2.jpg"
                                    alt=""
                                    className="rounded-2xl"
                                />
                                <h1 className="absolute inset-28">
                                    Tambah Daftar Perusahaan
                                </h1>
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
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
