import React from "react";
import styled from "styled-components";
import { skillss } from "./data";
import Skills from "./Skills";

const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: black;
`;
const ContainerSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const SkillsH1 = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 42px;
  color: #f5fbfd;
  background-color: black;
  letter-spacing: 2px;
`;

const SingleSkill = () => {
  return (
    
  <Container id="skills">  
    <SkillsH1>SKILLS</SkillsH1>
        <ContainerSkills>
      {skillss.map((EachSkill) => (
        <Skills EachSkill={EachSkill} key={EachSkill.id} />
      ))}
      </ContainerSkills>
    </Container>
  );
};

export default SingleSkill;
