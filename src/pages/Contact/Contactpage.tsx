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
          {"Contact Us"}
        </Typography>
      </Box>
      <Stack direction={"row"}>
        <Box
          width={"85%"}
          padding={"0px 10px"}
          margin={"0 auto"}
          display={"flex"}
          marginBottom={"40px"}
          marginTop={"40px"}
        >
          <Box
            margin={"0 auto"}
            maxWidth={600}
            width={"100%"}
            sx={{
              backgroundColor: "white",
            }}
          >
            <Typography
              paddingTop={"80px"}
              textAlign={"start"}
              fontWeight={"600"}
              fontSize={"px"}
              color={"#e53637"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              INFORMATION
            </Typography>
            <Typography
              textAlign={"start"}
              fontWeight={"600"}
              fontSize={"50px"}
              color={"black"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              Contact Us
            </Typography>
            <Typography
              textAlign={"start"}
              fontWeight={"500"}
              fontSize={"17px"}
              color={"black"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              As you might expect of a company that began as a high-end
              interiors contractor, we pay strict attention.
            </Typography>
            <Typography
              paddingTop={"25px"}
              textAlign={"start"}
              fontWeight={"600"}
              fontSize={"24px"}
              color={"black"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              Tamil Nadu
            </Typography>
            <Typography
              paddingTop={"12px"}
              textAlign={"start"}
              fontWeight={"500"}
              fontSize={"17px"}
              color={"black"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              Tina Blue View, 38/48, Othavadai St, Fisherman Colony,
              Mahabalipuram,
              <br /> Tamil Nadu-603104
            </Typography>
            <Typography>
              <span>Email- </span>
              <a
                style={{ color: "black" }}
                href="mailto:vero.mamallapuram@yahoo.com"
              >
                vero.mamallapuram@yahoo.com{" "}
              </a>
            </Typography>
            <Typography
              textAlign={"start"}
              fontWeight={"500"}
              fontSize={"17px"}
              color={"black"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              +91 97910 68220
            </Typography>
          </Box>
          <ContactForm />
        </Box>
      </Stack>
    </>
  );
}
