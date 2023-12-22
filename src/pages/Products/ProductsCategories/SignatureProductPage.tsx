import { Box, Pagination } from "@mui/material";

import ProductsImage from "../ProductsItems";
import { useState } from "react";
import SignatureProduct from "./SignatureProduct";

export default function SignatureProductsPAge() {
  const signature = ProductsImage.filter(
    (item) => item.producttype === "Signature"
  );
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const TotalItems = signature.length;

  return (
    <>
      <SignatureProduct currentItems={signature} />
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
