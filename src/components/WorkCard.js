import React from "react";
import styled from "styled-components";

const WorkCard = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: #17181c;
  border-radius: 20px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  height: max-content;
  padding: 20px;
  border: 3px solid #27272a;
  width: 265px;
  height: 280px;
  text-align: center;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.04) translateY(-10px);
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

export default WorkCard;
