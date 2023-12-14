import { Box, Grid, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import ProductsImage from "../../Products/ProductsItems";

interface Prosp {
  relatedProduct: any;
}
export default function ProductsCard({ relatedProduct }: Prosp) {
  const filteredProducts = ProductsImage.filter((item) =>
    relatedProduct ? item.producttype === relatedProduct : true
  );
  const displayedProducts = filteredProducts.slice(0, 5);

  return (
    <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
      <Grid padding={"0 20px"} ml={0} container spacing={2}>
        {displayedProducts.map((item, index) => (
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
                borderRadius={"20px"}
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
                    maxWidth: 280,
                    width: "100%",
                  }}
                  src={item.Image}
                  alt="products"
                />
                <Typography
                  fontSize={"13px"}
                  padding={"5px"}
                  fontWeight={"bold"}
                  mt={1}
                  fontFamily={"Nunito Sans, sans-serif"}
                >
                  {item.name}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
