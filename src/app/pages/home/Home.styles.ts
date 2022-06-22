import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomePage = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const HomeTitle = styled.h1`
  font-family: Minercraftory;
  margin: 0;
`;

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
`;

export const HomeNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  font-size: white;
  width: 100%;
  margin-top: 32px;
`;

export const HomeNavLink = styled(Link)<{ active: number }>`
  color: ${(props) => (props.active ? "yellow" : "#fff")}

  &:hover {
    color: gray;
  }

  &:visited {
    color: ${(props) => (props.active ? "yellow" : "#fff")};
    cursor: auto;
    text-decoration: unset;
  }
`;

export const HomeMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 32px;
`;
