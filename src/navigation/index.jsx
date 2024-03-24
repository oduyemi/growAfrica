import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home/index"





export const Navigation = () => {
    return (
        <Box>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
        </Box>
    );
};