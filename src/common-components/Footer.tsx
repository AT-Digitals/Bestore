import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import logo from "./Akka creartions horizontal 2-03-03.png";
import routes from "../routes/routes";
import styled from "@emotion/styled";

const StyleLink = styled(Link)({
  color: "black",
  fontSize: "18px",
  fontFamily: `"ProximaNovaRegular", sans-serif`,
  fontWeight: 400,
  textUnderlineOffset: "5px",
  textDecoration: "none",
  "&:hover": {
    color: "black",
  },
});

const FooterItems = [
  { name: "Home", link: routes.HOME },
  { name: "About", link: routes.ABOUT },

  { name: "Products", link: routes.PRODUCTS },
  { name: "Contact us", link: routes.CONTACT },

  { name: "Blog", link: routes.BLOG },
];
export default function AppFooter1() {
  const isSmScreen = useMediaQuery("(max-width:950px)");

  return (
    <Box bgcolor={"#fadd75"}>
      <Box borderBottom="1px solid #272727">
        <Box paddingLeft={0} paddingRight={0}>
          <Stack
            borderBottom={"1px solid black"}
            padding={"2rem 2rem"}
            direction={{ xs: "column", sm: "row", md: "row" }}
            justifyContent={{ sm: "space-between", md: "space-between" }}
            alignItems="center"
          >
            <a href={routes.HOME}>
              <img
                src={logo}
                alt="alterknit logo"
                loading="lazy"
                width={200}
                height={40}
              />
            </a>
            <Stack
              maxWidth={500}
              spacing={5}
              alignItems={isSmScreen ? "center" : "end"}
              textAlign={isSmScreen ? "center" : "end"}
            >
              <ul
                style={{
                  width: "100%",

                  flexWrap: "wrap",
                  justifyContent: "center",
                  display: "flex",
                  gap: "1rem",
                  padding: 0,
                  marginTop: "20px",
                }}
              >
                {FooterItems.map((items, index) => (
                  <li
                    key={index}
                    style={{
                      listStyleType: "none",
                    }}
                  >
                    <StyleLink
                      to={items.link}
                      //   style={{
                      //     color:
                      //       location.pathname === service.url ? Colors.WHITE : "",
                      //   }}
                    >
                      {items.name}
                    </StyleLink>
                  </li>
                ))}
              </ul>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
