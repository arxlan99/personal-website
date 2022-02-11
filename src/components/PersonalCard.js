import React from "react";
import styled from "styled-components";

const PersonalCard = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: #17181c;
  border-radius: 20px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  height: max-content;
  padding: 35px;
  border: 3px solid #27272a;
  width: 550px;
  height: 280px;

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

export default PersonalCard;
