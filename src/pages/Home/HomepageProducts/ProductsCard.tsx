import { Box, Grid, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import ProductsImag2 from "../../../assets/ProductsImage/shoe.jpg";
import ProductsImage1 from "../../../assets/ProductsImage/bag.jpg";
import ProductsImage3 from "../../../assets/ProductsImage/dress.jpg";
import ProductsImage4 from "../../../assets/ProductsImage/cream.jpg";
import ProductsImage5 from "../../../assets/ProductsImage/dress1.jpg";
import WishtList from "./WishitList";

const ProductsImage = [
  {
    name: "Bag",
    Image: ProductsImage1,
    price: "156.00",
    type: "not-best selling",
    offerprice: "",
  },
  {
    name: "Beige shoes",
    Image: ProductsImag2,
    price: "189.00",
    type: "Best selling",
    offerprice: "199.00",
  },
  {
    name: "Coat",
    Image: ProductsImage3,
    price: "600.00",
    type: "Best selling",
    offerprice: "799.00",
  },
  {
    name: "Creame",
    Image: ProductsImage4,
    price: "8.00",
    type: "Best selling",
    offerprice: "12.00",
  },
  {
    name: "Dress",
    Image: ProductsImage5,
    price: "99.00",
    type: "Best selling",
    offerprice: "139.00",
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
                <WishtList right={0} />
                <Typography fontSize={"21px"} fontWeight={"bold"} mt={1}>
                  {item.name}
                </Typography>
                <Box
                  mb={2}
                  display={"flex"}
                  gap={"0.5rem"}
                  justifyContent={"center"}
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
