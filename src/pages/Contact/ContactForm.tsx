import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import SliderImages from "../../common-components/SliderImages";

export default function ContactForm() {
    return (
        <>
        <Box sx={{
            backgroundColor: "#f4f4f4",
        }}>
            <Typography paddingTop={"80px"} textAlign={"center"} fontWeight={"600"} fontSize={"30px"} color={"black"} fontFamily={"sans-serif"}>Send us a message</Typography>
            <Stack marginBottom={"185px"}>
            <Box paddingTop={"50px"} margin={"auto"} width={"100%"} maxWidth={"720px"}>
              <TextField
                sx={{
                  width: "100%",
                  maxWidth: "720px",
                  "& input::placeholder": {
                    opacity: "1",
                    paddingLeft: "8px"
                  },
                  ".MuiFormHelperText-root": {
                    color: "#d32f2f",
                  },
                }}
                required
                id="standard-required"
                placeholder="Name"
                variant="standard"
                name="name"
              />
            </Box>
            <Stack
            paddingTop={"30px"}
            justifyContent={"center"}
            flexDirection={"row"}
            alignItems={"baseline"}
            gap={"16px"}
          >
            <Box width={"100%"} maxWidth={"350px"}>
              <TextField
                sx={{
                  width: "100%",
                  maxWidth: "350px",
                  "& input::placeholder": {
                    opacity: "1",
                    paddingLeft: "8px"
                  },
                  ".MuiFormHelperText-root": {
                    color: "#d32f2f",
                  },
                }}
                required
                id="standard-required"
                placeholder="Email"
                variant="standard"
              />
            </Box>
            <Box width={"100%"} maxWidth={"350px"}>
              <TextField
                sx={{
                  width: "100%",
                  maxWidth: "350px",
                  "& input::placeholder": {
                    opacity: "1",
                    paddingLeft: "8px"
                  },
                  ".MuiFormHelperText-root": {
                    color: "#d32f2f",
                  },
                }}
                required
                id="standard-required"
                placeholder="Subject"
                variant="standard"
              />
            </Box>
          </Stack>
          <Box paddingTop={"30px"} margin={"auto"} width={"100%"} maxWidth={"720px"}>
              <TextField
                sx={{
                  width: "100%",
                  maxWidth: "720px",
                  "& input::placeholder": {
                    opacity: "1",
                    paddingLeft: "8px"
                  },
                  ".MuiFormHelperText-root": {
                    color: "#d32f2f",
                  },
                }}
                required
                id="standard-required"
                placeholder="Your message"
                variant="standard"
                name="name"
              />
            </Box>
            </Stack>
            <Divider style={{
                margin: "auto",
                border: '1px solid black',
                width: "100%",
                maxWidth: "740px",
            }} orientation="horizontal" />
            <Box display={"flex"} justifyContent={"center"} marginTop={"30px"}>
             <Button style={{
             color: "#fff",
             backgroundColor: "#eb3c70",
             borderRadius: "20px",
             padding: "10px 30px",
             textTransform: "none",
             width: "200px"
        }}>Send the message</Button>
        </Box>
        <Typography paddingTop={"80px"} fontSize={"15px"} textAlign={"center"} color={"black"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</Typography>
        <Typography marginBottom={"130px"} fontSize={"15px"} textAlign={"center"} color={"black"}>aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</Typography>
        <SliderImages />
        </Box>
        </>
    )
}