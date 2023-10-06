import React from "react";
import Sidebar from "@/Components/Sidebar";

const DataDashboard = ({ children }) => {
    return (
        <React.Fragment>
            <div className="flex">
                <div className="w-1/6 bg-BlueTako h-screen">
                    {/* <Sidebar /> */}
                </div>
                <div className="p-4 w-full">{children}</div>
            </div>
        </React.Fragment>
    );
};

export default DataDashboard;
