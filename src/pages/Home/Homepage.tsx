import { Box, Button, Stack, Typography } from "@mui/material";

import Banner from "../../assets/BeStore-banner.jpg";
import BannerCircule from "../../assets/banner-circule.png";
import Card1 from "../../assets/Card1.jpg";
import Card2 from "../../assets/Card2.jpg";
import Card3 from "../../assets/Card3.jpg";
import HomeCart from "../../assets/home-cart.png";
import SignUpNewsLetter from "./Sign-Up/SignUpwithLetter";

export default function Homepage() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
          minHeight: 900,
          width: "100%",
        }}
      ></Box>
      <Box position={"absolute"} right={"7%"} top={"44.5rem"}>
        <img
          width={195}
          height={196}
          src={BannerCircule}
          alt="banner circule"
        />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"3rem"}
        top={"13rem"}
        left={{ xs: 0, sm: 0, md: "12rem" }}
        position={"absolute"}
        maxWidth={500}
      >
        <Typography
          fontFamily={`"Lato", Helvetica, Arial, sans-serif`}
          fontSize={{ xs: "40px", sm: "40px", md: "90px" }}
          lineHeight={1}
          fontWeight={"bold"}
        >
          Shoping as <br /> you love
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit sed do
          eius
        </Typography>
        <Button
          style={{
            borderRadius: "30px",
            backgroundColor: "#EB3C70",
            color: "white",
            maxWidth: 224,
            width: "100%",
            height: 52,
          }}
        >
          See whats's on sale
        </Button>
      </Box>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }}>
        <img
          style={{
            maxWidth: 507,
            height: 560,
            width: "100%",
          }}
          src={Card1}
          alt=""
        />
        <img
          style={{
            maxWidth: 507,
            height: 560,
            width: "100%",
          }}
          src={Card2}
          alt=""
        />
        <img
          style={{
            maxWidth: 507,
            height: 560,
            width: "100%",
          }}
          src={Card3}
          alt=""
        />
      </Stack>
      <Box paddingTop={"80px"} paddingBottom={"70px"} textAlign={"center"}>
        <Typography fontSize={"37px"}>Products on sale</Typography>
      </Box>
      <Box style={{ width: "100%" }}>
        <Box style={{ margin: "auto", maxWidth: 350, marginBottom: "-4px" }}>
          <img
            style={{
              width: "100%",
              height: "auto",
            }}
            src={HomeCart}
            alt="HomeCart"
          />
        </Box>
      </Box>
      <SignUpNewsLetter />
    </Box>
  );
}
