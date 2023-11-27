import { Box, Button, Stack, Typography } from "@mui/material";

import AboutBanner from "../../assets/AboutBanner.jpg";
import CartImage from "../../common-components/CartImage";
import { Link } from "react-router-dom";
import logo from "./akkacreationlogo.png";
import routes from "../../routes/routes";

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
      <Stack
        mt={"5rem"}
        style={{
          backgroundColor: "#f3f2ee",
        }}
        direction={{ xs: "column", sm: "row", md: "row" }}
      >
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
          margin={{ sm: "70px 70px", md: "50px 70px" }}
        >
          <Typography fontSize={"80px"} color={"#e53637"} textAlign={"center"}>
            ,,
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"600"}
            color={"black"}
            fontFamily={"Nunito Sans, sans-serif"}
          >
            Our Vision
          </Typography>
          <Typography
            maxWidth={"570px"}
            paddingTop={"25px"}
            fontSize={"16px"}
            color={"black"}
            textAlign={"center"}
            fontStyle={"italic"}
            fontFamily={"Nunito Sans, sans-serif"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <Link to={routes.CONTACT}>
              <Button
                style={{
                  backgroundColor: "rgb(229 224 224)",
                  color: "black",
                  textTransform: "none",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  width: "175px",
                  marginTop: "30px",
                  boxShadow: "0px 0px 5px 0px",
                  fontFamily: "Nunito Sans, sans-serif",
                }}
              >
                Contact us
              </Button>
            </Link>
          </Box>
        </Stack>
      </Stack>
      <Stack
        style={{
          backgroundColor: "#f3f2ee",
        }}
        direction={{ xs: "column", sm: "row-reverse", md: "row-reverse" }}
      >
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
          margin={{ sm: "70px 70px", md: "50px 70px" }}
        >
          <Typography fontSize={"80px"} color={"#e53637"} textAlign={"center"}>
            ,,
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={"30px"}
            fontWeight={"600"}
            color={"black"}
            fontFamily={"Nunito Sans, sans-serif"}
          >
            Our Vision
          </Typography>
          <Typography
            maxWidth={"570px"}
            paddingTop={"25px"}
            fontSize={"16px"}
            lineHeight={"1.7"}
            color={"black"}
            textAlign={"center"}
            fontStyle={"italic"}
            fontFamily={"Nunito Sans, sans-serif"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <Link to={routes.CONTACT}>
              <Button
                style={{
                  backgroundColor: "rgb(229 224 224)",
                  color: "black",
                  textTransform: "none",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  width: "175px",
                  marginTop: "30px",
                  boxShadow: "0px 0px 5px 0px",
                  fontFamily: "Nunito Sans, sans-serif",
                }}
              >
                Contact us
              </Button>
            </Link>
          </Box>
        </Stack>
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
