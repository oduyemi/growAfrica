import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';




export const PhoneNumberBank = () => {
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
                                <Typography variant="h5" className="text-pry inline" paragraph>John Doe</Typography>&emsp; &emsp;
                                <span className="inline text-right">
                                    <EditIcon
                                        sx={{
                                            fontSize: 17
                                        }}
                                    />
                                </span>
                                <Typography variant="h6" paragraph>07055444778</Typography>
                                
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
                                <Link to="/admin/preference-instagram" className="text-lightcream hover:text-red-600">Instagram</Link>
                            </Box>

                            <Box
                                className="flex-1 bg-gradient-to-r from-rosepink to-pry rounded-xl flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                <Link to="/admin/preference-phone-call" className="text-lightcream hover:text-red-600">Phone Call</Link>
                            </Box>

                            <Box
                                className="flex-1 bg-gradient-to-r from-rosepink to-pry rounded-xl flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                <Link to="/admin/preference--whatsapp" className="text-lightcream hover:text-red-600">WhatsApp</Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="bg-white rounded-xl p-4 shadow-md overflow-x-auto">
                    <Box className="px-4 py-2 text-left border-b-2 w-full">
                        <Typography variant="h5" className="font-bold text-yellow-600">Phone Numbers</Typography>
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
                                    <h2 className="font-bold text-gray-600">Phone Number</h2>
                                </td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-b w-full">
                                <td className="">
                                    <Typography 
                                            variant="h5"
                                            paragraph 
                                            className=""
                                            sx={{
                                                fontSize: "14px"
                                            }}
                                        >
                                            1
                                        </Typography>
                                </td>

                                <td className="">
                                <Typography 
                                            variant="h5"
                                            paragraph 
                                            className=""
                                            sx={{
                                                fontSize: "14px"
                                            }}
                                        >
                                            Solomon Edem
                                        </Typography>
                                </td>
                           
                                <td className="">
                                <Typography 
                                            variant="h5"
                                            paragraph 
                                            className=""
                                            sx={{
                                                fontSize: "14px"
                                            }}
                                        >
                                            08166344534
                                        </Typography>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Box>
        </>
    )
}