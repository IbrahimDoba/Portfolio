import React, { useEffect, useState } from "react";
import {FaBars} from "react-icons/fa"
import { animateScroll } from "react-scroll";
 import {
   MobileIcon,
  NavbarWrapper,
  NavContainer,
  NavItem,
  NavLeft,
  NavLink,
  NavLogo,
  NavMenu,
  NavRight,
} from "./NavbarStyles";

const Navbar = ({isOpen, toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 300) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

 const toggleHome = () => {
    animateScroll.scrollToTop()
  }

  return (
    <NavContainer scrollNav={scrollNav}  isOpen={isOpen}>
      <NavbarWrapper>
        <NavLeft>
          <NavLogo onClick={toggleHome}>SILVER.</NavLogo>
        </NavLeft>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavRight>
          <NavMenu>
            <NavItem>
              <NavLink
                to="home"
                duration={500}
                spy={true}
                offset={-80}
                smooth={true}
                exact="true"
              
              >
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="skills"
                duration={500}
                spy={true}
                offset={-80}
                smooth={true}
                exact="true"
              >
                SKILLS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="portfolio"
                duration={500}
                spy={true}
                offset={-80}
                smooth={true}
                exact="true"
              >
                PORTFOLIO
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contact"
                duration={500}
                spy={true}
                offset={-80}
                smooth={true}
                exact="true"
              >
                CONTACT
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavRight>
      </NavbarWrapper>
    </NavContainer>
  );
};

export default Navbar;
