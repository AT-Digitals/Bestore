import { Box, Button, IconButton, Stack } from "@mui/material";

import HeaderTabs from "./HeaderTabs";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import logo from "../assets/store2-logo.png";

export default function AppHeader() {
  return (
    <Box textAlign={"center"} bgcolor={"#fadd75"}>
      <Box
        width={"96%"}
        // maxWidth={1300}
        justifyContent={"space-between"}
        pt={1}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        <Box pl={"35px"} pt={1} textAlign={"center"}>
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

          <Box display={"flex"} gap={"1rem"}>
            <IconButton>
              <ShoppingBagIcon />
            </IconButton>
            <Button
              style={{
                textTransform: "capitalize",
                borderRadius: "40px",
                color: "white",
                background: "black",
                width: "120px",
              }}
            >
              Buy now
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
