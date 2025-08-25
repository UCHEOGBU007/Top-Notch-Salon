import React from "react";
import Style from "../Css/Ourservices.module.css";

const Ourservices = () => {
  const services = [
    {
      title: "Trimming",
      description: "Precision trims to keep your look sharp and fresh.",
    },
    {
      title: "HairStyle",
      description: "Modern and classic styles tailored to your vibe.",
    },
    {
      title: "Shaving",
      description: "Clean shaves and beard sculpting with finesse.",
    },
    {
      title: "Facials",
      description: "Rejuvenating treatments for glowing, healthy skin.",
    },
  ];

  return (
    <section className={Style.container}>
      <h2 className={Style.heading}>Our Services</h2>
      <div className={Style.grid}>
        {services.map((service, index) => (
          <div className={Style.card} key={index}>
            <img src="" alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourservices;
