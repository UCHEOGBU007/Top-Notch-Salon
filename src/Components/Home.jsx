import React from "react";
import supabase from "../config/SupabaseClient.jsx";
import Hero from "../Pagesection/Hero.jsx";
import Body from "../Pagesection/Body.jsx";
import Ourservices from "../Pagesection/Ourservices.jsx";

const Home = () => {
  console.log(supabase);
  return (
    <div>
      <Hero />
      <Body />
      <Ourservices />
    </div>
  );
};

export default Home;
