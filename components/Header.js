import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/future/image";
import hIcon from "../public/hIcon.png";

const Header = () => {
  const theme = useTheme();

  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box my={1}>
      <Box
        display="flex"
        width="100%"
        justifyContent="start"
        alignItems="center"
        pl={matchesLG ? 16 : 2}
      >
        <Image src={hIcon} width={50} height={55} />
        <Typography variant="subtitle2" px={1} sx={{ color: "#00754A" }}>
          The Smart Traveller
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
