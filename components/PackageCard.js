import React from "react";
import {
  Button,
  Typography,
  CardActionArea,
  Box,
  CardContent,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/future/image";
import fire from "../public/fire.png";
import ButtonCustom from "./CustomButton";

const PackageCard = ({ name, price, img, stay, quality }) => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Card
      sx={{
        width: "90%",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 25px -10px black",
        borderRadius: "6px",
        border: "0px solid red",
      }}
    >
      <Box
        p={2}
        sx={{
          position: "relative",
          height: matchesMD ? (matchesXL ? "23rem" : "18rem") : "15rem",
        }}
      >
        <Image
          src={img}
          layout="fill"
          width="100%"
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            objectFit: "fill",
            position: "relative",
            zIndex: "10",
          }}
        />
        <Button
          sx={{
            position: "absolute",
            zIndex: "20",
            padding: "0.4rem 0.9rem",
            backgroundColor: "white",
            color: "#00754A",
            fontSize: matchesXL ? "0.8rem" : "0.6rem",
            bottom: "18%",

            marginLeft: matchesMD ? "-8rem" : "-7rem",
          }}
        >
          Rs. {price}
        </Button>
      </Box>
      <CardActionArea>
        <CardContent
          sx={{
            border: "0px solid red",
            paddingTop: "0px",
            paddingLeft: matchesLG ? "6%" : "5%",
            paddingRight: matchesLG ? "6%" : "5%",
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant={
                matchesMD
                  ? matches
                    ? matchesXL
                      ? "h5"
                      : "h6"
                    : "subtitle1"
                  : "captiontext"
              }
              color="#00754A"
            >
              {name}
            </Typography>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              py={0.5}
              px={0.8}
              sx={{
                borderRadius: "10px",
                backgroundColor: "rgba(0, 117, 74, 0.3)",
              }}
            >
              <Image
                src={fire}
                layout="fixed"
                height={matchesMD ? 20 : 13}
                style={{ objectFit: "contain" }}
              />
              <Typography
                sx={{ fontSize: matchesMD ? "0.6rem" : "0.5rem" }}
                px={1}
                color="#00754A"
              >
                MUST TRY
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: matchesMD
                ? matchesLG
                  ? "0.9rem"
                  : "0.8rem"
                : "0.6rem",
              textAlign: "left",
            }}
            my={1.5}
            color="#121212"
          >
            {stay}
          </Typography>
          {quality.map((data, key) => {
            return (
              <Box display="flex" key={key} my={0.5} alignItems="center">
                <div
                  style={{
                    marginTop: "4px",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50px",
                    backgroundColor: "#00754A",
                  }}
                ></div>
                <Typography
                  ml={1}
                  variant={matches ? (matchesLG ? "body1" : "body2") : ""}
                  sx={{
                    fontSize: matchesSM && "0.7rem",
                    textAlign: "left",
                  }}
                  color="text.secondary"
                >
                  {data}
                </Typography>
              </Box>
            );
          })}
        </CardContent>
      </CardActionArea>

      <ButtonCustom
        content="Send Enquiry"
        wd="80%"
        pdy="0.7rem"
        mrg="2%"
        mrgb="4%"
        fill="false"
        click="true"
      />
    </Card>
  );
};

export default PackageCard;
{
}
