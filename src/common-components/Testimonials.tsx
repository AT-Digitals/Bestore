import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import image from "../assets/store2-about-bg1.jpg";
import image1 from "../assets/store2-about-bg2.jpg";
import image2 from "../assets/1692816605528.jpg";
import styled from "@emotion/styled";

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

export default function Testimonials() {
  const [value, setValue] = React.useState<number | null>(5);
  const [hover, setHover] = React.useState(-1);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const [clickedButton, setClickedButton] = useState("prev");

  const handlePrevClick = () => {
    // Your logic for handling previous click
    setClickedButton("prev");
    setVisibleIndex((prevIndex) =>
      prevIndex - 2 >= 0 ? prevIndex - 2 : TesttmoalProps.length - 2
    );
  };

  const handleNextClick = () => {
    // Your logic for handling next click
    setClickedButton("next");
    setVisibleIndex((prevIndex) =>
      prevIndex + 2 < TesttmoalProps.length ? prevIndex + 2 : 0
    );
  };
  return (
    <Box bgcolor={"whitesmoke"} mb={"50px"}>
      <TestimonialStack
        direction={{ xs: "column", sm: "row", md: "row" }}
        marginTop={"50px"}
        spacing={4}
        justifyContent={"center"}
        width={{ xs: "90%", sm: "90%", md: "95%", lg: "95%" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          padding={"10px"}
          alignItems={{ xs: "center", sm: "center", md: "baseline", lg: "baseline" }}
        >
          <Typography
            paddingTop={"110px"}
            fontWeight={"600"}
            color={"#e53637"}
            fontSize={"25px"}
            fontFamily={"Nunito Sans, sans-serif"}
          >
            Happy Clients
          </Typography>
          <Typography
            color={"black"}
            fontSize={"20px"}
            fontWeight={"600"}
            fontFamily={"Nunito Sans, sans-serif"}
          >
            We Care About Our Customers
            <Typography
              color={"black"}
              fontSize={"20px"}
              fontWeight={"600"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              Experience Too
            </Typography>
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <IconButton
              onClick={handlePrevClick}
              style={{
                backgroundColor: clickedButton === "prev" ? "#e53637" : "white",
                boxShadow:
                  clickedButton === "prev" ? "0px 7px 10px 0px" : "none",
              }}
            >
              <ArrowBackIcon
                style={{
                  color: clickedButton === "prev" ? "white" : "",
                }}
              />
            </IconButton>
            <IconButton
              onClick={handleNextClick}
              style={{
                backgroundColor: clickedButton === "next" ? "#e53637" : "white",
                boxShadow:
                  clickedButton === "next" ? "0px 7px 10px 0px" : "none",
              }}
            >
              <ArrowForwardIcon
                style={{
                  color: clickedButton === "next" ? "white" : "",
                }}
              />
            </IconButton>
          </Stack>
        </Box>
        <Stack
          justifyContent={"center"}
          maxWidth={1000}
          width={"100%"}
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        >
          {TesttmoalProps.slice(visibleIndex, visibleIndex + 2).map(
            (item, index) => (
              <TestimonialBox
                maxWidth={400}
                key={index}
                padding={"10px"}
                gap={"3rem"}
                textAlign={"center"}
                width={"100%"}
                 marginLeft={{ xs: "30px", sm: "30px", md: "0px", lg: "0px" }}
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
                  boxShadow={"0px 0px 10px 0px"}
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "20px",
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
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
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
            )
          )}
        </Stack>
      </TestimonialStack>
    </Box>
  );
}
