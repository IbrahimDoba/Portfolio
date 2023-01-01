import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { mobile } from "../MediaQuery/Responsive";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  background-color: ${({ scrollNav }) => (scrollNav ? "#000" : "transperant")};
  margin-top: -80px;
  top: 0;
  position: sticky;
  z-index: 10;
`;
export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 0 24px;
`;
export const NavLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;
export const MobileIcon = styled.div`
  display: none;

  ${mobile({
    display: "block",
    position: "absolute",
    transform: "translate(-100%, 60%)",
    top: 0,
    right: 0,
    fontSize: "30px",
    color: "#fff",
    cursor: "pointer",
  })}
`;
export const NavLogo = styled(LinkS)`
  font-size: 30px;
  color: white;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease;
    color: #01bf71;
  }
`;
export const NavRight = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;
export const NavMenu = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  ${mobile({
    display: "none",
  })}
`;
export const NavItem = styled.div``;
export const NavLink = styled(LinkS)`
  font-size: 20px;
  cursor: pointer;
  color: white;
  text-decoration: none;

  &:hover {
    transition: all 0.5s ease;
    color: #01bf71;
  }
  &.active {
    border-bottom: 1px solid #01bf71;
    color: #01bf71;
  }
`;
