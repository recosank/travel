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
}) => {
  return (
    <Button
      variant="outlined"
      sx={{
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.51)",
        },
        color: fill == "true" ? "white" : "#00754A",
        backgroundColor: fill == "true" && "#00754A",
        borderRadius: "50px",
        width: `${wd}`,
        padding: `${pdy} ${pdx}`,
        marginTop: `${mrg}`,
        marginBottom: `${mrgb}`,
        textTransform: "none",
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
        {content}{" "}
      </Typography>{" "}
      &nbsp; &nbsp; &nbsp;
      {spanContent && (
        <Typography variant="subtitle1">+91 7807021868</Typography>
      )}
    </Button>
  );
};

export default ButtonCustom;
