import { Box, Stack, Typography } from "@mui/material";

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <Stack mt={"5rem"} direction={"row"}>
      <Box
        width={"90%"}
        margin={"0 auto"}
        boxShadow={"0px 1px 10px 2px"}
        display={"flex"}
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
            color={"red"}
            fontFamily={"sans-serif"}
          >
            INFORMATION
          </Typography>
          <Typography
            textAlign={"start"}
            fontWeight={"600"}
            fontSize={"50px"}
            color={"black"}
            fontFamily={"sans-serif"}
          >
            Contact Us
          </Typography>
        </Box>
        <ContactForm />
      </Box>
    </Stack>
  );
}
