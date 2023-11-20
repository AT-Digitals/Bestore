import { Box, Stack, Typography } from "@mui/material";

import BadgeStyle from "./BadgeStyle";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { Link } from "react-router-dom";
import ProductsImag2 from "../../../assets/ProductsImage/shoe.jpg";
import ProductsImage1 from "../../../assets/ProductsImage/bag.jpg";
import ProductsImage3 from "../../../assets/ProductsImage/dress.jpg";
import ProductsImage4 from "../../../assets/ProductsImage/cream.jpg";
import ProductsImage5 from "../../../assets/ProductsImage/dress1.jpg";

const ProductsImage = [
  {
    name: "Bag",
    Image: ProductsImage1,
    price: "156.00",
    type: "not-best selling",
  },
  {
    name: "Beige shoes",
    Image: ProductsImag2,
    price: "189.00",
    type: "Best selling",
  },
  {
    name: "Coat",
    Image: ProductsImage3,
    price: "600.00",
    type: "Best selling",
  },
  {
    name: "Creame",
    Image: ProductsImage4,
    price: "8.00",
    type: "Best selling",
  },
  {
    name: "Dress",
    Image: ProductsImage5,
    price: "99.00",
    type: "Best selling",
  },
];
export default function ProductsCard() {
  return (
    <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
      {ProductsImage.map((item, index) => (
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
            <Box display={"flex"} justifyContent={"center"}>
              <CurrencyPoundIcon style={{ color: "#EB3C70" }} />

              <Typography
                fontSize={"18px"}
                fontWeight={"bold"}
                color={"#EB3C70"}
              >
                {item.price}
              </Typography>
            </Box>
          </Box>
        </Link>
      ))}
    </Stack>
  );
}
