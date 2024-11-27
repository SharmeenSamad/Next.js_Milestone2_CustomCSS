
import React from "react";
import Navbar from "./Navbar";
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div id="hero"
    className="hero-container">
         
      <Navbar />

      <div className="hero-content">
        <div className="hidden lg:block"></div>

          <div className="hero-text">
            <div className="hero-msin">
              <p data-aos="zoom-in-up">Sharmeen</p>
              <p data-aos="zoom-in-up">A.Samad</p>
              <h6 data-aos="zoom-in-up">FinTech Expert</h6>
                        
          </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;