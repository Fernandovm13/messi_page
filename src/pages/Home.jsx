import React from "react";
import Hero from "../components/Hero";
import CareerCards from "../components/CareerCards";
import Milestones from "../components/Milestones";
import Pride from "../components/Pride";
import Legacy from "../components/Legacy";

export default function Home(){
  return (
    <>
      <Hero />
      <section id="career-section">
        <CareerCards />
      </section>
      <Milestones />
      <Pride />
      <Legacy />
          <section id="gallery" className="section container">
        <div className="gallery">
          <img src="/src/assets/m1.jpeg" alt="gallery1"/>
          <img src="/src/assets/m2.jpeg" alt="gallery2"/>
          <img src="/src/assets/m3.jpeg" alt="gallery3"/>
          <img src="/src/assets/m4.jpeg" alt="gallery4"/>
        </div>
      </section>
    </>
  );
}