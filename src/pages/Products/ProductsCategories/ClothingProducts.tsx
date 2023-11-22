import { Box, Grid, Typography } from "@mui/material";

import BadgeStyle from "../../Home/HomepageProducts/BadgeStyle";
import ProductsImage from "../ProductsItems";

export default function ClothingCategories() {
  return (
    <Box mb={15} padding={"0 40px"}>
      <Grid container>
        {ProductsImage.map((item, index) => (
          <Grid
            columnSpacing={"2rem"}
            rowGap={"4rem"}
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Box
              mb={2}
              mt={2}
              maxWidth={260}
              width={"100%"}
              gap={"2rem"}
              key={index}
              position="relative"
              style={{ overflow: "hidden", cursor: "pointer" }}
            >
              <img
                style={
                  {
                    height: { xs: 210, sm: 240, md: 260 },
                    maxWidth: { xs: 210, sm: 240, md: 260 },
                    width: "100%",
                    transition: "transform 0.5s ease",
                  } as any
                }
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
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
              >
                <Typography
                  textAlign={"left"}
                  fontSize={"21px"}
                  fontWeight={"bold"}
                  mt={1}
                >
                  {item.name}
                </Typography>
                <Box display={"flex"} gap={"0.5rem"}>
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
                    style={{
                      textDecoration: item.offerprice ? "underline" : undefined,
                    }}
                    fontSize={"18px"}
                    color={"#EB3C70"}
                  >
                    {item.price ? "£" : undefined} {item.price}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
