import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <Container>
      <List>
        <ListItem
          to="/"
          isactive={location.pathname === "/" ? "true" : "false"}
        >
          Home
        </ListItem>
        <ListItem
          to="/about"
          isactive={location.pathname === "/about" ? "true" : "false"}
        >
          About
        </ListItem>
        <ListItem
          to="/work"
          isactive={location.pathname === "/work" ? "true" : "false"}
        >
          Work
        </ListItem>
        <ListItem
          to="/contact"
          isactive={location.pathname === "/contact" ? "true" : "false"}
        >
          Contact
        </ListItem>
      </List>
      <div>{children}</div>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  background-color: #121212;
  display: flex;
  min-height: 100vh;
  padding: 50px;
  flex-direction: column;
  align-content: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`;

const ListItem = styled(NavLink)`
  background-color: #121212;
  color: white;
  transition: all 0.2s ease-in-out;
  height: max-content;
  margin: 0px 10px 0px 10px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: ${(props) => (props.isactive === "true" ? "2px" : "1px")};
    background-color: #fff;
    bottom: 0;
    left: 0;
    transform: ${(props) =>
      props.isactive === "true" ? "scaleX(1)" : "scaleX(0)"};
    transform-origin: bottom right;
    transition: transform 0.25s linear;
  }
  &:hover::after {
    width: 100%;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
