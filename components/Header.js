import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/future/image";
import hIcon from "../public/hIcon.png";

const Header = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box py={matches ? (matchesLG ? 2.5 : 2) : 1}>
      <Box
        display="flex"
        width="100%"
        justifyContent="start"
        alignItems="center"
        pl={matchesLG ? 16 : 2}
      >
        <Image src={hIcon} width={60} height={60} />
        <Typography variant="subtitle2" px={1} sx={{ color: "#00754A" }}>
          The Smart Traveller
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
