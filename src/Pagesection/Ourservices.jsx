import React from "react";
import Style from "../Css/Ourservices.module.css";
import { FaPaintbrush } from "react-icons/fa6";
import { PiHairDryer } from "react-icons/pi";
import { GiRazor } from "react-icons/gi";
import { TbRazorElectric } from "react-icons/tb";
import Stylist from "./Stylist";

const Ourservices = () => {
  const services = [
    {
      icon: <GiRazor />,
      title: "Trimming",
      description: "Precision trims to keep your look sharp and fresh.",
    },
    {
      icon: <TbRazorElectric />,
      title: "HairStyle",
      description: "Modern and classic styles tailored to your vibe.",
    },

    {
      icon: <FaPaintbrush />,
      title: "Facials",
      description: "Rejuvenating treatments for glowing, healthy skin.",
    },
    {
      icon: <PiHairDryer />,
      title: "Hair coloring",
      description: "Coloring of hair and treatment of different kind",
    },
  ];

  return (
    <>
      <section className={Style.container}>
        <h2 className={Style.heading}>Our Services</h2>
        <div className={Style.grid}>
          {services.map((service, index) => (
            <div className={Style.card} key={index}>
              <div className={Style.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <hr />
      <Stylist />
    </>
  );
};

export default Ourservices;
