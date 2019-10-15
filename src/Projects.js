import React from "react";
import Kodflix from "./mainImages/Kodflix-Full.png";
import Calculator from "./mainImages/Calculator-Full.png";
import progrAmateur from "./mainImages/ProgramateurFinal.png";
import Tetris from "./mainImages/Tetris.png";

export default function Projects() {
  return (
    <div className="Projects-Page" id="Projects">
      <h1 className="Projects-Header">My Projects</h1>
      <div className="Projects-Icon-Container">
          <a className="Float-Me-Projects" href="https://github.com/JackBPainter/Kodflix">
            <img className="Kodflix" src={Kodflix} alt="Kodflix"/>
          </a>
          <br />
          <p className="Projects-Text">Kodflix<br />(Netflix Clone)<br /><a className="Heroku-Links" href="https://jpkodflix.herokuapp.com/">Deployed App</a></p>
          <br />
          <br />
          <a className="Float-Me-Projects" href="https://github.com/JackBPainter/shine-energy-calculator">
            <img className="Calculator" src={Calculator} alt="Calculator"/>
          </a>
          <br />
          <p className="Projects-Text">Gas/Electricity Calculator</p>
          <br />
          <br />
          <a className="Float-Me-Projects" href="https://github.com/JackBPainter/progrAmateur">
              <img className="progrAmateur" src={progrAmateur} alt="progrAmateur" />
          </a>
          <br />
          <p className="Projects-Text">progrAmateur<br />(Junior Developer messaging application)<br /><a className="Heroku-Links" href="http://programateur.herokuapp.com/">Deployed App</a></p>
          <br />
          <br />
          <a className="Float-Me-Projects" href="https://github.com/JackBPainter/Tetris">
              <img className="Tetris" src={Tetris} alt="Tetris" />
          </a>
          <p className="Projects-Text">Tetris</p>
          <br />
          <br />
      </div>
    </div>
  );
}
