import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ButtonCustom from "./CustomButton";

const Footer = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));

  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));
  const matchesXSS = useMediaQuery("(max-width:450px)");

  return (
    <Box
      mt={9}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#1B1B1B" }}
    >
      <ButtonCustom
        content="Get Your Free Quote"
        fill="true"
        wd={
          matchesXSS
            ? "60%"
            : matchesMD
            ? matches
              ? matchesLG
                ? "20%"
                : "30%"
              : "50%"
            : "55%"
        }
        pdy={matchesLG ? (matchesXL ? "1.5rem" : "1rem") : "0.8rem"}
        mrg={matchesMD ? (matchesXL ? "2%" : "5%") : "8%"}
        mrgb={matchesMD ? (matchesXL ? "5%" : "7%") : "20%"}
      />
      <Typography
        mb={4}
        sx={{
          fontSize: matchesMD ? "0.75rem" : "0.5rem",
          color: "white",
          letterSpacing: "1px",
        }}
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
