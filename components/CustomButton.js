import React from "react";
import { Button } from "@mui/material";

const ButtonCustom = ({ content, fill, spanContent, wd, pd }) => {
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
        padding: `${pd} 0rem`,
        marginTop: "10%",
        marginBottom: "10%",
        textTransform: "none",
      }}
    >
      <span style={{ fontWeight: "600" }}> {content} </span> &nbsp; &nbsp;
      {spanContent && "+91 7807021868"}
    </Button>
  );
};

export default ButtonCustom;
