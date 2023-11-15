import AboutBanner from "../../assets/AboutBanner.jpg";
import { Box, Button, Stack, Typography } from "@mui/material";
import image1 from '../../assets/store2-home-icon-5.png'
import image2 from '../../assets/store2-home-icon-3.png'
import image3 from '../../assets/store2-home-icon-2.png'
import image4 from '../../assets/store2-home-icon-1.png'
import image5 from '../../assets/store2-home-icon-4.png'
import logo from '../../assets/store2-about-brands.png'
import bags from '../../assets/store2-home-bags.png'

export default function AboutPage() {
  return (
    <Box>
    <Box sx={{
      backgroundColor: "#f4f4f4",
    }}>
      <Box
        sx={{
          backgroundImage: `url(${AboutBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
          minHeight: 900,
        }}
      ></Box>
      <Box display={"flex"} justifyContent={"center"}>
      <Typography paddingTop={"80px"} textAlign={"center"} maxWidth={"727px"} fontSize={"22px"} fontWeight={"600"} fontFamily={"sans-serif"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim veni sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim veni sit amet</Typography>
      </Box>
      <Stack direction={"row"} justifyContent={"space-evenly"} marginTop={"140px"}>
      <Box>
      <img src={image1} alt="icon 1" />
      <Typography fontFamily={"sans-serif"} fontWeight={"600"} paddingTop={"20px"} fontSize={"15px"} color={"black"} paddingLeft={"17px"}>30 days</Typography>
      <Typography fontFamily={"sans-serif"} fontWeight={"600"} fontSize={"15px"} color={"black"} paddingLeft={"10px"}>free return</Typography>
      </Box>
      <Box>
      <img src={image2} alt="icon 2" />
      <Typography fontFamily={"sans-serif"} fontWeight={"600"} paddingTop={"20px"} fontSize={"15px"} color={"black"} paddingLeft={"17px"}>5 ways</Typography>
      <Typography fontFamily={"sans-serif"} fontWeight={"600"} fontSize={"15px"} color={"black"} paddingLeft={"12px"}>payment</Typography>
      </Box>
      <Box>
      <img src={image3} alt="icon 3" />
      <Typography fontFamily={"sans-serif"} fontWeight={"600"} paddingTop={"20px"} fontSize={"15px"} color={"black"} paddingLeft={"17px"}>Excellent</Typography>
      <Typography fontFamily={"sans-serif"} fontWeight={"600"} fontSize={"15px"} color={"black"} paddingLeft={"19px"}>support</Typography>
      </Box>
      <Box>
      <img src={image4} alt="icon 4" />
      <Typography fontFamily={"sans-serif"} fontWeight={"600"} paddingTop={"20px"} fontSize={"15px"} color={"black"} paddingLeft={"9px"}>Satisfaction</Typography>
      <Typography fontFamily={"sans-serif"} fontWeight={"600"} fontSize={"15px"} color={"black"} paddingLeft={"15px"}>guarantee</Typography>
      </Box>
      <Box>
      <img src={image5} alt="icon 5" />
      <Typography fontFamily={"sans-serif"} fontWeight={"600"} paddingTop={"20px"} fontSize={"15px"} color={"black"} paddingLeft={"11px"}>Super fast</Typography>
      <Typography fontFamily={"sans-serif"} fontWeight={"600"} fontSize={"15px"} color={"black"} paddingLeft={"18px"}>delivery</Typography>
      </Box>
      </Stack>
      <Box marginTop={"95px"} display={"flex"} justifyContent={"center"}>
      <Typography paddingBottom={"100px"} textAlign={"center"} maxWidth={"646px"} fontSize={"15px"} fontWeight={"500"} fontFamily={"sans-serif"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim veni sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim veni sit amet</Typography>
      </Box>
    </Box>
    <Stack direction={"row"}>
    <Box sx={{
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "501px",
      backgroundImage: `url('https://themes.muffingroup.com/be/store2/wp-content/uploads/2020/07/store2-about-bg1.jpg')`,
    }}width={"50%"}>
    </Box>
    <Stack direction={"column"} margin={"120px 70px"}>
    <Typography fontSize={"30px"} fontWeight={"600"} color={"black"}>Lorem ipsum quam pertroni</Typography>
    <Typography maxWidth={"570px"} paddingTop={"25px"} fontSize={"16px"} color={"black"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
    <Button style={{
      backgroundColor: "#F6F6F6",
      color: "black",
      textTransform: "none",
      borderRadius: "20px",
      padding: "10px 20px",
      width: "175px",
      marginTop: "30px",
    }}>Contact us</Button>
    </Stack>
    </Stack>
    <Stack direction={"row-reverse"}>
    <Box sx={{
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "501px",
      float: "left",
      backgroundImage: `url('	https://themes.muffingroup.com/be/store2/wp-content/uploads/2020/07/store2-about-bg2.jpg')`,
    }}width={"50%"}>
    </Box>
    <Stack direction={"column"} margin={"120px 50px"}>
    <Typography fontSize={"30px"} fontWeight={"600"} color={"black"}>Lorem ipsum quam pertroni</Typography>
    <Typography maxWidth={"570px"} paddingTop={"25px"} fontSize={"16px"} lineHeight={"1.7"} color={"black"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
    <Button style={{
      backgroundColor: "#F6F6F6",
      color: "black",
      textTransform: "none",
      borderRadius: "20px",
      padding: "10px 20px",
      width: "175px",
      marginTop: "30px",
    }}>Contact us</Button>
    </Stack>
    </Stack>
    <Stack marginTop={"90px"} alignItems={"center"}>
    <img width={"900px"} src={logo} alt="logo" />
    </Stack>
    <Stack alignItems={"center"} marginTop={"90px"}>
    <img width={"400px"} src={bags} alt="bags" />
    </Stack>
    </Box>
  );
}
