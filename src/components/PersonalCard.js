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
  padding: 20px;
  border: 1px solid #2f3136;
  width: 550px;
  height: 260px;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
  }
`;

export default PersonalCard;
