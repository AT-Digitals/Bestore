import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import HeaderTabs from "./HeaderTabs";
import { Link } from "react-router-dom";
import logo from "./Akka creartions horizontal 2-03-03.png";
import routes from "../routes/routes";

interface TabsProps {
  activeTab: any;
  setActiveTab: any;
}
export default function AppHeader({ activeTab, setActiveTab }: TabsProps) {
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
            <Link to={routes.HOME}>
              <img
                src={logo}
                alt="app-logo"
                style={{
                  maxWidth: 160,
                  width: "100%",
                }}
              />
            </Link>
          </Box>
          <Stack spacing={2} direction={"row"}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
