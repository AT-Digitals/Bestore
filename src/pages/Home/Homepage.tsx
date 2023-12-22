import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import AboutSection from "./HomepageProducts/AboutSection";
import Banner from "./Cotton-fabric1-Banner.jpg";
import ColoursImage from "./colours.avif";
import FabricImage from "./fabric.d.jpg";
import PatternsImage from "./patterns.jpg";
import ProductsCard from "./HomepageProducts/ProductsCard";
import SliderImages from "../../common-components/SliderImages";
import Testimonials from "../../common-components/Testimonials";
import routes from "../../routes/routes";

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
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const productSectionRef = useRef<HTMLDivElement | null>(null);

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
          style={{
            textShadow: "0px 0px 3px white",
            color: "black",
          }}
        >
          Shoping as <br /> you love
        </Typography>
        <Typography
          style={{
            textShadow: "0px 0px 3px white",
            color: "black",
          }}
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          maxWidth={350}
          fontFamily={"Nunito Sans, sans-serif"}
          fontWeight={"bold"}
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
                backgroundColor: "#e53637",
              },
            }}
          >
            See whats's on sale
          </Button>
        </Link>
      </Box>

      <AboutSection />

      <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
        {HoverImageText.map((item, index) => (
          <Tooltip title={`Click to view ${item.label} Products`} followCursor>
            <Box
              onClick={() => handleLabelClick(item.label)}
              sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                cursor: "pointer",
                height: 480,
                "&:hover::before": {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "90%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  zIndex: 2,
                  transition: ".5s ease",
                },
                "&:hover .overlay": {
                  opacity: 1,
                  color: "white",
                },
                "&.hovered .overlay": {
                  opacity: 1,
                  color: "white",
                },
              }}
              className="hovered"
            >
              <img
                style={{
                  opacity: 1,
                  width: "100%",
                  transition: "transform 0.5s ease",
                  height: "100%",
                  overflow: "hidden",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
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
                  zIndex: 1,
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
          </Tooltip>
        ))}
      </Stack>
      <Box
        ref={productSectionRef}
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
          <Button
            onClick={handleMoreProducts}
            sx={{
              background: "black",
              color: "white",
              padding: "15px 50px",
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
              fontFamily: "Nunito Sans, sans-serif",
              ":hover": {
                color: "white",
                backgroundColor: "#e53637",
              },
            }}
          >
            More Products
          </Button>
        </Box>
      </Box>

      <Testimonials />
      <SliderImages />
    </Box>
  );
}
