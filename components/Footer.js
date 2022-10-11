import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
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
      <Button
        variant="outlined"
        sx={{
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.51)",
          },
          textAlign: "center",
          color: "white",
          backgroundColor: "#00754A",
          borderRadius: "50px",
          textTransform: "none",
          lineHeight: "0.2rem",
          padding: matchesLG ? (matchesXL ? "1.5rem" : "1rem") : "0.8rem",
          marginTop: matchesMD ? (matchesXL ? "5.9%" : "7.9%") : "12.5%",
          marginBottom: matchesMD ? (matchesXL ? "5%" : "7%") : "12%",
          width: matchesXSS
            ? "60%"
            : matchesSM
            ? "45%"
            : matchesMD
            ? matches
              ? matchesLG
                ? "20%"
                : "28%"
              : "40%"
            : "55%",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ fontSize: matchesMD ? "0.9rem" : "0.78rem" }}
        >
          Get Your Free Quote
        </Typography>
      </Button>

      <Typography
        mb={4}
        sx={{
          fontSize: matchesMD ? "0.6rem" : "0.5rem",
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
