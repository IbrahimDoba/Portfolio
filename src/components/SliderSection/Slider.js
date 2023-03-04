import React from "react";
import {
  BtnWrapper,
  IconStyles,
  SButton,
  SContainer,
  SImg,
  SImgWrapper,
  SliderContainers,
  STitle,
  SWrapper,
} from "./SliderStyles";
import { FiLink } from "react-icons/fi";
import { IconContext } from "react-icons";

const Slider = ({
  img,
  desc,
  gitlink,
  bg,
  linkBg,
  skills1,
  skills2,
  skills3,
  skills4,
  skills5,
}) => {
  return (
    <SliderContainers bg={bg} id="portfolio">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <SContainer>
          <STitle>{desc}</STitle>
          <SWrapper>
            {/* <SDesc></SDesc> */}
            <a href={gitlink} target="_blank" rel="noreferrer">
              <SImgWrapper linkBg={linkBg} >
                <SImg src={img} />
                <IconStyles>
                  <FiLink />
                </IconStyles>
              </SImgWrapper>
            </a>
          </SWrapper>
          <BtnWrapper>
            <SButton>{skills1}</SButton>
            <SButton>{skills2}</SButton>
            {skills3 === "" ? null : <SButton>{skills3}</SButton>}
            {skills4 === "" ? null : <SButton>{skills4}</SButton>}
            {skills5 === "" ? null : <SButton>{skills5}</SButton>}
            {/* <SButton>CSS</SButton> */}
          </BtnWrapper>
        </SContainer>
      </IconContext.Provider>
    </SliderContainers>
  );
};

export default Slider;
