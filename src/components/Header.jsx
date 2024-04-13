import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { Box, Typography } from "@mui/material";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import { CountDown } from "./CountDown";
import Modal from "react-modal";
import { PopupForm } from "./PopupForm";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



  export const Header = () => {
    const { user, handleSignout } = useContext(UserContext);
    const [popupOpen, setPopupOpen] = useState(false);

    const handlePopupOpen = () => {
    setPopupOpen(true);
    };

    const handlePopupClose = () => {
      setPopupOpen(false);
    };
  
  return (
      <header className={`bg-transparent`}>
        <nav id="header" className="bg-transparent">
          <Box className="flex items-center justify-between">
            <Box className="logo">
              <Link to="/" className="text-l block">
                <img
                  src={require("../assets/images/logo/logo.png")}
                  alt="logo"
                  width="80%"
                  className="md:pl-10 w-30 w-30 headerlogo"
                />
              </Link>
            </Box>
            <ul className={`nav-menu-wrapper mx-auto flex-col md:flex-row flex md:space-x-8 mt-8 md:mt-2 text-sm`}>
              <li>
                <CountDown />
              </li>
            </ul>
            <Box className="mt-[-2.6%] flex items-center justify-between space-x-4 pr-10 reg">
              {user ? (
                <Box className="cta">
                  <Typography variant="h6" sx={{ fontWeight: "200", fontSize: "16px" }} paragraph className="inline font-light text-l">
                    {user.fname} &nbsp; {user.lname}
                  </Typography> &emsp; &emsp;
                  <span>
                    <PowerSettingsNewIcon
                      onClick={handleSignout}
                      className="inline text-red-600 hover:text-carton"
                    />
                  </span>
                </Box>
              ) : (
                <>
                  <Button onClick={handlePopupOpen} className="md:px-6 px-4 py-2 sm:text-sm headerbtn">Join Waitlist</Button>
                </>
              )}
            </Box>
          </Box>
        </nav>
        <Modal
          isOpen={popupOpen}
          onRequestClose={handlePopupClose}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              background: "white",
            },
          }}
        >
          <PopupForm open={popupOpen} onClose={handlePopupClose} />
        </Modal>
      </header>

  );  
};