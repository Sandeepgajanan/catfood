import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "remixicon/fonts/remixicon.css";
import Hero2 from "./components/Hero2";
const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#C9D6AB]">
      <Navbar />
      <Hero />
      <Hero2/>
    </div>
  );
};

export default App;
