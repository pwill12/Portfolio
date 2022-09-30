import { Menu } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Darkmode from "../data/darkmode";
import { navlink } from "../data/dummydata";
import { Themedark } from "../pages/Pages";

export const Header = ({clicked, setclicked }) => {
  const [responsive, setResponsive] = useState(false);
  const dark = useContext(Themedark);

  const Mystyle = {
    backgroundColor: dark ? 'rgb(249, 249, 253)': 'black',
    color: dark ? 'green': 'white'
  }

  const Menustyle = {
    color: dark ? 'black': 'white'
  }

  const Logostyle = {
    color: dark ? 'Green': 'aqua',
    fontWeight: 600
  }
  return (
    <>
      <header style={Mystyle}>
        <div className="container flexsbar">
          <div className="logo">
            {/* <img src={logo} alt='' data-aos='zoom-in-right' /> */}
            <h1 style={Logostyle}>PO.</h1>
          </div>
          <Darkmode setclicked={setclicked} clicked={clicked}/>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <>
                <Link to={links.url} key={i}>
                  {links.text}
                </Link>
              </>
            ))}
          </div>
          <div className="toggle" onClick={() => setResponsive(!responsive)}>
            <Menu className="icon" style={Menustyle}/>
          </div>
        </div>
      </header>
    </>
  );
};
