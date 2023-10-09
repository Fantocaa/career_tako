import React from "react";
import SidebarLayout from "@/Components/Dashboard/SidebarLayout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BerandaDS = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <SidebarLayout />
                <div>BerandaDS</div>;
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
            </Box>
        </>
    );
};

export default BerandaDS;
