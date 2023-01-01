import styled from "styled-components";
import { mobile } from "../MediaQuery/Responsive";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: white;
`;

export const Container = styled.div``;

export const Left = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  max-width: 1000px;
  margin-bottom: 40px;
  padding: 0 20px;
`;
export const TitleH1 = styled.h1``;
export const SpanTag = styled.span`
  font-size: 22px;
  word-spacing: 1.5px;
  color: #E6FFE6;
  .br {
    color: red;
  }

  ${mobile({
    fontSize: "15px",
  })}
`;
export const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const ContactH1 = styled.h1``;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const SocialIconLinks = styled.a`
  font-size: 40px;
  color: white;
  padding: 10px;
 
  &:hover {
    scale: 1.2;
  }


`;
export const WebsiteRights = styled.small`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 15%;
`;
