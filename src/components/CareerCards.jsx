import React from "react";

const cards = [
  {
    year: "2003",
    title: "Debut en Barcelona",
    text: "Comienza su viaje con el FC Barcelona a los 16 años.",
    img: "/src/assets/card1.jpeg"
  },
  {
    year: "2009",
    title: "Primer Balón de Oro",
    text: "Gana su primer Balón de Oro en una temporada histórica.",
    img: "/src/assets/card2.jpeg"
  },
  {
    year: "2022",
    title: "Campeón Mundial",
    text: "Lidera a Argentina al título de la Copa del Mundo en Qatar.",
    img: "/src/assets/card3.jpeg"
  },
  {
    year: "2024",
    title: "Legado Eterno",
    text: "Su impacto trasciende el fútbol e inspira a millones.",
    img: "/src/assets/card4.jpeg"
  }
];

export default function CareerCards(){
  return (
    <section id="career" className="section">
      <div className="container">
        <h2 className="title">Una <span className="accent">Carrera Extraordinaria</span></h2>
        <p className="subtitle">Dos décadas de excelencia, records inquebrantables y momentos históricos.</p>

        <div className="cards-grid">
          {cards.map((c, i) => (
            <article className="card" key={i}>
              <div className="thumb">
                <img src={c.img} alt={c.title} />
              </div>
              <div>
                <div className="year">{c.year}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}