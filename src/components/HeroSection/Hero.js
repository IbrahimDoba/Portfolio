import { React, useState, useEffect } from "react";
import codevideo from "../../videos/codevid.mp4";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroName,
  VideoBg,
} from "./HeroStyles";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={codevideo} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <Typewriter
            className="HeroH1"
            typeSpeed={150}
            deleteSpeed={110}
            words={["FRONTEND-DEVELOPER"]}
            loop={1}
          />
        </HeroH1>
        <HeroName>
          {showText && (
            <Typewriter
              className="HeroName"
              typeSpeed={120}
              deleteSpeed={140}
              words={["IBRAHIM DOBA"]}
            />
          )}
        </HeroName>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
