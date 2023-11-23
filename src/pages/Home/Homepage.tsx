import { Box, Button, Stack, Typography } from "@mui/material";

import AboutConainer from "./AboutContainer/AboutContainer";
import Banner from "./homepage-banner.jpg";
import Banner1 from "./homepage-banner1.jpg";
import BannerCircule from "../../assets/banner-circule.png";
import BestSellingProducts from "./HomepageProducts/BestSellingProducts";
import Card1 from "./home-image1.png";
import Card2 from "./home-image3.png";
import Card3 from "./home-image2.png";
import CartImage from "../../common-components/CartImage";
import { Link } from "react-router-dom";
import ProductsCard from "./HomepageProducts/ProductsCard";
import SignUpNewsLetter from "./Sign-Up/SignUpwithLetter";
import SliderImages from "../../common-components/SliderImages";
import routes from "../../routes/routes";

const HoverImageText = [
  {
    label: "Clothing",
    image: Card1,
  },
  {
    label: "Home Decor",
    image: Card2,
  },
  {
    label: "Fabric",
    image: Card3,
  },
];

export default function Homepage() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "90%",
          minHeight: { xs: 400, sm: 690, md: 550 },
          width: "100%",
        }}
      ></Box>
      <Box position={"absolute"} right={"7%"} top={"44.5rem"}>
        <img
          width={195}
          height={196}
          src={BannerCircule}
          alt="banner circule"
          style={
            {
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
        />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"3rem"}
        top={{ xs: "8rem", sm: "8rem", md: "8rem" }}
        left={{ xs: "1rem", sm: "3rem", md: "5rem" }}
        position={"absolute"}
        maxWidth={440}
      >
        <Typography
          fontFamily={`"Lato", Helvetica, Arial, sans-serif`}
          fontSize={{ xs: "44px", sm: "82px", md: "60px" }}
          lineHeight={1}
          fontWeight={"bold"}
          color={"white"}
        >
          Shoping as <br /> you love
        </Typography>
        <Typography
          color={"white"}
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          maxWidth={350}
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
            }}
          >
            See whats's on sale
          </Button>
        </Link>
      </Box>
      <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
        {HoverImageText.map((item, index) => (
          <Box
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
              style={{
                opacity: 1,
                maxWidth: "100%",
                height: "520px",
                transition: ".5s ease",
                backfaceVisibility: "hidden",
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
              }}
            >
              <Typography
                padding={"16px"}
                fontSize={"54px"}
                color={"white"}
                fontWeight={"bold"}
                whiteSpace={"nowrap"}
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
        <Typography fontSize={{ xs: "22px", md: "37px" }} fontWeight={600}>
          Products on sale
        </Typography>
        <ProductsCard />
        <Typography fontWeight={600} fontSize={{ xs: "22px", md: "37px" }}>
          Best selling products
        </Typography>
        <BestSellingProducts />
        <Box>
          <Link to={routes.PRODUCTS}>
            <Button
              style={{
                background: "#7F7F7F",
                color: "white",
                padding: "15px 50px",
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              More products
            </Button>
          </Link>
        </Box>
      </Box>

      {/* <CustomerTarings /> */}

      <AboutConainer />
      {/* <BestoreReviews /> */}

      <CartImage />

      <SignUpNewsLetter />

      <SliderImages />
    </Box>
  );
}
