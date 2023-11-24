import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function ContactForm() {
  return (
    <>
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
          textAlign={"center"}
          fontWeight={"600"}
          fontSize={"30px"}
          color={"black"}
          fontFamily={"sans-serif"}
        >
          Send us a message
        </Typography>
        <Stack marginBottom={"185px"}>
          <Box
            paddingTop={"50px"}
            margin={"auto"}
            width={"100%"}
            maxWidth={"720px"}
          >
            <TextField
              sx={{
                width: "100%",
                maxWidth: "720px",
                "& input::placeholder": {
                  opacity: "1",
                  paddingLeft: "8px",
                },
                ".MuiFormHelperText-root": {
                  color: "#d32f2f",
                },
              }}
              required
              id="standard-required"
              placeholder="Name"
              variant="outlined"
              name="name"
            />
          </Box>
          <Box
            paddingTop={"50px"}
            margin={"auto"}
            width={"100%"}
            maxWidth={"720px"}
          >
            <TextField
              sx={{
                width: "100%",
                maxWidth: "720px",
                "& input::placeholder": {
                  opacity: "1",
                  paddingLeft: "8px",
                },
                ".MuiFormHelperText-root": {
                  color: "#d32f2f",
                },
              }}
              required
              id="standard-required"
              placeholder="Email"
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
            <TextField
              sx={{
                width: "100%",
                maxWidth: "720px",
                "& input::placeholder": {
                  opacity: "1",
                  paddingLeft: "8px",
                },
                ".MuiFormHelperText-root": {
                  color: "#d32f2f",
                },
              }}
              required
              multiline
              id="standard-required"
              placeholder="Your message"
              variant="outlined"
              name="name"
            />
          </Box>
        </Stack>

        <Box display={"flex"} justifyContent={"center"}>
          <Button
            style={{
              color: "#fff",
              backgroundColor: "#eb3c70",
              borderRadius: "20px",
              padding: "10px 30px",
              textTransform: "none",
              width: "200px",
            }}
          >
            Send the message
          </Button>
        </Box>
      </Box>
    </>
  );
}
