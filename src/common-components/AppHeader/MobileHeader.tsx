import { Box, Stack } from "@mui/material";
import React, { useCallback } from "react";

import AppDrawer from "./AppDrwaer";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import logo from "../Akka creartions horizontal 2-03-03.png";
import routes from "../../routes/routes";

interface MobileHeaderProps {
  setActiveTab: (event: any) => void;
  activeTab: string;
}

export default function MoblieHeader({
  setActiveTab,
  activeTab,
}: MobileHeaderProps) {
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
        bgcolor={"white"}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="90%"
          margin={"0 auto"}
        >
          <Link to={routes.HOME}>
            <img width={170} src={logo} alt="be-store" height={30} />
          </Link>
          <Box>
            <IconButton size="large" onClick={handleDrawerOpen}>
              <DragHandleIcon style={{ fontSize: 40, color: "black" }} />
            </IconButton>
          </Box>
        </Stack>
      </Box>

      <AppDrawer
        open={open}
        onClose={handleDrawerClose}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </>
  );
}
