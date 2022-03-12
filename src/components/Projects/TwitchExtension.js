import React from "react";
import styled from "styled-components";
import WorkCard from "../WorkCard";
import { ReactComponent as Logo } from "../../assets/anchor.svg";
import { MdExtension } from "react-icons/md";

const TwitchExtension = () => {
  return (
    <WorkCard>
      <Header>
        <Logo width={40} height={40} />
        <h3>Nimo, Twitch Extension</h3>
      </Header>
      <p>Lorem ipsum dol adipisicing elit.</p>
      <Footer>
        <Button>Web</Button>
        <IconContainer>
          <MdExtension color="#94a3b8" size={30} />{" "}
        </IconContainer>
      </Footer>
    </WorkCard>
  );
};

const Button = styled.button`
  background: transparent;
  border-radius: 12px;
  border: 2px solid gray;
  color: white;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  font-size: 1.02rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  &:hover {
    opacity: 0.8;
  }
`;

const IconContainer = styled.button`
  display: flex;
  background: transparent;
  border-radius: 12px;
  border: 2px solid gray;
  color: white;
  padding: 5px;
  margin: 10px;
  cursor: pointer;
  font-size: 1.02rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  &:hover {
    opacity: 0.8;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    margin-right: 12px;
  }
`;

export default TwitchExtension;
