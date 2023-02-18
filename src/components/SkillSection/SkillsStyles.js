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

  ${mobile({
    fontSize: "15px",
  })}
`;
export const Skillimg = styled.img`
  height: 130px;
  z-index: 1;
  object-fit: cover;
  opacity: 0;
  transition: all 0.5s ease;

  ${mobile({
    height: "70px",
  })}
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1;
  height: 42vh;
  min-width: 360px;
  opacity: 1;
  z-index: 3;
  background-color: #1d1d1d;

  &:hover {
    /* background-color: #f5fbfd; */
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
    minWidth: "150px",
    height: "32vh"
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
  width: 85%;
  height: 85%;
  background-color: #848884;
`; 
