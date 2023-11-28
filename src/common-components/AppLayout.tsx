import { Box, BoxProps } from "@mui/material";

import AppFooter from "./AppFooter";
import Header from "./Header/Header";
import Layout from "./Layout";
import { Outlet } from "react-router-dom";
import routes from "../routes/routes";
import { useState } from "react";

export default function AppLayout({ children, ...props }: BoxProps) {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || routes.HOME
  );

  return (
    <Layout {...props}>
      <Header setActiveTab={setActiveTab} activeTab={activeTab} />
      <Box display="flex" flexDirection="column" width="100%" flexGrow={1}>
        <Box display="flex" flexDirection="column" flexGrow={1}>
          <Box
            sx={{
              backgroundColor: "white",
            }}
            display="flex"
            flexDirection="column"
            flexGrow={1}
          >
            <Outlet />
          </Box>
          {/* <AppFooter /> */}
          <AppFooter activeTab={activeTab} setActiveTab={setActiveTab} />
        </Box>
      </Box>
    </Layout>
  );
}
