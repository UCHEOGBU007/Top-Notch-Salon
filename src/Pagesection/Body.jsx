import React from "react";
import Style from "../Css/Body.module.Css";

const Body = () => {
  return (
    <div className={Style.bodyparent}>
      <section className={Style.bodycontainer}>
        <h2>
          Welcome To <span>Top-Notch-Barbers</span> And Salon
        </h2>
        <p>
          Our Barbing salon always offers professional,quality services and we
          are ready to deal with your highest expectations. Here , we also have
          award wining staff that have demostrated talent of master barbers at
          several notable syling competitions. Let our artist be your personal
          stylist and you will never be disappointed.
        </p>
      </section>
    </div>
  );
};

export default Body;
