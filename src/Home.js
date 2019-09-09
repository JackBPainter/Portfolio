import React from "react";
import mainBackground from "./mainImages/background.png";
import LinkedIn from "./mainImages/LinkedIn.svg";
import GitHub from "./mainImages/GitHub.svg";

export default function Home() {
  return (
    <container className="Home-Page" id="Home">
      <div className="Intro-Context">
        <img className="Intro-Image" src={mainBackground} alt="background" />
        <div className="Intro-Writing">
          <h1>Jack Painter</h1>
          <h2>Full-Stack Developer</h2>
          <h2>(London)</h2>
          <a href="https://www.linkedin.com/in/painterjack/">
            <img className="Social-Icon" src={LinkedIn} alt="LinkedIn Link" />
          </a>
          <a href="https://github.com/JackBPainter">
            <img className="Social-Icon" src={GitHub} alt="GitHub Link" />
          </a>
        </div>
      </div>
    </container>
  );
}
