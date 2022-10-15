import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Stack,
  MenuItem,
  Select,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ButtonCustom from "./CustomButton";
import axios from "axios";
import { RefContext } from "./context/ContextData";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormHelperText } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import validator from "validator";

const recaptchaPublicKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const CustomForm = () => {
  const { setReff } = useContext(RefContext);
  const recaptchaRef = React.createRef();
  const nameRef = useRef(null);

  const theme = useTheme();
  const cacheLG = useMediaQuery("(min-width:992px)");
  const cacheXS = useMediaQuery("(min-width:300px)");
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMMD = useMediaQuery("(max-width:768px)");
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

  let init = {
    name: "",
    phone: "",
    packege: "Select Package",
  };
  const [data, setdata] = useState(init);

  const initError = {
    packageError: false,
    phoneError: false,
    nameError: false,
  };
  const [errorChk, seterrorChk] = useState(initError);

  const validatePhoneNumber = (number) => {
    const isValidPhoneNumber = validator.isMobilePhone(number);
    return isValidPhoneNumber && number.length == 10;
  };

  const [showCaptcha, setshowCaptcha] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (capData) => {
    if (!recaptchaRef.current.getValue()) {
      toast.error("Captcha required !", { position: "bottom-center" });
    } else {
      const userData = {
        name: data.name,
        phone: data.phone,
        packege: data.packege,
        "g-recaptcha-response": recaptchaRef.current.getValue(),
      };
      localStorage.setItem("packageQuery", JSON.stringify(data));
      axios
        .post(process.env.NEXT_PUBLIC_API_ENDPOINT, userData, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        })
        .then(
          (res) =>
            res.status == 201 &&
            toast.success(
              "Thanks for contacting us! WE will get in touch with you shortly.",
              {
                position: "top-right",
              }
            )
        )
        .catch((err) => console.log(err));
    }
    setshowCaptcha(false);
    setdata(init);
  };

  const handleQuery = () => {
    if (
      validatePhoneNumber(data.phone) &&
      data.name != "" &&
      data.packege != "Select Package"
    ) {
      seterrorChk(initError);
      setshowCaptcha(true);
    } else {
      if (
        data.name == "" &&
        data.packege != "Select Package" &&
        validatePhoneNumber(data.phone)
      ) {
        seterrorChk({
          ...errorChk,
          phoneError: false,
          nameError: true,
          packageError: false,
        });
      } else if (
        data.name != "" &&
        data.packege == "Select Package" &&
        validatePhoneNumber(data.phone)
      ) {
        seterrorChk({
          ...errorChk,
          phoneError: false,
          nameError: false,
          packageError: true,
        });
      } else if (
        data.name != "" &&
        data.packege != "Select Package" &&
        !validatePhoneNumber(data.phone)
      ) {
        seterrorChk({
          ...errorChk,
          phoneError: true,
          nameError: false,
          packageError: false,
        });
      } else {
        seterrorChk({
          ...errorChk,
          phoneError: true,
          nameError: true,
          packageError: true,
        });
      }
    }
  };

  useEffect(() => {
    setReff(nameRef);
  }, [nameRef, setReff]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pb={5}
      mr="1%"
      px={matchesMD && matchesMMD && 4}
      width={matchesSM ? "90%" : matchesMMD ? "90%" : matchesLG ? "30%" : "55%"}
      sx={{
        borderRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <Typography
        variant="subtitle1"
        my={5}
        sx={{
          position: "relative",
          color: "white",
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: "0",
            left: "6%",
            width: "90%",
            height: "1px",
            backgroundColor: "white",
          },
        }}
      >
        GET FREE QUOTE
      </Typography>
      <Stack
        component="form"
        sx={{
          width: "80%",
          opacity: "1",
        }}
        spacing={3}
        autoComplete="off"
      >
        <FormControl
          fullWidth
          variant="filled"
          size={matchesLG ? "medium" : "small"}
          sx={{
            borderRadius: "5px",
          }}
        >
          <OutlinedInput
            id="component-outlined"
            placeholder="Name"
            name="name"
            required={true}
            value={data.name}
            inputRef={nameRef}
            onChange={(e) => handleChange(e)}
            sx={{ backgroundColor: "#e3f2fd" }}
          />

          {errorChk.nameError && (
            <FormHelperText
              id="component-error-text"
              sx={{
                color: "red",
                color: "red",
                marginLeft: "0px",
                paddingLeft: "4%",
              }}
            >
              Invalid Name
            </FormHelperText>
          )}
        </FormControl>

        <FormControl
          fullWidth
          variant="filled"
          hiddenLabel
          size={matchesLG ? "medium" : "small"}
          sx={{
            borderRadius: "5px",
          }}
        >
          <OutlinedInput
            id="component-outlined"
            placeholder="Phone number"
            name="phone"
            value={data.phone}
            onChange={(e) => handleChange(e)}
            sx={{ backgroundColor: "#e3f2fd" }}
          />
          {errorChk.phoneError && (
            <FormHelperText
              id="component-error-text"
              sx={{
                color: "red",
                marginLeft: "0px",
                paddingLeft: "4%",
              }}
            >
              Invalid Phone Number
            </FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth size={matchesLG ? "medium" : "small"}>
          <Select
            displayEmpty
            value={data.packege}
            required={true}
            placeholder="select package"
            name="packege"
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              backgroundColor: "#e3f2fd",
              borderRadius: "5px",
              padding: "0px",
              margin: "0px",
            }}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value="Select Package">Select Package</MenuItem>
            <MenuItem value="Low-end">Low-end</MenuItem>
            <MenuItem value="Affordable">Affordable</MenuItem>
            <MenuItem value="Luxury">Luxury</MenuItem>
          </Select>
          {errorChk.packageError && (
            <FormHelperText id="component-error-text" sx={{ color: "red" }}>
              Please Select Package
            </FormHelperText>
          )}
        </FormControl>
        <ToastContainer />
        <ButtonCustom
          content="Send Enquiry"
          wd="100%"
          pdy={matchesLG ? "1rem" : "0.5rem"}
          fill="true"
          onSub={handleQuery}
        />
        <Box
          sx={{
            transform: cacheLG
              ? "scale(0.85)"
              : cacheXS
              ? "scale(0.7)"
              : "scale(0.75)",
            transformOrigin: "0 0",
            margin: "0 auto",
          }}
        >
          {showCaptcha && (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LdMwnoiAAAAAFkL7HdMdEH_U7znOtagObm7k_tR"
              onChange={handleCaptcha}
            />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default CustomForm;
