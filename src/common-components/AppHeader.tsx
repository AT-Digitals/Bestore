import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import HeaderTabs from "./HeaderTabs";
import logo from "./Akka creartions horizontal 2-03-03.png";

export default function AppHeader() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Stack
      display={{ xs: "none", xl: "flex" }}
      bgcolor={scrolling ? "white" : "transparent"}
      sx={{
        transition: "background-color 0.3s",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Box textAlign={"center"}>
        <Box
          position={scrolling ? undefined : "absolute"}
          width={"98%"}
          marginTop={scrolling ? undefined : "18px"}
          top={scrolling ? "10px" : undefined}
          justifyContent={"space-between"}
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
        >
          <Box pl={"35px"} pt={2} textAlign={"center"}>
            <img
              src={logo}
              alt="app-logo"
              style={{
                maxWidth: 160,
                width: "100%",
              }}
            />
          </Box>
          <Stack spacing={2} direction={"row"}>
            <HeaderTabs />

            {/* <Box alignItems={"center"} display={"flex"} gap={"1rem"}>
              <IconButton>
                <ShoppingBagIcon />
              </IconButton>
              <Button
                style={{
                  textTransform: "capitalize",
                  borderRadius: "40px",
                  color: "white",
                  background: "black",
                  width: "90px",
                  height: "38px",
                }}
              >
                Buy now
              </Button>
            </Box> */}
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
