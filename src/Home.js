import React from "react";
import mainBackground from "./mainImages/background.png";

export default function Home() {
  return (
    <container className="Home-Page">
      <div className="Intro-Context">
        <img className="Intro-Image" src={mainBackground} alt="background" />
        <div className="Intro-Writing">
          <h1>Jack Painter</h1>
          <h2>Full-Stack Developer</h2>
          <h2>(London)</h2>
          <button>Contact me!</button>
        </div>
      </div>
    </container>
  );
}
