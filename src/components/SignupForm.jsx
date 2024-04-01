import React, { useState } from "react";
import Button from "../elements/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box } from "@mui/material";
import axios from 'axios'
import { Link } from "react-router-dom";

export const SignupForm = () => {
    const [showPwd, setShowPwd] = useState(false);
    const [showCpwd, setShowCpwd] = useState(false);
    const [flashMessage, setFlashMessage] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        pwd: "",
        cpwd: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.pwd !== formData.cpwd) {
                throw new Error("Both Passwords must match!");
            }
    
            const response = await axios.post("https://grow-africa-api.vercel.app/send/admin/signup", formData, {
                headers: { "Content-Type": "application/json" }
            });
    
            console.log(response.data);
    
            setFlashMessage({
                type: "success",
                message: "Admin registered successfully. Redirecting to Login.",
            });
    
            setFormSubmitted(true);
    
            setTimeout(() => {
                window.location.href = "/admin/signin"
            }, 2000);
    
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
    const toggleShowPassword = () => {
        setShowPwd(!showPwd)
    }

    const toggleShowConfirmPassword = () => {
        setShowCpwd(!showCpwd)
    }
    return (
        <Box className="h-screen mx-auto" margin="10px">
            <h1 className='text-center text-3xl text-pry hover:text-carton font-extrabold pt-6 pb-10'>Sign Up</h1>
                {flashMessage && (
                    <Box className={`text-${flashMessage.type} text-center my-3 text-black`}>
                        {flashMessage.message}
                </Box>
                )}
            <form className="max-w-sm mx-auto w-full" onSubmit={handleSubmit}>
                <Box className="flex flex-col pt-10">
                    <label htmlFor="fname" className="text-gray-700">First Name</label>
                    <input type="text" name="fname" className="border border-black mb-3 rounded-md" onChange={e => setFormData({...formData, fname: e.target.value})} value={formData.fname} />
                    <label htmlFor="lname" className="text-gray-700">Last Name</label>
                    <input type="text" name="lname" className="border border-black mb-3 rounded-md" onChange={e => setFormData({...formData, lname: e.target.value})} value={formData.lname} />
                    <label htmlFor="email" className="text-gray-700">Email</label>
                    <input type="email" name="email" className="border border-black mb-3 rounded-md" onChange={e => setFormData({...formData, email: e.target.value})} value={formData.email} />
                    <label htmlFor="phone" className="text-gray-700">Phone</label>
                    <input type="number" name="email" className="border border-black mb-3 rounded-md" onChange={e => setFormData({...formData, phone: e.target.value})} value={formData.phone} />
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
                    <Button type="submit" className="h-8 mt-5 text-white" onClick={handleSubmit}>Sign Up</Button>
                </Box>
                <Box className="text-blu text-center my-3">
                    <span style={{ fontSize: "smaller"}}>You want to sign in? &nbsp;
                        <Link className="text-gray-700" to="/admin/signin" style={{ textDecoration: "none" }}>Click Here</Link>
                    </span>
                </Box>
            </form>
        </Box>
    );
};    