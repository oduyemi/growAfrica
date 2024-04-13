import React, { useState } from "react";
import Button from "../elements/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box } from "@mui/material";
import axios from 'axios'

export const ResetPasswordForm = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPwd, setShowPwd] = useState(false);
    const [showCpwd, setShowCpwd] = useState(false);
    const [flashMessage, setFlashMessage] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        oldpwd: "",
        pwd: "",
        cpwd: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.pwd !== formData.cpwd) {
                throw new Error("Both Passwords must match!");
            }
    
            const response = await axios.put(`/admin/${adminId}/resetpassword`, formData, {
                headers: { "Content-Type": "application/json" }
            });
    
            console.log(response.data);
    
            setFlashMessage({
                type: "success",
                message: "Password reset successfully.",
            });
    
            setFormData({
                oldpwd: "",
                pwd: "",
                cpwd: ""
            });
    
            setTimeout(() => {
                setFlashMessage(null);
            }, 5000);
    
        } catch (error) {
            console.error("Error:", error);
    
            let errorMessage;
            if (error.response) {
                console.log("Response Data:", error.response.data);
                errorMessage = error.response.data.detail || error.response.data.message;
            } else {
                console.error("Request Error:", error.request);
                errorMessage = "No response received from the server. Please try again later.";
            }
    
            setFlashMessage({ type: "error", message: errorMessage });
        }
    }    

    const toggleShowOldPassword = () => {
        setShowOldPassword(!showOldPassword)
    }

    const toggleShowPassword = () => {
        setShowPwd(!showPwd)
    }

    const toggleShowConfirmPassword = () => {
        setShowCpwd(!showCpwd)
    }
    return (
        <Box className="h-screen mx-auto" margin="10px">
            <h1 className='text-center text-3xl text-pry hover:text-carton font-extrabold pt-6 pb-10'>Reset Password</h1>
                {flashMessage && (
                    <Box className={`text-${flashMessage.type} text-center my-3 text-black`}>
                        {flashMessage.message}
                </Box>
                )}
            <form className="max-w-sm mx-auto w-full" onSubmit={handleSubmit}>
                <Box className="flex flex-col pt-10">
                <label htmlFor="oldpwd" className="text-gray-700">Old Password</label>
                    <Box className="relative">
                    <input 
                        type={showOldPassword ? "text" : "password"} 
                        name="oldpwd" className="rounded-md border border-black  pr-32" 
                        onChange={e => setFormData({...formData, oldpwd: e.target.value})} 
                        value={formData.oldpwd} 
                    />
                        <button 
                            type="button" 
                            className="absolute inset-y-0 right-0 pr-2 flex items-center" 
                            onClick={toggleShowOldPassword}
                        > {showPwd ? 
                            <VisibilityIcon /> : <VisibilityOffIcon />} 
                        </button>
                    </Box>
                    
                    <label htmlFor="pwd" className="text-gray-700">Password</label>
                    <Box className="relative">
                    <input 
                        type={showPwd ? "text" : "password"} 
                        name="pwd" className="rounded-md border border-black  pr-32" 
                        onChange={e => setFormData({...formData, pwd: e.target.value})} 
                        value={formData.pwd} 
                    />
                        <button 
                            type="button" 
                            className="absolute inset-y-0 right-0 pr-2 flex items-center" 
                            onClick={toggleShowPassword}
                        > {showPwd ? 
                            <VisibilityIcon /> : <VisibilityOffIcon />} 
                        </button>
                    </Box>
                    <label htmlFor="cpwd" className="text-gray-700">Confirm Password</label>
                    <Box className="relative">
                    <input 
                        type={showCpwd ? "text" : "password"} 
                        name="cpwd" className="rounded-md border border-black pr-32" 
                        onChange={e => setFormData({...formData, cpwd: e.target.value})} 
                        value={formData.cpwd} 
                    />
                        <button 
                            type="button" 
                            className="absolute inset-y-0 right-0 pr-2 flex items-center" 
                            onClick={toggleShowConfirmPassword}
                        > {showCpwd ? 
                            <VisibilityIcon /> : <VisibilityOffIcon />} </button>
                    </Box>
                    <Button type="submit" className="h-8 mt-5 text-white" onClick={handleSubmit}>Reset Password</Button>
                </Box>
            </form>
        </Box>
    );
};    