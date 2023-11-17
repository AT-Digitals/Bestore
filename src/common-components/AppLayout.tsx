import { Box, BoxProps } from "@mui/material";

import AppFooter from "./AppFooter";
import Header from "./Header/Header";
import Layout from "./Layout";
import { Outlet } from "react-router-dom";

export default function AppLayout({ children, ...props }: BoxProps) {
  return (
    <Layout {...props}>
      <Header />
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
          <AppFooter />
        </Box>
      </Box>
    </Layout>
  );
}
