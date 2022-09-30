import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../common/Footer";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { About } from "./About";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
import Preloader from "./Preloader";
import ResumeNew from "./Resume";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";

export const Themedark = createContext();

export const Pages = () => {
  const [load, upadateLoad] = useState(true);
  const [clicked, setclicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Themedark.Provider value={clicked}>
        <Router>
          <Preloader load={load} />
          <Header clicked={clicked} setclicked={setclicked} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={ResumeNew} />
          </Switch>
          <Footer />
        </Router>
      </Themedark.Provider>
    </>
  );
};
