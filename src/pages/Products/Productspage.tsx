import { Box, Grid, Typography } from "@mui/material";

import BadgeStyle from "../Home/HomepageProducts/BadgeStyle";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import ProductsHeader from "./ProductsHeader";
import ProductsImage from "./ProductsItems";

export default function ProductsPage() {
  const TotalItems = ProductsImage.length;

  return (
    <Box>
      <Box padding={"185px 0 60px"} textAlign={"center"} bgcolor={"#F6F6F6"}>
        <Typography fontSize={"75px"} fontWeight={"bold"}>
          {" "}
          Products
        </Typography>
      </Box>
      <Box bgcolor={"white"} width={"100%"} margin={"0 auto"}>
        <Box
          margin={"0 auto"}
          maxWidth={1160}
          pt={"30px"}
          borderRight={"1px solid lightgray"}
        >
          <ProductsHeader totalItems={TotalItems} />

          <Box mb={15}>
            <Grid container>
              {ProductsImage.map((item, index) => (
                <Grid columnSpacing={"2rem"} item xs={12} sm={12} md={4}>
                  <Box
                    mt={2}
                    maxWidth={260}
                    width={"100%"}
                    gap={"2rem"}
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
                      <Box display={"flex"}>
                        {item.price ? (
                          <CurrencyPoundIcon style={{ color: "#EB3C70" }} />
                        ) : null}

                        <Typography
                          fontSize={"18px"}
                          fontWeight={"bold"}
                          color={"#EB3C70"}
                        >
                          {item.price}.00
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
