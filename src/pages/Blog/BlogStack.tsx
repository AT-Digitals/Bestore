import { Stack, Box, Typography, Divider } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import image3 from "../../assets/store2-blog-single-2-1080x675.jpg"
import image4 from "../../assets/store2-blog-single-3-1080x675.jpg"

export default function BlogStack() {
    return (
        <>
        <Stack marginTop={"30px"} spacing={3} direction={"row"} justifyContent={"center"}>
      <Box margin={"30px"} overflow={"hidden"}>
      <img style={{
         transition: "transform 0.5s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
       width={"500px"} src={image4} alt="image" />
      <Box sx={{
        boxSizing: "border-box",
        top: "-60px",
        position: "relative",
        backgroundColor: "white",
        right: "69%",
        marginLeft: "77%",
        width: "85%",
      }}>
        <Typography padding={"30px"} fontSize={"20px"} fontWeight={"bold"} fontFamily={"sans-serif"} color={"black"}>Donec ut ex sed</Typography>
        <Divider style={{
        width: "340px",
        marginLeft: "30px",
        marginTop: "-10px"
      }} orientation="horizontal" flexItem />
      <Stack alignItems={"center"} margin={"15px 27px"} spacing={1} direction={"row"}>
      <AccountCircleIcon style={{
        fontSize: "25px" ,
        color: "lightgrey"
      }} />
      <Typography color={"#eb3c70"} fontSize={"16px"}>admin</Typography>
      <QueryBuilderIcon style={{
        fontSize: "17px" ,
        color: "#a8a8a8"
      }} />
      <Typography color={"#a8a8a8"} fontSize={"15px"}> July 23, 2020</Typography>
      </Stack>
      </Box>
      </Box>
      <Box margin={"30px"} overflow={"hidden"}>
      <img style={{
         transition: "transform 0.5s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
       width={"500px"} src={image3} alt="image1" />
      <Box sx={{
        boxSizing: "border-box",
        top: "-60px",
        position: "relative",
        backgroundColor: "white",
        right: "69%",
        marginLeft: "77%",
        width: "85%",
      }}>
        <Typography padding={"30px"} fontSize={"20px"} fontWeight={"bold"} fontFamily={"sans-serif"} color={"black"}>Aliquam non nisi sed</Typography>
        <Divider style={{
        width: "340px",
        marginLeft: "30px",
        marginTop: "-10px"
      }} orientation="horizontal" flexItem />
      <Stack alignItems={"center"} margin={"15px 27px"} spacing={1} direction={"row"}>
      <AccountCircleIcon style={{
        fontSize: "25px" ,
        color: "lightgrey"
      }} />
      <Typography color={"#eb3c70"} fontSize={"16px"}>admin</Typography>
      <QueryBuilderIcon style={{
        fontSize: "17px" ,
        color: "#a8a8a8"
      }} />
      <Typography color={"#a8a8a8"} fontSize={"15px"}> July 23, 2020</Typography>
      </Stack>
      </Box>
      </Box>
      </Stack>
        </>
    )
}