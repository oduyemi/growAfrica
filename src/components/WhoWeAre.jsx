import { Box, Typography } from "@mui/material";





export const WhoWeAre = () => {
    return(
        <Box maxWidth="l" className="flex items-center justify-center mx-auto mt-14 space-x-8" >
            <Box maxWidth="sm" className="grid w-5/6 text-center pl-6">
            <div class="max-w-7xl mx-auto">
        <div class="relative group cursor-pointer">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-md blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div class="space-y-2">
                    <p class="text-slate-800">About</p>
                </div>
            </div>
        </div>
    </div>
                <Typography 
                    variant="body1" 
                    sx={{ border: "2px solid #02B156", borderRadius: "17px"}} 
                    className="abtside p-2 w-40 ml-1"
                    gutterBottom
                >
                    About
                </Typography>
                <span>
                <Typography 
                    variant="h4" 
                    sx={{ fontWeight:"500" }} 
                    className="side"
                    
                >
                    Who We Are
                </Typography>
                </span>
            </Box>
            <Box maxWidth="md" className="grid">
                <Typography 
                    variant="h6" 
                    paragraph 
                    className="mx-auto text-xl w-3/4"
                    sx={{ fontWeight: "300" }}
                >
                    We understand the importance of a seamless and secure
                    shopping experience. GrowAfrica is designed with
                    user-friendly interfaces, secure transactions, and
                    efficient customer support to ensure that your journey
                    with us is as delightful as the products we offer.
                </Typography>
            </Box>
        </Box>
    )
}




