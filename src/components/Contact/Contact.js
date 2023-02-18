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
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <MainContainer id="contact">
      <Container>
        <Left>
          <TitleH1>About Me</TitleH1>
          <SpanTag>
            Hi! My name is Ibrahim Doba and I'm a Intermediate frontend developer
            with a passion for creating user-friendly and visually appealing
            websites. I have experience with HTML, CSS, JavaScript, tailwind, firebase and
            frontend frameworks such as React.  <p /> I'm constantly
            learning and experimenting with new technologies to improve my
            skills and stay up-to-date with the latest trends in web
            development.<p/> In my free time, I enjoy exploring new design concepts
            and experimenting with different color palettes to create
            aesthetically pleasing interfaces.<p/> I also have experience working in
            a team environment and understand the importance of communication,
            collaboration, and the agile development process. <p/>My goal is to use
            my skills and creativity to develop innovative and responsive web
            applications that provide a seamless user experience.<p/> I'm excited
            about the opportunity to work with like-minded individuals and
            contribute to the growth of any organization I'm a part of.
          </SpanTag>
        </Left>
        <Right>
          <ContactH1>Contact Me Here!</ContactH1>
          <ContactForm/>
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
