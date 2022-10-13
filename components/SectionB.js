import React, { useState } from "react";
import { Typography, Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/future/image";
import PackageCard from "./PackageCard";
import ButtonCustom from "./CustomButton";
import { packageData } from "../utility/travelData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Home.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SectionB = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXSS = useMediaQuery("(min-width:450px)");
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));
  const [ind, setind] = useState(0);

  const handleIndFwd = () => {
    if (ind == packageData.length - 1) {
      setind(packageData.length - 1);
    } else {
      setind((p) => p + 1);
    }
  };
  const handleIndBwd = () => {
    if (ind == 0) {
      setind(0);
    } else {
      setind((p) => p - 1);
    }
  };

  return (
    <Box
      mt={3}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      overflow="hidden"
      alignItems="center"
    >
      <Typography
        my={matchesMD ? (matchesLG ? 12 : 9) : 5}
        mt={matchesMD ? (matchesLG ? 15 : 11) : 7}
        mx={3}
        sx={{
          fontWeight: "800",
          fontSize: matchesXSS
            ? matchesMD
              ? matchesLG
                ? matchesLG
                  ? matchesXL
                    ? "4rem"
                    : "3rem"
                  : "2.7rem"
                : "2.4rem"
              : "1.85rem"
            : "1.3rem",
        }}
      >
        Best Selling Tour Packages
      </Typography>

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        rowSpacing={5}
        width={
          matchesMD ? (matches ? (matchesLG ? "80%" : "100%") : "80%") : "100%"
        }
        columnSpacing={5}
      >
        {packageData.map((data, key) => {
          return (
            <Grid item md={6} sm={10} key={key} sx={{ margin: "auto" }}>
              <PackageCard
                img={data.img}
                name={data.name}
                price={data.price}
                stay={data.stay}
                quality={data.quality}
              />
            </Grid>
          );
        })}
      </Grid>

      <ButtonCustom
        href="#topex"
        content="Enquire more"
        click="true"
        fill="true"
        wd={
          matchesXSS
            ? matchesMD
              ? matches
                ? matchesLG
                  ? "15%"
                  : "25%"
                : "35%"
              : "50%"
            : "60%"
        }
        pdy="0.9rem"
        pdx="1rem"
        mrg="9%"
        mrgb="9%"
      />
    </Box>
  );
};

export default SectionB;
{
  // <Carousel
  //        showStatus={false}
  //        showArrows={false}
  //        showIndicators={true}
  //        showThumbs={false}
  //      >
  //        {packageData.map((data, key) => {
  //          return (
  //            <Box key={key} className={styles.cardMain}>
  //              <Box className={styles.cardSec}>
  //                <PackageCard
  //                  img={data.img}
  //                  name={data.name}
  //                  price={data.price}
  //                  stay={data.stay}
  //                  quality={data.quality}
  //                />
  //              </Box>
  //            </Box>
  //          );
  //        })}
  //      </Carousel>
}
