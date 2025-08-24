import React from "react";
import supabase from "../config/SupabaseClient.jsx";
import Hero from "../Pagesection/Hero.jsx";

const Home = () => {
  console.log(supabase);
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
