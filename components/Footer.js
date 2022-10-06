import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ButtonCustom from "./CustomButton";

const Footer = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      mt={matchesMD ? (matches ? (matchesLG ? 24 : 17) : 12) : 9}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "#1B1B1B" }}
    >
      <ButtonCustom
        content="Get Your Free Quote"
        fill="true"
        wd={matchesMD ? (matches ? (matchesLG ? "20%" : "30%") : "50%") : "75%"}
        pd="0.5rem"
      />
      <Typography
        my={2}
        sx={{ fontSize: "0.5rem", color: "white", letterSpacing: "1px" }}
      >
        Copyright &nbsp;
        <Typography
          variant="span"
          sx={{
            border: "1px solid white",
            borderRadius: "100px",
            padding: "0.05rem",
          }}
        >
          C
        </Typography>
        &nbsp; 2022 Travel Company. All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
