import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ProductsNavigationItems from "../../../common-components/ProductNavigationItems";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { Typography } from "@mui/material";

export default function CommonCategory() {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [subcategoriesVisibility, setSubcategoriesVisibility] = useState<{
    [key: string]: boolean;
  }>(() => {
    const initialVisibility: { [key: string]: boolean } = {};
    ProductsNavigationItems.forEach((category) => {
      initialVisibility[category.link] = location.pathname === category.link;
    });
    return initialVisibility;
  });

  const toggleSubcategories = (
    event: React.MouseEvent,
    categoryLink: string
  ) => {
    event.preventDefault();

    setSubcategoriesVisibility((prev) => ({
      ...prev,
      [categoryLink]: !prev[categoryLink],
    }));

    setSelectedCategory(categoryLink);
  };

  const renderSubcategories = (subcategories: any) => {
    return subcategories.map((subcategory: any) => (
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
    ));
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
              {selectedCategory === category.link &&
              subcategoriesVisibility[category.link] ? (
                <RemoveCircleOutlinedIcon />
              ) : (
                <AddCircleOutlineIcon />
              )}
            </Typography>
          </div>

          {selectedCategory === category.link &&
            subcategoriesVisibility[category.link] &&
            renderSubcategories(category.subcategories)}
        </div>
      ))}
    </>
  );
}
