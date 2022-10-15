import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ButtonCustom from "./CustomButton";
import CustomForm from "./CustomForm";
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

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={styles.bannerBG}
    >
      <Box
        display="flex"
        flexDirection={matchesMMD ? "column" : "row"}
        justifyContent={matchesMMD ? "start" : "space-around"}
        width={matchesXL ? "90%" : "100%"}
        alignContent="center"
        alignItems="center"
        mt={matchesSM ? 9 : 13}
        mb={8}
        px={matchesMD ? (matchesMMD ? 7 : matches ? 3.1 : 4) : 0}
        sx={{
          zIndex: "20",
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
              textShadow: "3px 3px 10px #FFDEAD",
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
            WELCOME TO&nbsp;
            <Typography
              variant="span"
              sx={{
                color: "#00754A",
                textTransform: "none",
                textShadow: "none",
              }}
            >
              Himalaya
            </Typography>
          </Typography>
          <Typography
            variant={matchesXSS ? (matchesLG ? "h5" : "h6") : "subtitle1"}
            my={1}
            sx={{ color: "white", textShadow: "3px 3px 10px #FFDEAD" }}
          >
            Lowest Price Guarnteed
          </Typography>
          <a href="tel:7807021868" style={{ textDecoration: "none" }}>
            <ButtonCustom
              row={matchesSM ? "false" : "true"}
              content="Call Now!"
              spanContent="+91 7807021868"
              pdy={matchesSM ? "0.6rem" : "1rem"}
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
          </a>
        </Box>
        <CustomForm />
      </Box>
    </Box>
  );
};

export default Banner;
