/* eslint-disable jsx-a11y/iframe-has-title */

import { Box, Stack, Typography } from "@mui/material";

import ContactBanner from "./plain-fabric-banner.jpg";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${ContactBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        width={"100%"}
        height={{ sm: undefined, md: 310 }}
        padding={{ sm: "40px 0 60px", md: "100px 0 40px" }}
        textAlign={"center"}
        bgcolor={"#F6F6F6"}
      >
        <Typography color={"white"} fontSize={"75px"} fontWeight={"bold"}>
          {" "}
          Reach Us
        </Typography>
      </Box>

      <Box padding={" 0 60px"}>
        <Typography paddingTop={" 60px"} fontFamily={"Nunito Sans, sans-serif"}>
          Working Hours <br /> Monday – Saturday : 9.00 AM – 11.00 PM
        </Typography>
      </Box>
      <Stack direction={"row"}>
        <ContactForm />
        <Box
          width={"85%"}
          padding={"0px 10px"}
          margin={"0 auto"}
          display={"flex"}
          marginBottom={"40px"}
        >
          <Box
            margin={"0 auto"}
            maxWidth={"700px"}
            width={"100%"}
            sx={{
              backgroundColor: "white",
            }}
          >
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Typography
                textAlign={"start"}
                fontWeight={"600"}
                fontSize={"25px"}
                color={"black"}
                paddingTop={"60px"}
                fontFamily={"Nunito Sans, sans-serif"}
              >
                CONTACT US
              </Typography>
              <Box
                style={{
                  marginTop: "53px",
                }}
                width={"70%"}
                borderTop={"1px solid rgba(0,0,0,0.105)"}
              ></Box>
            </Stack>
            <Stack>
              <Box
                marginLeft={"20px"}
                paddingTop={"30px"}
                gap={"7px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Address:
                </Typography>
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  maxWidth={"400px"}
                  fontSize={"15px"}
                  color={"grey"}
                >
                  Tina Blue View, 38/48, Othavadai St, Fisherman Colony,
                  Mahabalipuram, Tamil Nadu-603104.
                </Typography>
              </Box>
              <Box
                marginLeft={"20px"}
                paddingTop={"30px"}
                gap={"17px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Phone:
                </Typography>
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  fontSize={"15px"}
                  color={"grey"}
                >
                  +91 97910 68220
                </Typography>
              </Box>
              <Box
                marginLeft={"20px"}
                gap={"17px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Email:
                </Typography>
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  fontSize={"15px"}
                  color={"grey"}
                >
                  contactat@akkacreation.com
                </Typography>
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={4} alignItems={"center"}>
              <Typography
                textAlign={"start"}
                fontWeight={"600"}
                fontSize={"25px"}
                color={"black"}
                paddingTop={"60px"}
                fontFamily={"Nunito Sans, sans-serif"}
              >
                OUR BRANCH OFFICE
              </Typography>
              <Box
                style={{
                  marginTop: "53px",
                }}
                width={"56%"}
                borderTop={"1px solid rgba(0,0,0,0.105)"}
              ></Box>
            </Stack>
            <Stack>
              <Box
                marginLeft={"20px"}
                paddingTop={"30px"}
                gap={"7px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Address:
                </Typography>
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  maxWidth={"400px"}
                  fontSize={"15px"}
                  color={"grey"}
                >
                  Tina Blue View, 38/48, Othavadai St, Fisherman Colony,
                  Mahabalipuram, Tamil Nadu-603104.
                </Typography>
              </Box>
              <Box
                marginLeft={"20px"}
                paddingTop={"30px"}
                gap={"17px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Phone:
                </Typography>
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  fontSize={"15px"}
                  color={"grey"}
                >
                  +91 97910 68220
                </Typography>
              </Box>
              <Box
                marginLeft={"20px"}
                gap={"17px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Email:
                </Typography>
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  fontSize={"15px"}
                  color={"grey"}
                >
                  contactat@akkacreation.com
                </Typography>
              </Box>
              <Box
                marginLeft={"20px"}
                paddingTop={"30px"}
                gap={"7px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Address:
                </Typography>
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  maxWidth={"400px"}
                  fontSize={"15px"}
                  color={"grey"}
                >
                  Tina Blue View, 38/48, Othavadai St, Fisherman Colony,
                  Mahabalipuram, Tamil Nadu-603104.
                </Typography>
              </Box>
              <Box
                marginLeft={"20px"}
                paddingTop={"30px"}
                gap={"17px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Phone:
                </Typography>
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  fontSize={"15px"}
                  color={"grey"}
                >
                  +91 97910 68220
                </Typography>
              </Box>
              <Box
                marginLeft={"20px"}
                gap={"17px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Email:
                </Typography>
                <Typography
                  fontFamily={"Nunito Sans, sans-serif"}
                  fontSize={"15px"}
                  color={"grey"}
                >
                  contactat@akkacreation.com
                </Typography>
              </Box>
              <Box padding={"0 20px"} marginTop={3}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15573.737649706532!2d80.1963331!3d12.6194818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53acac30ee8d5d%3A0xad2be778ecae5918!2sTina%20Blue%20View!5e0!3m2!1sen!2sin!4v1702554954296!5m2!1sen!2sin"
                  width="600"
                  height="350"
                ></iframe>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
