import React, { useState, useContext } from "react";
// import { UserContext } from "../UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from "./elements/Button";
import { Link } from "react-router-dom"

export const LoginForm = () => {
    const { handleLogin, flashMessage } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState(null);
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
        <div className="h-screen mx-auto'">
            <h1 className='text-center text-3xl text-white hover:text-toma font-extrabold pt-10 pb-10'>Login Form</h1>
                {flashMessage && (
                    <div className={`text-${flashMessage.type} text-center my-3 text-blu`}>
                        {flashMessage.message}
                    </div>
                )}
            <form className="max-w-sm mx-auto w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col pt-10">
                    <label htmlFor="email" className="text-white">Email</label>
                        <input type="email" name="email" className="border-none mb-3 rounded-md" onChange={e => setFormData({...formData, email: e.target.value})} value={formData.email} />
                    <label htmlFor="pwd" className="text-white">Password</label>
                    <div className="relative">
                    <input type={showPwd ? "text" : "password"} name="pwd" className="rounded-md border-none pr-48" onChange={e => setFormData({...formData, pwd: e.target.value})} value={formData.pwd} />
                    </div>
                    <Button type="submit" className="h-8 mt-5 text-white" onClick={handleLogin}>Login</Button>
                </div>
                <div className="text-blu text-center my-3">
                    <span style={{ fontSize: "smaller"}}>Not an admin? &nbsp;
                        <Link className="text-white" to="/" style={{ textDecoration: "none" }}>Click Here</Link>
                    </span>
                </div>
            </form>
        </div>
    )
}