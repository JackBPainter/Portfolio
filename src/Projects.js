import React from "react";
import Kodflix from "./mainImages/Kodflix-Full.png";
import Calculator from "./mainImages/Calculator-Full.png"
import progrAmateur from "./mainImages/ProgramateurFinal.png"

export default function Projects() {
  return (
    <div className="Projects-Page" id="Projects">
      <h1 className="Projects-Header">My Projects</h1>
      <div className="Projects-Icon-Container">
          <div className="Float-Me-Projects">
            <img className="Kodflix" src={Kodflix} alt="Kodflix"/>
          </div>
          <br />
          <p className="Projects-Text">Kodflix<br />(Netflix Clone)</p>
          <br />
          <div className="Float-Me-Projects">
            <img className="Calculator" src={Calculator} alt="Calculator"/>
          </div>
          <br />
          <p className="Projects-Text">Gas/Electricity Calculator</p>
          <br />
          <div className="Float-Me-Projects">
              <img className="progrAmateur" src={progrAmateur} alt="progrAmateur" />
          </div>
          <br />
          <p className="Projects-Text">progrAmateur<br />(Junior Developer messaging application)</p>
          <br />
      </div>
    </div>
  );
}
