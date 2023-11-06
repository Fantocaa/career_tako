import React from "react";
import Layout from "@/Layouts/Layout";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import PerusahaanTable from "../Components/Dashboard/PerusahaanTable.jsx";

const TablePerusahaan = () => {
    // const [bladeView, setBladeView] = useState(null);
    // useEffect(() => {
    //     // Lakukan permintaan ke server untuk mendapatkan tampilan Blade
    //     fetch("/admin/perusahaan_db") // Ganti dengan rute yang sesuai
    //         .then((response) => response.text())
    //         .then((data) => setBladeView(data));
    // }, []);
    return (
        <div>
            <Layout pageTitle="Lowongan Pekerjaan | Tako Karir">
                <section className="bg-BgTako font-inter text-DarkTako ">
                    <div>
                        <Dashboard />
                    </div>
                    <div
                        className="ml-[320px] h-screen"
                        // className="w-full"
                        // dangerouslySetInnerHTML={{ __html: bladeView }}
                    >
                        <PerusahaanTable />
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default TablePerusahaan;
