import { Box, Grid, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import ProductsImag2 from "../../../assets/ProductsImage/ak-p-2.webp";
import ProductsImage1 from "../../../assets/ProductsImage/ak-p1.avif";
import ProductsImage3 from "../../../assets/ProductsImage/fab1.jpg";
import ProductsImage4 from "../../../assets/ProductsImage/fab2.jpg";
import ProductsImage5 from "../../../assets/ProductsImage/home-decor1.webp";
import ProductsImage from "../../Products/ProductsItems";


export default function ProductsCard() {
  return (
    <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
      <Grid padding={"0 20px"} ml={0} container spacing={2}>
        {ProductsImage.map((item, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Link
              style={{
                margin: "0 auto",
                textDecoration: "none",
                color: "black",
              }}
              to={""}
            >
              <Box
                height={"100%"}
                mb={2}
                key={index}
                position="relative"
                maxWidth={{ xs: 300, sm: 330, md: 280 }}
                style={{
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.5s ease",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
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
                    height: 260,
                    maxWidth: 260,
                    width: "100%",
                  }}
                  src={item.Image}
                  alt="products"
                />
                <Typography
                  fontSize={"10px"}
                  padding={"5px"}
                  fontWeight={"bold"}
                  mt={1}
                  fontFamily={"Nunito Sans, sans-serif"}
                >
                  {item.name}
                </Typography>
                <Box display={"flex"} gap={"0.5rem"} justifyContent={"center"}>
                  {item.offerprice ? (
                    <Typography
                      fontSize={"18px"}
                      color={"#EB3C70"}
                      fontFamily={"Nunito Sans, sans-serif"}
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
                    fontSize={"18px"}
                    fontWeight={"bold"}
                    color={"#EB3C70"}
                    fontFamily={"Nunito Sans, sans-serif"}
                    style={{
                      textDecoration: item.offerprice ? "underline" : undefined,
                    }}
                  >
                    ₹{item.price}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
