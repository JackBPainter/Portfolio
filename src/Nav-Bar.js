import React from "react";
import LinkedIn from "./mainImages/LinkedIn.svg";
import GitHub from "./mainImages/GitHub.svg";

export default function NavBar() {
  return (
    <div className="Nav-Bar">
      <div className="Nav-Bar-Container">
        <a className="Social-Icon" href="https://linkedin.com/in/painterjack/">
          <img className="LinkedIn" src={LinkedIn} alt="LinkedIn Link" />
        </a>
        <a className="Social-Icon" href="https://github.com/JackBPainter">
          <img className="GitHub" src={GitHub} alt="Github Link" />
        </a>
      </div>
      <ul className="Nav-Bar-List">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
