import { Box, Stack, Typography } from "@mui/material";

import AboutBanner from "./plainfab.webp";
import AboutConainer from "./AboutContainer/AboutContainer";
import CartImage from "../../common-components/CartImage";
import Testimonials from "../../common-components/Testimonials";

export default function AboutPage() {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${AboutBanner})`,
            backgroundSize: { xs: "contain", sm: "contain", md: "cover" },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "auto",
            // minHeight: { xs: 400, md: 550 },
          }}
          padding={{ sm: "40px 0 60px", md: "200px 0 190px" }}
          textAlign={"center"}
        >
          <Typography color={"white"} fontSize={"75px"} fontWeight={"bold"}>
            {" "}
            {"About Us"}
          </Typography>
        </Box>
      </Box>

      <Box mt={4} display={"flex"} justifyContent={"center"}>
        <AboutConainer />
      </Box>

      <Stack
        bgcolor={"whitesmoke"}
        width={"100%"}
        maxWidth={1519}
        marginTop={"50px"}
        alignItems={"center"}
      >
        <Testimonials />
      </Stack>

      <Stack alignItems={"center"}>
        <CartImage />
      </Stack>
    </Box>
  );
}
