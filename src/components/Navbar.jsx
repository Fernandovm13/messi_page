import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar" role="navigation">
      <div className="inner container">
        {/* Usamos Link para navegar a la raíz del sitio */}
        <Link to="/" className="brand" aria-label="Inicio">
          <div className="badge">M</div>
          <div className="text">MESSI</div>
        </Link>

        <nav className="navlinks" aria-label="Main navigation">
          {/* Enlaces de ancla directos para secciones en la misma página */}
          <a href="#career">Carrera</a>
          <a href="#milestones">Logros</a>
          <a href="#argentina">Argentina</a>
          <a href="#legacy">Legado</a>
        </nav>

        <div className="cta">
          {/* Link para la página de contacto que es una ruta separada */}
          <Link to="/contact" className="cta-link">Más Info</Link>
        </div>
      </div>
    </header>
  );
}