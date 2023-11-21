import AppHeader from "../AppHeader";
import { Box } from "@mui/material";
import MobileHeader from "../AppHeader/MobileHeader";

export default function Header() {
  return (
    <Box
      borderBottom={`1px solid ${"black"}`}
      bgcolor={"white"}
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <MobileHeader />
      <Box bgcolor={"black"}>
        <AppHeader />
      </Box>
    </Box>
  );
}
