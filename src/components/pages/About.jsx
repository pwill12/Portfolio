import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import Links from "./Link";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" className="left-img" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="About Me" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <Links/>
                <Link to="/resume">
                  <button className="primaryBtn">Download CV</button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
