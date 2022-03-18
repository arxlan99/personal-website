import React from "react";
import styled from "styled-components";
import WorkCard from "../WorkCard";
import { ReactComponent as Logo } from "../../assets/anchor.svg";
import { Link } from "react-router-dom";
import { IoLibrary } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

const FantasticUI = () => {
  return (
    <WorkCard>
      <Header>
        <Logo width={40} height={40} />
        <Link to="/" target="_blank">
          <h3>
            Fantastic UI Library <FaExternalLinkAlt color="gray" size={12} />
          </h3>
        </Link>
      </Header>
      <p>Lorem ips dolonsecr adipisicing elit.</p>
      <Footer>
        <IconContainer>
          <IoLibrary color="#F8E0B1" size={30} />{" "}
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

export default FantasticUI;
