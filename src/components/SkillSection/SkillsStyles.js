import styled from "styled-components";
import { mobile } from "../MediaQuery/Responsive";

export const SkillTitle = styled.h1`
  opacity: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 25px;
`;
export const Skillimg = styled.img`
  height: 220px;
  z-index: 1;
  object-fit: cover;
  opacity: 0;
  transition: all 0.5s ease;
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1;
  height: 45vh;
  min-width: 480px;
  opacity: 1;
  z-index: 3;
  background-color: black;

  &:hover {
    background-color: #f5fbfd;
    transition: all 1s ease;
  }

  &:hover ${Skillimg} {
    opacity: 2;
    -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
  }

  &:hover ${SkillTitle} {
    opacity: 0;
  }
  ${mobile({
    minWidth: "300px",
  })}
 
`;

export const SkillsWrapper = styled.div``;
export const SkillCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: absolute;
  /* background-color: black; */
`;