import React from "react";
import SidebarLayout from "@/Components/Dashboard/SidebarLayout";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import TableDashboard from "./TableDashboard";

const LokerDS = () => {
    return (
        <>
            <div className="flex h-full">
                <div className="w-1/4 mr-[72px] xl:mr-20">
                    <Dashboard active />
                </div>
                <div className="w-full ">
                    <TableDashboard />
                </div>
            </div>
            {/* <Box sx={{ display: "flex" }}>
                <SidebarLayout />
                <div>LokerDS</div>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
            </Box> */}
        </>
    );
};

export default LokerDS;
