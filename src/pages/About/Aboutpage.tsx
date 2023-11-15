import { Box, Button, Stack, Typography } from "@mui/material";

import AboutBanner from "../../assets/AboutBanner.jpg";
import BestoreReviews from "../../common-components/BestoreReviews";
import bags from "../../assets/store2-home-bags.png";
import logo from "../../assets/store2-about-brands.png";

export default function AboutPage() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#f4f4f4",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${AboutBanner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100%",
            minHeight: 900,
          }}
        ></Box>
        <Box display={"flex"} justifyContent={"center"}>
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
        </Box>

        <BestoreReviews />
        <Box marginTop={"95px"} display={"flex"} justifyContent={"center"}>
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
        </Box>
      </Box>
      <Stack direction={"row"}>
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "501px",
            backgroundImage: `url('https://themes.muffingroup.com/be/store2/wp-content/uploads/2020/07/store2-about-bg1.jpg')`,
          }}
          width={"50%"}
        ></Box>
        <Stack direction={"column"} margin={"120px 70px"}>
          <Typography fontSize={"30px"} fontWeight={"600"} color={"black"}>
            Lorem ipsum quam pertroni
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
      <Stack direction={"row-reverse"}>
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "501px",
            float: "left",
            backgroundImage: `url('	https://themes.muffingroup.com/be/store2/wp-content/uploads/2020/07/store2-about-bg2.jpg')`,
          }}
          width={"50%"}
        ></Box>
        <Stack direction={"column"} margin={"120px 50px"}>
          <Typography fontSize={"30px"} fontWeight={"600"} color={"black"}>
            Lorem ipsum quam pertroni
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
      <Stack marginTop={"90px"} alignItems={"center"}>
        <img width={"900px"} src={logo} alt="logo" />
      </Stack>
      <Stack alignItems={"center"} marginTop={"90px"}>
        <img width={"400px"} src={bags} alt="bags" />
      </Stack>
    </Box>
  );
}
