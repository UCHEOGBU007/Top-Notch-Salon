import React from "react";
import Style from "../Css/Stylist.module.css";
import { motion } from "framer-motion";

const Stylist = () => {
  // Stylist information array list.

  const Stylists = [
    {
      name: "Jayden Cole",
      bio: "Expert in modern fades and beard sculpting.",
      img: "/Artist.jpg",
    },
    {
      name: "Amira Khan",
      bio: "Specializes in natural hair care and styling.",
      img: "/Artist4.jpg",
    },
    {
      name: "Leo Tanaka",
      bio: "Creative colorist with a flair for bold transformations.",
      img: "/Artist5.png",
    },
  ];

  return (
    <>
      {" "}
      <section className={Style.container}>
        <h4 className={Style.subheading}>Our Stylists</h4>
        <p className={Style.heading}>
          Our stylist offers traditional and contemporary services along with
          our very own treatment.
        </p>

        {/* looping the array information to get artist details */}

        <div className={Style.grid}>
          {Stylists.map((stylist, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              className={Style.card}
              key={index}
            >
              <img
                src={stylist.img}
                alt={stylist.name}
                className={Style.image}
              />
              <h4>{stylist.name}</h4>
              <p>{stylist.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Stylist;
