import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PersonalCard from "../components/PersonalCard";
import WorkCard from "../components/WorkCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/Layout";
import SocialCard from "../components/SocialCard";
import { ReactComponent as Logo } from "../assets/anchor.svg";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <Layout>
      <CardContainer>
        <div data-aos="zoom-in-right">
          <PersonalCard>
            <ImageContainer>
              <img
                src={require("../assets/glassesAvatar.png")}
                alt="Avatar"
                height={100}
              />
            </ImageContainer>

            <p>
              Hello 👋 ! I'm Ozkan, a Frontend developer and indie maker from
              Turkey. I work with React, React Native, Figma, and a laptop. Oh
              and I'm very funny.
            </p>
          </PersonalCard>
        </div>

        <div data-aos="zoom-in-left">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Scribe</h3>
            </Header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button>Reach</Button>
          </WorkCard>
        </div>
        <div data-aos="zoom-in-left">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Scribe</h3>
            </Header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button>Reach</Button>
          </WorkCard>
        </div>
        <SocialCardContainer>
          <div data-aos="fade-right">
            <SocialCard>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50.121"
                height="45.052"
                viewBox="0 0 75.121 61.052"
              >
                <path
                  d="M75.063,12.844a30.83,30.83,0,0,1-8.858,2.43A15.451,15.451,0,0,0,72.984,6.75,30.947,30.947,0,0,1,63.2,10.485,15.418,15.418,0,0,0,36.937,24.542,43.765,43.765,0,0,1,5.17,8.441,15.445,15.445,0,0,0,9.94,29.019a15.4,15.4,0,0,1-6.984-1.932v.193A15.438,15.438,0,0,0,15.317,42.4a15.421,15.421,0,0,1-4.057.538,14.847,14.847,0,0,1-2.9-.28,15.447,15.447,0,0,0,14.4,10.709,30.9,30.9,0,0,1-19.14,6.595,30.3,30.3,0,0,1-3.671-.217A43.544,43.544,0,0,0,23.56,66.666c28.348,0,43.852-23.483,43.852-43.846,0-.667-.018-1.341-.04-2a31.325,31.325,0,0,0,7.692-7.98Z"
                  transform="translate(0.058 -5.614)"
                  style={{
                    fill: "#d1d5db",
                  }}
                ></path>
              </svg>
            </SocialCard>
          </div>
          <div data-aos="fade-right">
            <SocialCard>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <path
                  style={{
                    fill: "#d1d5db",
                  }}
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                ></path>
              </svg>
            </SocialCard>
          </div>
          <div data-aos="fade-right">
            <SocialCard>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  style={{
                    fill: "#fff",
                  }}
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>{" "}
                <rect x="2" y="9" width="4" height="12"></rect>{" "}
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </SocialCard>
          </div>
          <div data-aos="fade-right">
            <SocialCard>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>{" "}
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </SocialCard>
          </div>
        </SocialCardContainer>
        <div data-aos="zoom-in-left">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Scribe</h3>
            </Header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button>Reach</Button>
          </WorkCard>
        </div>
        <div data-aos="zoom-in-left">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Scribe</h3>
            </Header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button>Reach</Button>
          </WorkCard>
        </div>
        <div data-aos="zoom-in-left">
          <WorkCard>
            <Header>
              <Logo width={40} height={40} />
              <h3>Scribe</h3>
            </Header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button>Reach</Button>
          </WorkCard>
        </div>
      </CardContainer>
    </Layout>
  );
};

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
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

const CardContainer = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    margin-right: 12px;
  }
`;

const SocialCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  width: 274px;

  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default Home;
