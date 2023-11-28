import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "./Akka creartions horizontal 2-03-03.png";
import routes from "../routes/routes";

const CustomLabel = styled(Typography)({
  color: "#6F6F6F",
  fontSize: "16px",
  fontFamily: "Nunito Sans, sans-serif",
});

const CustomLink = styled(Link)({
  color: "#6F6F6F",
  fontSize: "16px",
  fontFamily: "Nunito Sans, sans-serif",
  textDecoration: "none",
});
export default function AppFooter() {
  const location = useLocation();
  const isProductsPage = location.pathname.includes(routes.PRODUCTS);

  return (
    <Box
      bgcolor={"#f6f6f6"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        justifyContent={"center"}
        maxWidth={1500}
      >
        <Stack
          width={"100%"}
          paddingTop={"90px"}
          direction={{ xs: "column", sm: "row", md: "row" }}
          spacing={10}
          marginBottom={"5rem"}
        >
          <Stack direction={"column"} spacing={3} maxWidth={260}>
            <Stack direction={"column"} spacing={3}>
              <a href={routes.HOME}>
                <img
                  src={logo}
                  alt="alterknit logo"
                  loading="lazy"
                  width={200}
                  height={40}
                />
              </a>

              <CustomLabel>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  AKKA CREATION
                </span>{" "}
                in Mamallapuram. <br />
                The power of colors! Fashion Mamallapuram, a small town in the
                Bay of Bengal that belongs to the world cultural heritage
              </CustomLabel>
              <Box border={"1px solid gray"}></Box>
              <Stack spacing={1} direction={"row"}>
                <Link to="https://www.facebook.com/login.php/" target="_blank">
                  <FacebookIcon
                    style={{
                      color: "gray",
                    }}
                  />
                </Link>

                <Link
                  to="https://www.instagram.com/akka_creation/"
                  target="_blank"
                >
                  <InstagramIcon
                    style={{
                      color: "gray",
                    }}
                  />
                </Link>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction={"column"} spacing={1}>
            <br />

            <Box
              p={1}
              display={"flex"}
              className={isProductsPage ? "active-tab" : ""}
            >
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>
                <CustomLink
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  to={routes.CLOTHING_PRODUCT}
                >
                  Clothing
                </CustomLink>
              </CustomLabel>
            </Box>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>
                <CustomLink
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  to={routes.HOME_DECOR_PRODUCT}
                >
                  Home Decor
                </CustomLink>
              </CustomLabel>
            </Box>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>
                <CustomLink
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  to={routes.FABRIC_PRODUCT}
                >
                  Fabrics
                </CustomLink>
              </CustomLabel>
            </Box>
          </Stack>
          <Stack direction={"column"} spacing={1}>
            <br />

            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>Home </CustomLabel>
            </Box>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel> About </CustomLabel>
            </Box>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>Products </CustomLabel>
            </Box>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>Contact Us </CustomLabel>
            </Box>
          </Stack>

          <Stack spacing={2} maxWidth={300}>
            <br />
            <Typography
              fontSize={"16px"}
              fontWeight={"bold"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              NEWSLETTER{" "}
            </Typography>
            <CustomLabel fontSize={"15px"}>
              Join now for exclusive deals, special promos, and a better
              shopping experience
            </CustomLabel>
            <TextField
              variant="standard"
              placeholder="Your email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />{" "}
          </Stack>
        </Stack>
      </Stack>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"80%"}
        borderTop={"1px solid gray"}
        margin={"0 auto"}
      >
        <Box mt={3} mb={2}>
          <Typography fontFamily={"Nunito Sans, sans-serif"}>
            copyright@2023 | All rights reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
