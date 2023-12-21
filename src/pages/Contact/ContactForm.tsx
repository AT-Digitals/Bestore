import {
  Box,
  Button,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import CustomDropdown from "./CustomDropdown";
import ProductsNavigationItems from "../../common-components/ProductNavigationItems";

const getPersonalDetails = {
  firstname: "",
  email: "",
  phone: "",
  products: "",
  yourMessage: "",
  subcategory: "",
  category: "",
};
type CategoriesWithSubcategories = {
  [category: string]: string[];
};

export default function ContactForm() {
  const [personalDetails, setPersonalDetails] = useState(getPersonalDetails);
  const [firstnameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [productError, setProductError] = useState("");
  const [messageError, setMessageError] = useState("");

  const residentDetails = {
    personalDetails: personalDetails,
  };

  const FirstNameValidation = (name: string) => {
    if (/^[a-zA-Z\s]{1,40}$/.test(name)) {
      setFirstNameError("");
      return true;
    } else {
      setFirstNameError("Only allowed characters and space");
      return false;
    }
  };

  const EmailValidation = (name: string) => {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(name)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Please include an '@' in the email");
      return false;
    }
  };

  const PhoneValidation = (name: string) => {
    const cleanedPhoneNumber = name.replace(/\D/g, "");
    if (
      /^\d{10}$|^\d{3}[-.]?\d{3}[-.]?\d{4}$|^\(\d{3}\)\s?\d{3}[-.]?\d{4}$/.test(
        cleanedPhoneNumber
      )
    ) {
      setPhoneError("");
      return true;
    }

    setPhoneError("Invalid phone number");
    return false;
  };

  const ProductValidation = (name: string) => {
    if (/^[a-zA-Z\s]{1,40}$/.test(name)) {
      setProductError("");
      return true;
    } else {
      setProductError("Only allowed characters and space");
      return false;
    }
  };

  const MessageValidation = (name: string) => {
    if (/^[a-zA-Z\s]{1,40}$/.test(name)) {
      setMessageError("");
      return true;
    } else {
      setMessageError("Only allowed characters and space");
      return false;
    }
  };

  useEffect(() => {
    if (personalDetails.phone) {
      PhoneValidation(personalDetails.phone);
    }
    setPersonalDetails((personalDetails) => ({
      ...personalDetails,
      personalDetails: personalDetails.phone,
    }));
  }, [personalDetails.phone]);

  useEffect(() => {
    if (personalDetails.email) {
      EmailValidation(personalDetails.email);
    }
    setPersonalDetails((personalDetails) => ({
      ...personalDetails,
      personalDetails: personalDetails.email,
    }));
  }, [personalDetails.email]);

  useEffect(() => {
    if (personalDetails.firstname) {
      FirstNameValidation(personalDetails.firstname);
    }

    setPersonalDetails((personalDetails) => ({
      ...personalDetails,
      personalDetails: personalDetails.firstname,
    }));
  }, [personalDetails.firstname]);

  useEffect(() => {
    if (personalDetails.products) {
      ProductValidation(personalDetails.products);
    }

    setPersonalDetails((personalDetails) => ({
      ...personalDetails,
      personalDetails: personalDetails.products,
    }));
  }, [personalDetails.products]);

  useEffect(() => {
    if (personalDetails.yourMessage) {
      MessageValidation(personalDetails.yourMessage);
    }

    setPersonalDetails((personalDetails) => ({
      ...personalDetails,
      personalDetails: personalDetails.yourMessage,
    }));
  }, [personalDetails.yourMessage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  // const handleProductChange = (event: SelectChangeEvent<string>) => {
  //   setPersonalDetails({
  //     ...personalDetails,
  //     products: event.target.value,
  //   });
  //   // Additional logic for handling errors if needed
  //   // setProductError(// your error condition);
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Initialize error variables
    let firstNameError = "";
    let emailError = "";
    let phoneError = "";
    let productError = "";
    let messageError = "";

    // Validate and set errors
    if (!personalDetails.firstname) {
      firstNameError = "Name is required";
    } else if (!FirstNameValidation(personalDetails.firstname)) {
      firstNameError = "Invalid firstname format";
    }

    if (!personalDetails.email) {
      emailError = "Email is required";
    } else if (!EmailValidation(personalDetails.email)) {
      emailError = "Invalid email format";
    }

    if (!personalDetails.phone) {
      phoneError = "Phone number is required";
    } else if (!PhoneValidation(personalDetails.phone)) {
      phoneError = "Invalid phone number format";
    }
    if (!personalDetails.products) {
      productError = "Product name is required";
    } else if (!ProductValidation(personalDetails.products)) {
      productError = "Invalid Product name format";
    }
    if (!personalDetails.yourMessage) {
      messageError = "Message is required";
    } else if (!MessageValidation(personalDetails.firstname)) {
      messageError = "Invalid message format";
    }

    // Set the error state variables
    setFirstNameError(firstNameError);
    setEmailError(emailError);
    setPhoneError(phoneError);
    setProductError(productError);
    setMessageError(messageError);

    if (
      !firstNameError &&
      !emailError &&
      !phoneError &&
      !productError &&
      !messageError
    ) {
      setPersonalDetails({
        firstname: "",
        email: "",
        phone: "",
        products: "",
        yourMessage: "", // Assuming it's a file input
        subcategory: "",
        category: "",
      });

      // Check if all errors are empty (i.e., inputs are valid)
      if (
        !firstNameError &&
        !emailError &&
        !phoneError &&
        !productError &&
        !messageError
      ) {
        const data = {
          firstname: residentDetails.personalDetails.firstname,
          email: residentDetails.personalDetails.email,
          phone: residentDetails.personalDetails.phone,
          passage: residentDetails.personalDetails.products,
          selectedImage: residentDetails.personalDetails.yourMessage,
        };

        console.log(data);
      }
    }
  };
  // const productTypes = Array.from(
  //   new Set(ProductsImage.map((product) => product.producttype))
  // );

  const CategoriesWithSubcategories: CategoriesWithSubcategories = {
    Fabric:
      ProductsNavigationItems.find(
        (item) => item.name === "Fabric"
      )?.subcategories.map((subcategory) => subcategory.name) || [],
    Patterns:
      ProductsNavigationItems.find(
        (item) => item.name === "Patterns"
      )?.subcategories.map((subcategory) => subcategory.name) || [],
    Colours:
      ProductsNavigationItems.find(
        (item) => item.name === "Colours"
      )?.subcategories.map((subcategory) => subcategory.name) || [],
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    const selectedCategory = event.target.value;
    setPersonalDetails((prevPersonalDetails) => ({
      ...prevPersonalDetails,
      category: selectedCategory,
      subcategory: "", // Reset subcategory when the category changes
    }));
  };

  const handleSubcategoryChange = (event: SelectChangeEvent<string>) => {
    setPersonalDetails({
      ...personalDetails,
      subcategory: event.target.value,
    });
  };

  const selectedSubcategories =
    CategoriesWithSubcategories[personalDetails.category] || [];

  return (
    <>
      <Box
        margin={{ xs: "0 auto", sm: "10px", md: "0 auto", lg: "0 auto" }}
        maxWidth={600}
        width={"100%"}
        padding={{ xs: "0", sm: "20px 55px", md: "20px 50px", lg: "60px" }}
        borderRight={"1px solid rgba(0,0,0,0.105)"}
        mt={2}
        sx={{
          backgroundColor: "white",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack
            padding={{ xs: "15px 21px", sm: "0px", md: "0px", lg: "0px" }}
            marginBottom={"25px"}
          >
            <Stack
              direction={"row"}
              spacing={{ xs: 0.2, sm: 3, md: 0.3, lg: 3 }}
              alignItems={"center"}
            >
              <Typography
                color={"black"}
                fontWeight={"bold"}
                fontFamily={"Nunito Sans, sans-serif"}
                fontSize={{ xs: "17px", sm: "25px", md: "20px", lg: "25px" }}
              >
                SEND US AN EMAIL
              </Typography>
              <Box
                width={"60%"}
                borderTop={"1px solid rgba(0,0,0,0.105)"}
              ></Box>
            </Stack>

            <Box
              paddingTop={"40px"}
              margin={"auto"}
              width={"100%"}
              maxWidth={"720px"}
            >
              <Typography
                pb={1}
                color={"black"}
                fontSize={"17px"}
                fontFamily={"Nunito Sans, sans-serif"}
              >
                Your Name
              </Typography>
              <TextField
                sx={{
                  width: "100%",
                  maxWidth: {
                    xs: "300px",
                    sm: "600px",
                    md: "600px",
                    lg: "600px",
                  },
                  ".MuiFormHelperText-root": {
                    color: "#d32f2f",
                  },
                  ".MuiInputBase-root": {
                    borderRadius: "30px",
                    height: "45px",
                  },
                }}
                required
                id="standard-required"
                variant="outlined"
                error={personalDetails.firstname ? !!firstnameError : false}
                helperText={firstnameError}
                name="firstname"
                value={personalDetails.firstname}
                onChange={handleInputChange}
              />
            </Box>
            <Box
              paddingTop={"40px"}
              margin={"auto"}
              width={"100%"}
              maxWidth={"720px"}
            >
              <Typography
                pb={1}
                color={"black"}
                fontSize={"17px"}
                fontFamily={"Nunito Sans, sans-serif"}
              >
                Your Email
              </Typography>
              <TextField
                sx={{
                  width: "100%",
                  maxWidth: {
                    xs: "300px",
                    sm: "600px",
                    md: "600px",
                    lg: "600px",
                  },
                  ".MuiFormHelperText-root": {
                    color: "#d32f2f",
                  },
                  ".MuiInputBase-root": {
                    borderRadius: "30px",
                    height: "45px",
                  },
                }}
                required
                id="standard-required"
                variant="outlined"
                error={personalDetails.email ? !!emailError : false}
                helperText={emailError}
                name="email"
                value={personalDetails.email}
                onChange={handleInputChange}
              />
            </Box>
            <Box
              paddingTop={"40px"}
              margin={"auto"}
              width={"100%"}
              maxWidth={"720px"}
            >
              <Typography
                pb={1}
                color={"black"}
                fontSize={"17px"}
                fontFamily={"Nunito Sans, sans-serif"}
              >
                Phone Number
              </Typography>
              <TextField
                sx={{
                  width: "100%",
                  maxWidth: {
                    xs: "300px",
                    sm: "600px",
                    md: "600px",
                    lg: "600px",
                  },
                  ".MuiFormHelperText-root": {
                    color: "#d32f2f",
                  },
                  ".MuiInputBase-root": {
                    borderRadius: "30px",
                    height: "45px",
                  },
                }}
                required
                type="number"
                id="standard-required"
                variant="outlined"
                error={personalDetails.phone ? !!phoneError : false}
                helperText={phoneError}
                name="phone"
                value={personalDetails.phone}
                onChange={handleInputChange}
              />
            </Box>
            <CustomDropdown
              personalDetails={personalDetails}
              productError={productError}
              handleCategoryChange={handleCategoryChange}
              categoriesWithSubcategories={CategoriesWithSubcategories}
              handleSubcategoryChange={handleSubcategoryChange}
              selectedSubcategories={selectedSubcategories}
              subProducts={[]}
            />
            <Box
              paddingTop={"30px"}
              margin={"auto"}
              width={"100%"}
              maxWidth={"720px"}
            >
              <Typography
                pb={1}
                color={"black"}
                fontSize={"17px"}
                fontFamily={"Nunito Sans, sans-serif"}
              >
                Your Message
              </Typography>
              <TextField
                sx={{
                  width: "100%",
                  maxWidth: {
                    xs: "300px",
                    sm: "720px",
                    md: "720px",
                    lg: "720px",
                  },
                  ".MuiFormHelperText-root": {
                    color: "#d32f2f",
                  },
                  ".MuiInputBase-root": {
                    borderRadius: "30px",
                    paddingBottom: "120px",
                  },
                }}
                required
                multiline
                id="standard-required"
                variant="outlined"
                error={personalDetails.yourMessage ? !!messageError : false}
                helperText={messageError}
                name="yourMessage"
                value={personalDetails.yourMessage}
                onChange={handleInputChange}
              />
            </Box>
          </Stack>
          <Box
            display={{ xs: "flex", sm: "flex", md: "flex", lg: "flex" }}
            justifyContent={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            }}
            marginBottom={{ xs: "30px", sm: "30px", md: "30px", lg: "190px" }}
          >
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
              type="submit"
            >
              Send the message
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
