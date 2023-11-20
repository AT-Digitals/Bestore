import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Profile1 from '../../assets/store2-contact-staff-2.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import map from "../../assets/store2-contact-map.png"
import Profile2 from '../../assets/store2-contact-staff-1.png'
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
    <Box marginTop={"150px"}>
    <Typography  lineHeight={"1"} textAlign={"center"} color={"black"} fontWeight={"400"} fontSize={"70px"} fontFamily={"sans-serif"}>Lorem ipsum dolor mit</Typography>
    <Typography  lineHeight={"1"} textAlign={"center"} color={"black"} fontWeight={"400"} fontSize={"70px"} fontFamily={"sans-serif"}>samet et omnia</Typography>
    </Box>
    <Box display={"flex"} justifyContent={"center"} marginBottom={"100px"}>
    <Box width={"100%"} maxWidth={"980px"} border={"1px solid lightgray"} marginTop={"90px"} display={"flex"}>
    <Box margin={"30px 130px"} textAlign={"center"}>
      <EmailIcon style={{
        fontSize: "32px"
      }} />
      <Typography paddingTop={"30px"} color={"black"} fontSize={"20px"} fontWeight={"600"}>+61 (0) 7 9180 3458</Typography>
      </Box>
      <Divider style={{
        width: "30px"
      }} orientation="vertical" flexItem />
      <Box margin={"30px 130px"} textAlign={"center"}>
        <CallIcon style={{
        fontSize: "32px"
      }} />
        <Typography paddingTop={"30px"} color={"#eb3c70"} fontSize={"20px"} fontWeight={"600"}>noreply@envato.com</Typography>
      </Box>
      </Box>
    </Box>
    <Stack spacing={5} alignItems={"flex-start"} margin={"35px 350px"} direction={"row"}>
      <img width={"120px"} src={Profile1} alt="staff 1" />
      <Typography style={{
        marginTop: "30px",
      }} fontSize={"20px"} fontWeight={"600"} color={"black"}>Lorem ipsum dolor<Typography fontWeight={"600"} fontSize={"20px"} color={"black"}>sit amet omnia</Typography>
      <Typography paddingTop={"20px"} display={"flex"} gap={"10px"} alignItems={"center"}>
      <LocationOnIcon style={{
        fontSize: "15px"
      }} />
      <Typography fontSize={"15px"} fontWeight={"500"} color={"black"}>Envato</Typography>
      </Typography>
      <Typography paddingLeft={"25px"} fontSize={"15px"} fontWeight={"500"} color={"black"}>Level 13, 2 Elizabeth St,</Typography>
      <Typography paddingLeft={"25px"} fontSize={"15px"} fontWeight={"500"} color={"black"}> Melbourne, Victoria 3000</Typography>
      <Typography paddingLeft={"25px"} fontSize={"15px"} fontWeight={"500"} color={"black"}> Australia</Typography>
      <Typography paddingTop={"16px"} display={"flex"} gap={"10px"} alignItems={"center"}>
      <PhoneIcon style={{
        fontSize: "15px"
      }} />
       <Link href="#" underline="hover" sx={{
        ":hover": {
          color: "#eb3c70"
        }
       }}>
      <Typography color={"#eb3c70"} fontSize={"15px"}>+61 (0) 7 9180 3458</Typography>
      </Link>
      </Typography>
      <Typography paddingTop={"16px"} display={"flex"} gap={"10px"} alignItems={"center"}>
      <EmailIcon style={{
        fontSize: "15px"
      }} />
       <Link href="#" underline="hover" sx={{
        ":hover": {
          color: "#eb3c70"
        }
       }}>
      <Typography color={"#eb3c70"} fontSize={"15px"}>noreply@envato.com</Typography>
      </Link>
      </Typography>
      </Typography>
    </Stack>
    <Stack spacing={5} alignItems={"flex-start"} margin={"0px 350px"} direction={"row"}>
      <img width={"120px"} src={Profile2} alt="staff 2" />
      <Typography style={{
        marginTop: "30px",
      }} fontSize={"20px"} fontWeight={"600"} color={"black"}>Lorem ipsum dolor<Typography fontWeight={"600"} fontSize={"20px"} color={"black"}>sit amet omnia</Typography>
      <Typography paddingTop={"20px"} display={"flex"} gap={"10px"} alignItems={"center"}>
      <LocationOnIcon style={{
        fontSize: "15px"
      }} />
      <Typography fontSize={"15px"} fontWeight={"500"} color={"black"}>Envato</Typography>
      </Typography>
      <Typography paddingLeft={"25px"} fontSize={"15px"} fontWeight={"500"} color={"black"}>Level 13, 2 Elizabeth St,</Typography>
      <Typography paddingLeft={"25px"} fontSize={"15px"} fontWeight={"500"} color={"black"}> Melbourne, Victoria 3000</Typography>
      <Typography paddingLeft={"25px"} fontSize={"15px"} fontWeight={"500"} color={"black"}> Australia</Typography>
      <Typography paddingTop={"16px"} display={"flex"} gap={"10px"} alignItems={"center"}>
      <PhoneIcon style={{
        fontSize: "15px"
      }} />
       <Link href="#" underline="hover" sx={{
        ":hover": {
          color: "#eb3c70"
        }
       }}>
      <Typography color={"#eb3c70"} fontSize={"15px"}>+61 (0) 7 9180 3458</Typography>
      </Link>
      </Typography>
      <Typography paddingTop={"16px"} display={"flex"} gap={"10px"} alignItems={"center"}>
      <EmailIcon style={{
        fontSize: "15px"
      }} />
       <Link href="#" underline="hover" sx={{
        ":hover": {
          color: "#eb3c70"
        }
       }}>
      <Typography color={"#eb3c70"} fontSize={"15px"}>noreply@envato.com</Typography>
      </Link>
      </Typography>
      </Typography>
    </Stack>
    <Box paddingBottom={"130px"} display={"flex"} justifyContent={"end"} marginRight={"190px"} marginTop={"-557px"}>
    <img src={map} alt="map" width={"400px"} height={"543px"} />
    </Box>
    <ContactForm />
    </>
  );
}
