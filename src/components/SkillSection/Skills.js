import React from "react";
import {
  SkillCard,
  SkillContainer,
  Skillimg,
  SkillTitle,
} from "./SkillsStyles";

const Skills = ({EachSkill}) => {
  return (
    <SkillContainer>
    
        <SkillCard>
          <SkillTitle>{EachSkill.titles}</SkillTitle>
          <Skillimg src={EachSkill.img} />
        </SkillCard>
     
    </SkillContainer>
  );
};

export default Skills;
