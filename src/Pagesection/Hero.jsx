import React from "react";
import Style from "../Css/Hero.module.css";

const Hero = () => {
  return (
    <main className={Style.Hero}>
      <div>
        <h2>
          LOOK SHARP & <span>FEEL CONFIDENT</span>
        </h2>
        <p>
          Step into style at Top-Notch Barbers & Salon—where precision cuts,
          flawless fades, and luxury grooming meet unmatched service. Your
          transformation starts here.
        </p>
      </div>
    </main>
  );
};

export default Hero;
