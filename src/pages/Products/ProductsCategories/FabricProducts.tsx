import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import ProductViewPage from "../ProductDetailPage/ProductView";
import ProductsImage from "../ProductsItems";

interface ProductProps {
  currentItems: any;
}
interface Product {
  id: string;
  Image: string;
  name: string;
  producttype: string;
  // Add other properties as needed
}
export default function FabricProducts({ currentItems }: ProductProps) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1.5);
  }, []);

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
    <Box>
      {selectedProduct ? (
        <ProductViewPage
          product={selectedProduct}
          handleGoBack={() => setSelectedProduct(null)}
          relatedProducts={relatedProducts}
        />
      ) : (
        <Box
          style={{
            opacity,
            transition: "opacity 2s ease",
            overflow: "hidden",
            cursor: "pointer",
          }}
          mb={15}
        >
          <Grid marginLeft={"20px"} marginTop={"10px"} container>
            {currentItems.map((item: any, index: any) => (
              <Grid
                columnSpacing={"2rem"}
                rowGap={"4rem"}
                item
                xs={12}
                sm={6}
                md={4}
              >
                <Box
                  onClick={() => handleProductClick(item)}
                  padding={"10px"}
                  height={360}
                  mb={2}
                  mt={2}
                  maxWidth={{ xs: 330, sm: 240, md: 320 }}
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
                      mt={1}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
