import styled from "styled-components";
import { mobile } from "../MediaQuery/Responsive";

export const HeroContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 1) 80%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 60%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: fill;
  object-fit: fill;
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 700px;
  width: 100%;
  position: absolute;
  /* padding: 8px 24px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: 		#F9F6EE;

  /* animation: move 10s infinite linear;
  animation-duration: 10s;

  @keyframes move {
    from {
      left: -70%;
    }
    to {
      left: 100%;
    }
  } */
`;

export const HeroH1 = styled.h1`
  font-size: 60px;
  display: flex;
  text-align: center;
  justify-content: flex-start;
  text-shadow: 5px 5px 10px #356489;
  font-weight: 500;

  ${mobile({
    fontSize: "20px",
    width: "300px",
    textAlign: "center"
  })}
`;
export const HeroName = styled.span`
  width: 100%;
  font-size: 40px;
  text-align: center;
  font-weight: 300;
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.3),
    0 0 3px rgba(255, 255, 255, 0.3);

    ${mobile({
    fontSize: "20px",
    width: "300px",
    textAlign: "start"
  })}
`;
export const HeroDownBtnrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  z-index: 4;
  top: 10;
  left: 50%;
  right: 0;
  bottom: 5%;
`;
export const DownBtn = styled.button``;
