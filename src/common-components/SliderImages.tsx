import { Box, Button, Stack, Typography } from "@mui/material";
import image1 from "../common-components/mizzen_main_4.webp"
import image2 from "../assets/ProductsImage/il_794xN.5185197427_16jr.avif"
import image3 from "../assets/ProductsImage/fab2.jpg"


export default function SliderImages() {
  return (
   <>
   <Box bgcolor={"#f2d7b3"} paddingTop={"65px"} paddingBottom={"60px"}>
<Box margin={"0 auto"} boxShadow={"0px 0px 10px 0px"} height={"850px"} paddingBottom={"40px"} maxWidth={"1240px"} width={"100%"} bgcolor={"#f4dcbd"}>
<Stack mb={9} direction={"row"} spacing={3} alignItems={"center"}>
<Box style={{
      marginTop: "54px" ,
      marginLeft: "45px",
}}  width={"35%"} borderTop={"1px solid black"}></Box>
<Typography style={{
   textShadow: "0px 0px 3px #494545",
   color: "black",
}} textAlign={"center"} paddingTop={"60px"} fontWeight={"bold"} fontSize={"35px"}  fontFamily={"Nunito Sans, sans-serif"}>Fabric Products</Typography>
<Box style={{
      marginTop: "59px" ,
      marginLeft: "30px",
}}  width={"35%"} borderTop={"1px solid black"}></Box>
</Stack>
<Box  margin={"0 auto"} width={"100%"} height={"410px"} maxWidth={"700px"} boxShadow={"0px 0px 10px 0px #f7ead9"} bgcolor={"#e7d7c4"}>
<img style={{
  boxShadow: "0px 0px 10px 0px saddlebrown",
  margin: "30px"
}} src={image1} height={"350px"} alt="image" width={"640px"} />
<Box marginLeft={"-56px"} marginTop={"-140px"} position={"absolute"} width={"100%"} maxWidth={"120px"} height={"200px"} bgcolor={"#ede3d6"}>
<img src={image2} style={{
  margin: "15px",
  boxShadow: "0px 0px 10px 0px rgb(160 152 147)",
}} width={"90px"} height={"170px"} alt="image2" />
</Box>
<Box marginLeft={"620px"} marginTop={"-140px"} position={"absolute"} width={"100%"} maxWidth={"190px"} height={"270px"} bgcolor={"#ede3d6"}>
<img src={image3} style={{
  margin: "15px",
  boxShadow: "0px 0px 10px 0px rgb(160 152 147)",
}} width={"160px"} height={"240px"} alt="image2" />
</Box>
</Box>
<Box marginBottom={"30px"} display={"flex"} justifyContent={"center"}>
<Button style={{
  width: "200px",
  height: "50px",
  backgroundColor: "white",
  color: "black",
  marginTop: "200px",
  boxShadow: "0px 0px 10px 0px black",
  fontWeight: "bold",
}}>View More Products</Button>
</Box>
</Box>
</Box>
   </>
  );
}
