import React from "react";
import Face from "./mainImages/myFace.png";

export default function About() {
  return (
    <div className="About-Container">
      <div className="Float-Me">
        <img className="face" src={Face} alt="My Face"/>
      </div>
      <h2 className="About-header">About me</h2>
      <p className="About-item">
        My name is Jack Painter and I am a enthusiastic and passionate junior
        full-stack developer. After more than 4 years of working on the sales
        side of IT, I decided enough was enough and made the decision to drop it
        all and become a developer.
        <br />
        <br />
        Currently on an intensive full-stack development course with Kodiri
        where I am using JavaScript, React, Node, HTML and CSS to develop a
        netflix clone and a soon to be disclosed group project.
        <br />
        <br />
        When I'm not coding your find me taking photos(any tips would be very
        welcome), gaming, listening to vinyls, attending meetups and following
        the Formula 1 & football.
      </p>
    </div>
  );
}
