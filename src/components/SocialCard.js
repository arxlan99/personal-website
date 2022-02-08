import React from "react";
import styled from "styled-components";

const SocialCard = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #17181c;
  border-radius: 20px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  height: max-content;
  padding: 20px;
  border: 3px solid #27272a;

  width: 128px;
  height: 128px;
  text-align: center;
  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
  }
`;

export default SocialCard;
