import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkS} from "react-scroll"

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s all ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  font-style: 50px;
  color: white;
`;
export const SidebarIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 24px;
  background: transparent;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;
export const SidebarItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin: 35px;
  text-decoration: none;
  cursor: pointer;
  list-style: none;
  transition: 0.3s ease-in-out;
  color: #fff;

  &:hover {
    color: #01b171;
    transition: 0.3s ease-in-out;
  }
`;
