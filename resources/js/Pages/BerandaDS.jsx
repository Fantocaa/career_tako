import React from "react";
import SidebarLayout from "@/Components/Dashboard/SidebarLayout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dashboard from "./Dashboard";

const BerandaDS = () => {
    return (
        <>
            <div className="flex">
                <Dashboard active />
                <h1>Meong</h1>
            </div>
            {/* <Box sx={{ display: "flex" }}>
                <SidebarLayout />
                <div>BerandaDS</div>;
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
            </Box> */}
        </>
    );
};

export default BerandaDS;
