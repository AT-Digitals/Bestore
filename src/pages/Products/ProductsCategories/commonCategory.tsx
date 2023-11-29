import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import routes from "../../../routes/routes";

const ProductsNavigatoinItems = [
  { name: "Clothing", link: routes.CLOTHING_PRODUCT },
  { name: "Home Decor", link: routes.HOME_DECOR_PRODUCT },
  { name: "Fabrics", link: routes.FABRIC_PRODUCT },
];

export default function CommonCategory() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedCategory(currentPath);
  }, [location]);

  return (
    <>
      {ProductsNavigatoinItems.map((category) => (
        <Link
          key={category.name}
          to={category.link}
          style={{
            textDecoration: "none",
            color: selectedCategory === category.link ? "black" : "gray",
          }}
        >
          <Typography
            fontFamily={"Nunito Sans, sans-serif"}
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
          </Typography>
        </Link>
      ))}
    </>
  );
}
