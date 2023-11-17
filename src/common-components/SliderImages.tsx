import { Box, IconButton, Stack } from "@mui/material";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import Slide1 from "../assets/SlideImage/slideImage1.jpg";
import Slide2 from "../assets/SlideImage/slideImage2.jpg";
import Slide3 from "../assets/SlideImage/slideImage3.jpg";
import Slide4 from "../assets/SlideImage/slideImage4.jpg";
import Slide5 from "../assets/SlideImage/slideImage5.jpg";
import Slide6 from "../assets/SlideImage/slideImage6.jpg";
import { useState } from "react";

const SlideImage = [
  {
    image: Slide1,
  },
  {
    image: Slide2,
  },
  {
    image: Slide3,
  },
  {
    image: Slide4,
  },
  {
    image: Slide5,
  },
  {
    image: Slide6,
  },
];
const SlideImage1 = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

export default function SliderImages() {
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
      prevIndex === SlideImage.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? SlideImage.length - 1 : prevIndex - 1
    );
  };
  return (
    <Stack
      maxWidth={1519}
      width={"100%"}
      direction={{ xs: "column", sm: "row", md: "row" }}
    >
      {SlideImage.map((image, index) => (
        <Box
          onClick={() => openModal(index)}
          width={"100%"}
          key={index}
          overflow={"hidden"}
        >
          <img
            style={{
              width: "100%",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            src={image.image}
            alt="slide"
          />
        </Box>
      ))}

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
              src={SlideImage1[currentImageIndex]}
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
              {currentImageIndex + 1}/ 6
            </span>
          </Stack>
        </Box>
      )}
    </Stack>
  );
}
