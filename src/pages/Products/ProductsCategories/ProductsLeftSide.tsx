import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import CommonCategory from "./commonCategory";
import { Link } from "react-router-dom";
import routes from "../../../routes/routes";
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

  const ColoursProduct = [
    { bg: "red", name: "Red", link: routes.PRODUCT_RED },
    { bg: "Blue", name: "Blue", link: routes.PRODUCT_BLUE },
    { bg: "Green", name: "Green", link: routes.PRODUCT_GREEN },

    { bg: "Beige", name: "Beige", link: " routes.PRODUCT_RED" },
    { bg: "Black", name: "Black", link: "routes.PRODUCT_RED" },
    { bg: "Brown", name: "Brown", link: " routes.PRODUCT_RED" },
    { bg: "Maroon", name: "Maroon", link: "routes.PRODUCT_RED" },
    { bg: "Orange", name: "Orange", link: "routes.PRODUCT_RED" },
    { bg: "White", name: "White", link: "routes.PRODUCT_RED" },
    { bg: "Pink", name: "Pink", link: "routes.PRODUCT_RED" },
    { bg: "Violet", name: "Violet", link: " routes.PRODUCT_RED" },
    { bg: "Yellow", name: "Yellow", link: " routes.PRODUCT_RED" },
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

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
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
        <Box padding={"0 20px"}>
          <CommonCategory />
        </Box>
        <Box
          pt={2}
          margin={"0 auto"}
          width={"90%"}
          borderBottom={"1px solid gray"}
        ></Box>
        <Box padding={2} justifyContent="space-between">
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
        <Box padding={2} justifyContent="space-between">
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

        <Box padding={2} justifyContent="space-between">
          <Typography
            fontSize={"16px"}
            fontWeight={"bold"}
            fontFamily={"Nunito Sans, sans-serif"}
            whiteSpace={"nowrap"}
          >
            Filter By Colours{" "}
          </Typography>
          <Stack
            maxHeight={300}
            height={"100%"}
            style={{ overflowY: "scroll" }}
            pt={2}
            spacing={2}
          >
            {ColoursProduct.map((item) => (
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={item.link}
              >
                <Box
                  key={item.name}
                  display={"flex"}
                  alignItems={"center"}
                  padding={"0 20px"}
                  style={{
                    maxHeight: "250px",
                    position: "relative",
                  }}
                  onMouseEnter={() => setHoveredColor(item.name)}
                  onMouseLeave={() => setHoveredColor(null)}
                  onClick={() => handleColorClick(item.name)}
                >
                  <Box
                    bgcolor={item.bg}
                    padding={"10px"}
                    borderRadius={"50%"}
                    style={{
                      width: "5px",
                      height: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    mr={2}
                  >
                    {(hoveredColor === item.name ||
                      selectedColor === item.name) && (
                      <CheckIcon style={{ color: "white", fontSize: "20px" }} />
                    )}
                  </Box>
                  <span
                    style={{
                      fontFamily: "Nunito Sans, sans-serif",
                      fontSize: "15px",
                      color: "gray",
                    }}
                  >
                    {item.name}
                  </span>
                </Box>
              </Link>
            ))}
          </Stack>
        </Box>
      </>
    </div>
  );
}
