import React, { useState } from "react";
import {
  Typography,
  Box,
  CardActionArea,
  CardContent,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/future/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { clientData } from "../utility/travelData";

const SectionC = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));

  const [ind, setind] = useState(0);

  const handleIndFwd = () => {
    if (ind == clientData.length - 1) {
      setind(0);
    } else {
      setind((p) => p + 1);
    }
  };
  const handleIndBwd = () => {
    if (ind == 0) {
      setind(clientData.length - 1);
    } else {
      setind((p) => p - 1);
    }
  };

  return (
    <Box
      mx={2}
      my={3}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ zIndex: "20" }}
    >
      <Typography
        variant={matchesMD ? (matchesLG ? "h4" : "h5") : "h6"}
        my={matchesMD ? (matchesLG ? 12 : 9) : 5}
        mt={matchesMD ? 9 : 7}
        sx={{ fontWeight: "800" }}
      >
        What Our Clients Says
      </Typography>

      <Card
        sx={{
          width: matchesMD ? (matchesXL ? "60%" : "80%") : "100%",
          boxShadow: "15px 10px 25px -25px black",
          borderRadius: "15px",
        }}
      >
        <ArrowBackIosIcon
          color="black"
          fontSize="small"
          sx={{
            height: "2.4rem",
            width: "2.4rem",
            padding: "9px",
            paddingRight: "4px",
            backgroundColor: "white",
            color: "black",
            boxShadow: "0px 2px 25px -10px black",
            position: "absolute",
            zIndex: "90",
            marginTop: "8.3rem",
            marginLeft: "-1rem",
            borderRadius: "100px",
          }}
          onClick={handleIndBwd}
        />
        <ArrowForwardIosIcon
          sx={{
            height: "2.4rem",
            width: "2.4rem",
            padding: "9px",
            paddingRight: "4px",
            backgroundColor: "white",
            color: "black",
            boxShadow: "0px 2px 25px -10px black",
            position: "absolute",
            zIndex: "90",
            marginTop: "8rem",
            marginLeft: matchesMD
              ? matches
                ? matchesLG
                  ? matchesXL
                    ? "58%"
                    : "76%"
                  : "75%"
                : "73%"
              : "82%",
            borderRadius: "100px",
          }}
          onClick={handleIndFwd}
        />

        <CardActionArea
          sx={{
            width: matchesMD ? "70%" : "100%",
            zIndex: "40",
            margin: "auto",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            pt={matches ? 3 : 5}
            sx={{
              textAlign: "center",
              border: "0px solid yellow",
              zIndex: "40",
            }}
          >
            <Image
              src={clientData[ind].img}
              style={{
                width: matches ? 110 : 90,
                height: matches ? 110 : 90,
                borderRadius: "100px",
                objectFit: "cover",
              }}
            />
            <Typography
              sx={{
                padding: "0.4rem 0.9rem",
                backgroundColor: "white",
                color: "black",
              }}
            >
              {clientData[ind].name}
            </Typography>
          </Box>
          <CardContent
            sx={{
              marginBottom: matchesLG && "5%",
              marginTop: matchesLG && "5%",
            }}
          >
            <Typography
              variant={matches ? "subtitle1" : "body2"}
              sx={{ textAlign: "center" }}
              color="text.secondary"
            >
              {clientData[ind].content}
              {matches && (
                <Typography variant="span ">
                  mus malesuada id massa posuere lacinia blandit nulla. Volutpat
                  nibh placerat tristique nibh non.Turpis felis, turpis donec
                  turpis platea.
                </Typography>
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SectionC;
