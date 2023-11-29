import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import routes from "../../../routes/routes";

const ProductsNavigatoinItems = [
  { name: "Clothing", link: routes.CLOTHING_PRODUCT },
  { name: "Home Decor", link: routes.HOME_DECOR_PRODUCT },
  { name: "Fabrics", link: routes.FABRIC_PRODUCT },
];

export default function CommonCategory() {
  return (
    <Box padding={"0 20px"}>
      {ProductsNavigatoinItems.map((name) => (
        <Link
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to={name.link}
        >
          <Typography
            color={"gray"}
            fontFamily={"Nunito Sans, sans-serif"}
            key={name.name}
            sx={{
              marginBottom: 2,
              color: "gray",
              cursor: "pointer",
              "&:hover": {
                color: "black",
              },
            }}
          >
            {name.name}
          </Typography>
        </Link>
      ))}
    </Box>
  );
}
