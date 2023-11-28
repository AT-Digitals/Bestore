import { Button, IconButton, Stack } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ProductsImage from "../ProductsItems";
import SizeSelection from "./SelectSizeOption";
import Typography from "@mui/material/Typography";
import banner from "./pdetail.webp";
import logo from "./Akka creartions horizontal 2-03-03.png";
import routes from "../../../routes/routes";

export default function ProductDetailPage() {
  const { id } = useParams();

  const product = ProductsImage.find((item) => item.id === id?.toString());
  console.log(id, "setSelectedCategory");
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };
  if (!product) {
    return (
      <Box maxWidth={600} margin="auto" mt={5}>
        <Typography variant="h4" gutterBottom>
          Product not found
        </Typography>
      </Box>
    );
  }
  const relatedProducts = ProductsImage.filter(
    (item) => item.producttype === product.producttype && item.id !== id
  );
  const limitedRelatedProducts = relatedProducts.slice(0, 3);

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      bgcolor={"wheat"}
      justifyContent={"center"}
      maxWidth={1519}
      width={"100%"}
    >
      <Stack padding={"60px"} margin={"60px auto"}>
        <Box display={"flex"} justifyContent={"left"}>
          <Link to={routes.PRODUCTS}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </Box>
        <Box margin={"0  auto 3rem"}>
          {" "}
          <img width={300} src={logo} alt="" />
        </Box>
        <Stack
          padding={"60px"}
          margin={"0px auto"}
          spacing={8}
          bgcolor={"white"}
          boxShadow={"0px 0px 15px 0px"}
          maxWidth={1000}
          direction={"row"}
          mb={3}
          width={"100%"}
        >
          <Box>
            <img
              src={product.Image}
              alt=""
              style={{
                maxWidth: 350,
                width: "100%",
                height: "70%",
                minHeight: 250,
              }}
            />
          </Box>
          <Stack spacing={3} maxWidth={400}>
            {/* <Box position={"absolute"} right={"20%"}>
              <span onClick={handleFavoriteClick}>
                {isFavorited ? (
                  <FavoriteIcon
                    style={{
                      color: "red",
                      // top: "10px",
                      right: "15%",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon
                    style={{
                      right: "15%",
                      cursor: "pointer",
                    }}
                  />
                )}
              </span>
            </Box> */}
            <Typography
              fontFamily={"Nunito Sans, sans-serif"}
              fontSize={"20px"}
              gutterBottom
            >
              {product.name}
            </Typography>
            <Typography
              fontFamily={"Nunito Sans, sans-serif"}
              variant="h6"
              color="textSecondary"
              gutterBottom
            >
              ₹{product.price}
            </Typography>
            <Typography
              fontFamily={"Nunito Sans, sans-serif"}
              variant="h6"
              color="textSecondary"
              gutterBottom
            >
              Category: {product.producttype}
            </Typography>

            <Typography fontFamily={"Nunito Sans, sans-serif"}>
              Coat with quilted lining and an adjustable hood. Featuring long
              sleeves with adjustable cuff tabs, adjustable asymmetric hem with
              elastic side tabs and a front zip fastening with placket.
            </Typography>
            {/* <Button
              style={{
                background: "black",
                color: "white",
                fontFamily: "Nunito Sans, sans-serif",
              }}
            >
              ADD TO CART
            </Button>
            <Button
              style={{
                background: "black",
                color: "white",
                fontFamily: "Nunito Sans, sans-serif",
              }}
            >
              Buy Now
            </Button> */}
          </Stack>
        </Stack>

        <Stack margin={"0 auto"}>
          <Typography textAlign={"center"} fontSize={"30px"}>
            Related Products
          </Typography>
          <Stack mt={10} spacing={5} direction={"row"} width={"100%"}>
            {limitedRelatedProducts.map((relatedProduct, index) => {
              console.log("Related Product ID:", relatedProduct.id);
              return (
                <Link
                  to={`/products/${relatedProduct.id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "100%",
                  }}
                >
                  <Box
                    height={350}
                    width={330}
                    mb={2}
                    mt={2}
                    maxWidth={{ xs: 330, sm: 240, md: 330 }}
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
                    padding={"10px"}
                  >
                    <img
                      style={{
                        maxWidth: 330,
                        width: "100%",
                        minHeight: 250,
                        objectFit: "cover",
                        height: "70%",
                      }}
                      src={relatedProduct.Image}
                      alt="products"
                    />

                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"flex-start"}
                    >
                      <Typography
                        fontSize={"10px"}
                        padding={"5px"}
                        textAlign={"center"}
                        fontWeight={"bold"}
                        mt={1}
                        fontFamily={"Nunito Sans, sans-serif"}
                      >
                        {relatedProduct.name}
                      </Typography>
                      <Box
                        justifyContent={"center"}
                        display={"flex"}
                        gap={"0.5rem"}
                      >
                        <Typography
                          fontFamily={"Nunito Sans, sans-serif"}
                          fontSize={"18px"}
                          color={"#EB3C70"}
                        >
                          {relatedProduct.price}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
