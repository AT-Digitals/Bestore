import { Button, Grid, IconButton, Stack } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import ProductsImage from "../ProductsItems";
import React from "react";
import SizeSelection from "./SelectSizeOption";
import Typography from "@mui/material/Typography";
import banner from "./pdetail.webp";
import routes from "../../../routes/routes";

export default function ProductDetailPage() {
  const { id } = useParams();

  // Assuming each product in ProductsImage has a unique id
  const product = ProductsImage.find((item) => item.id === id);
  console.log(id, "setSelectedCategory");

  if (!product) {
    return (
      <Box maxWidth={600} margin="auto" mt={5}>
        <Typography variant="h4" gutterBottom>
          Product not found
        </Typography>
      </Box>
    );
  }
  const relatedProducts = ProductsImage.filter(
    (item) => item.producttype === product.producttype && item.id !== id
  );
  const limitedRelatedProducts = relatedProducts.slice(0, 3);

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      bgcolor={"wheat"}
      justifyContent={"center"}
      maxWidth={1519}
      width={"100%"}
    >
      <Stack padding={"60px"} margin={"100px auto"}>
        <Box display={"flex"} justifyContent={"left"}>
          <Link to={routes.PRODUCTS}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </Box>

        <Stack
          padding={"60px"}
          margin={"0px auto"}
          spacing={8}
          bgcolor={"white"}
          boxShadow={"0px 0px 15px 0px"}
          maxWidth={1000}
          direction={"row"}
          mb={3}
          width={"100%"}
        >
          <Box>
            <img
              src={product.Image}
              alt=""
              style={{
                maxWidth: 350,
                width: "100%",
                height: "70%",
                minHeight: 250,
              }}
            />
          </Box>
          <Stack spacing={3} maxWidth={400}>
            <Typography fontSize={"20px"} gutterBottom>
              {product.name}
            </Typography>

            <Typography variant="h6" color="textSecondary" gutterBottom>
              ₹{product.price}
            </Typography>
            <SizeSelection />

            <Typography>
              Coat with quilted lining and an adjustable hood. Featuring long
              sleeves with adjustable cuff tabs, adjustable asymmetric hem with
              elastic side tabs and a front zip fastening with placket.
            </Typography>

            <Button
              style={{
                background: "black",
                color: "white",
              }}
            >
              ADD TO CART
            </Button>
            <Button
              style={{
                background: "black",
                color: "white",
              }}
            >
              Buy Now
            </Button>
          </Stack>
        </Stack>

        <Stack margin={"0 auto"}>
          <Typography textAlign={"center"} fontSize={"30px"}>
            Related Products
          </Typography>
          <Stack mt={10} spacing={5} direction={"row"} width={"100%"}>
            {limitedRelatedProducts.map((relatedProduct, index) => (
              <Link
                to={`/products/${relatedProduct.id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  width: "100%", // Ensure the link takes the full width of the Grid item
                }}
              >
                <Box
                  height={350} // Set a fixed height for the box
                  width={330} // Set a fixed width for the box
                  mb={2}
                  mt={2}
                  maxWidth={{ xs: 330, sm: 240, md: 330 }}
                  gap={"2rem"}
                  key={index}
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
                      minHeight: 250,
                      objectFit: "cover",
                      height: "70%",
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
                    >
                      {relatedProduct.name}
                    </Typography>
                    <Box
                      justifyContent={"center"}
                      display={"flex"}
                      gap={"0.5rem"}
                    >
                      <Typography fontSize={"18px"} color={"#EB3C70"}>
                        {relatedProduct.price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
