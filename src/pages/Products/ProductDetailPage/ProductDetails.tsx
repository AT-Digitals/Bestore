import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ProductsImage from "../ProductsItems";
import React from "react";
import Typography from "@mui/material/Typography";
import banner from "./pdetail.webp";
import { useParams } from "react-router-dom";

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
      mt={15}
    >
      <Box mb={3} textAlign={"center"} width={"100%"}>
        <img
          src={product.Image}
          alt=""
          style={{
            maxWidth: 400,
            width: "100%",
          }}
        />

        <Box margin={"0 auto"} maxWidth={500} textAlign={"center"}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography>
            Coat with quilted lining and an adjustable hood. Featuring long
            sleeves with adjustable cuff tabs, adjustable asymmetric hem with
            elastic side tabs and a front zip fastening with placket.
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            ₹{product.price}
          </Typography>
          <Button
            style={{
              background: "black",
              color: "white",
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
