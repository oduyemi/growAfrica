import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import Button from "../elements/Button";




export const EditProfile = () => {
    const { user, setUser } = useContext(UserContext);
    const [flashMessage, setFlashMessage] = useState(null)
    const [userDetails, setUserDetails] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });
   
    useEffect(() => {
        if (!user) {
          setFlashMessage({
            type: "error",
            message: "You need to sign in first!",
          });
          localStorage.setItem("requestedPath", "/admin");
          window.location.href = "/admin/signin";
        } else {
            setUserDetails({
                fname: user.fname || "",
                lname: user.lname || "",
                email: user.email || "",
                phone: user.phone || "",
            });
          
          }
        }, [user]);

    useEffect(() => {
        const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (storedUserDetails) {
            setUserDetails(storedUserDetails);
        }
    }, []);

    const updateUserData = async () => {
        try {
            const response = await axios.put(`https://grow-africa-api-wine.vercel.app/admin/${user.id}`, {
                first_name: userDetails.fname,
                last_name: userDetails.lname,
                email: userDetails.email,
                phone: userDetails.phone,
            });

            if (response.status === 200) {
                console.log("Success:", response.data);
                setUser(response.data);
                localStorage.setItem('userDetails', JSON.stringify(userDetails));
                setFlashMessage({
                    type: "success",
                    message: "User details updated successfully!",
                  });
            } else {
                setFlashMessage({
                    type: "error",
                    message: "Failed to update user details",
                  });
            }
        } catch (error) {
            console.error("Error updating user details:", error);
            setFlashMessage({
                type: "error",
                message: "An error occurred while updating user details",
              });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
        }));

        localStorage.setItem('userDetails', JSON.stringify({
            ...userDetails,
            [name]: value
        }));
    };

    if (!user) {
        window.location.href = "/admin/signin"
    }

   
    return(
        <>
            <Box id="sideNav" className="lg:block hidden bg-carton w-full lg:w-64 h-screen fixed rounded-none border-none">
                <Box className="p-4 space-y-4">
                    <Link to="/admin" aria-label="dashboard"
                        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-pry">
                        <span className="-mr-1 font-medium">{" "}Dashboard</span>
                    </Link>

                    <Link to="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        <span><Link to="/admin/email-purse" className="hover:text-red-600">Email Purse</Link></span>
                    </Link>
                    <Link to="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        <span><Link to="/admin/phone-bank" className="hover:text-red-600">Phone Number Bank</Link></span>
                    </Link>
                    <Link to="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        <span><Link to="/admin/shoppers" className="hover:text-red-600">Shoppers</Link></span>
                    </Link>
                    <Link to="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        <span><Link to="/admin/vendors" className="hover:text-red-600">Vendors</Link></span>
                    </Link>
                </Box>
            </Box>

            <Box className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">

                <Box className="lg:flex gap-4 items-stretch">
                    <Box className="bg-rosepink md:p-2 p-6 rounded-xl border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
                        <Box className="flex justify-center items-center space-x-5 h-full">
                        <Box>
                                <Typography variant="h5" className="text-pry inline" paragraph>{user.fname} {user.lname} </Typography>&emsp; &emsp;
                                <span className="inline text-right">
                                    <Link to="/admin/update">
                                        <EditIcon
                                            sx={{
                                                fontSize: 17
                                            }}
                                        />
                                    </Link>
                                </span>
                                <Typography variant="h6" paragraph sx={{fontWeight: "300", fontSize:"14px"}}>{user.phone}</Typography>
                                <Typography variant="h6" paragraph sx={{fontWeight: "300", fontSize:"14px"}}>{user.email}</Typography>
                                
                            </Box>
                        </Box>
                    </Box>

                    <Box className="bg-rosepink p-4 rounded-xl xs:mb-4 max-w-full shadow-md lg:w-[65%]">
                        <Box className="flex flex-wrap justify-between h-full">
                            <Box
                                className="flex-1 bg-gradient-to-r from-rosepink to-pry rounded-xl flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                <Link to="/admin/preference-email" className="text-lightcream hover:text-red-600">Email</Link>
                            </Box>

                            <Box
                                className="flex-1 bg-gradient-to-r from-rosepink to-pry rounded-xl flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                <Link to="/admin/preference-phone-call" className="text-lightcream hover:text-red-600">Phone Call</Link>
                            </Box>

                            <Box
                                className="flex-1 bg-gradient-to-r from-rosepink to-pry rounded-xl flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                <Link to="/admin/preference-whatsapp" className="text-lightcream hover:text-red-600">WhatsApp</Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="bg-white rounded-xl p-4 shadow-md overflow-x-auto">
                    <Box className="px-4 py-2 text-left border-b-2 w-full">
                        <Typography variant="h5" className="font-bold text-yellow-600">Edit Profile</Typography>
                    </Box>
                    <div className="usercard my-5 md:flex flex-wrap justify-between shadow mx-auto">
                    <div className="mx-auto mb-5">
                        <h4 className="text-3xl f-bold mb-3">
                            Personal Information
                        </h4>
                        {flashMessage && (
                        <div className={`alert ${flashMessage.type === "success" ? "alert-success" : "alert-danger"}`}>
                            {flashMessage.message}
                        </div>
                        )}
                        <p>
                            First Name: &emsp;
                            <input 
                                type="text" 
                                className="text-dark" 
                                name="fname" 
                                value={userDetails.fname || user.fname} 
                                onChange={handleChange} 
                            />

                        </p>
                        <p>
                            Last Name: &emsp; 
                            <input 
                                type="text" 
                                className="text-dark" 
                                name="lname" 
                                value={userDetails.lname || user.lname} 
                                onChange={handleChange} 
                            />
                        </p>
                        <p>
                            Email: &nbsp;
                            <input 
                                type="email" 
                                className="ms-5 text-dark" 
                                name="email" 
                                value={userDetails.email || user.email} 
                                onChange={handleChange} 
                            />
                        </p>

                        <p>
                            Phone: &nbsp;
                            <input 
                                type="email" 
                                className="ms-5 text-dark" 
                                name="phone" 
                                value={userDetails.phone || user.phone} 
                                onChange={handleChange} 
                            />
                        </p>


                        <div className="mx-auto">
                            <Button className="mx-auto" onClick={updateUserData}>
                                Save Changes
                            </Button> &emsp;
                            <Link to="/admin/reset-password">
                                <Button className="mx-auto">
                                    Change Password Here
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                </Box>
            </Box>
        </>
    )
}