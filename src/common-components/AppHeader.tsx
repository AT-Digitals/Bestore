import { Box, Button, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import HeaderTabs from "./HeaderTabs";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import logo from "../assets/store2-logo.png";

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
      bgcolor={scrolling ? "#fadd75" : "transparent"}
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
                maxWidth: 210,
                width: "100%",
              }}
            />
          </Box>
          <Stack spacing={2} direction={"row"}>
            <HeaderTabs />

            <Box alignItems={"center"} display={"flex"} gap={"1rem"}>
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
            </Box>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
