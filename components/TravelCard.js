import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/future/image";

const TravelCard = ({ img, title, content }) => {
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Card
      sx={{
        "&:hover": {
          boxShadow: "0px 2px 55px -10px blue",
        },
        width: "100%",
        height: "10rem",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 25px -10px black",
        borderRadius: "6px",
      }}
    >
      <CardActionArea>
        <Image
          src={img}
          style={{
            width: matchesXL ? 50 : 40,
            height: matchesXL ? 45 : 35,
            marginTop: matchesXL ? "6%" : "10%",
          }}
        />
        <CardContent>
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
