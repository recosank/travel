import React, { useState } from "react";
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

const CustomForm = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMMD = useMediaQuery("(max-width:768px)");
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

  let init = {
    name: "",
    phone: "",
    packege: "Select Packege",
  };
  const [data, setdata] = useState(init);

  const handleChange = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleQuery = () => {
    localStorage.setItem("packageQuery", JSON.stringify(data));
    axios
      .post("https://formbold.com/s/3dOx9", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setdata(init);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pb={5}
      mr="1%"
      //mx={3}
      px={matchesMD && matchesMMD && 4}
      width={matchesSM ? "90%" : matchesMMD ? "90%" : matchesLG ? "30%" : "45%"}
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
            placeholder="select packege"
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
            <MenuItem value="Select Packege">Select Peckege</MenuItem>
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
