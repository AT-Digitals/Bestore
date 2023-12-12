import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import image from "../assets/store2-about-bg1.jpg";
import image1 from "../assets/store2-about-bg2.jpg";
import image2 from "../assets/1692816605528.jpg";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const testimonialAnimation = keyframes`
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// `;

const TestimonialBox = styled(Box)`
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease;
  
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
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: image1,
    discription:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: image2,
    discription:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, they don't just come back, they don't simply recommend you",
  },
  
];

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

// function getLabelText(value: number) {
//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }
export default function Testimonials() {
  const [value, setValue] = React.useState<number | null>(5);
  const [hover, setHover] = React.useState(-1);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleNextClick = () => {
    // Increment the visibleIndex to show the next two testimonials
    setVisibleIndex((prevIndex) => (prevIndex + 2 < TesttmoalProps.length ? prevIndex + 2 : 0));
  };

  const handlePrevClick = () => {
    // Decrement the visibleIndex to show the previous two testimonials
    setVisibleIndex((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : TesttmoalProps.length - 2));
  };
  return (
    <>
    <TestimonialStack
      direction={{ xs: "column", sm: "row", md: "row" }}
      marginTop={"50px"}
      justifyContent={"center"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
       <Typography paddingTop={"110px"} fontWeight={"600"} paddingRight={"264px"} color={"#e53637"} fontSize={"25px"}  fontFamily={"Nunito Sans, sans-serif"}>Happy Clients</Typography>
      <Typography color={"black"} fontSize={"20px"} fontWeight={"600"} fontFamily={"Nunito Sans, sans-serif"}>We Care About Our Customers<Typography color={"black"} fontSize={"20px"} fontWeight={"600"} fontFamily={"Nunito Sans, sans-serif"}>Experience Too</Typography></Typography>
      <Stack direction={"row"} spacing={1}>
      <IconButton onClick={handlePrevClick} style={{
        border: "1px solid #e53637",
        backgroundColor: "#e53637"
      }}>
      <ArrowBackIcon style={{
        color: "white"
      }} />
      </IconButton>
      <IconButton onClick={handleNextClick} style={{
        border: "1px solid #e53637",
        backgroundColor: "#e53637"
      }}>
      <ArrowForwardIcon style={{
        color: "white"
      }} />
      </IconButton>
      </Stack>
      </Box>
      {TesttmoalProps.slice(visibleIndex, visibleIndex + 2).map((item, index) => (
        <TestimonialBox
          // style={{ transitionDelay: `${index * 0.1}s` }}
          maxWidth={400}
          key={index}
          padding={"10px"}
          gap={"3rem"}
          textAlign={"center"}
          // style={{ display: index === visibleIndex ? 'block' : 'none' }}
        >
          <Box width={"76%"}>
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
            width={"76%"}
          
            sx={{
              backgroundColor: "white",
              marginTop: "-46px",
              paddingBottom: "30px",
              boxShadow: "0px 0px 7px 0px #c5b8b8",
              borderRadius: "20px",
              border: "2px solid white",
            }}
          >
            <Typography
              color={"#e53637"}
              fontSize={"76px"}
              textAlign={"center"}
            >
              ,,
            </Typography>
            <Typography
              fontFamily={"Nunito Sans, sans-serif"}
              padding={"0px 15px"}
              color={"black"}
              fontSize={"20px"}
            >
              {item.discription}
            </Typography>
            <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: "20px"
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={3}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {/* {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )} */}
    </Box>
            <Typography
              marginTop={"20px"}
              fontWeight={"600"}
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
    </>
  );
}
