import React from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { DarkModeOutlined } from "@mui/icons-material";

const Mystyle = {
  marginLeft: "auto",
};

function Darkmode({ clicked, setclicked }) {
  function Myfunct() {
    setclicked((prev) => !prev);
  }

  return (
    <div style={Mystyle} onClick={Myfunct}>
      {clicked ? <DarkModeOutlined /> : <LightModeOutlinedIcon />}
    </div>
  );
}

export default Darkmode;
