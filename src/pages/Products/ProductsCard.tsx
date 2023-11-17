import { Box, Stack, Typography } from "@mui/material";

import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import ProductsImag2 from "../../assets/ProductsImage/shoe.jpg";
import ProductsImage1 from "../../assets/ProductsImage/bag.jpg";
import ProductsImage3 from "../../assets/ProductsImage/dress.jpg";
import ProductsImage4 from "../../assets/ProductsImage/cream.jpg";
import ProductsImage5 from "../../assets/ProductsImage/dress1.jpg";

const ProductsImage = [
  { name: "Bag", Image: ProductsImage1, price: 156.0 },
  { name: "Beige shoes", Image: ProductsImag2, price: 189.0 },
  { name: "Coat", Image: ProductsImage3, price: 600 },
  { name: "Creame", Image: ProductsImage4, price: 8.0 },
  { name: "Dress", Image: ProductsImage5, price: 99.0 },
];
export default function ProductsCard() {
  return (
    <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
      {ProductsImage.map((item, index) => (
        <Box key={index} margin={"0 auto"}>
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
          <Typography mt={1}>{item.name}</Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <CurrencyPoundIcon style={{ color: "#EB3C70" }} />

            <Typography color={"#EB3C70"}>{item.price}</Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}
