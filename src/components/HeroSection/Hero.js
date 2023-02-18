import React from "react";
import codevideo from "../../videos/codevid.mp4";
import Typed from "react-typed";
import "./Hero.css";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  VideoBg,
} from "./HeroStyles";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 4800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={codevideo} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Typed
          className="HeroH1"
          typeSpeed={180}
          backSpeed={110}
          strings={["FRONTEND-DEVELOPER", ]}
        />

        {showText && (
          <Typed
            className="HeroName"
            typeSpeed={120}
            backSpeed={140}
            strings={["IBRAHIM DOBA"]}
            
          />
        )}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
