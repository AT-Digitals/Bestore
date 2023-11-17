import { Box, Typography } from "@mui/material";

import SliderImages from "../../common-components/SliderImages";

export default function ContactPage() {
  return (
    <Box>
      <Box
        margin={" 0 auto"}
        padding={"175px 0 60px"}
        textAlign={"center"}
        maxWidth={1140}
      >
        <Typography fontSize={"80px"} fontWeight={600}>
          {" "}
          Lorem ipsum dolor mit samet et omnia
        </Typography>
      </Box>{" "}
      <SliderImages />
    </Box>
  );
}
