import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 

export default function Navbar() {
  return (
    <header className="navbar" role="navigation">
      <div className="inner container">
        <HashLink smooth to="/#home" className="brand" aria-label="Inicio">
          <div className="badge">M</div>
          <div className="text">MESSI</div>
        </HashLink>

        <nav className="navlinks" aria-label="Main navigation">
          <HashLink smooth to="/#career">Carrera</HashLink>
          <HashLink smooth to="/#milestones">Logros</HashLink>
          <HashLink smooth to="/#argentina">Argentina</HashLink>
          <HashLink smooth to="/#legacy">Legado</HashLink>
        </nav>

        <div className="cta">
          <Link to="/contact" className="cta-link">Más Info</Link>
        </div>
      </div>
    </header>
  );
}