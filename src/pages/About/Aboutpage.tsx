import { Box, Button, Stack, Typography } from "@mui/material";

import AboutBanner from "../../assets/AboutBanner.jpg";
import CartImage from "../../common-components/CartImage";
import logo from "./akkacreationlogo.png";

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
        <Stack padding={"0 50px"} marginTop={"90px"} alignItems={"center"}>
          <Typography>
            <Typography textAlign={"center"} color={"red"}>
              PARTNER
            </Typography>
            <Typography fontSize={"30px"}> Happy Clients</Typography>
          </Typography>
          <img
            width={"100%"}
            style={{
              maxWidth: "500px",
              marginBottom: "90px",
            }}
            src={logo}
            alt="logo"
          />
        </Stack>
        {/* <Box display={"flex"} justifyContent={"center"}>
          <Typography
            paddingTop={"80px"}
            textAlign={"center"}
            maxWidth={"727px"}
            fontSize={"22px"}
            fontWeight={"600"}
            fontFamily={"sans-serif"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            dolore magna aliqua. Ut enim ad minim veni sit amet Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do dolore magna
            aliqua. Ut enim ad minim veni sit amet
          </Typography>
        </Box> */}

        {/* <BestoreReviews /> */}
        {/* <Box
          padding={"0 50px"}
          marginTop={"95px"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Typography
            paddingBottom={"100px"}
            textAlign={"center"}
            maxWidth={"646px"}
            fontSize={"15px"}
            fontWeight={"500"}
            fontFamily={"sans-serif"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            dolore magna aliqua. Ut enim ad minim veni sit amet Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do dolore magna
            aliqua. Ut enim ad minim veni sit amet
          </Typography>
        </Box> */}
      </Box>
      <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "501px",
            backgroundImage: `url('https://themes.muffingroup.com/be/store2/wp-content/uploads/2020/07/store2-about-bg1.jpg')`,
          }}
          width={{ sm: "100%", md: "50%" }}
        ></Box>
        <Stack
          direction={"column"}
          padding={"0 20px"}
          margin={{ sm: "70px 70px", md: "120px 70px" }}
        >
          <Typography fontSize={"30px"} fontWeight={"600"} color={"black"}>
            Our vission
          </Typography>
          <Typography
            maxWidth={"570px"}
            paddingTop={"25px"}
            fontSize={"16px"}
            color={"black"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Button
            style={{
              backgroundColor: "#F6F6F6",
              color: "black",
              textTransform: "none",
              borderRadius: "20px",
              padding: "10px 20px",
              width: "175px",
              marginTop: "30px",
            }}
          >
            Contact us
          </Button>
        </Stack>
      </Stack>
      <Stack direction={{ xs: "column", sm: "row-reverse", md: "row-reverse" }}>
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "501px",
            float: "left",
            backgroundImage: `url('	https://themes.muffingroup.com/be/store2/wp-content/uploads/2020/07/store2-about-bg2.jpg')`,
          }}
          width={{ sm: "100%", md: "50%" }}
        ></Box>
        <Stack
          padding={"0 20px"}
          direction={"column"}
          margin={{ sm: "70px 70px", md: "120px 70px" }}
        >
          <Typography fontSize={"30px"} fontWeight={"600"} color={"black"}>
            Our vission
          </Typography>
          <Typography
            maxWidth={"570px"}
            paddingTop={"25px"}
            fontSize={"16px"}
            lineHeight={"1.7"}
            color={"black"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Button
            style={{
              backgroundColor: "#F6F6F6",
              color: "black",
              textTransform: "none",
              borderRadius: "20px",
              padding: "10px 20px",
              width: "175px",
              marginTop: "30px",
            }}
          >
            Contact us
          </Button>
        </Stack>
      </Stack>

      <Stack alignItems={"center"}>
        <CartImage />
        {/* <SignUpNewsLetter /> */}
      </Stack>
      {/* <SliderImages /> */}
    </Box>
  );
}
