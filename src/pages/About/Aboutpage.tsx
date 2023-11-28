import { Box, Button, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import AboutBanner from "../../assets/AboutBanner.jpg";
import CartImage from "../../common-components/CartImage";
import logo from "./akkacreationlogo.png";
import image from '../../assets/store2-about-bg1.jpg'
import image1 from '../../assets/store2-about-bg2.jpg'

export default function AboutPage() {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${AboutBanner})`,
            backgroundSize: { xs: "contain", sm: "contain", md: "cover" },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "auto",
            minHeight: { xs: 400, md: 900 },
          }}
        ></Box>
      </Box>
      <Typography fontWeight={"600"} marginTop={"30px"} color={"balck"} textAlign={"center"} fontSize={"35px"}>TESTIMONIALS</Typography>
      <Box display={"flex"} justifyContent={"center"}>
      <Divider orientation="horizontal" style={{
        width: "340px",
        background: "black"
      }} />
      </Box>
      <Stack direction={"row"} marginTop={"50px"} spacing={3} justifyContent={"center"}>
        <Box textAlign={"center"}>
          <Box>
      <img src={image} style={{
          borderRadius: "50%",
          border: "6px solid white"
        }} width={"100px"} height={"90px"} alt="image" />
       </Box>
       <Box sx={{
        width: "300px",
        height: "280px",
        backgroundColor: "#e5e4e4",
        marginTop: "-46px",
        paddingBottom: "30px",
       }}>
        <Typography color={"#e53637"} paddingTop={"40px"} fontSize={"35px"} textAlign={"center"}>,,</Typography>
        <Typography fontFamily={"Nunito Sans, sans-serif"} padding={"0px 15px"} color={"black"} fontSize={"15px"}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
       </Typography>
       <Typography marginTop={"20px"} fontWeight={"500"} textAlign={"center"} fontSize={"26px"}  color={"#e53637"} fontFamily={"Nunito Sans, sans-serif"}>Vision</Typography>
       </Box>
       </Box>
       <Box textAlign={"center"}>
          <Box>
      <img src={image1} style={{
          borderRadius: "50%",
          border: "6px solid white"
        }} width={"100px"} height={"90px"} alt="image" />
       </Box>
       <Box sx={{
        width: "300px",
        height: "280px",
        backgroundColor: "#e5e4e4",
        marginTop: "-46px",
        paddingBottom: "30px",
       }}>
        <Typography color={"#e53637"} paddingTop={"40px"} fontSize={"35px"} textAlign={"center"}>,,</Typography>
        <Typography fontFamily={"Nunito Sans, sans-serif"} padding={"0px 15px"} color={"black"} fontSize={"15px"}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
       </Typography>
       <Typography marginTop={"20px"} fontWeight={"500"} textAlign={"center"} fontSize={"26px"}  color={"#e53637"} fontFamily={"Nunito Sans, sans-serif"}>Vision</Typography>
       </Box>
       </Box>
      </Stack>
      
      <Stack padding={"0 50px"} marginTop={"50px"} alignItems={"center"}>
        <Typography>
          <Typography
            fontFamily={"Nunito Sans, sans-serif"}
            textAlign={"center"}
            color={"red"}
          >
            PARTNER
          </Typography>
          <Typography fontSize={"30px"} fontFamily={"Nunito Sans, sans-serif"}>
            {" "}
            Happy Clients
          </Typography>
        </Typography>
        <img
          width={"100%"}
          style={{
            maxWidth: "500px",
          }}
          src={logo}
          alt="logo"
        />
      </Stack>

      <Stack alignItems={"center"}>
        <CartImage />
      </Stack>
    </Box>
  );
}
