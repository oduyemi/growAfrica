import { Box, Typography } from "@mui/material";





export const WhoWeAre = () => {
    return(
        <Box maxWidth="l" className="who flex items-center justify-center md:mx-auto mt-14 space-x-8" >
            <Box maxWidth="sm" className="grid md:w-5/6 md:text-center md:pl-6">
                <div class="md:max-w-7xl md:mx-auto">
                    <div className="relative group cursor-pointer">
                        <div
                            className="hide absolute 
                                -inset-1 bg-gradient-to-r 
                                from-green-600 to-violet-600 
                                rounded-xl blur opacity-25 
                                group-hover:opacity-100 
                                transition duration-1000 
                                group-hover:duration-200"
                            >
                        </div>
                    <div className="abtbox relative px-8 py-0
                        bg-white ring-1 ring-gray-900/5 up
                        rounded-xl border border-2 border-[#02B156]
                        leading-none grid 
                        items-top justify-start 
                        space-x-6">
                            <div class="space-y-2">
                                <Typography 
                                    variant="h5" 
                                    className="text-slate-800 pt-[10%]"
                                    paragraph
                                    gutterBottom
                                >
                                    About Us
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

                <Typography 
                variant="h5" 
                sx={{ fontWeight:"500", fontSize: "28px" }} 
                className="side sm:mt-6"
                    
                >
                    Who We Are
                </Typography>
                
            </Box>
            <Box maxWidth="md" className="grid">
                <Typography 
                    variant="h6" 
                    paragraph 
                    className="und mx-auto md:text-xl md:w-3/4"
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




