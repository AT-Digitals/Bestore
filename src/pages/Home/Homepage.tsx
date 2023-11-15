import { Box, Stack } from "@mui/material";

import Banner from "../../assets/BeStore-banner.jpg";
import Card1 from "../../assets/Card1.jpg";
import Card2 from "../../assets/Card2.jpg";
import Card3 from "../../assets/Card3.jpg";
import SignUpNewsLetter from "../Sign-Up/SignUp";

export default function Homepage() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
          minHeight: 900,
          width: "100%",
        }}
      ></Box>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }}>
        <img
          style={{
            maxWidth: 507,
            height: 500,
            width: "100%",
          }}
          src={Card1}
          alt=""
        />
        <img
          style={{
            maxWidth: 507,
            height: 500,
            width: "100%",
          }}
          src={Card2}
          alt=""
        />
        <img
          style={{
            maxWidth: 507,
            height: 500,
            width: "100%",
          }}
          src={Card3}
          alt=""
        />
      </Stack>
      <SignUpNewsLetter />
    </Box>
  );
}
