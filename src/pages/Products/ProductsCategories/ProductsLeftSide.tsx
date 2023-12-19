import { Box, MenuItem, Select, Typography } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CommonCategory from "./commonCategory";
import { useState } from "react";

export default function ProductsLeftSide() {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const handleToggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

  const WidthmenuItems = ["Select all", "42", "44", "54", "56", "58"];
  const CompositionmenuItems = ["Select all", "100%", "50 - 55%", "97- 3%"];
  const GSMmenuItems = [
    "Select all",
    "55",
    "70",
    "80",
    "110",
    "130",
    "135",
    "140",
    "145",
    "150",
    "155",
    "160",
    "220",
    "240",
    "10 OZ",
    "135 GSM",
    "140 GSM",
    "200 GSM",
    "40S/135",
    "40S/145",
    "60S/120",
    "8  OZ",
  ];

  const [selectedWidth, setSelectedWidth] = useState("Select all");
  const [selectedComposition, setSelectedComposition] = useState("Select all");
  const [selectedGSM, setSelectedGSM] = useState("Select all");

  const handleWidthChange = (event: any) => {
    setSelectedWidth(event.target.value);
  };

  const handleCompositionChange = (event: any) => {
    setSelectedComposition(event.target.value);
  };

  const handleGSMChange = (event: any) => {
    setSelectedGSM(event.target.value);
  };
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
        // onClick={handleToggleDropdown}
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
        {/* {isDropdownOpen && ( */}
        <Box padding={"0 20px"}>
          <CommonCategory />
        </Box>
        {/* )} */}
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
            whiteSpace={"nowrap"}
          >
            Filter By Width
          </Typography>
          <Select
            style={{
              borderRadius: "30px",
              marginTop: "12px",
              height: "42px",
              fontFamily: "Nunito Sans, sans-serif",
            }}
            fullWidth
            variant="outlined"
            value={selectedWidth}
            onChange={handleWidthChange}
          >
            {WidthmenuItems.map((item) => (
              <MenuItem
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                }}
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
            whiteSpace={"nowrap"}
          >
            Filter By Coposition
          </Typography>
          <Select
            style={{
              borderRadius: "30px",
              marginTop: "12px",
              height: "42px",
              fontFamily: "Nunito Sans, sans-serif",
            }}
            fullWidth
            variant="outlined"
            value={selectedComposition}
            onChange={handleCompositionChange}
          >
            {CompositionmenuItems.map((item) => (
              <MenuItem
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                }}
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
            whiteSpace={"nowrap"}
          >
            Filter By GSM
          </Typography>
          <Select
            style={{
              borderRadius: "30px",
              marginTop: "12px",
              height: "42px",
              fontFamily: "Nunito Sans, sans-serif",
            }}
            fullWidth
            variant="outlined"
            value={selectedGSM}
            onChange={handleGSMChange}
          >
            {GSMmenuItems.map((item) => (
              <MenuItem
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                }}
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
      </>
    </div>
  );
}
