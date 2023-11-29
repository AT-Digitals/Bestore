import { Box, Tab, Tabs, css } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

import logo from "./Akka creartions horizontal 2-03-03.png";
import routes from "../routes/routes";
import { useState } from "react";

const CustomTabs = [
  { name: "HOME", link: routes.HOME },
  { name: "ABOUT", link: routes.ABOUT },

  { name: "PRODUCTS", link: routes.PRODUCTS },
  { name: "CONTACT US", link: routes.CONTACT },
];
const rotateKeyframes = css`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export default function HeaderTabs() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setLoading(true);
    setValue(newValue);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  useEffect(() => {
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
      {loading && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            zIndex: 1000,
            backdropFilter: "blur(5px)",
          }}
        >
          <img
            src={logo}
            alt=""
            style={{
              maxWidth: 160,
              width: "100%",
              animation: `${rotateKeyframes}rotate 2s linear infinite`,
            }}
          />
        </Box>
      )}
    </Box>
  );
}
