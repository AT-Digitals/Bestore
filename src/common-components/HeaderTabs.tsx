import { Box, Tab, Tabs } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import routes from "../routes/routes";
import { useState } from "react";

const CustomTabs = [
  { name: "HOME", link: routes.HOME },
  { name: "PRODUCTS", link: routes.PRODUCTS },
  { name: "ABOUT", link: routes.ABOUT },
  { name: "BLOG", link: routes.BLOG },
  { name: "CONTACT", link: routes.CONTACT },
];

export default function HeaderTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
            style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}
            label={item.name}
            component={Link}
            to={item.link}
          />
        ))}
      </Tabs>
    </Box>
  );
}
