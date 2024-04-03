import React from "react";
import { Box, Typography } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';




export const PreFooter = () => {
  
  return (
    <Box className="my-2">
        <Box
        className=""
        >  
            <Box className="flex items-center justify-between" sx={{
                borderBottom: "2px solid green"
            }}>
            <Box className="logo mr-2 footerlogo">
                <Link to="/" className="text-l block">
                <img
                src={require("../assets/images/logo/logo.png")}
                alt="logo"
                className="ml-4 w-14 ml-10"
                />
                </Link>
            </Box> 
           
            <Box className="flex items-center justify-between space-x-4 my-6">
                <Box className="flex items-center justify-between space-x-4">
                    <Tooltip title="Facebook">
                        <Link to="https://www.facebook.com/growafrica.shop?sfnsn=scwspwa&mibextid=RUbZ1f" target="_blank">
                            <FacebookIcon className="text-black"/>
                        </Link>
                    </Tooltip>
                </Box>
                {/* <Box className="flex items-center justify-between space-x-4"> 
                    <Tooltip title="LinkedIn">  
                        <Link to="">
                            <LinkedInIcon className="text-black" />
                        </Link>
                    </Tooltip>
                </Box> */}
                <Box className="flex items-center justify-between space-x-4">
                    <Tooltip title="Instagram">
                        <Link to="https://www.instagram.com/growafrica.shop?utm_source=qr&igsh=MTN0ZGphZTJwZDk2Zw==" target="_blank">
                            <InstagramIcon  className="text-black"/>
                        </Link>
                    </Tooltip>
                </Box>
                <Box className="flex items-center justify-between space-x-4">
                    <Tooltip title="X">
                        <Link to=" https://x.com/GrowAfrica92766?t=lwonOzF5T1g3djqFgmCLRQ&s=08" target="_blank">
                            <XIcon className="text-black mr-10" />
                        </Link>
                    </Tooltip>
                </Box>
                {/* <Box className="flex items-center justify-between space-x-4">
                    <Tooltip title="YouTube">
                        <Link to="">
                            <YouTubeIcon className="text-black mr-10" />
                        </Link>
                    </Tooltip>
                </Box> */}
            </Box>
        </Box>
        </Box>
        <Typography 
            className="pt-10 pb-4 copy"
            variant="h6" 
            sx={{
                fontSize: "16px",
                fontWeight: "light",
                textAlign: "center"
            }} 
        >
            &copy; Copyright 2024. All Rights Reserved
        </Typography>
    </Box>
  );  
};