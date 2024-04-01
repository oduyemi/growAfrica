import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { Box } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from "../elements/Button";
import { Link } from "react-router-dom"

export const SigninForm = () => {
    const { handleLogin, flashMessage } = useContext(UserContext);
    const [showPwd, setShowPwd] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        pwd: "",
     });
     const [formSubmitted, setFormSubmitted] = useState(false);

     const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true); 
        handleLogin(formData.email, formData.pwd)
     };

     console.log("flashMessage:", flashMessage); 

    const toggleShowPassword = () => {
        setShowPwd(!showPwd)
    }
    return (
        <Box className="h-screen mx-auto" margin="10px">
            <h1 className='text-center text-pry text-3xl hover:text-carton font-extrabold pt-10 pb-10'>Sign In</h1>
                {flashMessage && (
                    <Box className={`text-${flashMessage.type} text-center my-3 text-black`}>
                        {flashMessage.message}
                    </Box>
                )}
            <form className="max-w-sm mx-auto w-full border rounded-xl border-green-700" onSubmit={handleSubmit}>
                <Box className="flex flex-col pt-10">
                    <label htmlFor="email" className="text-gray-700">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="border border-black mb-3 rounded-xl" 
                            onChange={e => setFormData({...formData, email: e.target.value})} 
                            value={formData.email} 
                        />
                    <label htmlFor="pwd" className="text-gray-700">Password</label>
                    <Box className="relative">
                    <input 
                        type={showPwd ? "text" : "password"} 
                        name="pwd" 
                        className="border border-black rounded-xl pr-32" 
                        onChange={e => setFormData({...formData, pwd: e.target.value})} value={formData.pwd}
                    />
                        <button 
                            type="button" 
                            className="absolute inset-y-0 right-0 pr-2 flex items-center" 
                            onClick={toggleShowPassword}> {showPwd ? 
                            <VisibilityIcon /> : <VisibilityOffIcon />} 
                        </button>
                    </Box>
                    <Button type="submit" className="h-8 mt-5 text-white" onClick={handleLogin}>Sign In</Button>
                </Box>
                <Box className="text-btn text-center my-3">
                    <span style={{ fontSize: "smaller"}}>Don't have an account yet? &nbsp;
                        <Link className="text-red-600" to="/register" style={{ textDecoration: "none" }}>Click Here</Link>
                    </span>
                </Box>
            </form>
        </Box>
    )
}