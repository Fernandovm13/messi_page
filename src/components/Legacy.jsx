import React from "react";

export default function Legacy(){
  return (
   <section id="legacy" className="section legacy container">

      <div className="portrait">
        <img src="assets/messi2.jpg" alt="Messi portrait" />
      </div>

      <div className="copy">
        <h2>
          Un <span className="accent">Legado Eterno</span>
        </h2>

        <p className="description">
        El impacto de Lionel Messi en el fútbol moderno va más allá de las estadísticas convencionales. 
        Desde su debut profesional, ha redefinido roles tácticos como el "falso nueve", combinando una 
        capacidad goleadora letal con una visión de juego propia de los mejores asistentes de la historia. 
        Su trayectoria, marcada por una resiliencia inquebrantable ante las lesiones en sus inicios y la 
        presión mediática constante, sirve como un estudio de caso sobre la excelencia sostenida durante 
        más de dos décadas en la élite del deporte rey.
        </p>
       <p className="description">
        Fuera de las canchas, el legado de Messi se extiende a través de su labor filantrópica con la 
       **Fundación Leo Messi**, centrada en la salud y educación infantil. Su figura ha trascendido 
       fronteras culturales, convirtiéndose en un embajador global que promueve valores como la 
        humildad, el respeto y el trabajo en equipo, consolidando su posición no solo como un atleta, 
       sino como un ícono cultural de nuestra era.
       </p>

        <div className="quote">
          <p className="quote-text">
            “El fútbol es mi vida, pero Argentina es mi corazón”
          </p>
          <span className="quote-author">— Lionel Messi</span>
        </div>

        <ul className="legacy-list">
          <li>
            <div>
              <strong>Mentor de generaciones</strong>
              <span>Su estilo influenció a jugadores en todo el mundo</span>
            </div>
          </li>

          <li>
            <div>
              <strong>Humanitario comprometido</strong>
              <span>Dedicado a ayudar a niños y comunidades necesitadas</span>
            </div>
          </li>

          <li>
            <div>
              <strong>Icono cultural global</strong>
              <span>Un referente del deporte y la cultura mundial</span>
            </div>
          </li>
        </ul>

      </div>
    </section>
  );
}