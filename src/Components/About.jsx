import React from "react";
import Style from "../Css/About.module.css";
import Testimonials from "../Pagesection/Testimonials";

const About = () => {
  return (
    <div>
      <main>
        <h2> / ABOUT-US </h2>
      </main>
      <section className={Style.body}>
        <img src="/ABOUTBODY.jpg" alt="Barbing illustration" loading="lazy" />

        <p>
          <b style={{ color: "#be8211" }}>ABOUT US - </b>
          <br />
          Welcome to{" "}
          <span style={{ color: "#be8211", fontWeight: "bold" }}>
            Topnotch Barbing Saloon
          </span>
          , where style meets precision and every cut tells a story. Established
          in 2024, we’ve quickly become a trusted destination for those who
          value grooming as an art form. From classic fades to modern trends,
          our barbers are not just skilled, but they’re passionate craftsmen
          dedicated to helping you look and feel your best. At Topnotch, we
          believe a great haircut is more than just a routine and it’s a
          confidence boost, a fresh start, and a reflection of personality.
          That’s why we’ve created a space that’s not only professional but also
          warm and welcoming. Whether you’re here for a quick trim or a full
          grooming experience, you’ll be treated with care, respect, and
          attention to detail.
        </p>
      </section>
      <Testimonials />
    </div>
  );
};

export default About;
