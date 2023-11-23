import { Box, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import BadgeStyle from "../Home/HomepageProducts/BadgeStyle";
import ClothingCategories from "./ProductsCategories/ClothingProducts";
import ProductBanner from "./Products-banner.jpg";
import ProductsHeader from "./ProductsHeader";
import ProductsImage from "./ProductsItems";
import Productsignup from "../../assets/ProductsImage/products-signup-image.jpg";
import WishtList from "../Home/HomepageProducts/WishitList";

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
        <Typography color={"white"} fontSize={"75px"} fontWeight={"bold"}>
          {" "}
          {selectedCategory ? selectedCategory : "Products"}
        </Typography>
      </Box>
      <Box bgcolor={"white"} width={"100%"} margin={"0 auto"}>
        <Box p={"30px"}>
          <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
            <Box width={{ md: "80%" }} borderRight={"1px solid lightgray"}>
              <ProductsHeader
                totalItems={TotalItems}
                onSortChange={handleSortChange}
                sort={sort}
              />

              <Box mb={15}>
                {selectedCategory === "Clothing" ? (
                  <ClothingCategories />
                ) : selectedCategory === "Home decoration" ? (
                  <h1>Home decoration</h1>
                ) : selectedCategory === "Facbarics" ? (
                  <h1>fabaric</h1>
                ) : (
                  <Grid container>
                    {sortedProducts.map((item, index) => (
                      <Grid
                        columnSpacing={"2rem"}
                        rowGap={"4rem"}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        style={{ display: "flex" }}
                      >
                        <Box
                          mb={2}
                          mt={2}
                          maxWidth={{ xs: 330, sm: 240, md: 330 }}
                          width={"100%"}
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
                            style={
                              {
                                height: { xs: 210, sm: 240, md: 260 },
                                maxWidth: { xs: 210, sm: 240, md: 260 },
                                width: "100%",
                              } as any
                            }
                            src={item.Image}
                            alt="products"
                          />
                          {item.type === "Best selling" && <BadgeStyle />}
                          <WishtList right={"15px"} />
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"flex-start"}
                          >
                            <Typography
                              textAlign={"center"}
                              fontSize={"21px"}
                              fontWeight={"bold"}
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
                )}
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
                          <p
                            style={{
                              color: "white",
                              textDecoration: "none",
                            }}
                            // href={item.link}
                            onClick={() => handleCategoryClick(item.name)}
                          >
                            {item.name}
                          </p>
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
