import { Box, Pagination } from "@mui/material";

import ClothingCategories from "./ClothingProducts";
import ProductsImage from "../ProductsItems";
import { useState } from "react";

export default function ColoursProductsPage() {
  const clothingProducts = ProductsImage.filter(
    (item) => item.producttype === "Patterns"
  );

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const TotalItems = clothingProducts.length;

  return (
    <>
      <ClothingCategories currentItems={clothingProducts} />
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
