import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero-inner container">
        <div className="eyebrow">LA LEYENDA VIVE</div>

        <h1>
          <span className="line1">LIONEL</span>
          <span className="accent line2">MESSI</span>
        </h1>

        <p className="lead">
          El hombre que redefinió el fútbol. Ocho Balones de Oro. Un Campeón Mundial.
        </p>

        <div className="cta-wrap">
          <a href="#career" className="btn primary">Descubre su historia</a>
          <a href="#gallery" className="btn outline">Ver galería</a>
        </div>
      </div>
    </section>
  );
}