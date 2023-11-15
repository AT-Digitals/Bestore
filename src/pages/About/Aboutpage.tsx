import AboutBanner from "../../assets/AboutBanner.jpg";
import { Box } from "@mui/material";

export default function AboutPage() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${AboutBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
          minHeight: 900,
        }}
      ></Box>
    </Box>
  );
}
