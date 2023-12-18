import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";

import silk1 from "./silk1.jpeg";
import silk2 from "./silk2.jpeg";
import silk3 from "./silk3.jpeg";
import silk4 from "./silk4.jpeg";
import { useLocation } from "react-router-dom";

const SilkProductsImages = [
  { name: "Digital Printed Pure silk ", image: silk1 },
  { name: "Plain Pure silk", image: silk2 },
  { name: "Cotton Silk", image: silk3 },
  { name: "Pastel Lilac silk", image: silk4 },
];

export default function SilkProducts() {
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
          <Typography fontFamily={"Nunito Sans, sans-serif"} key={index}>
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
        {SilkProductsImages.map((item, index) => (
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
              padding={"10px"}
              height={{ xs: 270, sm: 300, md: 400 }}
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
                    // height: { xs: "65%", md: "70%" },
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
