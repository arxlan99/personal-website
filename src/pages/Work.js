import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import WorkCard from "../components/WorkCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactComponent as Logo } from "../assets/anchor.svg";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { MdExtension } from "react-icons/md";

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
            <Footer>
              <Button>Web</Button>
              <IconContainer>
                <FaAppStoreIos color="#5293E1" size={30} />{" "}
              </IconContainer>
              <IconContainer>
                <IoLogoGooglePlaystore color="#0BEF76" size={30} />{" "}
              </IconContainer>
            </Footer>
          </WorkCard>
        </div>
        <div data-aos="zoom-in">
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
        </div>
        <div data-aos="zoom-in">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Trending All Social Media</h3>
            </Header>
            <p>Lorem ipsconsectetur adipisicing elit.</p>
            <Footer>
              <Button>Web</Button>
              <IconContainer>
                <FaAppStoreIos color="#5293E1" size={30} />{" "}
              </IconContainer>
              <IconContainer>
                <IoLogoGooglePlaystore color="#0BEF76" size={30} />{" "}
              </IconContainer>
            </Footer>
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
            <Footer>
              <IconContainer>
                <FaAppStoreIos color="#5293E1" size={30} />{" "}
              </IconContainer>
              <IconContainer>
                <IoLogoGooglePlaystore color="#0BEF76" size={30} />{" "}
              </IconContainer>
            </Footer>
          </WorkCard>
        </div>
        <div data-aos="zoom-in">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Country Information</h3>
            </Header>
            <p>Lorem sit amconsecx adipisicing elit.</p>

            <Footer>
              <Button>Web</Button>
              <IconContainer>
                <FaAppStoreIos color="#5293E1" size={30} />{" "}
              </IconContainer>
              <IconContainer>
                <IoLogoGooglePlaystore color="#0BEF76" size={30} />{" "}
              </IconContainer>
            </Footer>
          </WorkCard>
        </div>
        <div data-aos="zoom-in">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Dordle Words Demo </h3>
            </Header>
            <p>Lorem sit amconsecx adipisicing elit.</p>

            <Footer>
              <Button>Web</Button>
              <IconContainer>
                <FaAppStoreIos color="#5293E1" size={30} />{" "}
              </IconContainer>
              <IconContainer>
                <IoLogoGooglePlaystore color="#0BEF76" size={30} />{" "}
              </IconContainer>
            </Footer>
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

export default Work;
