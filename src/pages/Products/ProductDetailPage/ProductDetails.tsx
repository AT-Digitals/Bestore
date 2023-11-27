import { Button, IconButton, Stack } from "@mui/material";
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
      </Stack>
    </Box>
  );
}
