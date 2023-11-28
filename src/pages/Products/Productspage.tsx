import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import ProductBanner from "./Products-banner.jpg";
import ProductsHeader from "./ProductsHeader";
import ProductsImage from "./ProductsItems";
import routes from "../../routes/routes";

const ProductsNavigatoinItems = [
  { name: "Clothing", link: routes.CLOTHING_PRODUCT },
  { name: "Home Decor", link: routes.HOME_DECOR_PRODUCT },
  { name: "Fabrics", link: routes.FABRIC_PRODUCT },
];

export default function ProductsPage() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const TotalItems = ProductsImage.length;
  const [sortedProducts, setSortedProducts] = useState([...ProductsImage]);
  const [sort, setSort] = useState("Default sorting");

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
    handleSortChange("Default sorting");
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
          <ProductsHeader
            totalItems={TotalItems}
            onSortChange={handleSortChange}
            sort={sort}
          />
          <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
            <Box width="20%" p="0 20px">
              <Stack
                mt={2}
                spacing={2}
                maxWidth={{ sm: 160, md: 280 }}
                gap="1rem"
              >
                <div>
                  <Box
                    padding={2}
                    style={{ cursor: "pointer" }}
                    onClick={handleToggleDropdown}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Typography
                      fontSize={"16px"}
                      fontWeight={"bold"}
                      fontFamily={"Nunito Sans, sans-serif"}
                    >
                      CATEGORIES
                    </Typography>
                    <ArrowDropDownIcon />
                  </Box>

                  <>
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
                    <Box
                      pt={2}
                      margin={"0 auto"}
                      width={"90%"}
                      borderBottom={"1px solid gray"}
                    ></Box>
                  </>
                </div>
              </Stack>
            </Box>
            <Box width={{ md: "80%" }}>
              <Box mb={15}>
                <Grid container>
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
                            <Box
                              mb={1}
                              justifyContent={"center"}
                              display={"flex"}
                              gap={"0.5rem"}
                            >
                              <Typography
                                fontSize={"18px"}
                                color={"#EB3C70"}
                                fontFamily={"Nunito Sans, sans-serif"}
                              >
                                ₹ {item.price}
                              </Typography>
                            </Box>
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
