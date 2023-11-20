import { Box, Stack, Typography } from "@mui/material";
import image7 from "../../assets/store2-blog-single-4.jpg"
import gallery1 from "../../assets/store2-home-gallery-3-768x768.jpg"
import gallery2 from "../../assets/store2-home-gallery-4-768x768.jpg";
import gallery3 from "../../assets/store2-home-gallery-5-768x768.jpg";
import gallery4 from '../../assets/store2-home-gallery-6-768x768.jpg';

export default function BlogAbout() {
    return (
        <>
        <Box marginTop={"150px"}>
            <Typography lineHeight={"0.7"} textAlign={"center"} color={"black"} fontSize={"60px"} fontFamily={"sans-serif"} fontWeight={"500"}>Lorem ipsum dolor mit<Typography textAlign={"center"} color={"black"} fontSize={"60px"} fontFamily={"sans-serif"} fontWeight={"500"}>samet et omnia</Typography></Typography>
        <Box marginTop={"90px"} display={"flex"} justifyContent={"center"}>
        <img width={"1200px"} height={"800px"} src={image7} alt="image1" />
        </Box>
        <Box marginTop={"70px"} display={"flex"} justifyContent={"center"}>
        <Typography maxWidth={"927px"} color={"black"} fontWeight={"bold"} fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim veni sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim veni sit amet.</Typography>
        </Box>
        <Box marginTop={"20px"} display={"flex"} justifyContent={"center"}>
        <Typography maxWidth={"932px"} color={"black"} fontWeight={"500"} fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        </Box>
        <Box marginTop={"20px"} display={"flex"} justifyContent={"center"}>
        <Typography maxWidth={"932px"} color={"black"} fontWeight={"500"} fontSize={"16px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</Typography>
        </Box>
        <Stack marginTop={"90px"} direction={"row"} justifyContent={"center"} spacing={3}>
        <Box overflow={"hidden"}>
        <img style={{
         transition: "transform 0.5s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }} width={"500px"} src={gallery1} alt="gallery" /> 
        </Box>
        <Box overflow={"hidden"}>
        <img style={{
         transition: "transform 0.5s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }} width={"500px"} src={gallery2} alt="gallery" /> 
        </Box>
        </Stack>
        <Stack marginTop={"30px"} direction={"row"} justifyContent={"center"} spacing={3}>
        <Box overflow={"hidden"}>
        <img style={{
         transition: "transform 0.5s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }} width={"500px"} src={gallery3} alt="gallery" /> 
        </Box>
        <Box overflow={"hidden"}>
        <img style={{
         transition: "transform 0.5s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }} width={"500px"} src={gallery4} alt="gallery" /> 
        </Box>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
        <Typography padding={"70px 90px"} maxWidth={"297px"} color={"black"} fontWeight={"500"} fontSize={"30px"}>„Lorem modi tempora incidunt ut labore et dolore magnam.”</Typography>
        <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
        <Typography paddingTop={"70px"} maxWidth={"600px"} color={"black"} fontSize={"16px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed qunt.</Typography>
        <Typography maxWidth={"600px"} color={"black"} fontSize={"16px"}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</Typography>
        </Box>
        </Stack>
        <Box marginTop={"120px"} display={"flex"} justifyContent={"center"}>
        <Typography maxWidth={"825px"} color={"black"} fontWeight={"bold"} fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
        </Box>
        <Box marginBottom={"130px"} paddingTop={"25px"} display={"flex"} justifyContent={"center"}>
        <Typography maxWidth={"826px"} color={"black"} fontWeight={"500"} fontSize={"16px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</Typography>
        </Box>
        </Box>
        </>
    )
}