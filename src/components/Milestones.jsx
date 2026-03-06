import React from "react";

export default function Milestones() {
  const items = [
    { icon: "assets/ballon.png", num: "8", label: "Balones de Oro" },
    { icon: "assets/goal.png", num: "800+", label: "Goles Anotados" },
    { icon: "assets/assist.png", num: "500+", label: "Asistencias" },
    { icon: "assets/worldcup.png", num: "1", label: "Copa del Mundo" },
    { icon: "assets/copa.png", num: "2", label: "Copas América" },
    { icon: "assets/champions.png", num: "4", label: "Champions League" }
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
              {/* Ruta corregida para la carpeta public/assets */}
              <img 
                className="m-icon" 
                src={it.icon} 
                alt={it.label} 
              />

              <div className="num">{it.num}</div>
              <div className="label">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}