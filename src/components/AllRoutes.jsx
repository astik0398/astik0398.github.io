import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Github from "./Github";
import Projects from "./Project";

function AllRoutes() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
    </div>
  );
}

export default AllRoutes;
