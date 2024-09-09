import React from "react";
import DataTable from "react-data-table-component";
import Axios from "axios";
import Layout from "@/Layouts/Layout";
import HistoryTable from "@/Components/Dashboard/HistoryTable";
import Dashboard from "./Dashboard";

const History = () => {
    return (
        <div>
            <Layout pageTitle="Lowongan Pekerjaan | Tako Karir">
                <section className="bg-BgTako font-inter text-DarkTako ">
                    <div>
                        <Dashboard />
                    </div>
                    <div
                        className="ml-[328px] h-full mr-8"
                        // className="w-full"
                        // dangerouslySetInnerHTML={{ __html: bladeView }}
                    >
                        <HistoryTable />
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default History;
