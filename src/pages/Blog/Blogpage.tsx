import { Box, Divider, Link, Stack, Typography } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BlogStack from "./BlogStack";
import BlogStack1 from "./BlogStack1";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import image from "../../assets/store2-blog-single-6-1080x675 (1).jpg";
import image1 from "../../assets/store2-blog-single-5-1080x675.jpg";

export default function Blogpage() {
  return (
    <Box>
      <Box padding={"175px 0 60px"} textAlign={"center"} bgcolor={"#F6F6F6"}>
        <Typography fontSize={"80px"} fontWeight={"bold"}>
          {" "}
          Blog
        </Typography>
      </Box>{" "}
      <Stack
        padding={"0 50px"}
        marginTop={"30px"}
        spacing={3}
        direction={"row"}
        justifyContent={"center"}
      >
        <Box margin={"30px"} overflow={"hidden"}>
          <Link href="/blog-about">
            <img
              style={{
                transition: "transform 0.5s ease",
                maxWidth: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              width={"100%"}
              src={image}
              alt="1image"
            />
          </Link>
          <Box
            sx={{
              boxSizing: "border-box",
              top: { xs: 0, sm: 0, md: "-60px", lg: "-60px" },
              position: "relative",
              backgroundColor: "white",
              right: "69%",
              marginLeft: "77%",
              width: "85%",
            }}
          >
            <Typography
              padding={"30px"}
              fontSize={{ xs: "13px", sm: "15px", md: "20px" }}
              fontWeight={"bold"}
              fontFamily={"sans-serif"}
              color={"black"}
            >
              Nam scelerisque ante ac
            </Typography>
            <Divider
              style={{
                width: "340px",
                marginLeft: "30px",
                marginTop: "-10px",
              }}
              orientation="horizontal"
              flexItem
            />
            <Stack
              alignItems={"center"}
              margin={"15px 27px"}
              spacing={1}
              direction={"row"}
            >
              <AccountCircleIcon
                style={{
                  fontSize: "25px",
                  color: "lightgrey",
                }}
              />
              <Link
                href="#"
                underline="hover"
                sx={{
                  ":hover": {
                    color: "#eb3c70",
                  },
                }}
              >
                <Typography color={"#eb3c70"} fontSize={"16px"}>
                  admin
                </Typography>
              </Link>
              <QueryBuilderIcon
                style={{
                  fontSize: "17px",
                  color: "#a8a8a8",
                }}
              />
              <Typography color={"#a8a8a8"} fontSize={"15px"}>
                {" "}
                July 23, 2020
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box margin={"30px"} overflow={"hidden"}>
          <Link href="/blog-about">
            <img
              style={{
                transition: "transform 0.5s ease",
                maxWidth: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              width={"100%"}
              src={image1}
              alt="image1"
            />
          </Link>
          <Box
            sx={{
              boxSizing: "border-box",
              top: { xs: 0, sm: 0, md: "-60px", lg: "-60px" },
              position: "relative",
              backgroundColor: "white",
              right: "69%",
              marginLeft: "77%",
              width: "85%",
            }}
          >
            <Typography
              padding={"30px"}
              fontSize={{ xs: "13px", sm: "15px", md: "20px" }}
              fontWeight={"bold"}
              fontFamily={"sans-serif"}
              color={"black"}
            >
              Phasellus nec nisl
            </Typography>
            <Divider
              style={{
                width: "340px",
                marginLeft: "30px",
                marginTop: "-10px",
              }}
              orientation="horizontal"
              flexItem
            />
            <Stack
              alignItems={"center"}
              margin={"15px 27px"}
              spacing={1}
              direction={"row"}
            >
              <AccountCircleIcon
                style={{
                  fontSize: "25px",
                  color: "lightgrey",
                }}
              />
              <Link
                href="#"
                underline="hover"
                sx={{
                  ":hover": {
                    color: "#eb3c70",
                  },
                }}
              >
                <Typography color={"#eb3c70"} fontSize={"16px"}>
                  admin
                </Typography>
              </Link>
              <QueryBuilderIcon
                style={{
                  fontSize: "17px",
                  color: "#a8a8a8",
                }}
              />
              <Typography color={"#a8a8a8"} fontSize={"15px"}>
                {" "}
                July 23, 2020
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <BlogStack />
      <BlogStack1 />
    </Box>
  );
}
