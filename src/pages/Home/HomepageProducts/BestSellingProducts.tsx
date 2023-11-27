import { Box, Grid, Stack, Typography } from "@mui/material";

import BadgeStyle from "./BadgeStyle";
import Bag from "../../../assets/ProductsImage/bag.jpg";
import BeigeShoes from "../../../assets/ProductsImage/shoe.jpg";
import Creame from "../../../assets/ProductsImage/cream.jpg";
import Jacket from "../../../assets/ProductsImage/Products.-best2.jpg";
import { Link } from "react-router-dom";
import Pants from "../../../assets/ProductsImage/Products.-bestjpg.jpg";
import WishtList from "./WishitList";

const ProductsImage = [
  {
    name: "Jacket",
    Image: Jacket,
    price: "299.00",
    offerprice: "",
    type: "not-best selling",
  },
  {
    name: "Beige shoes",
    Image: Bag,
    price: "156.00",
    offerprice: "",

    type: "not-Best selling",
  },
  {
    name: "Creame",
    Image: Creame,
    price: "8.00",
    offerprice: "12.00",
    type: "Best selling",
  },
  {
    name: "Pants",
    Image: Pants,
    price: "55.0",
    offerprice: "65.00",
    type: "Best selling",
  },
  {
    name: "Beige shoes",
    Image: BeigeShoes,
    price: "189.00",
    offerprice: "199.00",

    type: "Best selling",
  },
];
export default function BestSellingProducts() {
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
                mb={1}
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
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  src={item.Image}
                  alt="products"
                />
                {item.type === "Best selling" && <BadgeStyle />}
                <WishtList right={0} />
                <Typography fontSize={"21px"} fontWeight={"bold"} mt={1}  fontFamily={"Nunito Sans, sans-serif"}>
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
                      fontFamily={"Nunito Sans, sans-serif"}
                      style={{
                        opacity: 0.5,
                        textDecoration: "line-through",
                      }}
                    >
                      {" "}
                      £{item.offerprice}
                    </Typography>
                  ) : null}
                  <Typography
                    fontSize={"18px"}
                    fontFamily={"Nunito Sans, sans-serif"}
                    style={{
                      textDecoration: item.offerprice ? "underline" : undefined,
                    }}
                    fontWeight={"bold"}
                    color={"#EB3C70"}
                  >
                    £{item.price}
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
