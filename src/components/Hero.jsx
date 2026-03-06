import React from "react";
import { HashLink } from "react-router-hash-link";

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
          <HashLink smooth to="/#career" className="btn primary">
            Descubre su historia
          </HashLink>
          <HashLink smooth to="/#gallery" className="btn outline">
            Ver galería
          </HashLink>
        </div>
      </div>
    </section>
  );
}