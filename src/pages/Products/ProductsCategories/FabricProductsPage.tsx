import { Box, Pagination } from "@mui/material";

import FabricProducts from "./FabricProducts";
import ProductsImage from "../ProductsItems";
import { useState } from "react";

export default function FabricProductsPAge() {
  const fabricProducts = ProductsImage.filter(
    (item) => item.producttype === "Fabric"
  );
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const TotalItems = fabricProducts.length;

  return (
    <>
      <FabricProducts currentItems={fabricProducts} />
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
