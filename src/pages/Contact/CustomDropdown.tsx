import { Box, MenuItem, Select, Typography } from "@mui/material";

interface DropdownProps {
  personalDetails: any;
  productError: any;
  handleCategoryChange: any;
  categoriesWithSubcategories: any;
  handleSubcategoryChange: any;
  selectedSubcategories: any;
  subProducts: string[];
}

export default function CustomDropdown({
  personalDetails,
  productError,
  handleCategoryChange,
  categoriesWithSubcategories,
  handleSubcategoryChange,
  selectedSubcategories,
  subProducts,
}: DropdownProps) {
  return (
    <Box paddingTop={"40px"} margin={"auto"} width={"100%"} maxWidth={"720px"}>
      <Typography
        pb={1}
        color={"black"}
        fontSize={"17px"}
        fontFamily={"Nunito Sans, sans-serif"}
      >
        Products
      </Typography>
      <Select
        sx={{
          fontFamily: "Nunito Sans, sans-serif",

          width: "100%",
          maxWidth: { xs: "300px", sm: "600px", md: "600px", lg: "600px" },
          borderRadius: "30px",
          height: "45px",
          ".MuiFormHelperText-root": {
            color: "#d32f2f",
          },
          ".MuiInputBase-root": {
            borderRadius: "30px",
            height: "45px",
          },
        }}
        required
        id="standard-required"
        variant="outlined"
        error={personalDetails.products ? !!productError : false}
        name="products"
        value={personalDetails.category}
        onChange={handleCategoryChange}
      >
        {Object.keys(categoriesWithSubcategories).map((category) => (
          <MenuItem
            style={{
              fontFamily: "Nunito Sans, sans-serif",
            }}
            key={category}
            value={category}
          >
            {category}
          </MenuItem>
        ))}
      </Select>
      {personalDetails.category && (
        <>
          <Typography
            mt={3}
            pb={1}
            color={"black"}
            fontSize={"17px"}
            fontFamily={"Nunito Sans, sans-serif"}
          >
            Sub Category
          </Typography>
          <Select
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              width: "100%",
              maxWidth: { xs: "300px", sm: "600px", md: "600px", lg: "600px" },
              borderRadius: "30px",
              height: "45px",
              ".MuiFormHelperText-root": {
                color: "#d32f2f",
              },
              ".MuiInputBase-root": {
                borderRadius: "30px",
                height: "45px",
              },
            }}
            required
            id="subcategory-select"
            variant="outlined"
            error={personalDetails.subcategory ? false : true}
            name="subcategory"
            value={personalDetails.subcategory}
            onChange={handleSubcategoryChange}
          >
            {selectedSubcategories.map((subcategory: any) => (
              <MenuItem
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                }}
                key={subcategory}
                value={subcategory}
              >
                {subcategory}
              </MenuItem>
            ))}
          </Select>
        </>
      )}

      {personalDetails.subcategory && (
        <>
          <Typography
            mt={3}
            pb={1}
            color={"black"}
            fontSize={"17px"}
            fontFamily={"Nunito Sans, sans-serif"}
          >
            Sub Products
          </Typography>
          <Select
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              width: "100%",
              maxWidth: { xs: "300px", sm: "600px", md: "600px", lg: "600px" },
              borderRadius: "30px",
              height: "45px",
              ".MuiFormHelperText-root": {
                color: "#d32f2f",
              },
              ".MuiInputBase-root": {
                borderRadius: "30px",
                height: "45px",
              },
            }}
            required
            id="subcategory-select"
            variant="outlined"
            error={personalDetails.subproducts ? false : true}
            name="subproducts" // Change the name attribute to a unique name
            value={personalDetails.subproducts}
            // onChange={handleSubcategoryChange} // Use a new handler for Sub Products
          >
            {subProducts.map((subProduct: any) => (
              <MenuItem
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                }}
                key={subProduct.name} // assuming subProduct has a unique identifier
                value={subProduct.name} // assuming subProduct has a unique identifier
              >
                {subProduct.name}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    </Box>
  );
}
