import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/future/image";
import hIcon from "../public/hIcon.png";

const Header = () => {
  const theme = useTheme();
  const matchesMMD = useMediaQuery("(max-width:768px)");
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box py={matches ? (matchesLG ? 2.5 : 2) : 1} id="topex">
      <Box
        display="flex"
        width="100%"
        justifyContent="start"
        alignItems="center"
        pl={
          matchesMMD
            ? 2
            : matchesMD
            ? matchesLG
              ? matchesXL
                ? 16
                : 10
              : 3
            : 0
        }
      >
        <Image src={hIcon} alt="smart traveller icon" width={60} height={60} />
        <Typography variant="subtitle2" px={1} sx={{ color: "#00754A" }}>
          The Smart Traveller
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
