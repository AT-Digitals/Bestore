import { Box, Tab, Tabs } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import routes from "../routes/routes";
import { useState } from "react";

const CustomTabs = [
  { name: "HOME", link: routes.HOME },
  { name: "ABOUT", link: routes.ABOUT },

  { name: "PRODUCTS", link: routes.PRODUCTS },
  { name: "CONTACT US", link: routes.CONTACT },
];

export default function HeaderTabs() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(CustomTabs[newValue].link);
  };

  useEffect(() => {
    // Update the active tab based on the current route
    const activeTab = CustomTabs.findIndex(
      (tab) => tab.link === location.pathname
    );
    setValue(activeTab !== -1 ? activeTab : 0);
  }, [location.pathname]);

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{ "& .MuiTabs-indicator": { backgroundColor: "black" } }}
      >
        {CustomTabs.map((item, index) => (
          <Tab
            key={index}
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "black",
              padding: "20px",
              fontFamily: "Nunito Sans, sans-serif",
            }}
            label={item.name}
            component={Link}
            to={item.link}
          />
        ))}
      </Tabs>
    </Box>
  );
}
