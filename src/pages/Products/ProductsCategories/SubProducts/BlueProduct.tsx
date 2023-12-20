import { Breadcrumbs, Typography, Grid, Box, useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';
import blue1 from './BlueProducts/1.jpg'
import blue2 from './BlueProducts/2.jpg'
import blue3 from './BlueProducts/3.jpg'
import blue4 from './BlueProducts/4.jpg'
import blue5 from './BlueProducts/5.jpg'
import blue6 from './BlueProducts/6.jpg'
import blue7 from './BlueProducts/7.jpg'

const BlueProductImages = [
    {
      name: "Blue and Red Base Stripe Print Colour (FC-226)  ", image: blue1,
    },
    { name: "Printed Base Stripe Print Blue Colour ", image: blue2 },
    {
      name: "Styled Printed Base Stripe Print Blue Colour (FC-226)  ", image: blue3,
    },
    { 
        name: "Blue and White Base Stripe Print Colours  ", image: blue4,
     },
     { 
        name: "Blue Printed Base Stripe Print Colours  ", image: blue5,
     },
     { 
        name: "Blue Base Stripe Print Colurs Design (FC-226) ", image: blue6,
     },
     { 
        name: "Base Stripe Print Colurs in Blue and White ", image: blue7,
     },
  ];

export default function BlueProduct() {

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
        {BlueProductImages.map((item, index) => (
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
    )
}