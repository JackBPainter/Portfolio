import React from "react";
import NavBar from "./Nav-Bar.js";
import Home from "./Home.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import "./App.css";

export default function app() {
  return (
    <div className="App">
      <head>
        <script src="https://kit.fontawesome.com/b5bff501df.js"></script>
      </head>
      <NavBar />
      <body>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </body>
    </div>
  );
}
