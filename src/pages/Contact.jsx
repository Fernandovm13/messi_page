import React from "react";

export default function Contact(){
  return (
    <div className="page container" style={{padding: "96px 20px"}}>
      <h1>Contacto</h1>
      <p>¿Tienes sugerencias o colaboraciones? Escríbenos a:</p>
      <p><a href="mailto:fernandovm13@gmail.com">fernandovm13@gmail.com</a></p>
      <p>O usa el siguiente formulario (si quieres integrar Formspree/Netlify Forms añade action):</p>
      <form style={{maxWidth:600}}>
        <label>Nombre</label><br/>
        <input type="text" style={{width:"100%",padding:8,marginBottom:8}}/>
        <label>Email</label><br/>
        <input type="email" style={{width:"100%",padding:8,marginBottom:8}}/>
        <label>Mensaje</label><br/>
        <textarea style={{width:"100%",padding:8,marginBottom:8}} rows="5"></textarea>
        <button className="btn primary">Enviar</button>
      </form>
    </div>
  );
}