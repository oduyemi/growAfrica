import React, { useState,useEffect, useContext} from "react";
import { UserContext } from "../UserContext";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import EditIcon from '@mui/icons-material/Edit';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import axios from "axios";


export const PreferWhatsApp = () => {
    const { user, handleSignout } = useContext(UserContext);
    const [whatsappPreferences, setWhatsappPreferences] = useState([]);
    const [userDetails, setUserDetails] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        if (user) {
            setUserDetails({
                fname: user.fname || "",
                lname: user.lname || "",
                email: user.email || "",
                phone: user.phone || "",
            });
        } else {
            console.log("User is null")
            window.location.href = "/admin/signin"
        } 
    }, [user]);

    useEffect(() => {
        const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (storedUserDetails) {
            setUserDetails(storedUserDetails);
        }
    }, []);

    useEffect(() => {
        const fetchWhatsappPreferences = async () => {
            try {
                const response = await axios.get("https://grow-africa-api.vercel.app/contact/preference/whatsapp");
                setWhatsappPreferences(response.data.data);
            } catch (error) {
                console.error("Error fetching WhatsApp Preferences:", error);
            }
        };

        fetchWhatsappPreferences();
    }, []);

    const exportData = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + whatsappPreferences.map(preference => Object.values(preference).join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "whatsappPreference.csv");
        document.body.appendChild(link);
        link.click();
    };
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
                    <Button onClick={handleSignout}>
                        Signout {" "}
                        <span> 
                            <PowerSettingsNewIcon />
                        </span>
                    </Button>
                </Box>
            </Box>

            <Box className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">

                <Box className="lg:flex gap-4 items-stretch">
                    <Box className="bg-rosepink md:p-2 p-6 rounded-xl border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
                        <Box className="flex justify-center items-center space-x-5 h-full">
                            <Box>
                                <Typography variant="h5" className="text-pry inline" gutterBottom paragraph>{userDetails.fname} {userDetails.lname} </Typography>&emsp; &emsp;
                                <span className="inline text-right">
                                    <Link to="/admin/update">
                                        <EditIcon
                                            sx={{
                                                fontSize: 17
                                            }}
                                        />
                                    </Link>
                                </span>
                                <Typography variant="h6" paragraph sx={{fontWeight: "300", fontSize:"14px"}}>{userDetails.phone}</Typography>
                                <Typography variant="h6" paragraph sx={{fontWeight: "300", fontSize:"14px"}}>{userDetails.email}</Typography>
                                
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
                        <Typography variant="h5" className="font-bold text-yellow-600 inline">Preference: WhatsApp</Typography> &emsp; &emsp;
                        <span>
                            <Button onClick={exportData} className="mb-4 bg-btn inline">
                                Export Data
                            </Button>
                        </span>
                    </Box>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <td className="">
                                    <h2 className="font-bold text-gray-600">S/N</h2>
                                </td>

                                <td className="">
                                    <h2 className="font-bold text-gray-600">Full Name</h2>
                                </td>
                            
                                <td className="">
                                    <h2 className="font-bold text-gray-600">Email Address</h2>
                                </td>
                           
                                <td className="">
                                    <h2 className="font-bold text-gray-600">Phone Number</h2>
                                </td>
                            
                                <td className="">
                                    <h2 className="font-bold text-gray-600">Product Interest</h2>
                                </td>
                            
                                <td className="">
                                    <h2 className="font-bold text-gray-600">Shopper/Vendor</h2>
                                </td>
                            
                                <td className="">
                                    <h2 className="font-bold text-gray-600">How</h2>
                                </td>
                            </tr>
                        </thead>

                        <tbody>
                            {whatsappPreferences.map((preference, index) => (
                                <tr key={index} className="border-b w-full">
                                    <td>{index + 1}</td>
                                    <td>{preference.fullname}</td>
                                    <td>{preference.email}</td>
                                    <td>{preference.phone}</td>
                                    <td>{preference.productInterest}</td>
                                    <td>{preference.shopperOrVendor}</td>
                                    <td>{preference.contactPreference}</td>
                                    <td>{preference.how}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
            </Box>
        </>
    )
}