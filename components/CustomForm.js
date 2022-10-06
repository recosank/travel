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

const CustomForm = () => {
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

  let init = {
    name: "",
    email: "",
    phone: "",
    package: "Select Package",
    month: "Select Month",
  };
  const [data, setdata] = useState(init);

  const handleChange = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={matchesSM ? "80%" : matchesLG ? "30%" : "40%"}
      sx={{
        borderRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <Typography
        variant="subtitle1"
        my={3}
        sx={{
          color: "white",
        }}
      >
        GET FREE QUOTE
      </Typography>
      <Stack
        component="form"
        mb={3}
        sx={{
          width: "90%",
          opacity: "1",
        }}
        spacing={2}
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
          sx={{ backgroundColor: "white", borderRadius: "5px" }}
          variant="filled"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          hiddenLabel
          size={matchesLG ? "medium" : "small"}
          id="filled-hidden-label-small"
          placeholder="Email"
          name="email"
          value={data.email}
          sx={{ backgroundColor: "white", borderRadius: "5px" }}
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
          sx={{ backgroundColor: "white", borderRadius: "5px", opacity: "1" }}
          variant="filled"
          onChange={(e) => handleChange(e)}
        />
        <FormControl
          fullWidth
          hiddenLabel
          size={matchesLG ? "medium" : "small"}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.package}
            label="Select Package"
            placeholder="select package"
            name="package"
            sx={{
              backgroundColor: "lightGray",
              borderRadius: "5px",
              padding: "0px",
              margin: "0px",
            }}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={10}>BASIC</MenuItem>
            <MenuItem value={20}>GOLD</MenuItem>
            <MenuItem value={30}>PREMIUM</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          hiddenLabel
          size={matchesLG ? "medium" : "small"}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.month}
            label="Select Month"
            name="month"
            sx={{ backgroundColor: "lightgray", borderRadius: "5px" }}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value="January">January</MenuItem>
            <MenuItem value="February">February</MenuItem>
            <MenuItem value="March">March</MenuItem>
          </Select>
        </FormControl>
        <ButtonCustom
          content="Send Enquiry"
          wd="100%"
          pd={matchesLG ? "1rem" : "0.5rem"}
          fill="true"
        />
      </Stack>
    </Box>
  );
};

export default CustomForm;
