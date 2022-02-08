import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(NavLink)`
  background-color: #121212;
  color: ${(props) => (props.isActive ? "red" : "blue")};
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
    height: 1px;
    background-color: #fff;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s linear;
  }
  &:hover::after {
    width: 100%;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
