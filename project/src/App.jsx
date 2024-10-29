import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Marque from "./Components/Marque";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Feature from "./Components/Feature";
import Card from "./Components/Card";
import Ready from "./Components/Ready";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen text-[#212121]">
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <Eyes />
      <Feature />
      <Card />
      <Ready />
    </div>
  );
};

export default App;
