import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar" role="navigation">
      <div className="inner container">
        <Link to="/" className="brand" aria-label="Inicio">
          <div className="badge">M</div>
          <div className="text">MESSI</div>
        </Link>
        <nav className="navlinks" aria-label="Main navigation">
          <a href="#/career">Carrera</a>
          <a href="#/milestones">Logros</a>
          <a href="#/argentina">Argentina</a>
          <a href="#/legacy">Legado</a>
        </nav>
        <div className="cta">
          <Link to="/contact" className="cta-link">Más Info</Link>
        </div>
      </div>
    </header>
  );
}