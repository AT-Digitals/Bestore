import Box from "@mui/material/Box";
import ProductsImage from "../ProductsItems";
import React from "react";
import Typography from "@mui/material/Typography";
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
    <Box maxWidth={600} margin="auto" mt={15}>
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      <img src={product.Image} alt="" />
      <Typography variant="h6" color="textSecondary" gutterBottom>
        {product.price}
        {/* Add relevant information here */}
      </Typography>
      <Typography variant="body1" paragraph>
        {/* Add relevant information here */}
      </Typography>
      {/* Add more product details as needed */}
    </Box>
  );
}
