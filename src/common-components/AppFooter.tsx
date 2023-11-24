import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "./Akka creartions horizontal 2-03-03.png";
import routes from "../routes/routes";

const CustomLabel = styled(Typography)({
  color: "#6F6F6F",
  fontSize: "16px",
});
export default function AppFooter() {
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

              <Typography>
                The customer is at the heart of our unique business model, which
                includes design
              </Typography>
              <Box border={"1px solid black"}></Box>
              <Stack spacing={1} direction={"row"}>
                <FacebookIcon
                  style={{
                    color: "gray",
                  }}
                />
                <TwitterIcon
                  style={{
                    color: "gray",
                  }}
                />
                <LinkedInIcon
                  style={{
                    color: "gray",
                  }}
                />
              </Stack>
            </Stack>
          </Stack>

          <Stack direction={"column"} spacing={1}>
            <br />

            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>Clothing </CustomLabel>
            </Box>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel> Home decor </CustomLabel>
            </Box>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>Fabaric </CustomLabel>
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
              <CustomLabel>Contact us </CustomLabel>
            </Box>
          </Stack>

          <Stack spacing={2} maxWidth={300}>
            <br />
            <Typography fontSize={"16px"} fontWeight={"bold"}>
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
        borderTop={"1px solid black"}
        margin={"0 auto"}
      >
        <Box mt={3} mb={2}>
          <Typography>copyright@2023 | All rights reserved</Typography>
        </Box>
      </Box>
    </Box>
  );
}
