import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import About from "./Akka creartions horizontal 2-03-03.png";
import Abt1 from "./sliderAssets/abt1.webp";
import Abt2 from "./sliderAssets/abt2.avif";
import Abt3 from "./sliderAssets/abt3.avif";
import Abt4 from "./sliderAssets/abt4.avif";

export default function AboutConainer() {
  const images = [Abt1, Abt2, Abt3, Abt4];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the current image index in a cyclic manner
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 2 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <Box
      boxShadow="5px 5px 8px 5px rgba(0, 0, 0, 0.1)"
      // flexDirection={{ xs: "column", sm: "row" }}
      maxWidth={650}
      width={"100%"}
      // margin={"0 auto"}
      // display={"flex"}
      justifyContent={"space-between"}
      padding={{ xs: "30px" }}
      gap={"3rem"}
    >
      <Box
        padding={"30px"}
        display={"flex"}
        justifyContent={"center"}
        margin={"0 auto"}
      >
        <img
          src={images[currentImageIndex]}
          style={{
            maxWidth: 800,
            width: "100%",
            maxHeight: 600,
            height: "100%",
          }}
          alt="about"
        />
      </Box>
      <Stack pb={4} spacing={3} margin={"auto"} width={"100%"} maxWidth={500}>
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
      </Stack>
    </Box>
  );
}
