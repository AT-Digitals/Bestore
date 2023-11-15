import { Box, Button, Stack, Typography, styled } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const CustomLabel = styled(Typography)({
  color: "#6F6F6F",
  fontSize: "16px",
});
export default function AppFooter() {
  return (
    <Stack
      bgcolor={"#f6f6f6"}
      direction={{ xs: "column", sm: "column", md: "row" }}
    >
      <Stack
        paddingTop={"100px"}
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={6}
        margin={"0 auto"}
      >
        <Stack direction={"column"} spacing={3} maxWidth={260}>
          <Typography fontSize={"24px"}>
            Lorem ipsium dolor sam etomnia
          </Typography>
          <Button
            style={{
              background: "#7f7f7f",
              color: "white",
              maxWidth: 160,
              width: "100%",
              borderRadius: "20px",
              textTransform: "none",
            }}
          >
            More details
          </Button>
          <Box borderBottom={"1px solid gray"}></Box>
          <Stack direction={"row"}>
            <FacebookIcon style={{ color: "#ec4979" }} />
            <TwitterIcon style={{ color: "#ec4979" }} />
            <LinkedInIcon style={{ color: "#ec4979" }} />
          </Stack>
        </Stack>
        <Box gap={"3rem"}>
          <Typography
            fontSize={"16px"}
            fontFamily={'"Lato", Helvetica, Arial, sans-serif'}
            fontWeight={"bold"}
          >
            Useful links
          </Typography>
          <br />
          <Stack spacing={1}>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel> P-3400 ipsum </CustomLabel>
            </Box>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel> AD Conser poretel venture </CustomLabel>
            </Box>{" "}
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel> Elisted-34 eiusmod</CustomLabel>
            </Box>{" "}
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel> Atlabore-33</CustomLabel>
            </Box>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel> Tempor-Z incididunt</CustomLabel>
            </Box>
          </Stack>
        </Box>
        <Box maxWidth={260}>
          <br />
          <br />
          <Stack spacing={0.5}>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>Lorem ipsum</CustomLabel>
            </Box>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>Consectetur adipisicing</CustomLabel>
            </Box>{" "}
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel> Elitsed do eiusmund</CustomLabel>
            </Box>{" "}
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>Tempor incididunt</CustomLabel>
            </Box>
            <Box p={1} display={"flex"}>
              <ChevronRightIcon style={{ color: "#ec4979" }} />
              <CustomLabel>Altabore</CustomLabel>
            </Box>
          </Stack>
        </Box>
        <Stack spacing={2} maxWidth={260}>
          <Typography fontSize={"16px"} fontWeight={"bold"}>
            Our mission
          </Typography>
          <CustomLabel fontSize={"15px"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CustomLabel>
          <a href="" style={{ color: "#ec4979", textDecoration: "none" }}>
            Read more
          </a>
        </Stack>
      </Stack>
    </Stack>
  );
}
