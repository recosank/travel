import React from "react";
import { Typography, Box, useTheme, useMediaQuery, Grid } from "@mui/material";
import TravelCard from "./TravelCard";
import { travelData } from "../utility/travelData";

const SectionA = () => {
  const theme = useTheme();

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
        Why The Smart Traveller
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        width={matchesMD ? "85%" : "100%"}
        columnSpacing={matchesMD ? 4 : 2}
        rowSpacing={matchesMD ? 6 : 4}
      >
        {travelData.map((data, key) => {
          return (
            <Grid item xs={6} md={3} key={key}>
              <TravelCard
                img={data.img}
                title={data.title}
                content={data.content}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SectionA;
