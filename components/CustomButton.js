import React from "react";
import { Button, Typography } from "@mui/material";

const ButtonCustom = ({
  content,
  fill,
  spanContent,
  wd,
  pdy,
  pdx,
  mrg,
  mrgb,
  row,
  click,
  borderR,
}) => {
  return (
    <Button
      variant="outlined"
      href={click == "true" && "#topex"}
      onClick={() => {
        click == "true" && <a href="#topex"> .</a>;
      }}
      sx={{
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.51)",
        },
        textAlign: "center",
        color: fill == "true" ? "white" : "#00754A",
        backgroundColor: fill == "true" && "#00754A",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: borderR ? borderR : "50px",
        width: `${wd}`,
        padding: `${pdy} ${pdx}`,
        marginTop: `${mrg}`,
        marginBottom: `${mrgb}`,
        textTransform: "none",
        lineHeight: "0.2rem",
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: "400" }}>
        {content}{" "}
      </Typography>
      &nbsp; &nbsp; &nbsp;
      {spanContent && (
        <Typography variant="subtitle1">+91 7807021868</Typography>
      )}
    </Button>
  );
};

export default ButtonCustom;
