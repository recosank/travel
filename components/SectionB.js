import React from "react";
import { Typography, Box, useTheme, useMediaQuery, Grid } from "@mui/material";
import PackageCard from "./PackageCard";
import ButtonCustom from "./CustomButton";
import { packageData } from "../utility/travelData";

const SectionB = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      mx={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant={matchesMD ? (matchesLG ? "h4" : "h5") : "h6"}
        my={matchesMD ? (matchesLG ? 12 : 9) : 5}
        mt={matchesMD ? (matchesLG ? 15 : 11) : 7}
        sx={{ fontWeight: "800" }}
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
            <Grid item xs={12} md={6} key={key}>
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
        content="Explore All Package"
        fill="true"
        wd={matchesMD ? (matches ? (matchesLG ? "20%" : "30%") : "50%") : "80%"}
        pd="0.9rem"
      />
    </Box>
  );
};

export default SectionB;
