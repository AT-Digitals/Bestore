import { Box, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import BadgeStyle from "../Home/HomepageProducts/BadgeStyle";
import ProductsHeader from "./ProductsHeader";
import ProductsImage from "./ProductsItems";
import Productsignup from "../../assets/ProductsImage/products-signup-image.jpg";

const ProductsNavigatoinItems = [
  { name: "Clothing", link: "" },
  { name: "Home decoration", link: "" },
  { name: "Facbarics", link: "" },
];

export default function ProductsPage() {
  const TotalItems = ProductsImage.length;
  const [sortedProducts, setSortedProducts] = useState([...ProductsImage]);
  const [sort, setSort] = useState("Default sorting");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName: any) => {
    setSelectedCategory(categoryName);
  };

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

  return (
    <Box>
      <Box padding={"185px 0 60px"} textAlign={"center"} bgcolor={"#F6F6F6"}>
        <Typography fontSize={"75px"} fontWeight={"bold"}>
          {" "}
          {selectedCategory ? selectedCategory : "Products"}
        </Typography>
      </Box>
      <Box bgcolor={"white"} width={"100%"} margin={"0 auto"}>
        <Box margin={"0 auto"} maxWidth={1160} pt={"30px"}>
          <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
            <Box width={{ md: "80%" }} borderRight={"1px solid lightgray"}>
              <ProductsHeader
                totalItems={TotalItems}
                onSortChange={handleSortChange}
                sort={sort}
              />

              <Box mb={15} padding={"0 40px"}>
                <Grid container>
                  {sortedProducts.map((item, index) => (
                    <Grid
                      columnSpacing={"2rem"}
                      rowGap={"4rem"}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                    >
                      <Box
                        mb={2}
                        mt={2}
                        maxWidth={260}
                        width={"100%"}
                        gap={"2rem"}
                        key={index}
                        position="relative"
                        style={{ overflow: "hidden", cursor: "pointer" }}
                      >
                        <img
                          style={
                            {
                              height: { xs: 210, sm: 240, md: 260 },
                              maxWidth: { xs: 210, sm: 240, md: 260 },
                              width: "100%",
                              transition: "transform 0.5s ease",
                            } as any
                          }
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                          src={item.Image}
                          alt="products"
                        />
                        {item.type === "Best selling" && <BadgeStyle />}
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"flex-start"}
                        >
                          <Typography
                            textAlign={"left"}
                            fontSize={"21px"}
                            fontWeight={"bold"}
                            mt={1}
                          >
                            {item.name}
                          </Typography>
                          <Box display={"flex"} gap={"0.5rem"}>
                            {item.offerprice ? (
                              <Typography
                                fontSize={"18px"}
                                color={"#EB3C70"}
                                style={{
                                  opacity: 0.5,
                                  textDecoration: "line-through",
                                }}
                              >
                                {" "}
                                £{item.offerprice}
                              </Typography>
                            ) : null}
                            <Typography
                              style={{
                                textDecoration: item.offerprice
                                  ? "underline"
                                  : undefined,
                              }}
                              fontSize={"18px"}
                              color={"#EB3C70"}
                            >
                              {item.price ? "£" : undefined} {item.price}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
            <Box p={"0 20px"}>
              <Typography mb={2}>Products categories</Typography>

              <Stack spacing={2} maxWidth={{ sm: 160, md: 250 }} gap={"3rem"}>
                <Box bgcolor={"#eb3c70"} maxWidth={{ sm: 122, md: 226 }}>
                  {ProductsNavigatoinItems.map((item, index) => (
                    <ul
                      style={{
                        color: "white",
                        width: 226,
                      }}
                    >
                      <li
                        style={{
                          borderBottom: "1px sold red",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <a
                            style={{
                              color: "white",
                              textDecoration: "none",
                            }}
                            href={item.link}
                            onClick={() => handleCategoryClick(item.name)}
                          >
                            {item.name}
                          </a>
                          <div
                            style={{
                              marginTop: "5px",
                              width: "49%",
                              position: "relative",
                              right: "32%",
                              borderBottom: "1px solid rgba(255,255,255,.2)",
                            }}
                          ></div>
                        </div>
                      </li>
                    </ul>
                  ))}
                </Box>
                <img
                  style={
                    {
                      maxWidth: { sm: 122, md: 226 },
                      width: "100%",
                    } as any
                  }
                  src={Productsignup}
                  alt=""
                />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
