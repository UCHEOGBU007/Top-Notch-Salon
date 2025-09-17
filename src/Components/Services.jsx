import React from "react";
import Ourservices from "../Pagesection/Ourservices.jsx";
import Style from "../Css/Services.module.css";

const Services = () => {
  return (
    <div className={Style.container}>
      <Ourservices />
      <section>
        <h2>PRICE LIST</h2>
        <article>
          <img
            className={Style.img2}
            src="/Pricelistillustration.jpg"
            alt="list aside "
          />
          <img src="/Barbing price list.jpg" alt="price list image" />
        </article>
      </section>
    </div>
  );
};

export default Services;
