import React from "react";
import codevideo from "../../videos/codevid.mp4";
import {
  Animation,
  DownBtn,
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroDownBtnrapper,
  HeroH1,
  HeroName,
  HeroP,
  VideoBg,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={codevideo} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        {/* <HeroP>Hello 👋 I'm </HeroP> */}
        <HeroH1>FRONTEND-DEVELOPER</HeroH1>
        <HeroName>IBRAHIM DOBA </HeroName>
      </HeroContent>
      <HeroDownBtnrapper>
        <DownBtn />
      </HeroDownBtnrapper>
    </HeroContainer>
  );
};

export default Hero;
