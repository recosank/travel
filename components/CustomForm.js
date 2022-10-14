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
  TextField,
} from "@mui/material";
import ButtonCustom from "./CustomButton";
import axios from "axios";
import { RefContext } from "./context/ContextData";

const CustomForm = () => {
  const { setReff } = useContext(RefContext);
  const nameRef = useRef(null);

  const theme = useTheme();
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

  const handleChange = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleQuery = () => {
    localStorage.setItem("packageQuery", JSON.stringify(data));
    axios
      .post(process.env.NEXT_PUBLIC_API_ENDPOINT, data, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setdata(init);
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
        noValidate
        autoComplete="off"
      >
        <TextField
          inputRef={nameRef}
          hiddenLabel
          size={matchesLG ? "medium" : "small"}
          placeholder="Name"
          name="name"
          value={data.name}
          id="filled-hidden-label-small"
          sx={{ backgroundColor: "#e3f2fd", borderRadius: "5px" }}
          variant="filled"
          onChange={(e) => handleChange(e)}
        />

        <TextField
          type="tel"
          hiddenLabel
          size={matchesLG ? "medium" : "small"}
          placeholder="Phone number"
          name="phone"
          value={data.phone}
          id="filled-hidden-label-small"
          sx={{ backgroundColor: "#e3f2fd", borderRadius: "5px", opacity: "1" }}
          variant="filled"
          onChange={(e) => handleChange(e)}
        />
        <FormControl fullWidth size={matchesLG ? "medium" : "small"}>
          <Select
            displayEmpty
            value={data.packege}
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
        </FormControl>
        <ButtonCustom
          content="Send Enquiry"
          wd="100%"
          pdy={matchesLG ? "1rem" : "0.5rem"}
          fill="true"
          onSub={handleQuery}
        />
      </Stack>
    </Box>
  );
};

export default CustomForm;
