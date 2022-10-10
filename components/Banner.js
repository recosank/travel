import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/future/image";
import ButtonCustom from "./CustomButton";
import CustomForm from "./CustomForm";
import bIcon from "../public/bIcon.png";
import styles from "../styles/Home.module.css";

const Banner = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMMD = useMediaQuery("(max-width:768px)");
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ position: "relative" }}
    >
      <Image
        src={bIcon}
        layout="fill"
        style={{
          zIndex: "10",
          position: "relative",
          objectFit: "cover",
          width: "100%",
          height: matchesMD ? "1000px" : "950px",
        }}
      />
      <Box
        display="flex"
        flexDirection={matchesMMD ? "column" : "row"}
        justifyContent={matchesMMD ? "start" : "space-around"}
        width={matchesXL ? "80%" : "100%"}
        alignContent="center"
        alignItems="center"
        mt={matchesSM ? 9 : 13}
        mb={8}
        px={4}
        sx={{
          zIndex: "20",
          position: "absolute",
        }}
      >
        <Box
          display={matchesLG && "flex"}
          flexDirection={matchesLG && "column"}
          alignItems={matchesLG && "start"}
          width={matchesSM ? "100%" : matchesLG ? "50%" : "75%"}
          sx={{ textAlign: "start", textTransform: "none" }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "800",
              fontSize: matchesMD
                ? matches
                  ? matchesLG
                    ? matchesXL
                      ? "3rem"
                      : "2.8rem"
                    : "2.5rem"
                  : "2.05rem"
                : "2.1rem",
            }}
          >
            WELCOME TO &nbsp;
            <Typography
              variant="span"
              sx={{ color: "#00754A", textTransform: "none" }}
            >
              Himalaya
            </Typography>
          </Typography>
          <Typography
            variant={matchesLG ? "h5" : "h6"}
            my={1}
            sx={{ color: "white" }}
          >
            Lowest Price Guarnteed
          </Typography>
          <ButtonCustom
            content="Call Now!"
            spanContent="+91 7807021868"
            wd={
              matchesMD
                ? matchesMMD
                  ? "70%"
                  : matches
                  ? matchesLG
                    ? "50%"
                    : "70%"
                  : "60%"
                : "70%"
            }
            pdy="1rem"
            pdx="0rem"
            mrg="5%"
            mrgb="6%"
            fill="true"
          />
        </Box>
        <CustomForm />
      </Box>
    </Box>
  );
};

export default Banner;
