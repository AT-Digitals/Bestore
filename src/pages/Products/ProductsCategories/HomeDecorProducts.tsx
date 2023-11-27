import { Box, Grid, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import ProductsImage from "../ProductsItems";

export default function HomeDecorProducts() {
  const HomeDecorProducts = ProductsImage.filter(
    (item) => item.producttype === "Homedecor"
  );
  return (
    <Box mb={15} padding={"0 40px"}>
      <Grid container>
        {HomeDecorProducts.map((item, index) => (
          <Grid
            columnSpacing={"2rem"}
            rowGap={"4rem"}
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Link
              to={`/products/${item.id}`}
              style={{
                textDecoration: "none",
                color: "black",
                width: "100%",
              }}
            >
              <Box
                height={"90%"}
                mb={2}
                mt={2}
                maxWidth={{ xs: 330, sm: 240, md: 330 }}
                width={"80%"}
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
                    // Ensure the image covers the container without stretching
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
                    fontSize={"10px"}
                    padding={"5px"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                    mt={1}
                  >
                    {item.name}
                  </Typography>
                  <Box
                    justifyContent={"center"}
                    display={"flex"}
                    gap={"0.5rem"}
                  >
                    {item.offerprice ? (
                      <Typography
                        fontSize={"18px"}
                        color={"#EB3C70"}
                        style={{
                          opacity: 0.5,
                          textDecoration: "line-through",
                        }}
                      >
                        {" "}
                        ₹{item.offerprice}
                      </Typography>
                    ) : null}
                    <Typography
                      style={{
                        textDecoration: item.offerprice
                          ? "underline"
                          : undefined,
                      }}
                      fontSize={"18px"}
                      color={"#EB3C70"}
                    >
                      {item.price ? "₹" : undefined} {item.price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
