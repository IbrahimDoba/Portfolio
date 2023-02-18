import React from "react";
import styled from "styled-components";
import {
  sliderDataFive,
  sliderDataFour,
  sliderDataOne,
  sliderDataSix,

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
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 :3);
    } else {
      setSliderIndex(sliderIndex < 3 ? sliderIndex + 1 : 0);
    }
  };
  console.log(sliderIndex);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <AiOutlineArrowLeft size={50} />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        <Slider {...sliderDataSix} />
        <Slider {...sliderDataFour} />
        <Slider {...sliderDataFive} />
        <Slider {...sliderDataOne} />
        {/* <Slider {...sliderDataTwo} /> */}
        {/* <Slider {...sliderDataThree} /> */}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <AiOutlineArrowRight size={50} />
      </Arrow>
    </Container>
  );
};

export default SliderPages;
