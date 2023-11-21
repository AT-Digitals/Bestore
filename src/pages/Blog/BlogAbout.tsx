import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import image7 from "../../assets/store2-blog-single-4.jpg"
import gallery1 from "../../assets/store2-home-gallery-3-768x768.jpg"
import gallery2 from "../../assets/store2-home-gallery-4-768x768.jpg";
import gallery3 from "../../assets/store2-home-gallery-5-768x768.jpg";
import gallery4 from '../../assets/store2-home-gallery-6-768x768.jpg';
import { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CloseIcon from "@mui/icons-material/Close";


const SlideImage = [
    {
      image: gallery1,
    },
    {
      image: gallery2,
    },
    {
      image: gallery3,
    },
    {
      image: gallery4,
    },
  ];

  const SlideImage3 = [gallery1, gallery2, gallery3, gallery4];

export default function BlogAbout() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const openModal = (index: any) => {
      setCurrentImageIndex(index);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleNext = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === SlideImage3.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePrev = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? SlideImage3.length - 1 : prevIndex - 1
      );
    };

    return (
        <>
        <Box marginTop={"150px"}>
            <Typography lineHeight={"0.7"} textAlign={"center"} color={"black"} fontSize={"60px"} fontFamily={"sans-serif"} fontWeight={"500"}>Lorem ipsum dolor mit<Typography textAlign={"center"} color={"black"} fontSize={"60px"} fontFamily={"sans-serif"} fontWeight={"500"}>samet et omnia</Typography></Typography>
        <Box marginTop={"90px"} display={"flex"} justifyContent={"center"}>
        <img width={"1200px"} height={"800px"} src={image7} alt="image1" />
        </Box>
        <Box marginTop={"70px"} display={"flex"} justifyContent={"center"}>
        <Typography maxWidth={"927px"} color={"black"} fontWeight={"bold"} fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim veni sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do dolore magna aliqua. Ut enim ad minim veni sit amet.</Typography>
        </Box>
        <Box marginTop={"20px"} display={"flex"} justifyContent={"center"}>
        <Typography maxWidth={"932px"} color={"black"} fontWeight={"500"} fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        </Box>
        <Box marginTop={"20px"} display={"flex"} justifyContent={"center"}>
        <Typography maxWidth={"932px"} color={"black"} fontWeight={"500"} fontSize={"16px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</Typography>
        </Box>
        <Stack marginTop={"90px"} direction={"row"} justifyContent={"center"}>
        <Grid container rowGap={2} columnSpacing={0} maxWidth={"1056px"}>
        {SlideImage.map((image, index) => (
            <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
        <Box overflow={"hidden"}  onClick={() => openModal(index)} key={index}>
        <img style={{
         transition: "transform 0.5s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }} width={"500px"} src={image.image} alt="gallery1" /> 
        </Box>
        </Grid>
         ))}
         </Grid>
       
           {isModalOpen && (
        <Box
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <IconButton
            onClick={handlePrev}
            style={{ position: "absolute", left: 16, top: "50%" }}
          >
            <ArrowLeftIcon style={{ color: "#fff", fontSize: "70px" }} />
          </IconButton>
          <IconButton
            onClick={handleNext}
            style={{ position: "absolute", right: 16, top: "50%" }}
          >
            <ArrowRightIcon style={{ color: "#fff", fontSize: "70px" }} />
          </IconButton>
          <Stack direction={"column"}>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <IconButton onClick={closeModal} style={{ top: 5, right: 0 }}>
                <CloseIcon style={{ color: "white" }} />
              </IconButton>
            </Box>
            <img
              src={SlideImage3[currentImageIndex]}
              alt={`slide-${currentImageIndex}`}
              style={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
            <span
              style={{
                color: "white",
                display: "flex",
                justifyContent: "flex-end",
                fontSize: "12px",
              }}
            >
              {currentImageIndex + 1}/ 4
            </span>
          </Stack>
        </Box>
      )}
       </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
        <Typography padding={"70px 90px"} maxWidth={"297px"} color={"black"} fontWeight={"500"} fontSize={"30px"}>„Lorem modi tempora incidunt ut labore et dolore magnam.”</Typography>
        <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
        <Typography paddingTop={"70px"} maxWidth={"600px"} color={"black"} fontSize={"16px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed qunt.</Typography>
        <Typography maxWidth={"600px"} color={"black"} fontSize={"16px"}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</Typography>
        </Box>
        </Stack>
        <Box marginTop={"120px"} display={"flex"} justifyContent={"center"}>
        <Typography maxWidth={"825px"} color={"black"} fontWeight={"bold"} fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
        </Box>
        <Box marginBottom={"130px"} paddingTop={"25px"} display={"flex"} justifyContent={"center"}>
        <Typography maxWidth={"826px"} color={"black"} fontWeight={"500"} fontSize={"16px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</Typography>
        </Box>
        </Box>
        </>
    )
}