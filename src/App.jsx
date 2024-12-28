import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "remixicon/fonts/remixicon.css";
const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#C9D6AB]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
