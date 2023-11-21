import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import HeaderBg from "../../assets/ProductsImage/stripes_5_b.png";

interface ProductsHeaderProps {
  totalItems: number;
  onSortChange: (sortingOption: string) => void;
  sort: any;
}
export default function ProductsHeader({
  totalItems,
  onSortChange,
  sort,
}: ProductsHeaderProps) {
  const handleChange = (event: SelectChangeEvent) => {
    // Call the onSortChange prop when the sorting option changes
    onSortChange(event.target.value as string);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={"space-between"}
      marginBottom={"20px"}
      alignItems={"center"}
      sx={{
        backgroundImage: `url(${HeaderBg})`,
        padding: "15px",
      }}
    >
      <Typography color={"#A8A8A8"}>
        Showing all {totalItems} results
      </Typography>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 230 }}>
        <Select
          value={sort}
          defaultValue="Default sorting"
          onChange={handleChange}
        >
          <MenuItem value="Default sorting">Default sorting</MenuItem>
          <MenuItem value={"Sort by popularity"}>Sort by popularity</MenuItem>
          <MenuItem value={"Sort by average rating"}>
            Sort by average rating
          </MenuItem>
          <MenuItem value={"Sort by latest"}>Sort by latest</MenuItem>
          <MenuItem value={"Sort by price: low to high"}>
            Sort by price: low to high
          </MenuItem>
          <MenuItem value={"Sort by price: high to low"}>
            Sort by price: high to low
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
