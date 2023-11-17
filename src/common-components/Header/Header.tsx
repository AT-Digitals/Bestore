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
      {/* <AppContainer direction="row" alignItems="center" spacing={1} padding={0}> */}
      <MobileHeader />
      {/* </AppContainer> */}
      <Box bgcolor={"black"}>
        <AppHeader />
      </Box>
    </Box>
  );
}
