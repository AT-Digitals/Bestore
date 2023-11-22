import { Box, Button, Divider, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import BeigeShoes from "../../assets/ProductsImage/shoe.jpg";
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import React from "react";
import Productsignup from "../../assets/ProductsImage/products-signup-image.jpg";
import FlipFlops from "../../assets/ProductsImage/flipflops.jpg";
import Redshoes from "../../assets/ProductsImage/red shoes.jpg";
import BadgeStyle1 from "../Home/HomepageProducts/BadgeStyle1";

const ProductsImage = [
    {
      name: "Beige shoes",
      Image: BeigeShoes,
      type: "Best selling",
    },
]

const ProductsNavigatoinItems = [
    { name: "Accessories", link: "" },
    { name: "Bags", link: "" },
    { name: "Clothing", link: "" },
    { name: "Cosmatics", link: "" },
    { name: "Jewelary", link: "" },
    { name: "Shoes", link: "" },
  ];


export default function ProductShoe() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return (
        <Box>
        <Box padding={"185px 0 60px"} textAlign={"center"} bgcolor={"#F6F6F6"}>
            <Typography textAlign={"center"} fontSize={"68px"} fontWeight={"bold"} color={"black"} fontFamily={"sans-serif"}>Beige shoes</Typography>
        </Box>
        <Divider style={{
        width: "1060px",
        height: "900px",
       }} orientation="vertical" flexItem/>  
       {ProductsImage.map((item, index) => (
        <Box key={index} marginRight={"197px"} marginTop={"-890px"} display={"flex"} justifyContent={"center"}>
       <img width={"330px"} src={item.Image} alt="bag" />
       {item.type === "Best selling" && <BadgeStyle1 />}
       <Box display={"flex"} gap={"35px"} marginTop={"20px"}>
       <SearchIcon style={{
        fontSize: "25px",
        marginTop: "20px"
       }} />
       <Typography fontSize={"36px"} color={"black"} fontFamily={"sans-serif"}>Beige shoes</Typography>
       <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
       <Divider style={{
        width: "89px",
        height: "60px",
        marginLeft: "-229px",
       }} orientation="horizontal" flexItem/>
       <Box marginLeft={"79px"} display={"flex"} gap={"10px"} alignItems={"center"}>
       <Typography marginLeft={"-229px"} fontSize={"29px"} color={"#eb3c70"}>£189.00</Typography>
       <Typography style={{
        textDecoration: "line-through"
       }} marginLeft={"-198px"} fontSize={"19px"} color={"lightpink"}>£199.00</Typography>
       </Box>
       <Typography maxWidth={"500px"}  marginLeft={"-229px"} color={"black"} fontSize={"15px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Typography>
      <Box display={"flex"} gap={"20px"} alignItems={"center"}>
       <TextField sx={{
                  width: "100%",
                  maxWidth: "80px",
                  marginLeft: "-229px",
                  "& input::placeholder": {
                    opacity: "1",
                  },
                  ".MuiFormHelperText-root": {
                    color: "#d32f2f",
                  },
                  ".MuiInput-root" : {
                    paddingLeft: "29px"
                  }
                }} type="number" id="standard-basic" placeholder="1" defaultValue={"1"} variant="standard" />
                <Button style={{
                color: "#fff",
                backgroundColor: "#eb3c70",
                borderRadius: "20px",
                padding: "9px 6px",
                textTransform: "none",
                width: "147px"
              }}>Add To Cart</Button>
              </Box>
              <Box marginTop={"15px"} display={"flex"} gap={"5px"} marginLeft={"-229px"}>
              <Typography fontSize={"16px"} color={"#a8a8a8"}>Category:</Typography>
              <Typography fontSize={"16px"} color={"#eb3c70"}>Bags</Typography>
              </Box>
              
              <Divider style={{
        width: "420px",
        height: "2px",
        marginLeft: "-229px",
       }} orientation="horizontal" flexItem/>
       <Stack direction="row" gap={"20px"}>
       <Typography marginLeft={"-229px"} fontSize={"16px"} color={"black"}>Share</Typography>
       <FacebookIcon style={{
        fontSize: "23px",
        color: "#a8a8a8"
       }} />
       <TwitterIcon style={{
        fontSize: "23px",
        color: "#a8a8a8"
       }} />
       <LinkedInIcon style={{
        fontSize: "23px",
        color: "#a8a8a8"
       }} />
       <PinterestIcon style={{
        fontSize: "23px",
        color: "#a8a8a8"
       }} />
       </Stack>
       </Box>
       
       </Box>
       
        </Box>
         ))}
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginRight={"332px"}>
        <Box margin={"60px 40px"} sx={{ width: '100%', maxWidth: "860px", borderBottom: 1, borderColor: 'divider' }}>
      <Tabs sx={{
        ".css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected" : {
            color: "#eb3c70",
        },
            ".css-1aquho2-MuiTabs-indicator " : {
            backgroundColor: "#eb3c70",
        }
      }}
        value={value}
        onChange={handleChange}
       
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Describtion" style={{
            textTransform: "none", 
            paddingLeft: "30px",
        }} />
      </Tabs>
    </Box>
    <Typography marginBottom={"40px"} marginTop={"-40px"} maxWidth={"831px"} marginLeft={"57px"} color={"black"} fontSize={"17px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Typography>
   <Divider style={{
    width: "830px",
    marginLeft: "200px"
   }} orientation="horizontal" flexItem />
    </Box>
    <Typography margin={"20px 200px"} fontSize={"25px"} color={"black"}>Related products</Typography>
    <Stack margin={"20px 190px"} direction={"row"}>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
    <img src={FlipFlops} alt="flip" width={"200px"} />
    <Typography textAlign={"center"} fontSize={"20px"} color={"black"}>FlipFlops</Typography>
    </Box>
    <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
    <img src={Redshoes} alt="flip" width={"200px"} />
    <Typography fontSize={"20px"} textAlign={"center"} color={"black"}>RedShoes</Typography>
    <Typography textAlign={"center"} marginRight={"29px"} fontSize={"18px"} color={"#eb3c70"}>£89.00</Typography>
    </Box>
    </Stack>
    <Box marginTop={"-780px"} p={"0 20px"} marginRight={"160px"} display={"flex"} flexDirection={"column"} alignItems={"end"}>
              <Typography mb={2} marginRight={"97px"} marginTop={"50px"}>Products categories</Typography>

              <Stack spacing={2} maxWidth={{ sm: 160, md: 250 }} gap={"3rem"}>
                <Box bgcolor={"#eb3c70"} width={226}>
                  {ProductsNavigatoinItems.map((item, index) => (
                    <ul
                      style={{
                        color: "white",
                        width: 226,
                      }}
                    >
                      <li
                        style={{
                          borderBottom: "1px sold red",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <a
                            style={{
                              color: "white",
                              textDecoration: "none",
                            }}
                            href={item.link}
                          >
                            {item.name}
                          </a>
                          <hr
                            style={{
                              width: "70%",
                              position: "relative",
                              right: "32%",
                            }}
                          />
                        </div>
                      </li>
                    </ul>
                  ))}
                </Box>
                <img
                  style={
                    {
                      maxWidth: { sm: 122, md: 226 },
                      width: "100%",
                      marginBottom: "150px"
                    } as any
                  }
                  src={Productsignup}
                  alt=""
                />
              </Stack>
            </Box>
        </Box>
       
    )
}