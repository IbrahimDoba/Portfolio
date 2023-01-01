import React from "react";
import codevideo from "../../videos/codevid.mp4";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroName,
  VideoBg,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={codevideo} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>FRONTEND-DEVELOPER</HeroH1>
        <HeroName>IBRAHIM DOBA </HeroName>
      </HeroContent>
      
    </HeroContainer>
  );
};

export default Hero;
