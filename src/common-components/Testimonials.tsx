import { Box, Stack, Typography } from "@mui/material";

import image from "../assets/store2-about-bg1.jpg";
import image1 from "../assets/store2-about-bg2.jpg";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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
export default function Testimonials() {
  return (
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
  );
}
