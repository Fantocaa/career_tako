import React from "react";
import SidebarLayout from "@/Components/Dashboard/SidebarLayout";
import Box from "@mui/material/Box";

const LokerDS = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <SidebarLayout />
                <div>LokerDS</div>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
            </Box>
        </>
    );
};

export default LokerDS;
