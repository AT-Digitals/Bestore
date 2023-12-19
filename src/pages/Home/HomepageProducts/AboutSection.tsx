import { Box, Button, Stack, Typography } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Fabric from "./fabric-about.jpeg";
import Fabric2 from "./fabric-about2.jpeg";

export default function AboutSection() {
  return (
    <Box padding={"50px"} mt={4} mb={4} bgcolor={"white"}>
      <Stack direction={"row"}>
        <Stack direction={"row"} spacing={3} maxWidth={600}>
          <Box>
            <img width={300} src={Fabric} alt="" />
          </Box>{" "}
          <Box pt={3}>
            <img width={350} src={Fabric2} alt="" />
          </Box>
        </Stack>
        <Box margin={"0 auto"} maxWidth={600}>
          <Typography fontFamily={"Nunito Sans, sans-serif"} fontSize={"35px"}>
            About Us
          </Typography>
          <Typography>
            A textile fabric is a material that has been either woven or
            non-woven (knitted, tufted, knotted, or bonded). Textile fabrics can
            be made out of natural fibers, meaning they are plant-based or
            animal-based, or synthetic fibers, meaning humans manufacture them.
            Synthetic fabrics are also known as artificial fabrics
          </Typography>
          <Box
            borderLeft={"5px solid red"}
            mt={2}
            padding={"20px"}
            boxShadow={"0px 0px 5px 0px"}
          >
            <Typography style={{
              fontSize: "68px", 
              color: "#e53637",
              marginTop: "-24px"
            }}>
            “
            </Typography>
            <Typography marginLeft={"32px"} marginTop={"-69px"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua.-{" "}
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Akka creations
              </span>
            </Typography>
          </Box>
          <Button
            sx={{
              background: "black",
              color: "white",
              marginTop: "40px",
              textTransform: "none",
              width: 300,
              ":hover": {
                color: "white",
                backgroundColor: "#e53637",
              }
            }}
          >
            Read more
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
