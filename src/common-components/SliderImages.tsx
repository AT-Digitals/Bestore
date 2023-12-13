import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductsImage from "../pages/Products/ProductsItems";
import styled from "@emotion/styled";

const TestimonialBox = styled(Box)`
  overflow: visible;
  cursor: pointer;
  transition: transform 0.5s ease;
`;

const TestimonialStack = styled(Stack)`
  width: 90%;
  overflow: hidden;
`;

export default function SliderImages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Display the first two products initially
    setCurrentIndex(0);

    const interval = setInterval(() => {
      // Increment the index to show the next product
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ProductsImage.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack
      direction={"row"}
      spacing={10}
      display={"flex"}
      flexDirection={"row"}
      bgcolor={"whitesmoke"}
      mb={"50px"}
    >
      <TestimonialStack
        maxWidth={800}
        direction={{ xs: "column", sm: "row", md: "row" }}
        marginTop={"50px"}
        spacing={4}
        justifyContent={"center"}
      >
        {ProductsImage.map((item, index) => (
          <TestimonialBox
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            maxWidth={400}
            minHeight={500}
            key={index}
            padding={"10px"}
            gap={"3rem"}
            textAlign={"center"}
          >
            <Box width={"76%"}>
              <img
                src={item.Image}
                style={{
                  border: "6px solid white",
                }}
                width={"200px"}
                height={"200px"}
                alt="aboutimage"
              />
            </Box>
            <Box
              height={"40%"}
              boxShadow={"0px 0px 10px 0px"}
              width={"100%"}
              sx={{
                backgroundColor: "white",
                marginTop: "-46px",
                paddingBottom: "30px",
                boxShadow: "0px 0px 7px 0px #c5b8b8",
                borderRadius: "20px",
                border: "2px solid white",
              }}
            >
              <br />
              <br />
              <br />
              <br />

              <Typography
                fontFamily={"Nunito Sans, sans-serif"}
                padding={"0px 15px"}
                color={"black"}
                fontSize={"15px"}
              >
                {item.name}
              </Typography>
            </Box>
          </TestimonialBox>
        ))}
      </TestimonialStack>
      <Box
        maxWidth={400}
        width="100%"
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        padding={"10px"}
      >
        <Typography
          paddingTop={"110px"}
          fontWeight={"600"}
          color={"#e53637"}
          fontSize={"25px"}
          fontFamily={"Nunito Sans, sans-serif"}
        >
          Our Readymade Products
        </Typography>
        <Typography
          color={"black"}
          fontSize={"20px"}
          fontWeight={"600"}
          fontFamily={"Nunito Sans, sans-serif"}
        >
          Style's is Your's
        </Typography>
        <Stack direction={"row"} spacing={1}>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        </Stack>
        <Button
          style={{
            background: "black",
            color: "white",
          }}
        >
          Click to show more
        </Button>
      </Box>
    </Stack>
  );
}
