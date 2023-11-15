import Banner from "../../assets/BeStore-banner.jpg";
import { Box } from "@mui/material";

export default function Homepage() {
  return (
    <Box>
      <img src={Banner} style={{ maxWidth: "1519px", height: "100%" }} alt="" />
      {/* <Box textAlign="center" mt={2}>
        <Typography variant="h1">Shoping as you love</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Explore a wide range of products to suit your style.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ marginTop: "1rem" }}
        >
          Shop Now
        </Button>
      </Box> */}
    </Box>
  );
}
