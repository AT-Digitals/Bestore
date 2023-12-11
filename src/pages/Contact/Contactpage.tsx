import { Box, Stack, Typography } from "@mui/material";

import ContactBanner from "./contact-banner.jpg";
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
        padding={{ sm: "40px 0 60px", md: "140px 0 60px" }}
        textAlign={"center"}
        bgcolor={"#F6F6F6"}
      >
        <Typography color={"black"} fontSize={"75px"} fontWeight={"bold"}>
          {" "}
          Reach Us
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
          // marginRight={"88px"}
        >
          <Box
            margin={"0 auto"}
            maxWidth={600}
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
            <Typography margin={"30px 25px"} fontSize={"15px"} color={"grey"}>
              <span
                style={{
                  color: "black",
                  fontSize: "16px",
                }}
              >
                Address:
              </span>
              Tina Blue View, 38/48, Othavadai St, Fisherman Colony,
              Mahabalipuram, Tamil Nadu-603104
            </Typography>
            <Box margin={"30px 25px"}>
              <Typography fontSize={"15px"} color={"grey"}>
                <span
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Phone:
                </span>
                +91 97910 68220
              </Typography>
              <Typography fontSize={"15px"} color={"grey"}>
                <span
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Email:
                </span>
                contactat@akkacreation.com
              </Typography>
            </Box>
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
            <Typography margin={"30px 25px"} fontSize={"15px"} color={"grey"}>
              <span
                style={{
                  color: "black",
                  fontSize: "16px",
                }}
              >
                Address:
              </span>
              Tina Blue View, 38/48, Othavadai St, Fisherman Colony,
              Mahabalipuram, Tamil Nadu-603104
            </Typography>
            <Box margin={"30px 25px"}>
              <Typography fontSize={"15px"} color={"grey"}>
                <span
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Phone:
                </span>
                +91 97910 68220
              </Typography>
              <Typography fontSize={"15px"} color={"grey"}>
                <span
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Email:
                </span>
                contactat@akkacreation.com
              </Typography>
            </Box>
            <Typography margin={"30px 25px"} fontSize={"15px"} color={"grey"}>
              <span
                style={{
                  color: "black",
                  fontSize: "16px",
                }}
              >
                Address:
              </span>
              Tina Blue View, 38/48, Othavadai St, Fisherman Colony,
              Mahabalipuram, Tamil Nadu-603104
            </Typography>
            <Box margin={"30px 25px"}>
              <Typography fontSize={"15px"} color={"grey"}>
                <span
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Phone:
                </span>
                +91 97910 68220
              </Typography>
              <Typography fontSize={"15px"} color={"grey"}>
                <span
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Email:
                </span>
                contactat@akkacreation.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
