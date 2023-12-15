import { Grid, IconButton, Stack } from "@mui/material";
import React, { useEffect } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ProductSelectProps {
  product: any;
  handleGoBack: any;
  relatedProducts: any[];
}
export default function ProductViewPage({
  product,
  handleGoBack,
  relatedProducts,
}: ProductSelectProps) {
  const limitedRelatedProducts = relatedProducts.slice(0, 3);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      bgcolor={"white"}
      justifyContent={"center"}
      maxWidth={1519}
      width={"100%"}
    >
      <Stack pb={5}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"left"}>
          <IconButton onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>{" "}
          <Typography> Go back</Typography>{" "}
        </Box>
        <Box padding={{ xs: "0 20px", sm: "0 50px", md: "0 60px" }}>
          <Stack
            mt={2}
            padding={{ xs: "10px", sm: "20px", md: "60px" }}
            spacing={8}
            bgcolor={"white"}
            boxShadow={"0px 0px 15px 0px"}
            maxWidth={800}
            direction={{ xs: "column", sm: "column", md: "row" }}
            mb={3}
            width={{ xs: "90%", sm: "100%", md: "90%" }}
          >
            <Box>
              <img
                src={product.Image}
                alt=""
                style={{
                  maxWidth: 460,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Stack
              style={{
                marginTop: 0,
              }}
              spacing={3}
              maxWidth={400}
            >
              <Typography
                fontFamily={"Nunito Sans, sans-serif"}
                fontSize={{ xs: "12px", sm: "20px", md: "20px" }}
              >
                {product.name}
              </Typography>

              <Typography
                fontFamily={"Nunito Sans, sans-serif"}
                fontSize={{ xs: "12px", sm: "20px", md: "20px" }}
                color="textSecondary"
                gutterBottom
              >
                Category: {product.producttype}
              </Typography>

              <Typography
                fontSize={{ xs: "12px", sm: "20px", md: "20px" }}
                fontFamily={"Nunito Sans, sans-serif"}
              >
                Coat with quilted lining and an adjustable hood. Featuring long
                sleeves with adjustable cuff tabs, adjustable asymmetric hem
                with elastic side tabs and a front zip fastening with placket.
              </Typography>
            </Stack>
          </Stack>

          <Stack maxWidth={1000} width={"100%"}>
            <Typography
              textAlign={{ md: "center" }}
              fontSize={{ xs: "12px", sm: "15px", md: "30px" }}
            >
              Related Products
            </Typography>
            <Stack
              spacing={7}
              direction={"row"}
              // margin={"0 auto"}
            >
              <Grid container spacing={2} justifyContent="center" mt={2}>
                {limitedRelatedProducts.map((relatedProduct, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Box
                      height={340}
                      maxWidth={{ xs: 330, sm: 240, md: 330 }}
                      mb={2}
                      mt={2}
                      position="relative"
                      style={{
                        overflow: "hidden",
                        cursor: "pointer",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                      padding={"10px"}
                    >
                      <img
                        style={{
                          maxWidth: 330,
                          width: "100%",
                          minHeight: 230,
                          objectFit: "cover",
                          height: "60%",
                        }}
                        src={relatedProduct.Image}
                        alt="products"
                      />
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"flex-start"}
                      >
                        <Typography
                          fontSize={"10px"}
                          padding={"5px"}
                          textAlign={"center"}
                          fontWeight={"bold"}
                          mt={1}
                          fontFamily={"Nunito Sans, sans-serif"}
                        >
                          {relatedProduct.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
