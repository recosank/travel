import React from "react";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/future/image";

const TravelCard = ({ img, title, content }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Card
      sx={{
        width: "100%",
        height: "10rem",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 25px -10px black",
        borderRadius: "6px",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={img}
          width={100}
          height={100}
          alt="mountains"
          style={{
            width: matchesXL ? 50 : 40,
            height: matchesXL ? 45 : 35,
            marginTop: matchesXL ? "6%" : "10%",
          }}
        />
        <CardContent
          sx={{
            width: matchesSM
              ? "100%"
              : matches
              ? matchesLG
                ? "70%"
                : "90%"
              : "70%",
          }}
        >
          <Typography
            gutterBottom
            variant={matchesMD ? (matchesXL ? "subtitle2" : "caption") : ""}
            sx={{
              fontSize: matchesSM && "0.7rem",
              lineHeight: "0.8rem",
            }}
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant=""
            sx={{
              fontSize: matchesMD
                ? matchesXL
                  ? "0.8rem"
                  : "0.7rem"
                : "0.6rem",
            }}
            color="text.secondary"
          >
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TravelCard;
