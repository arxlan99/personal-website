import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import WorkCard from "../components/WorkCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactComponent as Logo } from "../assets/anchor.svg";

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Layout>
      <CardContainer>
        <div data-aos="zoom-in">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Trend Market By Country</h3>
            </Header>
            <p>Lorem ipsum dolor sit amg elit.</p>
            <Button>Web</Button>
            <Button>Mobile</Button>
          </WorkCard>
        </div>
        <div data-aos="zoom-in">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Nimo, Twitch Extension</h3>
            </Header>
            <p>Lorem ipsum dol adipisicing elit.</p>
            <Button>Reach</Button>
            <span>Extension</span>
          </WorkCard>
        </div>
        <div data-aos="zoom-in">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Trending All Social Media</h3>
            </Header>
            <p>Lorem ipsconsectetur adipisicing elit.</p>
            <Button>Web</Button>
            <Button>Mobile</Button>
          </WorkCard>
        </div>
        <div data-aos="zoom-in">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Linkedin Searching Trends</h3>
            </Header>
            <p>Lorem ips dolonsecr adipisicing elit.</p>
            <Button>Web</Button>
          </WorkCard>
        </div>
        <div data-aos="zoom-in">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Osym Notifications</h3>
            </Header>
            <p>Lorem ipsum consetur adipisicing elit.</p>
            <Button>Web</Button>
            <Button>Mobile</Button>
          </WorkCard>
        </div>
        <div data-aos="zoom-in">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Country Information</h3>
            </Header>
            <p>Lorem sit amconsecx adipisicing elit.</p>
            <Button>Web</Button>
            <Button>Mobile</Button>
          </WorkCard>
        </div>
      </CardContainer>
    </Layout>
  );
};

const CardContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  display: flex;
`;

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

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    margin-right: 12px;
  }
`;

export default Work;
