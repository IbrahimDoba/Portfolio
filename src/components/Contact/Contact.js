import React from "react";
import {
  ContactH1,
  Container,
  Left,
  MainContainer,
  Right,
  SocialIconLinks,
  SocialIcons,
  SocialMediaWrap,
  SpanTag,
  TitleH1,
  WebsiteRights,
} from "./ContactStyles";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <MainContainer id="contact">
      <Container>
        <Left>
          <TitleH1>About Me</TitleH1>
          <SpanTag>
            Hi! My name is Ibrahim Doba and I am a junior developer. I have been
            coding for more then 3 years. During my studies, I gained experience
            in a variety of programming languages including: <br /> Javascript,
            React Framework, Tailwind and more. <br /> I am excited to join the
            team and contribute my skills and knowledge to the company. I am
            eager to learn and grow as a developer, and I believe that this
            opportunity will provide me with the perfect platform to do so. <br/> In
            my free time, I enjoy coding challenges, building projects and participating in coding events.<br/> I am a strong team
            player and am always looking for ways to collaborate and improve
            upon my work. I am looking forward to being a part of a team and
            working on exciting projects and making a difference together.
          </SpanTag>
        </Left>
        <Right>
          <ContactH1>Contact Me Here!</ContactH1>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLinks
                href="https://github.com/Silverfangs9?tab=repositories"
                target="_blank"
                aerial-label="Github"
              >
                <FaGithub />
              </SocialIconLinks>
              <SocialIconLinks
                href="https://www.instagram.com/ib_dobaa/"
                target="_blank"
                aerial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks
                href="https://twitter.com/DobaIbrahim"
                target="_blank"
                aerial-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLinks>
              <SocialIconLinks
                href="https://www.linkedin.com/in/ibrahim-doba-7b0937226/"
                target="_blank"
                aerial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </Right>
      </Container>
      <WebsiteRights>
        @ {new Date().getFullYear()} All rights reserved.
      </WebsiteRights>
    </MainContainer>
  );
};

export default Contact;
