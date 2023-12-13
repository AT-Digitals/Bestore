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
    subcategories: [
      { name: "Cotton", link: routes.FABRIC_PRODUCT_COTTON },
      { name: "Silk", link: routes.FABRIC_PRODUCT_SILK },
      { name: "Polyester", link: routes.FABRIC_PRODUCT_POLY },
    ],
  },
  {
    name: "Patterns",
    link: routes.CLOTHING_PRODUCT,
    subcategories: [
      { name: "Women's", link: routes.ABOUT },
      { name: "Men's", link: routes.ABOUT },
      { name: "Kids", link: routes.ABOUT },
    ],
  },
  {
    name: "Colours",
    link: routes.HOME_DECOR_PRODUCT,
    subcategories: [
      { name: "Bedroom", link: routes.ABOUT },
      { name: "Living Room", link: routes.ABOUT },
      { name: "Kitchen", link: routes.ABOUT },
    ],
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

  const toggleSubcategories = (event: any, categoryLink: string) => {
    event.preventDefault();
    setSubcategoriesVisible(
      (prevSubcategoriesVisible) =>
        selectedCategory !== categoryLink || !prevSubcategoriesVisible
    );
    setSelectedCategory(categoryLink);
  };

  const renderSubcategories = (subcategories: any) => {
    return subcategoriesVisible ? (
      <div>
        {subcategories.map((subcategory: any) => (
          <Link
            key={subcategory.link}
            to={subcategory.link}
            style={{
              textDecoration: "none",
              color: selectedCategory === subcategory.link ? "black" : "gray",
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
                  selectedCategory === subcategory.link ? "bold" : "normal",
              }}
            >
              {subcategory.name}
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
          <div
            onClick={(event) => toggleSubcategories(event, category.link)}
            style={{
              cursor: "pointer",
            }}
          >
            <Typography
              display={"flex"}
              justifyContent={"space-between"}
              fontFamily={"Nunito Sans, sans-serif"}
              fontSize={"16px"}
              sx={{
                marginBottom: 2,
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
          </div>

          {selectedCategory === category.link &&
            renderSubcategories(category.subcategories)}
        </div>
      ))}
    </>
  );
}
