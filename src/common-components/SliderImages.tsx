import { Box, Button, Stack, Typography } from "@mui/material";
import image1 from "../common-components/Mens_Fabric-min.jpg"
import image2 from "../assets/ProductsImage/il_794xN.5185197427_16jr.avif"
import image3 from "../assets/ProductsImage/fab2.jpg"


export default function SliderImages() {
  return (
   <>
   <Box bgcolor={"#f2d7b3"} paddingTop={"65px"} paddingBottom={"60px"}>
<Box margin={"0 auto"} boxShadow={"0px 0px 10px 0px"} height={"850px"} maxWidth={"1240px"} width={"100%"} bgcolor={"#f4dcbd"}>
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
<Box  margin={"0 auto"} width={"100%"} height={"360px"} maxWidth={"500px"} boxShadow={"0px 0px 10px 0px"} bgcolor={"#f1dfc9"}>
<img style={{
  boxShadow: "0px 0px 10px 0px saddlebrown",
  margin: "30px"
}} src={image1} height={"300px"} alt="image" width={"440px"} />
<Box marginLeft={"-56px"} marginTop={"-140px"} position={"absolute"} width={"100%"} maxWidth={"150px"} height={"250px"} boxShadow={"0px 0px 10px 0px"} bgcolor={"#ede3d6"}>
<img src={image2} style={{
  margin: "15px",
  boxShadow: "0px 0px 10px 0px #1e1c1b",
}} width={"120px"} height={"220px"} alt="image2" />
</Box>
<Box marginLeft={"400px"} marginTop={"-140px"} position={"absolute"} width={"100%"} maxWidth={"150px"} height={"250px"} boxShadow={"0px 0px 10px 0px"} bgcolor={"#ede3d6"}>
<img src={image3} style={{
  margin: "15px",
  boxShadow: "0px 0px 10px 0px #1e1c1b",
}} width={"120px"} height={"220px"} alt="image2" />
</Box>
</Box>
<Box display={"flex"} justifyContent={"center"}>
<Button style={{
  width: "200px",
  height: "50px",
  backgroundColor: "white",
  color: "black",
  marginTop: "200px",
  boxShadow: "0px 0px 10px 0px black",
  fontWeight: "bold"
}}>View More Products</Button>
</Box>
</Box>
</Box>
   </>
  );
}
