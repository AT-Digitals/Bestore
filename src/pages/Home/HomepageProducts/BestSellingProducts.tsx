import { Box, Grid, Stack, Typography } from "@mui/material";

import BadgeStyle from "./BadgeStyle";
import Bag from "../../../assets/ProductsImage/bag.jpg";
import BeigeShoes from "../../../assets/ProductsImage/shoe.jpg";
import Creame from "../../../assets/ProductsImage/cream.jpg";
import Jacket from "../../../assets/ProductsImage/Products.-best2.jpg";
import { Link } from "react-router-dom";
import Pants from "../../../assets/ProductsImage/Products.-bestjpg.jpg";

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
      <Grid container spacing={2}>
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
                key={index}
                margin={"0 auto"}
                position="relative"
                style={{ overflow: "hidden", cursor: "pointer" }}
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
                <Typography fontSize={"21px"} fontWeight={"bold"} mt={1}>
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
                      £{item.offerprice}
                    </Typography>
                  ) : null}
                  <Typography
                    fontSize={"18px"}
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
