import AppHeader from "../AppHeader";
import { Box } from "@mui/material";
import MobileHeader from "../AppHeader/MobileHeader";

interface MobileHeaderProps {
  setActiveTab: (event: any) => void;
  activeTab: string;
}
export default function Header({ setActiveTab, activeTab }: MobileHeaderProps) {
  return (
    <Box
      borderBottom={`1px solid ${"black"}`}
      bgcolor={"white"}
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <MobileHeader setActiveTab={setActiveTab} activeTab={activeTab} />
      <Box bgcolor={"black"}>
        <AppHeader />
      </Box>
    </Box>
  );
}
