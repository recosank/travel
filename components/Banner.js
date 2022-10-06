import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/future/image";
import ButtonCustom from "./CustomButton";
import CustomForm from "./CustomForm";
import bIcon from "../public/bIcon.png";

const Banner = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Image
        src={bIcon}
        layout="fill"
        style={{
          zIndex: "10",
          position: "relative",
          objectFit: "cover ",
          width: "100%",
        }}
      />
      <Box
        display="flex"
        flexDirection={matchesMD ? "row" : "column"}
        justifyContent={matchesMD ? "space-around" : "start"}
        width={matchesXL ? "80%" : "100%"}
        alignContent="center"
        alignItems="center"
        mt={13}
        mb={8}
        sx={{
          zIndex: "20",
          position: "absolute",
        }}
      >
        <Box
          display={matchesLG && "flex"}
          flexDirection={matchesLG && "column"}
          alignItems={matchesLG && "start"}
          width={matchesSM ? "80%" : matchesLG ? "50%" : "40%"}
          pl={matchesLG && "0%"}
          sx={{ textAlign: "center" }}
        >
          <Typography variant={matchesLG ? "h3" : "h4"} sx={{ color: "white" }}>
            WELCOME TO &nbsp;
            <Typography variant="span" sx={{ color: "#00754A" }}>
              HIMALAYA
            </Typography>
          </Typography>
          <Typography
            variant={matchesLG ? "h5" : "subtitle1"}
            my={1}
            sx={{ color: "white" }}
          >
            LOWEST PRICE GUARANTEED
          </Typography>
          <ButtonCustom
            content="Call Now!"
            spanContent="+91 7807021868"
            wd={
              matchesMD
                ? matches
                  ? matchesLG
                    ? "50%"
                    : "70%"
                  : "90%"
                : "90%"
            }
            pd="0.8rem"
            fill="true"
          />
        </Box>
        <CustomForm />
      </Box>
    </Box>
  );
};

export default Banner;
