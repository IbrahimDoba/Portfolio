import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const NavContainer = styled.div`

`;
export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  background-color: black;


`;
export const NavLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;

`;
export const NavLogo = styled(LinkR)`
    font-size: 30px;
    text-decoration: none;
    color: white;
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
`;
export const NavItem = styled.div`
`;
export const NavLink = styled(LinkS)`
    font-size: 20px;
    cursor: pointer;
    color: white;


    &:hover{
        transition: all  0.5s ease;
        color: #01bf71;
    }
    &.active{
    border-bottom: 3px solid #01bf71;
  }
    
`;