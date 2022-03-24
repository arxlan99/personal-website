import React from "react";
import styled from "styled-components";
import WorkCard from "../WorkCard";
import { ReactComponent as Logo } from "../../assets/anchor.svg";
import { Link } from "react-router-dom";
import { IoLibrary } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

const DarkMode = () => {
  return (
    <DarkCard>
      <Container>
        <input id="toggle" class="toggle" type="checkbox" />
        <div class="background"></div>
      </Container>
    </DarkCard>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const DarkCard = styled.div`
  background-color: #17181c;
  border-radius: 20px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  height: max-content;
  padding: 20px;
  border: 3px solid #27272a;
  width: 260px;
  height: 280px;
  text-align: center;

  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: max-content;
  }
`;

export default DarkMode;
