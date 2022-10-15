import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import TravelCard from "./TravelCard";
import { travelData } from "../utility/travelData";

const SectionA = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesXSS = useMediaQuery("(min-width:450px)");
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box
      mx={3}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        my={matchesMD ? (matchesLG ? 12 : 9) : 5}
        mt={matchesMD ? (matchesLG ? 15 : 11) : 7}
        sx={{
          fontWeight: "800",
          fontFamily: "Poppins",
          fontSize: matchesXSS
            ? matchesMD
              ? matchesLG
                ? matchesLG
                  ? matchesXL
                    ? "4rem"
                    : "3rem"
                  : "2.7rem"
                : "2.4rem"
              : "2rem"
            : "1.3rem",
        }}
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
