import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <strong>MESSI</strong>
          <p>La leyenda que definió una era.</p>
        </div>
        <div>
          <h4>Explorar</h4>
          <Link to="/">Carrera</Link><br/>
          <Link to="/statistics">Logros</Link><br/>
          <Link to="/about">Argentina</Link>
        </div>
        <div>
          <h4>Redes</h4>
          <a href="#" target="_blank" rel="noreferrer">Instagram</a><br/>
          <a href="#" target="_blank" rel="noreferrer">YouTube</a>
        </div>
        <div>
          <h4>Legal</h4>
          <Link to="/privacy">Privacy</Link><br/>
          <Link to="/terms">Terms</Link><br/>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Lionel Messi. All rights reserved.
      </div>
    </footer>
  )
}