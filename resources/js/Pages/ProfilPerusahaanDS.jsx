import React from "react";
import SidebarLayout from "@/Components/Dashboard/SidebarLayout";
import Box from "@mui/material/Box";

const ProfilPerusahaanDS = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <SidebarLayout />
                <div>ProfilPerusahaanDS</div>;
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
            </Box>
        </>
    );
};

export default ProfilPerusahaanDS;
