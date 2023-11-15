import Banner from "../../assets/BeStore-banner.jpg";
import { Box } from "@mui/material";
import SignUpNewsLetter from "../Sign-Up/SignUp";

export default function Homepage() {
  return (
    <Box>
      <img src={Banner} style={{ maxWidth: "1519px", height: "100%" }} alt="" />

      <SignUpNewsLetter />
    </Box>
  );
}
