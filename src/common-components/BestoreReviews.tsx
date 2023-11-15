import { Box, Stack, Typography } from "@mui/material";

import image1 from "../assets/store2-home-icon-5.png";
import image2 from "../assets/store2-home-icon-3.png";
import image3 from "../assets/store2-home-icon-2.png";
import image4 from "../assets/store2-home-icon-1.png";
import image5 from "../assets/store2-home-icon-4.png";

export default function BestoreReviews() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-evenly"}
      marginTop={"140px"}
    >
      <Box>
        <img src={image1} alt="icon 1" />
        <Typography
          fontFamily={"sans-serif"}
          fontWeight={"600"}
          paddingTop={"20px"}
          fontSize={"15px"}
          color={"black"}
          paddingLeft={"17px"}
        >
          30 days
        </Typography>
        <Typography
          fontFamily={"sans-serif"}
          fontWeight={"600"}
          fontSize={"15px"}
          color={"black"}
          paddingLeft={"10px"}
        >
          free return
        </Typography>
      </Box>
      <Box>
        <img src={image2} alt="icon 2" />
        <Typography
          fontFamily={"sans-serif"}
          fontWeight={"600"}
          paddingTop={"20px"}
          fontSize={"15px"}
          color={"black"}
          paddingLeft={"17px"}
        >
          5 ways
        </Typography>
        <Typography
          fontFamily={"sans-serif"}
          fontWeight={"600"}
          fontSize={"15px"}
          color={"black"}
          paddingLeft={"12px"}
        >
          payment
        </Typography>
      </Box>
      <Box>
        <img src={image3} alt="icon 3" />
        <Typography
          fontFamily={"sans-serif"}
          fontWeight={"600"}
          paddingTop={"20px"}
          fontSize={"15px"}
          color={"black"}
          paddingLeft={"17px"}
        >
          Excellent
        </Typography>
        <Typography
          fontFamily={"sans-serif"}
          fontWeight={"600"}
          fontSize={"15px"}
          color={"black"}
          paddingLeft={"19px"}
        >
          support
        </Typography>
      </Box>
      <Box>
        <img src={image4} alt="icon 4" />
        <Typography
          fontFamily={"sans-serif"}
          fontWeight={"600"}
          paddingTop={"20px"}
          fontSize={"15px"}
          color={"black"}
          paddingLeft={"9px"}
        >
          Satisfaction
        </Typography>
        <Typography
          fontFamily={"sans-serif"}
          fontWeight={"600"}
          fontSize={"15px"}
          color={"black"}
          paddingLeft={"15px"}
        >
          guarantee
        </Typography>
      </Box>
      <Box>
        <img src={image5} alt="icon 5" />
        <Typography
          fontFamily={"sans-serif"}
          fontWeight={"600"}
          paddingTop={"20px"}
          fontSize={"15px"}
          color={"black"}
          paddingLeft={"11px"}
        >
          Super fast
        </Typography>
        <Typography
          fontFamily={"sans-serif"}
          fontWeight={"600"}
          fontSize={"15px"}
          color={"black"}
          paddingLeft={"18px"}
        >
          delivery
        </Typography>
      </Box>
    </Stack>
  );
}
