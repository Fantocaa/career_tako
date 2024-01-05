import React from "react";
import SidebarLayout from "@/Components/Dashboard/SidebarLayout";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import TableDashboard from "./TableDashboard";

const LokerDS = () => {
    return (
        <>
            <div className="flex h-full">
                {/* sidebar */}
                <div className="w-1/4 mr-[72px] xl:mr-20 2xl:mr-0 2xl:flex items-center justify-center">
                    <Dashboard active />
                </div>

                {/* table */}
                <div className="w-full h-full">
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
