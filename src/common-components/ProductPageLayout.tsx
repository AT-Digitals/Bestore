import { Box, BoxProps, Stack, Typography } from "@mui/material";

import Layout from "./Layout";
import { Outlet } from "react-router-dom";
import ProductsLeftSide from "../pages/Products/ProductsCategories/ProductsLeftSide";
import banner from "./Organic-Cotton-Banner.jpg";

export default function ProductPageLayout({ children, ...props }: BoxProps) {
  return (
    <Layout {...props}>
      <Box>
        <Box
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          width={"100%"}
          height={{ sm: undefined, md: 200 }}
          padding={{ sm: "40px 0 60px", md: "140px 0 60px" }}
          textAlign={"center"}
        >
          <Typography
            color={"Black"}
            fontSize={"75px"}
            fontWeight={"bold"}
            fontFamily={"Nunito Sans, sans-serif"}
          >
            {" "}
            Products
          </Typography>
        </Box>
        <Box bgcolor={"white"} width={"100%"} margin={"0 auto"}>
          <Box p={{ xs: "none", sm: "20px" }}>
            <Stack direction={{ xs: "row", sm: "row", md: "row" }}>
              <Box width={{ xs: undefined, sm: "25%", md: "25%" }}>
                <Stack
                  mt={2}
                  spacing={2}
                  maxWidth={{ sm: 160, md: 280 }}
                  gap="1rem"
                >
                  <ProductsLeftSide />
                </Stack>
              </Box>
              <Box width={{ xs: undefined, md: "100%" }}>
                <Box mb={15}>
                  <Outlet />
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
