import React from "react";
import LinkedIn from "./mainImages/LinkedIn.svg";
import GitHub from "./mainImages/GitHub.svg";

export default function NavBar() {
  return (
    <div className="Nav-Bar">
      <nav>
        <ul className="Nav-Bar-Container">
          <img className="Social-Icon" src={LinkedIn} alt="LinkedIn Link" />
          <img className="Social-Icon" src={GitHub} alt="Github Link" />
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
