import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import Banner from "./Cotton-fabric-Banner.jpg";
import CartImage from "../../common-components/CartImage";
import ColoursImage from "./colours.avif";
import FabricImage from "./fabric.d.jpg";
import PatternsImage from "./patterns.jpg";
import ProductsCard from "./HomepageProducts/ProductsCard";
import SliderImages from "../../common-components/SliderImages";
import Testimonials from "../../common-components/Testimonials";
import routes from "../../routes/routes";
import { useState } from "react";

const HoverImageText = [
  {
    label: "Fabric",
    image: FabricImage,
    link: routes.FABRIC_PRODUCT,
  },
  {
    label: "Patterns",
    image: PatternsImage,
    link: routes.CLOTHING_PRODUCT,
  },
  {
    label: "Colours",
    image: ColoursImage,
    link: routes.HOME_DECOR_PRODUCT,
  },
];

export default function Homepage() {
  const navigate = useNavigate();
  const handleMoreProducts = () => {
    navigate(routes.PRODUCTS);
    window.scroll(0, 0);
  };

  const [selectedLabel, setSelectedLabel] = useState(null);

  const handleLabelClick = (label: any) => {
    setSelectedLabel(label);
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "90%",
          minHeight: { xs: 400, sm: 350, md: 610 },
          width: "100%",
        }}
      ></Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"3rem"}
        top={{ xs: "8rem", sm: "8rem", md: "10rem" }}
        left={{ xs: "1rem", sm: "3rem", md: "13rem" }}
        position={"absolute"}
        maxWidth={440}
      >
        <Typography
          fontFamily={"Nunito Sans, sans-serif"}
          fontSize={{ xs: "44px", sm: "50px", md: "60px" }}
          lineHeight={1}
          fontWeight={"bold"}
          color={"black"}
        >
          Shoping as <br /> you love
        </Typography>
        <Typography
          color={"black"}
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          maxWidth={350}
          fontFamily={"Nunito Sans, sans-serif"}
        >
          Shop in style, savings guaranteed. Unleash fashion-forward finds.
          Explore now!{" "}
        </Typography>
        <Link to={routes.PRODUCTS}>
          <Button
            sx={{
              borderRadius: "30px",
              backgroundColor: "black",
              color: "white",
              maxWidth: { xs: "120px", sm: "244px", md: 224 },
              width: "100%",
              fontSize: { xs: "10px", sm: "20px", md: "15px" },
              height: { xs: 30, sm: 50, md: 52 },
              textTransform: "capitalize",
              fontWeight: "bold",
              fontFamily: "Nunito Sans, sans-serif",
              ":hover": {
                color: "white",
                backgroundColor: "rgb(11, 120, 189)",
              },
            }}
          >
            See whats's on sale
          </Button>
        </Link>
      </Box>
      <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
        {HoverImageText.map((item, index) => (
          <Box
            onClick={() => handleLabelClick(item.label)}
            sx={{
              position: "relative",
              width: "100%",
              overflow: "hidden",

              "&:hover::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                zIndex: 1,
                transition: ".5s ease",
              },
              "&:hover .overlay": {
                opacity: 1,
                color: "white",
              },
            }}
          >
            <img
              style={
                {
                  opacity: 1,
                  width: "100%",
                  transition: ".5s ease",
                  backfaceVisibility: "hidden",
                  minHeight: { sm: 300, md: 520 },
                  height: "100%",
                } as any
              }
              src={item.image}
              alt=""
            />
            <Box
              className="overlay"
              sx={{
                transition: ".5s ease",
                opacity: 0,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                textAlign: "center",
              }}
            >
              <Typography
                padding={"16px"}
                fontSize={{ xs: "54px", sm: "30px", md: "54px" }}
                color={"white"}
                fontWeight={"bold"}
                whiteSpace={"nowrap"}
                fontFamily={"Nunito Sans, sans-serif"}
              >
                {item.label}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
      <Box
        gap={"3rem"}
        display={"flex"}
        flexDirection={"column"}
        paddingTop={"80px"}
        paddingBottom={"70px"}
        textAlign={"center"}
      >
        <Typography
          fontSize={{ xs: "22px", md: "37px" }}
          fontWeight={600}
          fontFamily={"Nunito Sans, sans-serif"}
        >
          PRODUCTS ON SALE
        </Typography>
        <ProductsCard relatedProduct={selectedLabel} />

        <Box>
          {/* <Link to={routes.PRODUCTS}> */}
          <Button
            onClick={handleMoreProducts}
            style={{
              background: "black",
              color: "white",
              padding: "15px 50px",
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
              fontFamily: "Nunito Sans, sans-serif",
            }}
          >
            More Products
          </Button>
          {/* </Link> */}
        </Box>
      </Box>

      <Testimonials />
      <SliderImages />
      <CartImage />
    </Box>
  );
}
