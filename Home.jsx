


import React from "react";
import "./Home.css"; 
import cv from "./assets/Malak_CV.pdf";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <h2>Hello, I’m MALAK BENKAOUZ</h2>
      <p>
        A dedicated Frontend Developer based in Casablanca, Morocco.
         With expertise in HTML, CSS, JavaScript, and React, I specialize in building modern, responsive, and user-friendly web applications.
         I am passionate about creating seamless digital experiences, writing clean and maintainable code, and turning creative ideas into functional, engaging websites.
         I continuously seek to learn and adopt the latest technologies to deliver high-quality solutions that make an impact.
      </p>
      <div className="home-buttons">

      <a href={cv} download className="connect-button">
        📄 Download My CV
      </a>
      <a href="#contact" className="connect-button">
  Connect with me
</a>


</div>
    </section>
  );
};

export default Home;
