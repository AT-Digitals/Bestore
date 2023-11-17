import { Box } from "@mui/material";
import HomeCart from "../assets/home-cart.png";

export default function CartImage() {
  return (
    <Box style={{ width: "100%", marginTop: "7rem" }}>
      <Box style={{ margin: "auto", maxWidth: 350, marginBottom: "-4px" }}>
        <img
          style={{
            width: "100%",
            height: "auto",
          }}
          src={HomeCart}
          alt="HomeCart"
        />
      </Box>
    </Box>
  );
}
