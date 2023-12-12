import { Box, Pagination } from "@mui/material";

import HomeDecorProducts from "./HomeDecorProducts";
import ProductsImage from "../ProductsItems";
import { useState } from "react";

export default function PatternsProducts() {
  const homeProducts = ProductsImage.filter(
    (item) => item.producttype === "Colours"
  );

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const TotalItems = homeProducts.length;

  return (
    <>
      <HomeDecorProducts currentItems={homeProducts} />
      <Box mt={3} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(TotalItems / itemsPerPage)}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          color="primary"
        />
      </Box>
    </>
  );
}
