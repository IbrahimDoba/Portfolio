import React from "react";
import {
  CloseIcon,
  SidebarContainer,
  SidebarIcon,
  SidebarItems,
  SidebarLink,
  SidebarWrapper,
} from "./SidebarStyles";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarIcon onClick={toggle}>
        <CloseIcon />
      </SidebarIcon>
      <SidebarWrapper>
        <SidebarItems>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            Skills
          </SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle}>
            Portfolio
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarItems>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
