import {
  Box,
  Breadcrumbs,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

import recycledcotton1 from "./RecycledCotton/1.jpg";
import recycledcotton10 from "./RecycledCotton/shalimar 150 cm.jpg";
import recycledcotton2 from "./RecycledCotton/2.jpg";
import recycledcotton3 from "./RecycledCotton/3.jpg";
import recycledcotton4 from "./RecycledCotton/4.jpg";
import recycledcotton5 from "./RecycledCotton/5.jpg";
import recycledcotton6 from "./RecycledCotton/6.jpg";
import recycledcotton7 from "./RecycledCotton/7.jpg";
import recycledcotton8 from "./RecycledCotton/BIG DESIGN.jpg";
import recycledcotton9 from "./RecycledCotton/red shalimar 1 copy.jpg";
import { useLocation } from "react-router-dom";

const LycocellProductImages = [
  {
    name: "OC MUSLIN",
    image: recycledcotton1,
  },
  { name: "OC D.GAUZE", image: recycledcotton2 },
  {
    name: "OC D.GAUZE",
    image: recycledcotton3,
  },
  {
    name: "OC VOILE",
    image: recycledcotton4,
  },
  {
    name: "OC CAMBRIC/BATISTE",
    image: recycledcotton5,
  },
  {
    name: "OC POPLIN",
    image: recycledcotton6,
  },
  {
    name: "OC POPLIN",
    image: recycledcotton7,
  },
  {
    name: "OC CANVAS",
    image: recycledcotton9,
  },
  {
    name: "OC DUCK/DRILL",
    image: recycledcotton10,
  },
  {
    name: "OC SATEEN",
    image: recycledcotton8,
  },
];

export default function RecycledCotton() {
  const location = useLocation(); // Get the location object

  const breadcrumbs = [location.pathname.split("/").pop() || ""];

  const isMediumScreen = useMediaQuery(
    "(min-width: 900px) and (max-width: 1519px)"
  );
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
            Products / Colours / {crumb} /
          </Typography>
        ))}
      </Breadcrumbs>
      <Grid
        width={{ xs: "80%", sm: "100%" }}
        marginLeft={"20px"}
        marginTop={"10px"}
        container
      >
        {LycocellProductImages.map((item, index) => (
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
              height={{ xs: 270, sm: 360, md: 400, lg: 360 }}
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
                  fontSize={"16px"}
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
