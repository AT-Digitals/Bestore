import { Box, Grid, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import ProductsImage from "../ProductsItems";

export default function HomeDecorProducts() {
  const HomeDecorProducts = ProductsImage.filter(
    (item) => item.producttype === "Homedecor"
  );
  return (
    <Box mb={15}>
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
                padding={"10px"}
                height={360}
                mb={2}
                mt={2}
                maxWidth={{ xs: 330, sm: 240, md: 330 }}
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
                  <Box
                    mb={1}
                    justifyContent={"center"}
                    display={"flex"}
                    gap={"0.5rem"}
                  >
                    <Typography fontSize={"18px"} color={"#EB3C70"}>
                      {item.price}
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
