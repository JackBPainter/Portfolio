import React from "react";
<<<<<<< HEAD
import mainBackground from "./mainImages/Background.jpg";
=======
import mainBackground from "./mainImages/background.png";
>>>>>>> Add commits to Gh-Pages

export default function Home() {
  return (
    <container className="Home-Page" id="Home">
      <div className="Intro-Context">
        <img className="Intro-Image" src={mainBackground} alt="background" />
        <div className="Intro-Writing">
          <h1>Jack Painter</h1>
          <h2>JS/React Developer</h2>
          <h2>(London)</h2>
          <br />
        </div>
      </div>
    </container>
  );
}
