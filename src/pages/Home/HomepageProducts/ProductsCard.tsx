import { Box, Grid, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import ProductsImag2 from "../../../assets/ProductsImage/ak-p-2.webp";
import ProductsImage1 from "../../../assets/ProductsImage/ak-p1.avif";
import ProductsImage3 from "../../../assets/ProductsImage/fab1.jpg";
import ProductsImage4 from "../../../assets/ProductsImage/fab2.jpg";
import ProductsImage5 from "../../../assets/ProductsImage/home-decor1.webp";

const ProductsImage = [
  {
    name: "Reversible multicolored Kimono jacket with large collar and one size animal design",
    Image: ProductsImage1,
    price: "2116.00",
    type: "not-best selling",
    offerprice: "",
  },
  {
    name: "SHORT fleece JACKET Women's jacket in green and MULTICOLOR cotton patchwork Lined jacket buttoned on the front Women's mid-season jacket",
    Image: ProductsImag2,
    price: "2343.00",
    type: "Best selling",
    offerprice: "",
  },
  {
    name: "Handmade brown and multicolor printed cotton PATCHWORK sold by the meter in 100 cm wide",
    Image: ProductsImage3,
    price: "1700.00",
    type: "Best selling",
    offerprice: "",
  },
  {
    name: "Handmade blue and multicolor printed cotton PATCHWORK sold by the meter in 100 cm wide",
    Image: ProductsImage4,
    price: "1700.00",
    type: "Best selling",
    offerprice: "",
  },
  {
    name: "PATCHWORK CURTAIN black and multicolored custom curtain cotton curtain with solid color lining matching the patchwork",
    Image: ProductsImage5,
    price: "1209.00",
    type: "Best selling",
    offerprice: "",
  },
];
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
                >
                  {item.name}
                </Typography>
                <Box display={"flex"} gap={"0.5rem"} justifyContent={"center"}>
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
                    fontSize={"18px"}
                    fontWeight={"bold"}
                    color={"#EB3C70"}
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
