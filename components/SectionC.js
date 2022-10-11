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
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXSS = useMediaQuery("(min-width:450px)");
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));
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
      mt={matchesSM && 5}
      mx={2}
      mb={matches ? (matchesLG ? (matchesXL ? 18 : 15) : 13) : 0}
      px={matchesMD ? 0 : 2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        zIndex: "20",
      }}
    >
      <Typography
        variant={matchesMD ? (matchesLG ? "h4" : "h5") : "h6"}
        mb={matchesMD ? (matchesLG ? 12 : 9) : 5}
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
              : "1.9rem"
            : "1.55rem",
        }}
      >
        What Our Clients Says
      </Typography>

      <Card
        sx={{
          position: "relative",
          "&:hover": {
            backgroundColor: "lightgrey",
          },
          width: matchesMD ? (matchesXL ? "60%" : "90%") : "100%",
          boxShadow: "15px 10px 25px -25px black",
          overflow: "visible",
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
            boxShadow: "0px 2px 25px -14px black",
            position: "absolute",
            zIndex: "90",
            top: "45%",
            left: matches ? "-2%" : "-4%",
            borderRadius: "100px",
          }}
          onClick={handleIndBwd}
        />
        <ArrowForwardIosIcon
          sx={{
            height: "2.5rem",
            width: "2.5rem",
            padding: "9px",
            paddingRight: "4px",
            backgroundColor: "white",
            color: "black",
            boxShadow: "0px 2px 25px -14px black",
            position: "absolute",
            zIndex: "90",
            top: "45%",
            right: matchesXL ? "-1.4%" : "-2.5%",
            borderRadius: "100px",
          }}
          onClick={handleIndFwd}
        />

        <CardActionArea
          sx={{
            width: matchesMD ? "85%" : "100%",
            zIndex: "40",
            margin: "auto",

            "&:hover": {
              backgroundColor: "transparent",
            },
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
                "&:hover": {
                  backgroundColor: "lightgrey",
                },
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
              variant={matches ? "h6" : "body2"}
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
