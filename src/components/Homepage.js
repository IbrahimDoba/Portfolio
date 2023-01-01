import React from "react";
import { useState } from "react";
import Contact from "./Contact/Contact";
import Hero from "./HeroSection/Hero";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import SingleSkill from "./SkillSection/SingleSkill";
import SliderPages from "./SliderPages";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Hero />
      <SingleSkill />
      <SliderPages />
      <Contact />
    </>
  );
};

export default Homepage;
