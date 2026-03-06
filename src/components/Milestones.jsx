import React from "react";

import ballon from "../assets/ballon.png";
import goal from "../assets/goal.png";
import assist from "../assets/assist.png";
import worldcup from "../assets/worldcup.png";
import copa from "../assets/copa.png";
import champions from "../assets/champions.png";

export default function Milestones(){
  const items = [
    { icon: ballon, num: "8", label: "Balones de Oro" },
    { icon: goal, num: "800+", label: "Goles Anotados" },
    { icon: assist, num: "500+", label: "Asistencias" },
    { icon: worldcup, num: "1", label: "Copa del Mundo" },
    { icon: copa, num: "2", label: "Copas América" },
    { icon: champions, num: "4", label: "Champions League" }
  ];

  return (
   <section id="milestones" className="section">
        <div className="container milestones">
        <h2 className="title">
          Hitos <span className="accent">Incomparables</span>
        </h2>

        <div className="m-grid">
          {items.map((it, i) => (
            <div className="m-card" key={i}>
              
              <img className="m-icon" src={it.icon} alt="" />

              <div className="num">{it.num}</div>
              <div className="label">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}