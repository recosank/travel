import React, { useState } from "react";
import { Typography, Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/future/image";
import PackageCard from "./PackageCard";
import ButtonCustom from "./CustomButton";
import { packageData } from "../utility/travelData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SectionB = () => {
  const theme = useTheme();
  //const settings = {
  //  className: "center",
  //  infinite: false,
  //  centerPadding: "60px",
  //  slidesToShow: 5,
  //  swipeToSlide: true,
  //  //afterChange: function (index) {
  //  //  console.log(
  //  //    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
  //  //  );
  //  //},
  //};
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
      {matches ? (
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          rowSpacing={5}
          width={
            matchesMD
              ? matches
                ? matchesLG
                  ? "80%"
                  : "100%"
                : "80%"
              : "100%"
          }
          columnSpacing={5}
        >
          {packageData.map((data, key) => {
            return (
              <Grid item md={6} key={key}>
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
      ) : (
        <Carousel
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
        >
          {packageData.map((data, key) => {
            return (
              <Box
                sx={{
                  position: "relative",
                  width: "95%",
                  overflow: "hidden",
                  borderRadius: "15px",
                  margin: "auto",
                }}
              >
                <Box
                  sx={{
                    width: "85%",
                    zIndex: "40",
                    margin: "auto",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    py={5}
                    sx={{
                      textAlign: "center",
                      zIndex: "40",
                      left: "50%",
                    }}
                  >
                    <PackageCard
                      img={data.img}
                      name={data.name}
                      price={data.price}
                      stay={data.stay}
                      quality={data.quality}
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Carousel>
      )}
      {
        //
        //  <PackageCard
        //    img={packageData[ind].img}
        //    name={packageData[ind].name}
        //    price={packageData[ind].price}
        //    stay={packageData[ind].stay}
        //    quality={packageData[ind].quality}
        //  />
      }

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
