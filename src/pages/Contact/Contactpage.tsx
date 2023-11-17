import { Box, Divider, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export default function ContactPage() {
  return (
    <>
    <Box marginTop={"150px"}>
     <Typography  lineHeight={"1"} textAlign={"center"} color={"black"} fontWeight={"400"} fontSize={"70px"} fontFamily={"sans-serif"}>Lorem ipsum dolor mit</Typography>
     <Typography  lineHeight={"1"} textAlign={"center"} color={"black"} fontWeight={"400"} fontSize={"70px"} fontFamily={"sans-serif"}>samet et omnia</Typography>
    </Box>
    <Box display={"flex"} justifyContent={"center"}>
    <Box width={"900px"} height={"150px"} border={"1px solid lightgray"} marginTop={"90px"} display={"flex"}>
    <Box textAlign={"center"}>
      <EmailIcon style={{
        fontSize: "32px"
      }} />
      <Typography color={"black"} fontSize={"25px"}>+61 (0) 7 9180 3458</Typography>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box textAlign={"center"}>
        <CallIcon style={{
        fontSize: "32px"
      }} />
        <Typography color={"pink"} fontSize={"25px"}>noreply@envato.com</Typography>
      </Box>
      </Box>
    </Box>
    </>
  );
}
