import styled from "styled-components";
import { mobile } from "../MediaQuery/Responsive";

export const SliderContainers = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: ${(props) => props.bg};
`;
export const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5;
  bottom: 50%;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 1;
  z-index: 4;
  margin: 0 -10px;

  .react-icons {
    color: red;
    font-size: 3rem;
  }
`;

export const SContainer = styled.div`
  height: 100vh;
  width: 98.9vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
`;

export const SImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: scale 1s ease-in-out;
`;

export const IconStyles = styled.div`
  position: relative;
  top: -50%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: none;
  cursor: pointer;

  .react-icons {
    font-size: 3rem;
  }
`;
export const SImgWrapper = styled.div`
  max-width: 1100px;
  height: 550px;
  margin-bottom: 30px;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.linkBg};

  &:hover ${SImg} {
    scale: 1.05;
    filter: blur(1.8px);
  }
  &:hover ${IconStyles} {
    display: flex;
    align-self: center;
    justify-content: center;
    width: 100%;
    filter: blur(0);
    z-index: 10;
  }

  ${mobile({
   maxWidth: "320px",
   
  })}
`;
export const SWrapper = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  align-items: center;
  justify-content: center; 
`;

// export const SDesc = styled.p`
//   font-size: 32px;
//   font-weight: 300;
//   margin-bottom: 40px;
// `;
export const STitle = styled.h1`
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 40px;
  ${mobile({
    fontSize: "24px",
  })}
`;
export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const SButton = styled.button`
  padding: 15px;
  margin: 20px 15px;
  border-radius: 10px;
  border: none;
  background-color: black;
  color: white;
  font-size: 22px;
  width: 100%;
`;
