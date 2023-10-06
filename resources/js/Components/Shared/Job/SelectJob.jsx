import React from "react";
import { Link } from "@inertiajs/react";

const SelectJob = () => {
    return (
        <div className="">
            <div className="bg-white p-8 rounded-xl">
                <h1 className="font-bold">Marketing</h1>
                <h2 className="text-BlueTako pt-2">
                    PT. Tako Anugerah Korporasi
                </h2>
                <p className="text-xs pt-4">
                    Mengembangkan strategi merek yang inovatif, menciptakan
                    pesan kuat, dan memastikan konsistensi merek untuk
                    meningkatkan penjualan dan citra merek
                </p>
                <div className="flex gap-2 pt-4 flex-wrap">
                    <div className="px-4 py-2 bg-BlueTako rounded-full text-white text-xs">
                        Marketing strategy
                    </div>
                    <div className="px-4 py-2 bg-BlueTako rounded-full text-white text-xs">
                        Negotiation
                    </div>
                    <div className="px-4 py-2 bg-BlueTako rounded-full text-white text-xs">
                        Problem Solver
                    </div>
                    <div className="px-4 py-2 bg-BlueTako rounded-full text-white text-xs">
                        Time Management
                    </div>
                </div>
                <div className="text-xs pt-4">Batas Lamaran : 15 July 2025</div>
                <div className="flex pt-4 gap-2">
                    <div className="w-full">
                        <Link href="/">
                            <button className="bg-BlueTako text-BlueTako bg-opacity-10  py-2 rounded-lg w-full">
                                Lihat Detail
                            </button>
                        </Link>
                    </div>
                    <div className="w-full">
                        <Link href="/formulir">
                            <button className="bg-BlueTako text-white py-2 rounded-lg w-full">
                                Lamar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectJob;
