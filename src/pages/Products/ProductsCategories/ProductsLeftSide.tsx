import { Box, MenuItem, Select, Typography } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CommonCategory from "./commonCategory";
import { useState } from "react";

export default function ProductsLeftSide() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const WidthmenuItems = ["Select all", "42", "44", "54", "56", "58"];
  const CompositionmenuItems = ["Select all", "100%", "50 - 55%", "97- 3%"];

  return (
    <div>
      <Box
        padding={2}
        style={{ cursor: "pointer" }}
        display="flex"
        justifyContent="space-between"
      >
        <Typography
          fontSize={"16px"}
          fontWeight={"bold"}
          fontFamily={"Nunito Sans, sans-serif"}
        >
          FILTER
        </Typography>
        <Typography
          fontSize={"14px"}
          style={{
            textDecoration: "underline",
          }}
          fontFamily={"Nunito Sans, sans-serif"}
        >
          Clear all
        </Typography>
      </Box>
      <Box
        pt={2}
        margin={"0 auto"}
        width={"90%"}
        borderBottom={"1px solid gray"}
      ></Box>

      <Box
        padding={2}
        style={{ cursor: "pointer" }}
        onClick={handleToggleDropdown}
        display="flex"
        justifyContent="space-between"
      >
        <Typography
          fontSize={"15px"}
          fontWeight={"bold"}
          fontFamily={"Nunito Sans, sans-serif"}
        >
          CATEGORIES
        </Typography>
        <ArrowDropDownIcon />
      </Box>

      <>
        {isDropdownOpen && (
          <Box padding={"0 20px"}>
            <CommonCategory />
          </Box>
        )}
        <Box
          pt={2}
          margin={"0 auto"}
          width={"90%"}
          borderBottom={"1px solid gray"}
        ></Box>
        <Box
          padding={2}
          style={{ cursor: "pointer" }}
          justifyContent="space-between"
        >
          <Typography
            fontSize={"16px"}
            fontWeight={"bold"}
            fontFamily={"Nunito Sans, sans-serif"}
          >
            Filter By Width
          </Typography>
          <Select
            style={{
              borderRadius: "30px",
              marginTop: "12px",
              height: "42px",
            }}
            fullWidth
            variant="outlined"
          >
            {WidthmenuItems.map((item) => (
              <MenuItem
                defaultValue={"Select all"}
                defaultChecked={true}
                key={item}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box
          pt={2}
          margin={"0 auto"}
          width={"90%"}
          borderBottom={"1px solid gray"}
        ></Box>
        <Box
          padding={2}
          style={{ cursor: "pointer" }}
          justifyContent="space-between"
        >
          <Typography
            fontSize={"16px"}
            fontWeight={"bold"}
            fontFamily={"Nunito Sans, sans-serif"}
          >
            Filter By Coposition
          </Typography>
          <Select
            style={{
              borderRadius: "30px",
              marginTop: "12px",
              height: "42px",
            }}
            fullWidth
            variant="outlined"
          >
            {CompositionmenuItems.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box
          pt={2}
          margin={"0 auto"}
          width={"90%"}
          borderBottom={"1px solid gray"}
        ></Box>
      </>
    </div>
  );
}
