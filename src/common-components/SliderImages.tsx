import { Box, Stack } from "@mui/material";

import Slide1 from "../assets/SlideImage/slideImage1.jpg";
import Slide2 from "../assets/SlideImage/slideImage2.jpg";
import Slide3 from "../assets/SlideImage/slideImage3.jpg";
import Slide4 from "../assets/SlideImage/slideImage4.jpg";
import Slide5 from "../assets/SlideImage/slideImage5.jpg";
import Slide6 from "../assets/SlideImage/slideImage6.jpg";

const SlideImage = [
  {
    image: Slide1,
  },
  {
    image: Slide2,
  },
  {
    image: Slide3,
  },
  {
    image: Slide4,
  },
  {
    image: Slide5,
  },
  {
    image: Slide6,
  },
];
export default function SliderImages() {
  return (
    <Stack
      maxWidth={1519}
      width={"100%"}
      direction={{ xs: "column", sm: "row", md: "row" }}
    >
      {SlideImage.map((image, index) => (
        <Box width={"100%"} key={index} overflow={"hidden"}>
          <img
            style={
              {
                width: "100%",
                transition: "transform 0.5s ease",
              } as any
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            src={image.image}
            alt="slide"
          />
        </Box>
      ))}
    </Stack>
  );
}
