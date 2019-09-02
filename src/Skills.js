import React from "react";
import JavascriptLogo from "./mainImages/JSLogo.png";
import ReactLogo from "./mainImages/ReactLogo.png";
import NodeLogo from "./mainImages/NodeLogo.png";
import HTMLLogo from "./mainImages/HTMLLogo.png";
import CSSLogo from "./mainImages/CSSLogo.png";
import GitLogo from "./mainImages/GitLogo.png";

export default function Skills() {
  return (
    <div className="Skills-Page">
      <div className="Skills-Container">
        <img className="JavaScript" src={JavascriptLogo} alt="JS Logo" />
        <img className="React" src={ReactLogo} alt="React Logo" />
        <img className="Node" src={NodeLogo} alt="Node Logo" />
        <img className="HTML" src={HTMLLogo} alt="HTML Logo" />
        <img className="CSS" src={CSSLogo} alt="CSS Logo" />
        <img className="Git" src={GitLogo} alt="Git Logo" />
      </div>
    </div>
  );
}
