import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { Typography } from "@mui/material";
import routes from "../../../routes/routes";

const ProductsNavigationItems = [
  {
    name: "Fabrics",
    link: routes.FABRIC_PRODUCT,
    subcategories: ["Cotton", "Silk", "Polyester"],
  },
  {
    name: "Patterns",
    link: routes.CLOTHING_PRODUCT,
    subcategories: ["Men's", "Women's", "Kids"],
  },
  {
    name: "Colours",
    link: routes.HOME_DECOR_PRODUCT,
    subcategories: ["Living Room", "Bedroom", "Kitchen"],
  },
];

export default function CommonCategory() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategoriesVisible, setSubcategoriesVisible] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedCategory(currentPath);
  }, [location]);

  const toggleSubcategories = () => {
    setSubcategoriesVisible(
      (prevSubcategoriesVisible) => !prevSubcategoriesVisible
    );
  };

  const renderSubcategories = (subcategories: any) => {
    return subcategoriesVisible ? (
      <div>
        {subcategories.map((subcategory: any) => (
          <Link
            key={subcategory}
            to={`${selectedCategory}/${subcategory}`}
            style={{
              textDecoration: "none",
              color:
                selectedCategory === `${selectedCategory}/${subcategory}`
                  ? "black"
                  : "gray",
            }}
          >
            <Typography
              padding={"0 20px"}
              display={"flex"}
              justifyContent={"space-between"}
              fontFamily={"Nunito Sans, sans-serif"}
              sx={{
                color: "blue",
                marginBottom: 2,
                cursor: "pointer",
                "&:hover": {
                  color: "black",
                },
                fontWeight:
                  selectedCategory === `${selectedCategory}/${subcategory}`
                    ? "bold"
                    : "normal",
              }}
            >
              {subcategory}
            </Typography>
          </Link>
        ))}
      </div>
    ) : null;
  };

  return (
    <>
      {ProductsNavigationItems.map((category) => (
        <div key={category.name}>
          <Link
            to={category.link}
            onClick={toggleSubcategories}
            style={{
              textDecoration: "none",
              color: selectedCategory === category.link ? "black" : "gray",
            }}
          >
            <Typography
              display={"flex"}
              justifyContent={"space-between"}
              fontFamily={"Nunito Sans, sans-serif"}
              fontSize={"16px"}
              sx={{
                marginBottom: 2,
                cursor: "pointer",
                "&:hover": {
                  color: "black",
                },
                fontWeight:
                  selectedCategory === category.link ? "bold" : "normal",
              }}
            >
              {category.name}
              {selectedCategory === category.link && subcategoriesVisible ? (
                <RemoveCircleOutlinedIcon />
              ) : (
                <AddCircleOutlineIcon />
              )}
            </Typography>
          </Link>

          {selectedCategory === category.link &&
            renderSubcategories(category.subcategories)}
        </div>
      ))}
    </>
  );
}
