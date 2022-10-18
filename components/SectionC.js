import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/future/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { clientData } from "../utility/travelData";

const SectionC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXSS = useMediaQuery("(min-width:450px)");
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));
  const [read, setread] = useState(false);
  const [ind, setind] = useState(0);
  const handleRead = () => {
    setread(true);
  };
  const handleReadOff = () => {
    setread(false);
  };
  const handleIndFwd = () => {
    setread(false);
    if (ind == clientData.length - 1) {
      setind(clientData.length);
    } else {
      setind((p) => p + 1);
    }
  };
  const handleIndBwd = () => {
    setread(false);
    if (ind == 0) {
      setind(0);
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
            : "1.3rem",
        }}
      >
        What Our Clients Says
      </Typography>

      <Card
        sx={{
          position: "relative",
          width: matchesMD ? (matchesXL ? "60%" : "80%") : "100%",
          boxShadow: "15px 10px 25px -25px black",
          overflow: "visible",
          borderRadius: "15px",
        }}
      >
        <ArrowBackIosIcon
          color="black"
          fontSize="small"
          sx={{
            visibility: ind == 0 && "hidden",
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
            visibility: ind == clientData.length - 1 && "hidden",
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

        <Box
          key={clientData[ind].name}
          sx={{
            width: matchesMD ? "85%" : "100%",
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
              zIndex: "40",
            }}
          >
            <Image
              src={clientData[ind].img}
              width={100}
              height={100}
              alt="client avatar"
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
              px={matchesSM ? 2 : 0}
              variant={matches ? "h6" : "body2"}
              sx={{
                textAlign: "center",
                fontWeight: "200",
                height: "100%",
              }}
              color="text.secondary"
            >
              {read
                ? clientData[ind].content
                : clientData[ind].content.slice(0, 190) + "..."}
              <br />
              {!read ? (
                <Button
                  variant="span"
                  size="sm"
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: "500",
                    color: "lime",
                  }}
                  onClick={() => handleRead()}
                >
                  <ExpandMoreIcon />
                </Button>
              ) : (
                <Button
                  variant="span"
                  size="sm"
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: "500",
                    color: "lime",
                  }}
                  onClick={() => handleReadOff()}
                >
                  <ExpandLessIcon />
                </Button>
              )}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default SectionC;
