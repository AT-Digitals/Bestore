import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import ProductsImage from "../pages/Products/ProductsItems";
import routes from "../routes/routes";
import styled from "@emotion/styled";

const TestimonialBox = styled(Box)`
  overflow: visible;
  transition: transform 0.5s ease, box-shadow 0.5s ease, opacity 0.5s ease;
  opacity: 1;
`;

const TestimonialStack = styled(Stack)`
  width: 90%;
  overflow: hidden;
`;

export default function SliderImages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numImages, setNumImages] = useState(window.innerWidth < 1100 ? 1 : 3);

  const handlePrevClick = () => {
    setTimeout(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex - 1 >= 0 ? currentIndex - 1 : ProductsImage.length - 1
      );
    }, 200); // Adjust the delay as needed
  };

  const handleNextClick = () => {
    // Delay the update of the currentIndex to create a smooth transition
    setTimeout(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % ProductsImage.length
      );
    }, 200); // Adjust the delay as needed
  };

  useEffect(() => {
    const handleResize = () => {
      // Recalculate the number of images to display based on the window width
      const numImages = window.innerWidth < 1100 ? 1 : 3;
      // Update state with the new number of images
      setNumImages(numImages);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Stack
      direction={{ xs: "column", sm: "row", md: "row" }}
      spacing={10}
      display={"flex"}
      flexDirection={"row"}
      bgcolor={"white"}
      mb={"50px"}
    >
      <TestimonialStack
        maxWidth={1000}
        direction={{ xs: "column", sm: "row", md: "row" }}
        marginTop={"50px"}
        padding={{ sm: "50px", md: "30px" }}
        spacing={4}
        justifyContent={"center"}
        width={{ xs: "100%", sm: "100%", md: "90%" }}
      >
        <Stack
          maxWidth={{ xs: 400, sm: 600 }}
          width={{ xs: "85%", sm: "100%" }}
          padding={{ xs: "0 20px", sm: "none" }}
          direction={"row"}
          justifyContent={"center"}
        >
          <IconButton
            style={{
              height: "44px",
              marginTop: "218px",
              backgroundColor: "#e53637",
              boxShadow: "0px 7px 10px 0px",
            }}
            onClick={handlePrevClick}
          >
            <ArrowBackIcon
              style={{
                color: "white",
              }}
            />
          </IconButton>
          {ProductsImage.slice(currentIndex, currentIndex + numImages).map(
            (item, index) => (
              <TestimonialBox
                style={{
                  transform: `scale(${index === 1 ? 1.2 : 1})`,
                  opacity: index === 1 ? 1 : 0.3, // Adjust opacity as needed
                }}
                maxWidth={400}
                minHeight={index === 1 ? "240px" : "240px"}
                key={index}
                padding={{ xs: "0 5px", sm: "30px" }}
                gap={"3rem"}
                textAlign={"center"}
              >
                <Box>
                  <img
                    src={item.Image}
                    style={{
                      border: "6px solid white",
                      borderRadius: "20px",
                    }}
                    width={"200px"}
                    height={"200px"}
                    alt="aboutimage"
                  />
                </Box>
                <Box
                  boxShadow={"0px 0px 10px 0px"}
                  width={"100%"}
                  maxWidth={index === 1 ? "230px" : "230px"}
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
                    pb={"50px"}
                  >
                    {item.name}
                  </Typography>
                </Box>

                <Box
                  style={{
                    boxShadow: index === 1 ? "0px 20px 20px 6px" : "none",
                  }}
                ></Box>
              </TestimonialBox>
            )
          )}

          <IconButton
            onClick={handleNextClick}
            style={{
              height: "44px",
              marginTop: "218px",
              backgroundColor: "#e53637",
              boxShadow: "0px 7px 10px 0px",
            }}
          >
            <ArrowForwardIcon
              style={{
                color: "white",
              }}
            />
          </IconButton>
        </Stack>
      </TestimonialStack>

      <Box
        ml={0}
        maxWidth={400}
        width={{ xs: "90%", sm: "100%" }}
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
          Our Signature Products
        </Typography>
        <Typography
          fontWeight={"600"}
          color={"black"}
          fontSize={"15px"}
          fontFamily={"Nunito Sans, sans-serif"}
        >
          Style encompasses personal expression, reflecting taste in aesthetics,
          fashion, and design, conveying individuality through choices in
          appearance and presentation.
        </Typography>
        <Link to={routes.PRODUCTS}>
          <Button
            onClick={() => window.scroll(0, 0)}
            fullWidth
            sx={{
              background: "black",
              color: "white",
              textTransform: "none",
              ":hover": {
                color: "white",
                backgroundColor: "#e53637",
              },
            }}
          >
            Click to show more
          </Button>
        </Link>
      </Box>
    </Stack>
  );
}
