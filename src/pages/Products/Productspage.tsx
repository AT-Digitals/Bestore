import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CommonCategory from "./ProductsCategories/commonCategory";
import { Link } from "react-router-dom";
import ProductBanner from "./Products-banner.jpg";
import ProductsHeader from "./ProductsHeader";
import ProductsImage from "./ProductsItems";
import ProductsLeftSide from "./ProductsCategories/ProductsLeftSide";

export default function ProductsPage() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const TotalItems = ProductsImage.length;
  const [sortedProducts, setSortedProducts] = useState([...ProductsImage]);
  const [sort, setSort] = useState("Filter by");

  const handleSortChange = (sortingOption: any) => {
    setSort(sortingOption);

    switch (sortingOption) {
      case "Sort by popularity":
        setSortedProducts(
          [...ProductsImage].sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
          )
        );
        break;
      case "Sort by average rating":
        break;
      case "Sort by latest":
        break;
      case "Sort by price: low to high":
        setSortedProducts(
          [...ProductsImage].sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          )
        );
        break;
      case "Sort by price: high to low":
        setSortedProducts(
          [...ProductsImage].sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
          )
        );
        break;
      default:
        setSortedProducts([...ProductsImage]);
        break;
    }
  };

  useEffect(() => {
    handleSortChange("Filter by");
  }, []);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box>
      <Box
        style={{
          backgroundImage: `url(${ProductBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        width={"100%"}
        height={{ sm: undefined, md: 200 }}
        padding={{ sm: "40px 0 60px", md: "140px 0 60px" }}
        textAlign={"center"}
        bgcolor={"#F6F6F6"}
      >
        <Typography
          color={"white"}
          fontSize={"75px"}
          fontWeight={"bold"}
          fontFamily={"Nunito Sans, sans-serif"}
        >
          {" "}
          Products
        </Typography>
      </Box>
      <Box bgcolor={"white"} width={"100%"} margin={"0 auto"}>
        <Box p={"30px"}>
          <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
            <Box width="25%">
              <Stack
                mt={2}
                spacing={2}
                maxWidth={{ sm: 160, md: 280 }}
                gap="1rem"
              >
                <ProductsLeftSide />
              </Stack>
            </Box>
            <Box width={{ md: "100%" }}>
              <Box mb={15}>
                <Grid marginLeft={"20px"} marginTop={"10px"} container>
                  {currentItems.map((item, index) => (
                    <Grid
                      columnSpacing={"2rem"}
                      rowGap={"4rem"}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      style={{ display: "flex" }}
                    >
                      <Link
                        to={`/products/${item.id}`}
                        style={{
                          textDecoration: "none",
                          color: "black",
                          width: "100%",
                        }}
                      >
                        <Box
                          padding={"10px"}
                          height={360}
                          mb={2}
                          mt={2}
                          maxWidth={{ xs: 330, sm: 240, md: 330 }}
                          width={330}
                          gap={"2rem"}
                          key={index}
                          position="relative"
                          style={{
                            overflow: "hidden",
                            cursor: "pointer",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                            transition: "transform 0.5s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          <img
                            style={{
                              height: "70%",
                              maxWidth: "100%",
                              width: "100%",
                              objectFit: "cover",
                            }}
                            src={item.Image}
                            alt="products"
                          />
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"flex-start"}
                          >
                            <Typography
                              textAlign={"center"}
                              fontSize={"10px"}
                              fontWeight={"bold"}
                              fontFamily={"Nunito Sans, sans-serif"}
                              mt={1}
                            >
                              {item.name}
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Stack>
          <Box mt={3} display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(TotalItems / itemsPerPage)}
              page={currentPage}
              onChange={(event, value) => setCurrentPage(value)}
              color="primary"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
