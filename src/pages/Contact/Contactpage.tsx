import { Box, Stack, Typography } from "@mui/material";

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <Stack mt={"5rem"} direction={"row"}>
      <Box
        width={"85%"}
        padding={"0px 10px"}
        margin={"0 auto"}
        boxShadow={"0px 1px 10px 2px"}
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
            fontFamily={`'Nunito Sans', sans-serif`}
          >
            INFORMATION
          </Typography>
          <Typography
            textAlign={"start"}
            fontWeight={"600"}
            fontSize={"50px"}
            color={"black"}
           fontFamily={`'Nunito Sans', sans-serif`}
          >
            Contact Us
          </Typography>
          <Typography  textAlign={"start"}
            fontWeight={"500"}
            fontSize={"17px"}
            color={"black"}
            fontFamily={`'Nunito Sans', sans-serif`}>
              As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
            </Typography>
            <Typography paddingTop={"25px"} textAlign={"start"} fontWeight={"600"} fontSize={"24px"} color={"black"}fontFamily={"sans-serif"}>America</Typography>
        <Typography paddingTop={"12px"} textAlign={"start"} fontWeight={"500"} fontSize={"17px"} color={"black"}fontFamily={"sans-serif"}>195 E Parker Square Dr, Parker, CO 801</Typography>
        <Typography textAlign={"start"} fontWeight={"500"} fontSize={"17px"} color={"black"}fontFamily={"sans-serif"}>+43 982-314-0958</Typography>
        <Typography paddingTop={"25px"} textAlign={"start"} fontWeight={"600"} fontSize={"24px"} color={"black"}fontFamily={"sans-serif"}>France</Typography>
        <Typography paddingTop={"12px"} textAlign={"start"} fontWeight={"500"} fontSize={"17px"} color={"black"}fontFamily={"sans-serif"}>109 Avenue Léon, 63 Clermont-Ferrand</Typography>
        <Typography textAlign={"start"} fontWeight={"500"} fontSize={"17px"} color={"black"}fontFamily={"sans-serif"}>+12 345-423-9893</Typography>
        </Box>
        <ContactForm />
      </Box>
    </Stack>
  );
}
