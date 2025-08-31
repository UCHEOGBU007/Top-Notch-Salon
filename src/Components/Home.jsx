import React from "react";
import supabase from "../config/SupabaseClient.jsx";
import Hero from "../Pagesection/Hero.jsx";
import Body from "../Pagesection/Body.jsx";
import Ourservices from "../Pagesection/Ourservices.jsx";
import Testimonials from "../Pagesection/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Body />
      <Ourservices />
      <Testimonials />
    </div>
  );
};

export default Home;
