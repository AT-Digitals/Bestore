import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";

import ProductsImage from "../ProductsItems";
import Sign1 from "./sign1.webp";
import Sign2 from "./sign2.webp";
import Sign3 from "./sign3.webp";

const signatureProducts = [
  { name: "Robe Midi", image: Sign1 },
  { name: "Kaftan Long Chudi", image: Sign2 },
  { name: "Cotton skirt", image: Sign3 },
];

export default function AllProductsPage() {
  const isMediumScreen = useMediaQuery(
    "(min-width: 900px) and (max-width: 1519px)"
  );

  const fabricProducts = ProductsImage.filter(
    (item) => item.producttype === "Fabric"
  );

  const SlicedFabric = fabricProducts.slice(0, 3);
  const patternProducts = ProductsImage.filter(
    (item) => item.producttype === "Patterns"
  );

  const SlicedPatterns = patternProducts.slice(0, 3);

  return (
    <Box mb={15}>
      <Box>
        <Typography
          pl={3}
          fontFamily={"Nunito Sans, sans-serif"}
          fontSize={"30px"}
        >
          Our Signature Products
        </Typography>
        <Box ml={3} width={"10%"} border={"2px solid red"}></Box>
        <Stack>
          <Grid
            mb={3}
            width={{ xs: "80%", sm: "100%" }}
            marginLeft={"20px"}
            marginTop={"10px"}
            container
          >
            {signatureProducts.map((item, index) => (
              <Grid
                columnSpacing={"2rem"}
                rowGap={"4rem"}
                item
                xs={12}
                sm={6}
                md={isMediumScreen ? 6 : 4}
                style={{ display: "flex" }}
              >
                <Box
                  padding={"10px"}
                  height={{ xs: 270, sm: 300, md: 360 }}
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
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"flex-start"}
                  >
                    <Typography
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                      fontFamily={"Nunito Sans, sans-serif"}
                      mt={5}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          {/* <Link
            to={routes.FABRIC_PRODUCT_1}
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Button>show more</Button>
          </Link> */}
        </Stack>
        <Typography
          pl={3}
          fontFamily={"Nunito Sans, sans-serif"}
          fontSize={"30px"}
        >
          Fabric Products
        </Typography>
        <Box ml={3} width={"10%"} border={"2px solid red"}></Box>
        <Stack>
          <Grid
            mb={3}
            width={{ xs: "80%", sm: "100%" }}
            marginLeft={"20px"}
            marginTop={"10px"}
            container
          >
            {SlicedFabric.map((item, index) => (
              <Grid
                columnSpacing={"2rem"}
                rowGap={"4rem"}
                item
                xs={12}
                sm={6}
                md={isMediumScreen ? 6 : 4}
                style={{ display: "flex" }}
              >
                <Box
                  padding={"10px"}
                  height={{ xs: 270, sm: 300, md: 360 }}
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
                        height: "70%",
                        maxWidth: "100%",
                        width: "100%",
                        objectFit: "cover",
                      } as any
                    }
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
                      fontSize={"16px"}
                      fontWeight={"bold"}
                      fontFamily={"Nunito Sans, sans-serif"}
                      mt={5}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Typography
          mt={2}
          pl={3}
          fontFamily={"Nunito Sans, sans-serif"}
          fontSize={"30px"}
        >
          Patterns Products
        </Typography>
        <Box ml={3} width={"10%"} border={"2px solid red"}></Box>

        <Stack>
          <Grid
            mb={3}
            width={{ xs: "80%", sm: "100%" }}
            marginLeft={"20px"}
            marginTop={"10px"}
            container
          >
            {SlicedPatterns.map((item, index) => (
              <Grid
                columnSpacing={"2rem"}
                rowGap={"4rem"}
                item
                xs={12}
                sm={6}
                md={isMediumScreen ? 6 : 4}
                style={{ display: "flex" }}
              >
                <Box
                  padding={"10px"}
                  height={{ xs: 270, sm: 300, md: 360 }}
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
                        height: "70%",
                        maxWidth: "100%",
                        width: "100%",
                        objectFit: "cover",
                      } as any
                    }
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
                      fontSize={"16px"}
                      fontWeight={"bold"}
                      fontFamily={"Nunito Sans, sans-serif"}
                      mt={5}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
      {/* )} */}
    </Box>
  );
}
