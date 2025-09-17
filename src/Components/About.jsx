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
        <img src="/ABOUTBODY.jpg" alt="Barbing illustration" />

        <p>
          <b>ABOUT US - </b>
          <br />
          Welcome to Topnotch Barbing Saloon, where style meets precision and
          every cut tells a story. Established in 2024, we’ve quickly become a
          trusted destination for those who value grooming as an art form. From
          classic fades to modern trends, our barbers are not just
          skilled—they’re passionate craftsmen dedicated to helping you look and
          feel your best. At Topnotch, we believe a great haircut is more than
          just a routine—it’s a confidence boost, a fresh start, and a
          reflection of personality. That’s why we’ve created a space that’s not
          only professional but also warm and welcoming. Whether you’re here for
          a quick trim or a full grooming experience, you’ll be treated with
          care, respect, and attention to detail.{" "}
          {/*Our team is made up of
          experienced barbers who stay ahead of the curve with ongoing training
          and a deep love for the culture of grooming. We use top-tier tools and
          products to ensure every client leaves with a sharp look and a smile.
          Cleanliness, punctuality, and customer satisfaction are the pillars of
          our service. Beyond the chair, Topnotch is a community hub—a place
          where conversations flow, styles evolve, and friendships are formed.
          We’re proud to serve a diverse clientele and cater to all hair types
          and styles. Whether you’re a longtime regular or a first-time visitor,
          we’re here to make your grooming experience exceptional. Step into
          Topnotch Barbing Saloon and discover why we’re more than just a
          barbershop—we’re a cut above the rest. */}
        </p>
      </section>
      <Testimonials />
    </div>
  );
};

export default About;
