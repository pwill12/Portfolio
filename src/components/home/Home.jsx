import React, { useContext } from "react";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Themedark } from "../pages/Pages";
import { Portfolio } from "../pages/Portfolio";
import { Services } from "../pages/Services";
import { Hero } from "./Hero";

export const Home = () => {
  const dark = useContext(Themedark);

  const Mystyle = {
    backgroundColor: dark ? 'rgb(249, 249, 253)': 'black',
    color: dark ? 'lightblue': '#d0d6da'
  }

  return (
    <div style={Mystyle}>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};
