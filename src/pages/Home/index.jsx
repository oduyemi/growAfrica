import { Box } from "@mui/material";
import { Banner } from "../../components/Banner"
import { BoxImages } from "../../components/BoxImages";
import { CountDown } from "../../components/CountDown";
import { Join } from "../../components/Join";
import { PreFooter } from "../../components/PreFooter";
import { WhoWeAre } from "../../components/WhoWeAre";







const Home = () => {
    
    return(
        <Box>
           <Banner />
           <WhoWeAre />
           <BoxImages />
           <Join />
           <Box className="p-10 bg-[#01562A] my-10 flex justify-center items-center">
                <Box>
                <CountDown />
                </Box>
           </Box>
           <PreFooter />
        </Box>
    )
}

export default Home;