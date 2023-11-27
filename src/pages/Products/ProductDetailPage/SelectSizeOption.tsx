import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";

const SizeSelection = () => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (event: any) => {
    setSelectedSize(event.target.value);
  };

  return (
    <Box>
      <Typography fontSize={"10px"} fontWeight="bold" marginBottom="2">
        SELECT SIZE
      </Typography>
      <Select
        value={selectedSize}
        onChange={handleSizeChange}
        displayEmpty
        fullWidth
        variant="outlined"
      >
        <MenuItem value="" disabled>
          Choose Size
        </MenuItem>
        <MenuItem value="90cm">90 cm large FR women's</MenuItem>
        <MenuItem value="120cm">120 cm large FR women's</MenuItem>
        <MenuItem value="140cm">140 cm large FR women's</MenuItem>
      </Select>
    </Box>
  );
};

export default SizeSelection;
