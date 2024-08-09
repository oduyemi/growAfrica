import React from "react";
import { Box } from "@mui/material";
import defaultAvatar from "../assets/images/avatar.png";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="flex justify-between px-10 bg-white py-6">
      <Box className="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96">
            <img src={require("../assets/images/logo.png")} className="w-5 pl-4" alt="logo" />
        <input type="text" placeholder="Search courses" className="bg-gray-100 outline-none w-full" />
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-1 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg> */}
            <Link to="">
                <FavoriteIcon className="text-lightcream hover:text-greene"/>
                <p>Notifications</p>
            </Link>
            <Link to="">
                <FavoriteIcon className="text-lightcream hover:text-greene"/>
                <p>Wallet</p>
            </Link>
            <Link to="">
                <FavoriteIcon className="text-lightcream hover:text-greene"/>
                <p>Enquiry</p>
            </Link>
            <Link to="">
                <FavoriteIcon className="text-lightcream hover:text-greene"/>
                <p>Settings</p>
            </Link>

      </Box>
      <Box className="flex items-center">
        <img className="w-8 rounded-full" src={defaultAvatar} alt="User" /> &nbsp;
      </Box>
    </nav>
  );
};
