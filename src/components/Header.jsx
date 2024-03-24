import React from "react";
import { Box } from "@mui/material";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import { CountDown } from "./CountDown";


  export const Header = () => {
    
  
  return (
    <header className={`bg-transparent main_header`}>
      <nav
        id="header"
        className="bg-transparent"
      >
        <Box className="md:flex items-center sm:hidden nav-icon justify-between">
          
          <Box className="logo">
            <Link to="/" className="text-l block">
            <img
              src={require("../assets/images/logo/logo.png")}
              alt="logo"
              width="80%"
              className="pl-10 w-30 w-30"
            />
            </Link>
          </Box>
          <ul
            className={`nav-menu-wrapper mx-auto flex-col md:flex-row flex md:space-x-8 mt-8 md:mt-2 text-sm`}
            id="mobile-menu"
          >
            <li>
              <CountDown />
            </li>
           
          </ul>
          <Box className="mt-[-2.6%] flex items-center justify-between space-x-4 pr-14 reg">
                <>
                    <Link to="/register">
                      <Button className="px-6">Join Waitlist</Button>
                    </Link>
                </>
          </Box>
        </Box>
      </nav>
      {/* {renderMobileMenu()} */}
    </header>
  );  
};