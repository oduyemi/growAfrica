import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Button from "../elements/Button";
import Modal from "react-modal";
import { PopupForm }  from "./PopupForm";

export const Banner = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    const handlePopupOpen = () => {
    setPopupOpen(true);
    };

    const handlePopupClose = () => {
    setPopupOpen(false);
    };

    return(
        <Box maxWidth="xl" className="mx-auto mt-10">
            <Box maxWidth="md" className="banner md:mx-auto md:w-1/2 md:text-center">
            <Typography 
                variant="h3" 
                className="md:text-l sm:text-sm inline md:pl-4"
                sx={{ 
                    fontWeight:"500"
                }}
            >
                Unveiling the Essence of {" "}
                <span>
                    <Typography 
                        variant="h3" 
                        className="text-pry inline"
                        sx={{ fontWeight:"500"}}
                    >
                        Africa&apos;s {" "}
                    </Typography>
                </span>
                Rich Heritage
            </Typography>
            <Typography 
                variant="h6" 
                paragraph 
                className="mx-auto text-xl md:text-center"
                sx={{ fontWeight: "300", marginTop:"10px"}}
                gutterBottom
            >
                 Secure your spot on the forefront of this groundbreaking journey.
                 Be the first to explore, shop, and empower. Together, let's grow 
                 Africa beyond boundaries.
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