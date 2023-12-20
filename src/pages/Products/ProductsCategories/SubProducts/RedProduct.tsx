import red1 from './RedProducts/RED FLOWER.jpg'
import red2 from './RedProducts/11.jpg'
import red3 from './RedProducts/3.jpg'
import red4 from './RedProducts/4.jpg'
import red5 from './RedProducts/5.jpg'
import red6 from './RedProducts/6.jpg'
import red7 from './RedProducts/7.jpg'
import { useMediaQuery, Breadcrumbs, Typography, Grid, Box } from '@mui/material'
import { useLocation } from 'react-router-dom'


const RedProductImages = [
    {
      name: "Red and Black Base Stripe Print Colour (FC-226)  ", image: red1,
    },
    { name: "Printed Base Stripe Print Red Colour (FC-226)  ", image: red2 },
    {
      name: "Styled Printed Base Stripe Print Red Colour (FC-226)  ", image: red3,
    },
    { 
        name: "Red and Black Base Stripe Print Colurs (FC-226)  ", image: red4
     },
    { 
        name: "Base Stripe Print Colurs in Red (FC-226)  ", image: red5
     },
    { 
        name: "Red and Black Base Stripe styled Design (FC-226)  ", image: red6
     },
     { 
        name: "Red Base Stripe Print Colurs Looking (FC-226)  ", image: red7
     },
  ];
  
export default function RedProduct() {

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
        {RedProductImages.map((item, index) => (
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