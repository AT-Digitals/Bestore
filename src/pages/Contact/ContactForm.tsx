import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export default function ContactForm() {
  return (
    <>
      <Box
        margin={"0 auto"}
        maxWidth={600}
        width={"100%"}
        padding={"60px"}
        borderRight={"1px solid rgba(0,0,0,0.105)"}
        mt={2}
        sx={{
          backgroundColor: "white",
        }}
      >
        <Stack marginBottom={"25px"}>
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <Typography
              color={"black"}
              fontWeight={"bold"}
              fontFamily={"Nunito Sans, sans-serif"}
              fontSize={"25px"}
            >
              SEND US AN EMAIL
            </Typography>
            <Box width={"60%"} borderTop={"1px solid rgba(0,0,0,0.105)"}></Box>
          </Stack>
          <Box
            paddingTop={"40px"}
            margin={"auto"}
            width={"100%"}
            maxWidth={"720px"}
          >
            <Typography
              pb={1}
              color={"black"}
              fontSize={"17px"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              Your Name
            </Typography>
            <TextField
              sx={{
                width: "100%",
                maxWidth: "600px",
                ".MuiInputBase-root": {
                  borderRadius: "30px",
                  height: "45px",
                },
              }}
              required
              id="standard-required"
              variant="outlined"
              name="name"
            />
          </Box>
          <Box
            paddingTop={"40px"}
            margin={"auto"}
            width={"100%"}
            maxWidth={"720px"}
          >
            <Typography
              pb={1}
              color={"black"}
              fontSize={"17px"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              Your Email
            </Typography>
            <TextField
              sx={{
                width: "100%",
                maxWidth: "600px",
                ".MuiInputBase-root": {
                  borderRadius: "30px",
                  height: "45px",
                },
              }}
              required
              id="standard-required"
              variant="outlined"
              name="name"
            />
          </Box>
          <Box
            paddingTop={"40px"}
            margin={"auto"}
            width={"100%"}
            maxWidth={"720px"}
          >
            <Typography
              pb={1}
              color={"black"}
              fontSize={"17px"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              Phone Number
            </Typography>
            <TextField
              sx={{
                width: "100%",
                maxWidth: "600px",
                ".MuiInputBase-root": {
                  borderRadius: "30px",
                  height: "45px",
                },
              }}
              required
              type="number"
              id="standard-required"
              variant="outlined"
              name="name"
            />
          </Box>
          <Box
            paddingTop={"40px"}
            margin={"auto"}
            width={"100%"}
            maxWidth={"720px"}
          >
            <Typography
              pb={1}
              color={"black"}
              fontSize={"17px"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              Products
            </Typography>
            <TextField
              sx={{
                width: "100%",
                maxWidth: "600px",
                ".MuiInputBase-root": {
                  borderRadius: "30px",
                  height: "45px",
                },
              }}
              required
              id="standard-required"
              variant="outlined"
              name="name"
            />
          </Box>
          <Box
            paddingTop={"30px"}
            margin={"auto"}
            width={"100%"}
            maxWidth={"720px"}
          >
            <Typography
              pb={1}
              color={"black"}
              fontSize={"17px"}
              fontFamily={"Nunito Sans, sans-serif"}
            >
              Your Message
            </Typography>
            <TextField
              sx={{
                width: "100%",
                maxWidth: "720px",
                ".MuiInputBase-root": {
                  borderRadius: "30px",
                  height: "160px",
                },
              }}
              required
              multiline
              id="standard-required"
              variant="outlined"
              name="name"
            />
          </Box>
        </Stack>

        <Box marginBottom={"190px"}>
          <Button
            style={{
              color: "#fff",
              backgroundColor: "black",
              borderRadius: "5px",
              padding: "10px 30px",
              textTransform: "none",
              width: "200px",
              fontFamily: "Nunito Sans, sans-serif",
            }}
          >
            Send the message
          </Button>
        </Box>
      </Box>
    </>
  );
}
