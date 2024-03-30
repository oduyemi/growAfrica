import { Box, Typography } from "@mui/material";

export const BoxImages = () => {
    return (
        <Box>
            <Box maxWidth="md" margin="10px">
                <Typography 
                    variant="h4" 
                    className="rewarding md:text-l md:pl-14"
                    sx={{ 
                        fontWeight:"500"
                    }}
                >
                    The Most Rewarding Way To Shop
                </Typography>
            </Box>
            <Box className="flex justify-center items-center">
                <Box maxWidth="lg" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Box className="bg-[#F0F2D4] rounded-xl boximg">
                        <Box p={4}>
                            <Typography variant="h5" sx={{ fontWeight: "500" }}>
                                Effortless Shopping Platform
                            </Typography>
                            <Typography variant="subtitle1" paragraph sx={{ fontWeight: "300" }}>
                                GrowAfrica makes finding and buying African-made products a breeze
                            </Typography>
                        </Box>
                        <Box className="flex justify-center">
                            <img src={require("../assets/images/effortless.png")} width="85%" alt="Effortless Shopping" />
                        </Box>
                    </Box>

                    <Box className="bg-[#F5F9C7] rounded-xl boximg">
                        <Box p={4}>
                            <Typography variant="h5" sx={{ fontWeight: "500", fontSize: "18px" }}>
                                Personalized Shopping
                            </Typography>
                            <Typography variant="subtitle1" paragraph sx={{ fontWeight: "300", fontSize: "16px" }}>
                                Discover a curated selection just for you on GrowAfrica
                            </Typography>
                        </Box>
                        <Box className="flex justify-center">
                            <img src={require("../assets/images/personalized.png")} width="85%" alt="Personalized Shopping" />
                        </Box>
                    </Box>

                    <Box className="bg-[#EEF6E0] rounded-xl boximg">
                        <Box p={4}>
                            <Typography variant="h5" sx={{ fontWeight: "500", fontSize: "18px" }}>
                                Shop & Pay
                            </Typography>
                            <Typography variant="subtitle1" paragraph sx={{ fontWeight: "300", fontSize: "16px" }}>
                                Secure and convenient checkout with GrowAfrica
                            </Typography>
                        </Box>
                        <Box className="flex justify-center">
                            <img src={require("../assets/images/shopnpay.png")} width="85%" alt="Shop & Pay" />
                        </Box>
                    </Box>

                    <Box className="bg-[#FDF3E3] rounded-xl boximg">
                        <Box p={4}>
                            <Typography variant="h5" sx={{ fontWeight: "500", fontSize: "18px" }}>
                                Real Time Tracking
                            </Typography>
                            <Typography variant="subtitle1" paragraph sx={{ fontWeight: "300", fontSize: "16px" }}>
                                Stay informed every step of the way - Track your order in real-time.
                            </Typography>
                        </Box>
                        <Box className="flex justify-center">
                            <img src={require("../assets/images/tracking.png")} width="85%" alt="Real Time Tracking" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
