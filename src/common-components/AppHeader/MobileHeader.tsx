import { Box, Stack } from "@mui/material";
import React, { useCallback } from "react";

import AppDrawer from "./AppDrwaer";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import logo from "../../assets/store2-logo.png";
import routes from "../../routes/routes";

export default function MoblieHeader() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = useCallback(() => setOpen(true), []);
  const handleDrawerClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Box
        alignItems="center"
        display={{ lg: "flex", xl: "none" }}
        justifyContent={"space-between"}
        width="100%"
        bgcolor={"#fadd75"}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="90%"
          margin={"0 auto"}
        >
          <Link to={routes.HOME}>
            <img width={210} src={logo} alt="be-store" height={24} />
          </Link>
          <Box>
            <IconButton>
              <ShoppingBagIcon />
            </IconButton>
            <IconButton size="large" onClick={handleDrawerOpen}>
              <DragHandleIcon style={{ fontSize: 40, color: "black" }} />
            </IconButton>
          </Box>
        </Stack>
      </Box>

      <AppDrawer open={open} onClose={handleDrawerClose} />
    </>
  );
}
