import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";

import cotton1 from "./Screenshot 2023-12-13 112032.png";
import cotton2 from "./Screenshot 2023-12-13 112107.png";
import cotton3 from "./Screenshot 2023-12-13 112134.png";
import cotton4 from "./Screenshot 2023-12-13 112212.png";
import { useLocation } from "react-router-dom";

const CottonProductsImages = [
  {
    name: "White and Blue Base Stripe Print Fabric (FC-226)  ",
    image: cotton1,
  },
  { name: "Printed Base Stripe Print Fabric (FC-226)  ", image: cotton2 },
  {
    name: "Styled Printed Base Stripe Print Fabric (FC-226)  ",
    image: cotton3,
  },
  { name: "Pink Base Stripe Print Fabric (FC-226)  ", image: cotton4 },
];

export default function CottonProducts() {
  const location = useLocation(); // Get the location object

  const breadcrumbs = [location.pathname.split("/").pop() || ""];

  return (
    <>
      <Breadcrumbs
        style={{
          padding: "30px 30px 0",
          color: "blue",
        }}
      >
        {breadcrumbs.map((crumb, index) => (
          <Typography
            fontWeight={"bold"}
            fontFamily={"Nunito Sans, sans-serif"}
            key={index}
          >
            Products / Fabric / {crumb} /
          </Typography>
        ))}
      </Breadcrumbs>
      <Grid
        width={{ xs: undefined, sm: "100%" }}
        marginLeft={"20px"}
        marginTop={"10px"}
        container
      >
        {CottonProductsImages.map((item, index) => (
          <Grid
            columnSpacing={"2rem"}
            rowGap={"4rem"}
            item
            xs={12}
            sm={6}
            md={4}
            style={{ display: "flex" }}
          >
            <Box
              // onClick={() => handleProductClick(item)}
              padding={"10px"}
              height={{ xs: 270, sm: 360, md: 400 }}
              mb={2}
              mt={2}
              maxWidth={{ xs: 170, sm: 240, md: 330 }}
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
                style={
                  {
                    // height: { xs: "65%", md: "70%", lg: "70%" },
                    height: "70%",
                    maxWidth: "100%",
                    width: "100%",
                    objectFit: "cover",
                  } as any
                }
                src={item.image}
                alt="products"
              />
              <Box
                mt={3}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
              >
                <Typography
                  textAlign={"center"}
                  fontSize={"13px"}
                  fontWeight={"bold"}
                  fontFamily={"Nunito Sans, sans-serif"}
                  mt={1}
                >
                  {item.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
