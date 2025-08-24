import React from "react";
import Style from "../Css/Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className={Style.Hero}>
      <div>
        <h2>
          LOOK SHARP <span> & FEEL CONFIDENT</span>
        </h2>
        <p>
          Step into style at <span>Top-Notch Barbers & Salon —</span> where
          precision cuts, flawless fades, and luxury grooming meet unmatched
          service. Your transformation starts here.
        </p>
        <div className={Style.ctaButton}>
          <Link to="/Appointment" className={Style.appointment}>
            BOOK APPOINTMENT
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
