import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Button from "../elements/Button";
import Modal from "react-modal";
import { PopupForm } from "./PopupForm";


export const Join = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    const handlePopupOpen = () => {
    setPopupOpen(true);
    };

    const handlePopupClose = () => {
        setPopupOpen(false);
    };
    
    return(
        <Box maxWidth="xl" className="md:mx-auto mt-6">
            <Box maxWidth="md" className="join mx-auto md:w-1/2 md:text-center">
            <Typography 
                variant="h3" 
                className="space text-l inline md:pl-4"
                sx={{ 
                    fontWeight:"400",
                    fontSize: "28px"
                }}
            >
                Join Our Waitlist
                
            </Typography>
            <Typography 
                variant="h6" 
                paragraph 
                className="space mx-auto md:text-xl sm:text-l md:text-center"
                sx={{ fontWeight: "300", marginTop:"10px"}}
                gutterBottom
            >
                Join our waitlist today and be the first to
                be notified when our GrowAfrica Mobile App
                and Websiite launches. Simply tap on the
                button below and fill the form.
            </Typography>

            <Box className="space mx-auto md:text-center mt-8">
                <Button onClick={handlePopupOpen} className="mt-[-1%]">Join Our Waitlist</Button>
            </Box>
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
                </Modal>
            </Box>
            <PopupForm open={popupOpen} onClose={handlePopupClose} />
        </Box>
    )
}