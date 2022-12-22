import React from 'react'
import { NavbarWrapper, NavContainer, NavItem, NavLeft, NavLink, NavLogo, NavMenu, NavRight } from './NavbarStyles'


const Navbar = () => {
  return (
    <NavContainer>
      <NavbarWrapper>
        <NavLeft>
        <NavLogo>SILVER.</NavLogo>
        </NavLeft>
        <NavRight>
        <NavMenu>
        <NavItem>
            <NavLink>HOME</NavLink>
        </NavItem>
        <NavItem>
            <NavLink>SKILLS</NavLink>
        </NavItem>
        <NavItem>
            <NavLink>PORTFOLIO</NavLink>
        </NavItem>
        <NavItem>
            <NavLink>CONTACT</NavLink>
        </NavItem>
        </NavMenu>
        </NavRight>
      </NavbarWrapper>
    </NavContainer>
  )
}

export default Navbar
