import { IconButton, Stack } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";

interface ProductSelectProps {
  product: any;
  handleGoBack: any;
  relatedProducts: any[];
}
export default function ProductViewPage({
  product,
  handleGoBack,
  relatedProducts,
}: ProductSelectProps) {
  //   const navigate = useNavigate();

  //   const handleGoBack = () => {
  //     navigate(-1);
  //   };

  const limitedRelatedProducts = relatedProducts.slice(0, 3);

  return (
    <Box
      bgcolor={"white"}
      justifyContent={"center"}
      maxWidth={1519}
      width={"100%"}
    >
      <Stack pb={5}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"left"}>
          <IconButton onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>{" "}
          <Typography> Go back</Typography>{" "}
        </Box>

        <Stack
          padding={"60px"}
          margin={"0px auto"}
          spacing={8}
          bgcolor={"white"}
          boxShadow={"0px 0px 15px 0px"}
          maxWidth={800}
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
              Category: {product.producttype}
            </Typography>

            <Typography fontFamily={"Nunito Sans, sans-serif"}>
              Coat with quilted lining and an adjustable hood. Featuring long
              sleeves with adjustable cuff tabs, adjustable asymmetric hem with
              elastic side tabs and a front zip fastening with placket.
            </Typography>
          </Stack>
        </Stack>

        <Stack margin={"0 auto"}>
          <Typography textAlign={"center"} fontSize={"30px"}>
            Related Products
          </Typography>
          <Stack
            paddingTop={3}
            mt={10}
            spacing={7}
            direction={"row"}
            width={"80%"}
            margin={"0 auto"}
          >
            {limitedRelatedProducts.map((relatedProduct, index) => (
              <Box
                height={340}
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
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
