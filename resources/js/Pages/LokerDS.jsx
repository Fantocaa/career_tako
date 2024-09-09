import React from "react";
import SidebarLayout from "@/Components/Dashboard/SidebarLayout";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import TableDashboard from "./TableDashboard";

const LokerDS = () => {
    return (
        <>
            {/* <div className="flex h-full"> */}
            {/* sidebar */}
            <section className="bg-BgTako font-inter">
                <div>
                    <Dashboard active />
                </div>

                {/* table */}
                <div className="ml-[328px] h-full mr-8">
                    <TableDashboard />
                </div>
                {/* </div> */}
                {/* <Box sx={{ display: "flex" }}>
                <SidebarLayout />
                <div>LokerDS</div>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
            </Box> */}
            </section>
        </>
    );
};

export default LokerDS;
