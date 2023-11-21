import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const getPersonalDetails = {
  name: "",
  email: "",
};

export default function SignUpNewsLetter() {
  const [personalDetails, setPersonalDetails] = useState(getPersonalDetails);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const residentDetails = {
    personalDetails: personalDetails,
  };
  const FirstNameValidation = (name: string) => {
    if (/^[a-zA-Z\s]{1,40}$/.test(name)) {
      setNameError("");
      return true;
    } else {
      setNameError("Only allowed characters and space");
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
    if (personalDetails.name) {
      FirstNameValidation(personalDetails.name);
    }

    setPersonalDetails((personalDetails) => ({
      ...personalDetails,
      personalDetails: personalDetails.name,
    }));
  }, [personalDetails.name]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let NameError = "";
    let emailError = "";

    if (!personalDetails.name) {
      NameError = "Name is required";
    } else if (!FirstNameValidation(personalDetails.name)) {
      NameError = "Invalid firstname format";
    }

    if (!personalDetails.email) {
      emailError = "Email is required";
    } else if (!EmailValidation(personalDetails.email)) {
      emailError = "Invalid email format";
    }
    setNameError(NameError);
    setEmailError(emailError);
    if (!NameError && !emailError) {
      const data = {
        name: residentDetails.personalDetails.name,
        email: residentDetails.personalDetails.email,
      };
      console.log(data);
    }
    setPersonalDetails({
      name: "",
      email: "",
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box
        width={"100%"}
        sx={{
          backgroundColor: "#f9d453",
          backgroundImage: `url('https://themes.muffingroup.com/be/store2/wp-content/uploads/2020/07/store2-home-bg.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingBottom: "50px",
        }}
      >
        <Typography
          pl={{ xs: "33px" }}
          pr={{ xs: "33px" }}
          textAlign={"center"}
          paddingTop={"55px"}
          fontSize={{ xs: "22px", md: "35px" }}
          fontWeight={"700"}
          fontFamily={"sans-serif"}
        >
          Sign up for a newsletter
        </Typography>
        <Typography
          pl={{ xs: "33px" }}
          pr={{ xs: "33px" }}
          paddingTop={"30px"}
          textAlign={"center"}
          fontSize={"14px"}
          width={{ sm: "66%", margin: "0 auto" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
          <Typography textAlign={"center"} fontSize={"14px"}>
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat
            consequat.
          </Typography>
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack
            pl={{ xs: "33px" }}
            pr={{ xs: "33px" }}
            paddingTop={"70px"}
            justifyContent={"center"}
            flexDirection={"row"}
            alignItems={"baseline"}
            gap={"16px"}
            width={{ sm: "66%", margin: "0 auto" }}
          >
            <Box width={"100%"} maxWidth={"350px"}>
              <TextField
                sx={{
                  width: "100%",
                  maxWidth: "350px",
                  "& input::placeholder": {
                    opacity: "1",
                  },
                  ".MuiFormHelperText-root": {
                    color: "#d32f2f",
                  },
                }}
                required
                id="standard-required"
                placeholder="Name"
                variant="standard"
                error={personalDetails.name ? !!nameError : false}
                helperText={nameError}
                name="name"
                value={personalDetails.name}
                onChange={handleInputChange}
              />
            </Box>
            <Box width={"100%"} maxWidth={"350px"}>
              <TextField
                sx={{
                  width: "100%",
                  maxWidth: "350px",
                  "& input::placeholder": {
                    opacity: "1",
                  },
                  ".MuiFormHelperText-root": {
                    color: "#d32f2f",
                  },
                }}
                required
                id="standard-required"
                placeholder="Email"
                variant="standard"
                error={personalDetails.email ? !!emailError : false}
                helperText={emailError}
                name="email"
                value={personalDetails.email}
                onChange={handleInputChange}
              />
            </Box>
          </Stack>
          <Box marginBottom={"20px"} textAlign={"center"} padding={"35px 20px"}>
            <Button
              style={{
                color: "#fff",
                backgroundColor: "#eb3c70",
                borderRadius: "20px",
                padding: "10px 40px",
                textTransform: "none",
              }}
              type="submit"
            >
              Sign up today
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
