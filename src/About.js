import React from "react";
import Face from "./mainImages/myFace.png";

export default function About() {
  return (
    <div className="About-Page" id="About">
    <div className="About-Container">
      <div className="Float-Me-About">
        <img className="Face" src={Face} alt="My Face"/>
      </div>
      <h1 className="About-header">About Me</h1>
      <p className="About-writing">
        Hey I'm Jack, an enthusiastic and passionate junior
        full-stack developer. After more than 4 years of working on the sales
        side of IT, I decided enough was enough and made the decision to drop it
        all and become a developer.
        <br />
        <br />
        Currently I'm on an intensive agile full-stack development course with Kodiri
        where I am predominately working with JavaScript, React, Node, HTML and CSS. 
        <br />
        <br />
        When I'm not coding you'll find me playing about with my DSLR (any tips would be very
        welcome), gaming, listening to vinyls, attending meetups and following
        the Formula 1 & football.
      </p>
    </div>
    </div>
  );
}
