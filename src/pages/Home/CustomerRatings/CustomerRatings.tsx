import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import CustomerViews from "../../../assets/customer-views-bg.png";

export default function CustomerTarings() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 130) {
        setCount((prevCount: any) => prevCount + 1);
      }
      if (count2 < 4) {
        setCount2((prevCount: any) => prevCount + 1);
      }
      if (count3 < 10) {
        setCount3((prevCount: any) => prevCount + 1);
      }
    }, 5);

    return () => clearInterval(intervalId);
  }, [count, count2, count3]);
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${CustomerViews})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "100px",
          paddingBottom: "80px",
        }}
      >
        <Stack
          maxWidth={1140}
          margin={"0 auto"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={{ sm: "80%", md: "80%", lg: "55%" }}
          padding={"0 70px"}
          direction={{ xs: "column", sm: "row", md: "row" }}
        >
          <Box textAlign={"center"}>
            <Typography fontSize={"69px"} fontWeight={"bold"}>
              {count2}M
            </Typography>
            <Typography fontSize={"15px"}>Lorem ipsum dolor</Typography>
          </Box>{" "}
          <Box textAlign={"center"}>
            <Typography fontSize={"69px"} fontWeight={"bold"}>
              {count}K
            </Typography>
            <Typography fontSize={"15px"}>Sid es omnia es</Typography>
          </Box>
          <Box textAlign={"center"}>
            <Typography fontSize={"69px"} fontWeight={"bold"}>
              {count3}
            </Typography>
            <Typography fontSize={"15px"}>Quanta fermium damus</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
