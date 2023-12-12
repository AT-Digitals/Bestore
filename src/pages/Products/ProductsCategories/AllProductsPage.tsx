import { Box, Grid, Typography } from "@mui/material";

import ProductViewPage from "../ProductDetailPage/ProductView";
import ProductsImage from "../ProductsItems";
import { useState } from "react";

interface Product {
  id: string;
  Image: string;
  name: string;
  producttype: string;
  // Add other properties as needed
}

export default function AllProductsPage() {
  //   const itemsPerPage = 10;

  //   const currentItems = ProductsImage.slice(indexOfFirstItem, indexOfLastItem);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };
  const relatedProducts = selectedProduct
    ? ProductsImage.filter(
        (item) =>
          item.producttype === selectedProduct.producttype &&
          item.id !== selectedProduct.id
      )
    : [];

  return (
    <Box mb={15}>
      {selectedProduct ? (
        <ProductViewPage
          product={selectedProduct}
          handleGoBack={() => setSelectedProduct(null)}
          relatedProducts={relatedProducts}
        />
      ) : (
        <Grid marginLeft={"20px"} marginTop={"10px"} container>
          {ProductsImage.map((item, index) => (
            <Grid
              columnSpacing={"2rem"}
              rowGap={"4rem"}
              item
              xs={12}
              sm={6}
              md={4}
              style={{ display: "flex" }}
            >
              <Box
                onClick={() => handleProductClick(item)}
                padding={"10px"}
                height={360}
                mb={2}
                mt={2}
                maxWidth={{ xs: 330, sm: 240, md: 330 }}
                width={330}
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
              >
                <img
                  style={{
                    height: "70%",
                    maxWidth: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={item.Image}
                  alt="products"
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"flex-start"}
                >
                  <Typography
                    textAlign={"center"}
                    fontSize={"10px"}
                    fontWeight={"bold"}
                    fontFamily={"Nunito Sans, sans-serif"}
                    mt={1}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
