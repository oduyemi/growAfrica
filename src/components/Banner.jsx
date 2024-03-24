import { Box, Typography } from "@mui/material";
import Button from "../elements/Button";


export const Banner = () => {
    return(
        <Box maxWidth="xl" className="mx-auto mt-10">
            <Box maxWidth="md" className="mx-auto w-1/2 text-center">
            <Typography 
                variant="h3" 
                className="text-l inline pl-4"
                sx={{ 
                    fontWeight:"500"
                }}
            >
                Unveiling the Essence of {" "}
                <span>
                    <Typography 
                        variant="h3" 
                        className="text-pry inline"
                        sx={{ fontWeight:"500"}}
                    >
                        Africa&apos;s {" "}
                    </Typography>
                </span>
                Rich Heritage
            </Typography>
            <Typography 
                variant="h6" 
                paragraph 
                className="mx-auto text-xl text-center"
                sx={{ fontWeight: "300", marginTop:"10px"}}
                gutterBottom
            >
                 Secure your spot on the forefront of this groundbreaking journey.
                 Be the first to explore, shop, and empower. Together, let's grow 
                 Africa beyond boundaries.
            </Typography>

            <Box className="mx-auto text-center mt-8">
                <Button className="mt-[-1%]">Join Our Waitlist</Button>
            </Box>
            </Box>
        </Box>
    )
}