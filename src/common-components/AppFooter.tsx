import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
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

interface footerProps {
  activeTab: string;
  setActiveTab: (event: any) => void;
}

const FooterNames = [
  { name: "Clothing", url: routes.CLOTHING_PRODUCT },
  { name: "Home Decor", url: routes.HOME_DECOR_PRODUCT },
  { name: "Fabric", url: routes.FABRIC_PRODUCT },
];

const FooterPageNames = [
  { name: "Home", url: routes.HOME },
  { name: "About", url: routes.ABOUT },
  { name: "Products", url: routes.PRODUCTS },
  { name: "Contact Us", url: routes.CONTACT },
];
export default function AppFooter({ activeTab, setActiveTab }: footerProps) {
  const location = useLocation();
  const isProductsPage = location.pathname.includes(routes.PRODUCTS);

  const handleMenuClick = (menu: string) => {
    localStorage.setItem(activeTab, menu);
    setActiveTab(menu);
    window.scroll(0, 0);
  };

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

            <Stack
              spacing={4}
              p={1}
              display={"flex"}
              flexDirection={"column"}
              className={isProductsPage ? "active-tab" : ""}
            >
              {" "}
              {FooterNames.map((item, index) => (
                <Box display={"flex"}>
                  <ChevronRightIcon style={{ color: "#ec4979" }} />
                  <CustomLabel>
                    <CustomLink
                      onClick={() => handleMenuClick(item.url)}
                      to={item.url}
                    >
                      {item.name}
                    </CustomLink>
                  </CustomLabel>
                </Box>
              ))}
            </Stack>
          </Stack>

          <Stack
            spacing={0}
            p={1}
            display={"flex"}
            flexDirection={"column"}
            className={isProductsPage ? "active-tab" : ""}
          >
            {FooterPageNames.map((item, index) => (
              <Box paddingTop={"2rem"} display={"flex"}>
                <ChevronRightIcon style={{ color: "#ec4979" }} />
                <CustomLabel>
                  <CustomLink
                    onClick={() => handleMenuClick(item.url)}
                    to={item.url}
                  >
                    {item.name}
                  </CustomLink>
                </CustomLabel>
              </Box>
            ))}
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
                    <IconButton>
                      <EmailOutlinedIcon />
                    </IconButton>
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
