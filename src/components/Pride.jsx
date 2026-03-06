import React from "react";

export default function Pride() {
  return (
    <section id="argentina" className="section pride container">
      <div className="left">
        <h2>
          Orgullo de <span className="accent">Argentina</span>
        </h2>
        
        <p>
          Messi no solo es una leyenda del fútbol, es el símbolo máximo de Argentina. 
          Su dedicación, humildad y talento lo convirtieron en el icono de una nación 
          que respira fútbol en cada rincón.
        </p>

        <p>
          La relación entre Messi y la <strong>Selección Argentina</strong> es una crónica de 
          perseverancia y redención. Tras años de finales esquivas y críticas injustas, 
          Lionel lideró una transformación generacional que culminó en la conquista de la 
          <strong> Copa América 2021</strong> en el Maracaná y la histórica 
          <strong> Copa del Mundo en Qatar 2022</strong>. Este último hito no solo le otorgó 
          el trofeo que le faltaba, sino que unificó a toda una nación bajo un sentimiento 
          de orgullo renovado.
        </p>

        <p>
          Como capitán, ha demostrado un liderazgo silencioso pero efectivo, siendo el 
          máximo goleador histórico de la "Albiceleste". Su compromiso con la camiseta 
          nacional ha inspirado a millones de jóvenes, demostrando que el talento, 
          cuando se acompaña de sacrificio y amor por los colores, puede superar 
          cualquier obstáculo deportivo.
        </p>

        <ul>
          <li>
            <strong>Copa del Mundo 2022</strong> — Líder, capitán y autor de 7 goles en el torneo.
          </li>
          <li>
            <strong>Copa América 2021</strong> — Campeón, máximo goleador y MVP del certamen.
          </li>
          <li>
            <strong>Amor Incondicional</strong> — El ícono que logró unir a generaciones de argentinos.
          </li>
        </ul>
      </div>

      <div className="right">
        <div className="image">
          {/* Un buen 'alt' ayuda al SEO y a la aprobación de AdSense */}
          <img 
            src="assets/messi1.jpeg" 
            alt="Lionel Messi celebrando con la Selección Argentina" 
          />
        </div>
      </div>
    </section>
  );
}