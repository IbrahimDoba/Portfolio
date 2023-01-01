import React from "react";
import styled from "styled-components";
import {
  sliderDataOne,
  sliderDataThree,
  sliderDataTwo,
} from "./SliderSection/SliderData";
import Slider from "./SliderSection/Slider";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Arrow } from "./SliderSection/SliderStyles";

const Container = styled.div`
  position: relative;
  overflow: hidden; 

 
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  transition: 1s ease-in;
  transform: translateX(${(props) => props.sliderIndex * -98}vw);
`;

const SliderPages = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = (direction) => {
    console.log("working", handleClick);
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <Container >
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        <Slider {...sliderDataOne} />

        <Slider {...sliderDataTwo} />

        <Slider {...sliderDataThree} />
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
};

export default SliderPages;
