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

  const matchesMMD = useMediaQuery("(max-width:768px)");
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

  let init = {
    name: "",
    email: "",
    phone: "",
    package: 0,
    month: 0,
  };
  const [data, setdata] = useState(init);

  const handleChange = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pb={5}
      mr="1%"
      width={
        matchesSM ? "100%" : matchesMMD ? "90%" : matchesLG ? "30%" : "45%"
      }
      sx={{
        borderRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <Typography
        variant="subtitle1"
        my={5}
        sx={{
          color: "white",
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
            value={data.package}
            placeholder="select package"
            name="package"
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              backgroundColor: "#e3f2fd",
              borderRadius: "5px",
              padding: "0px",
              margin: "0px",
            }}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={0}>Select Package</MenuItem>
            <MenuItem value={10}>Low-end</MenuItem>
            <MenuItem value={20}>Affordable</MenuItem>
            <MenuItem value={30}>Luxury</MenuItem>
          </Select>
        </FormControl>

        <ButtonCustom
          content="Send Enquiry"
          wd="100%"
          pdy={matchesLG ? "1rem" : "0.5rem"}
          fill="true"
        />
      </Stack>
    </Box>
  );
};

export default CustomForm;
