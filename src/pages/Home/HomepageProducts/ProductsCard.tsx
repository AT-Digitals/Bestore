import { Box, Grid, Stack, Typography } from "@mui/material";

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
      <Grid
        width={"100%"}
        justifyContent={"center"}
        ml={0}
        container
        spacing={2}
      >
        {displayedProducts.map((item, index) => (
          <Grid
            width={"100%"}
            maxWidth={330}
            item
            xs={12}
            sm={6}
            md={2.4}
            key={index}
          >
            <Box
              borderRadius={"20px"}
              height={"100%"}
              mb={2}
              key={index}
              position="relative"
              maxWidth={{ xs: 300, sm: 330, md: 280 }}
              width={"100%"}
              style={{
                overflow: "hidden",
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
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
