import { Box, Button, Stack, Typography } from "@mui/material";

import About from "./about-home.avif";
import routes from "../../../routes/routes";
import { useNavigate } from "react-router-dom";

export default function AboutConainer() {
  const navigate = useNavigate();
  const handleAboutPage = () => {
    navigate(routes.ABOUT);
    window.scroll(0, 0);
  };
  return (
    <Box
      boxShadow="5px 5px 8px 5px rgba(0, 0, 0, 0.1)"
      flexDirection={{ xs: "column", sm: "row" }}
      maxWidth={1140}
      margin={"0 auto"}
      display={"flex"}
      justifyContent={"space-between"}
      padding={{ xs: "30px" }}
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
      <Stack spacing={3} margin={"auto"} width={"100%"} maxWidth={490}>
        <Typography
          paddingTop={"2rem"}
          lineHeight={1}
          fontWeight={{ xs: "none", md: 600 }}
          fontSize={{ xs: "22px", md: "37px" }}
          fontFamily={"Nunito Sans, sans-serif"}
        >
          The story of AKKA CREATION in Mamallapuram
        </Typography>
        <Typography fontSize={"15px"} fontFamily={"Nunito Sans, sans-serif"}>
          Akka! <br />
          The power of colors! <br /> India's fashion for women sure of them and
          full of joie de vivre. <br /> Made by women for women up to size 54 or
          over .....
          <br /> Sensual, colorful and of high quality. Each piece is unique and
          the AKKA look is <br /> recognizable. <br /> Fashion Mamallapuram, a
          small town in the Bay of Bengal that belongs to the world cultural
          heritage. <br /> In 2005, after the devastating tsunami, Véronique
          Thomassin had the idea to make fashion and accessories there and thus
          provide training for women and girls in the village, create jobs and
          allow better living conditions <br /> An idea that has been
          successfully developed and which, thanks to the commitment of women,
          spreads the beauty of the colors of India everywhere in the world{" "}
          <br /> Immerse yourself in this world full of colors and joie de
          vivre. <br /> We welcome you on our site, and also in our shop and our
          workshop in Mamallapuram.
        </Typography>
        <Button
          onClick={handleAboutPage}
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
      </Stack>
    </Box>
  );
}