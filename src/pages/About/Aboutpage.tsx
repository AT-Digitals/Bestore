import {
  Box,
  Divider,
  Stack,
  Typography,
  keyframes,
  styled,
} from "@mui/material";

import AboutBanner from "../../assets/AboutBanner.jpg";
import CartImage from "../../common-components/CartImage";
import image from "../../assets/store2-about-bg1.jpg";
import image1 from "../../assets/store2-about-bg2.jpg";

const TesttmoalProps = [
  {
    image: image,
    discription:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
  },
  {
    image: image1,
    discription:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
  },
  {
    image: image,
    discription:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
  },
];

const testimonialAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const TestimonialBox = styled(Box)`
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease;
  animation: ${testimonialAnimation} 10s linear infinite;
  margin: 0 10px; /* Adjust the margin as needed */
`;

const TestimonialStack = styled(Stack)`
  width: 90%; /* Set your desired fixed width */
  margin: 0 auto;
  overflow: hidden;
`;
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
            minHeight: { xs: 400, md: 550 },
          }}
          padding={{ sm: "40px 0 60px", md: "270px 0 60px" }}
          textAlign={"center"}
        >
          <Typography color={"black"} fontSize={"75px"} fontWeight={"bold"}>
            {" "}
            {"About Us"}
          </Typography>
        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"center"}>
        <Divider
          orientation="horizontal"
          style={{
            width: "340px",
            background: "black",
          }}
        />
      </Box>

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
        <TestimonialStack
          direction={{ xs: "column", sm: "row", md: "row" }}
          marginTop={"50px"}
          spacing={3}
          justifyContent={"center"}
        >
          {TesttmoalProps.map((item, index) => (
            <TestimonialBox
              style={{ transitionDelay: `${index * 0.1}s` }}
              maxWidth={400}
              gap={"3rem"}
              textAlign={"center"}
            >
              <Box width={"100%"}>
                <img
                  src={item.image}
                  style={{
                    borderRadius: "50%",
                    border: "6px solid white",
                  }}
                  width={"100px"}
                  height={"100px"}
                  alt="aboutimage"
                />
              </Box>
              <Box
                width={"100%"}
                sx={{
                  backgroundColor: "#e5e4e4",
                  marginTop: "-46px",
                  paddingBottom: "30px",
                  boxShadow: "0px 0px 7px 0px",
                }}
              >
                <Typography
                  color={"#e53637"}
                  paddingTop={"40px"}
                  fontSize={"35px"}
                  textAlign={"center"}
                >
                  ,,
                </Typography>
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  padding={"0px 15px"}
                  color={"black"}
                  fontSize={"15px"}
                >
                  {item.discription}
                </Typography>
                <Typography
                  marginTop={"20px"}
                  fontWeight={"500"}
                  textAlign={"center"}
                  fontSize={"26px"}
                  color={"#e53637"}
                  fontFamily={"Nunito Sans, sans-serif"}
                >
                  Our Vision
                </Typography>
              </Box>
            </TestimonialBox>
          ))}
        </TestimonialStack>
      </Stack>

      <Stack alignItems={"center"}>
        <CartImage />
      </Stack>
    </Box>
  );
}
