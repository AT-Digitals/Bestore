import {
  Box,
  Breadcrumbs,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

import silk1 from "./poly1.jpeg";
import silk2 from "./poly2.jpeg";
import silk4 from "./poly2.jpeg";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ProductViewPage from "../../ProductDetailPage/ProductView";

interface Product {
  id: string;
  Image: string;
  name: string;
  producttype: string;
}

const PolysterProductsImages = [
  { name: "Golikibar Polyster Blue", 
    Image: silk1,
    description: "Polyster jacket with large collar and one size animal design",
    producttype: "Fabrics",
    id: "1",
},
  { name: "Cotton Polyster", 
    Image: silk2,
    description: "Polyster jacket with large collar and one size animal design",
    producttype: "Fabrics",
    id: "2",
  },
  { name: "Polyster Coloured", 
    Image: silk4,
    description: "Polyster jacket with large collar and one size animal design",
    producttype: "Fabrics",
    id: "3",
  },
];

export default function PolysterProducts() {
  const location = useLocation(); // Get the location object
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const breadcrumbs = [location.pathname.split("/").pop() || ""];

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };
  const relatedProducts = selectedProduct
    ? PolysterProductsImages.filter(
        (item) =>
          item.producttype === selectedProduct.producttype &&
          item.id !== selectedProduct.id
      )
    : [];

  const isMediumScreen = useMediaQuery(
    "(min-width: 900px) and (max-width: 1519px)"
  );

  return (
    <>
     {selectedProduct ? (
        <ProductViewPage
          product={selectedProduct}
          handleGoBack={() => setSelectedProduct(null)}
          relatedProducts={relatedProducts}
        />
      ) : (
        <Box>
      <Breadcrumbs
        style={{
          padding: "30px 30px 0",
          color: "blue",
        }}
      >
        {breadcrumbs.map((crumb, index) => (
          <Typography fontFamily={"Nunito Sans, sans-serif"} key={index}>
            Products / Fabric / {crumb} /
          </Typography>
        ))}
      </Breadcrumbs>
      <Grid
        width={{ xs: "80%", sm: "100%" }}
        marginLeft={"20px"}
        marginTop={"10px"}
        container
      >
        {PolysterProductsImages.map((item, index) => (
          <Grid
            columnSpacing={"2rem"}
            rowGap={"4rem"}
            item
            xs={12}
            sm={6}
            md={isMediumScreen ? 6 : 4}
            style={{ display: "flex" }}
          >
            <Box
              onClick={() => handleProductClick(item)}
              padding={"10px"}
              height={{ xs: 270, sm: 300, md: 360 }}
              mb={2}
              mt={2}
              maxWidth={{ xs: 170, sm: 240, md: 330 }}
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
                style={
                  {
                    // height: { xs: "65%", md: "70%" },
                    height: "70%",

                    maxWidth: "100%",
                    width: "100%",
                    objectFit: "cover",
                  } as any
                }
                src={item.Image}
                alt="products"
              />
              <Box
                mt={3}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
              >
                <Typography
                  textAlign={"center"}
                  fontSize={"16px"}
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
      </Box>
      )}
    </>
  );
}
