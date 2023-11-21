import { Box, Button, Stack, Typography } from "@mui/material";

import About from "../../../assets/about.png";
import { Link } from "react-router-dom";
import routes from "../../../routes/routes";

export default function AboutConainer() {
  return (
    <Box
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
        >
          We provide the newest trends in fashion
        </Typography>
        <Typography fontSize={"15px"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Link to={routes.ABOUT}>
          <Button
            style={{
              color: "black",
              background: "#F6F6F6",
              maxWidth: 160,
              width: "100%",
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            About us
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
