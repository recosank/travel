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
  const matchesXSS = useMediaQuery("(min-width:470px)");
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));
  // height: matchesMD ? "1000px" : "950px",
  console.log(bIcon);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={styles.bannerBG}
      //sx={{
      //  position: "relative",
      //  WebkitPaddingEnd: "0px",
      //  WebkitPaddingStart: "0px",
      //  //minHeight: "99vh",
      //  backgroundImage: `url('/public/bIcon.png')`,
      //}}
    >
      {
        //<Image
        //  src={bIcon}
        //  layout="fill"
        //  style={{
        //    zIndex: "10",
        //    position: "relative",
        //    objectFit: "cover",
        //    width: "100%",
        //  }}
        ///>
      }
      <Box
        display="flex"
        flexDirection={matchesMMD ? "column" : "row"}
        justifyContent={matchesMMD ? "start" : "space-around"}
        width={matchesXL ? "80%" : "100%"}
        alignContent="center"
        alignItems="center"
        mt={matchesSM ? 9 : 13}
        //pt={matchesSM ? 9 : 13}
        mb={8}
        px={matchesMD ? (matchesMMD ? 9 : 4) : 0}
        //pl={matchesSM ? 4 : 0}
        //px={matchesMD ? 4 : 0}
        sx={{
          //border: "2px solid red",
          zIndex: "20",
          //position: "absolute",
        }}
      >
        <Box
          display={matchesLG && "flex"}
          flexDirection={matchesLG && "column"}
          alignItems={matchesLG && "start"}
          width={matchesSM ? "100%" : matchesLG ? "50%" : "90%"}
          pl={matchesSM ? 3 : 0}
          sx={{
            textAlign: "start",
            textTransform: "none",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "800",
              fontSize: matchesXSS
                ? matchesMD
                  ? matches
                    ? matchesLG
                      ? matchesXL
                        ? "3rem"
                        : "2.8rem"
                      : "2.5rem"
                    : "2.1rem"
                  : "2.1rem"
                : "6.5vw",
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
          {
            //matchesLG ? "h5" : "h6"
          }
          <Typography
            variant={matchesXSS ? (matchesLG ? "h5" : "h6") : "subtitle1"}
            my={1}
            sx={{ color: "white" }}
          >
            Lowest Price Guarnteed
          </Typography>
          <ButtonCustom
            row={matchesSM ? "false" : "true"}
            content="Call Now!"
            spanContent="+91 7807021868"
            //wd={
            //  matchesXSS
            //    ? matchesMD
            //      ? matchesMMD
            //        ? "58%"
            //        : matches
            //        ? "50%"
            //        : "58%"
            //      : "60%"
            //    : "83%"
            //}
            pdy={matchesSM ? "0.6rem" : "1rem"}
            //pdx={matchesSM ? "6rem" : "5rem"}
            pdx={
              matchesSM
                ? matchesXSS
                  ? matchesMD
                    ? "2rem"
                    : "1.8rem"
                  : "1rem"
                : matches
                ? matchesLG
                  ? matchesXL
                    ? "4rem"
                    : "3.7rem"
                  : "3rem"
                : "2rem"
            }
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
