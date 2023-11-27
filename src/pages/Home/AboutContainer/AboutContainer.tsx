import { Box, Button, Stack, Typography } from "@mui/material";

import About from "../about-home.avif";
import { Link } from "react-router-dom";
import routes from "../../../routes/routes";

export default function AboutConainer() {
  return (
    <Box
      boxShadow="5px 5px 8px 5px rgba(0, 0, 0, 0.1)"
      flexDirection={{ xs: "column", sm: "row" }}
      maxWidth={1140}
      margin={"0 auto"}
      display={"flex"}
      justifyContent={"space-between"}
      padding={{ xs: "30px", sm: "0 40px" }}
      gap={"3rem"}
    >
      <Box margin={"0 auto"}>
        <img
          src={About}
          style={{
            maxWidth: 515,
            width: "100%",
          }}
          alt="about"
        />
      </Box>
      <Stack spacing={8} margin={"auto"} width={"100%"} maxWidth={490}>
        <Typography
          paddingTop={"2rem"}
          lineHeight={1}
          fontWeight={{ xs: "none", md: 600 }}
          fontSize={{ xs: "22px", md: "37px" }}
          fontFamily={"Nunito Sans, sans-serif"}
        >
          We provide the newest trends in fashion
        </Typography>
        <Typography fontSize={"15px"} fontFamily={"Nunito Sans, sans-serif"}>
          Elevate your wardrobe with our versatile denim jeans, transform your
          living room with our geometric patterned rugs, and indulge in cozy
          evenings with our plush fleece blankets.
        </Typography>
        <Link to={routes.ABOUT}>
          <Button
            style={{
              color: "white",
              background: "black",
              maxWidth: 160,
              width: "100%",
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: "bold",
              boxShadow: "0px 0px 15px 0px",
              transition: "transform 0.3s ease",
              fontFamily: "Nunito Sans, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            About us
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
