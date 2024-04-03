
import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { Box } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from "../elements/Button";
import { Link } from "react-router-dom";

export const SigninForm = () => {
    const { handleLogin, flashMessage } = useContext(UserContext);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
     });
     const [formSubmitted, setFormSubmitted] = useState(false);

     const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true); 
        const success = await handleLogin(formData.email, formData.password);
        if (success) {
            const requestedPath = localStorage.getItem("requestedPath");
            window.location.href = requestedPath ? requestedPath : "/dashboard";
          }
    };

    console.log("flashMessage:", flashMessage); 

    return (
        <Box className="h-screen mx-auto" margin="10px">
            <h1 className='text-center text-pry text-3xl hover:text-carton font-extrabold pt-10 pb-10'>Sign In</h1>
            {flashMessage && (
                <Box className={`text-${flashMessage.type} text-center my-3 text-red-700`}>
                    {flashMessage.message}
                </Box>
            )}
            <form className="max-w-sm mx-auto w-full border rounded-xl border-green-700" onSubmit={handleSubmit}>
                <Box className="flex flex-col pt-10">
                    <label htmlFor="email" className="text-gray-700">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="border border-black mb-3 rounded-xl pl-2" 
                            onChange={handleChange} 
                            value={formData.email} 
                        />
                    <label htmlFor="password" className="text-gray-700">Password</label>
                    <Box className="relative">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            className="border border-black rounded-xl pr-32 pl-2" 
                            onChange={handleChange}
                            value={formData.password}
                        />
                        <button 
                            type="button" 
                            className="absolute inset-y-0 right-0 pr-2 flex items-center" 
                            onClick={toggleShowPassword}
                        >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />} 
                        </button>
                    </Box>
                    <Button type="submit" className="h-8 mt-5 text-white">Sign In</Button>
                </Box>
                <Box className="text-btn text-center my-3">
                    <span style={{ fontSize: "smaller"}}>
                        Not an admin? &nbsp;
                        <Link className="text-red-600" to="/" style={{ textDecoration: "none" }}>Click Here</Link>
                    </span>
                </Box>
            </form>
        </Box>
    );
};
