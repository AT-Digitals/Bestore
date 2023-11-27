import { Box, Button, Stack, TextField } from "@mui/material";

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
        <Stack marginBottom={"25px"}>
          <Stack direction={"row"} spacing={4}>
            <Box
              paddingTop={"50px"}
              margin={"auto"}
              width={"100%"}
              maxWidth={"720px"}
            >
              <TextField
                sx={{
                  width: "100%",
                  maxWidth: "300px",
                  "& input::placeholder": {
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
                  maxWidth: "300px",
                  "& input::placeholder": {
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
          </Stack>
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
                  paddingLeft: "8px",
                },
                ".MuiFormHelperText-root": {
                  color: "#d32f2f",
                },
                ".MuiInputBase-root": {
                  paddingBottom: "116px",
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
