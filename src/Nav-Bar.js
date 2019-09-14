import React from "react";
import LinkedIn from "./mainImages/LinkedIn.svg";
import GitHub from "./mainImages/GitHub.svg";
import Email from "./mainImages/EmailIcon.png";

export default function NavBar() {
  return (
    <div className="Nav-Bar">
      <nav>
        <ul className="Nav-Bar-Container">
          <a href="https://linkedin.com/in/painterjack/">
            <img className="Social-Icon" src={LinkedIn} alt="LinkedIn Link" />
          </a>
          <a href="https://github.com/JackBPainter">
            <img className="Social-Icon" src={GitHub} alt="Github Link" />
          </a>
          <a href="mailto:JackBPainter@gmail.com">
            <img className="Social-Icon" src={Email} alt="Email Link" />
          </a>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Home">Home</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
