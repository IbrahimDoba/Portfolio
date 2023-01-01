import React from "react";
import {
  BtnWrapper,
  IconStyles,
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
  descBg,
  btnTextBg,
  linkBg,
}) => {
  return (
    <SliderContainers bg={bg} id="portfolio">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <SContainer >
          <STitle>{desc}</STitle>
          <SWrapper>
            {/* <SDesc></SDesc> */}
            <a href={gitlink}>
            <SImgWrapper linkBg={linkBg} >
              <SImg src={img} />
              <IconStyles >
                <FiLink  />
              </IconStyles>
            </SImgWrapper>
            </a>
          </SWrapper>
          <BtnWrapper>
            {/* <SButton>HTML</SButton>
            <SButton>CSS</SButton> */}
          </BtnWrapper>
        </SContainer>
      </IconContext.Provider>
    </SliderContainers>
  );
};

export default Slider;
