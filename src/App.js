import React from "react";
import NavBar from "./Nav-Bar.js";
import Home from "./Home.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js"
import "./App.css";

export default function app() {
  return (
    <div className="App">
      <NavBar />
      <body>
        <Home />
        <About />
        <Skills />
        <Projects />
      </body>
    </div>
  );
}
