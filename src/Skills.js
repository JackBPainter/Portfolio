import React from "react";
import JavascriptLogo from "./mainImages/JSLogo.png";
import ReactLogo from "./mainImages/ReactLogo.png";
import NodeLogo from "./mainImages/NodeLogo.png";
import HTMLLogo from "./mainImages/HTMLLogo.png";
import CSSLogo from "./mainImages/CSSLogo.png";
import GitLogo from "./mainImages/GitLogo.png";

export default function Skills() {
  return (
    <div className="Skills-Page" id="Skills">
      <h1 className="Skills-Header">Primary Skills</h1>
      <div className="Skills-Container">
        <div>
          <img className="Skill" src={JavascriptLogo} alt="JavaScript" />
          <img className="Skill" src={ReactLogo} alt="React" />
          <img className="Skill" src={NodeLogo} alt="Node" />
        </div>
        <div>
          <img className="Skill" src={HTMLLogo} alt="HTML" />
          <img className="Skill" src={CSSLogo} alt="CSS" />
          <img className="Skill" src={GitLogo} alt="Git" />
        </div>
      </div>
    </div>
  );
}
