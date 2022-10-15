import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";

const Footer = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));
  const matchesXSS = useMediaQuery("(max-width:450px)");
  const matchesMMD = useMediaQuery("(max-width:768px)");

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
        id="taptap"
        sx={{
          "&:hover": {
            backgroundColor: "#00754A",
          },
          textAlign: "center",
          color: "white",
          backgroundColor: "#00754A",
          borderRadius: "50px",
          textTransform: "none",
          lineHeight: "0.2rem",
          padding: matchesLG ? (matchesXL ? "1.2rem" : "1rem") : "0.8rem",
          marginTop: matchesMD ? (matchesXL ? "5.9%" : "7.9%") : "12.5%",
          marginBottom: matchesMD ? (matchesXL ? "5%" : "7%") : "12%",
          width: matchesXSS
            ? "60%"
            : matchesSM
            ? "45%"
            : matchesMD
            ? matchesMMD
              ? "40%"
              : matches
              ? matchesLG
                ? matchesXL
                  ? "20%"
                  : "20%"
                : "25%"
              : "30%"
            : "55%",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: matchesMD ? (matchesXL ? "1rem" : "0.9rem") : "0.78rem",
          }}
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
            border: "0.1px solid white",
            borderRadius: "100%",
            opacity: "0.5",
            padding: "0.1rem",
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
