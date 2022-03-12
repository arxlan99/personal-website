import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import PersonalCard from "../components/PersonalCard";
import SkilsCard from "../components/SkilsCard";
import SocialCard from "../components/SocialCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Layout>
      <CardContainer>
        <div>
          <SocialCardContainer>
            <div data-aos="fade-right">
              <SocialCard>
                <Content>
                  <CustomizeHeader color="#0ea5e9">23</CustomizeHeader>
                  <div>years old</div>
                </Content>
              </SocialCard>
            </div>
            <div data-aos="fade-right">
              <SocialCard>
                <Content>
                  <CustomizeHeader>1000+</CustomizeHeader>
                  <div>commits/y</div>
                </Content>
              </SocialCard>
            </div>
            <div data-aos="fade-right">
              <SocialCard>
                <Content>
                  <CustomizeHeader>10+</CustomizeHeader>
                  <div>personal projects</div>
                </Content>
              </SocialCard>
            </div>
            <div data-aos="fade-right">
              <SocialCard>
                <a href="/resume.pdf" download>
                  <svg
                    width="50"
                    viewBox="0 0 105 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50.8739 44.9316C48.8092 48.1767 46.8283 51.3513 42.3896 54.4354C40.0153 56.0997 34.5503 59.3515 26.7823 59.3515C11.9621 59.3515 0 48.5768 0 29.6338C0 13.0781 11.2525 0 27.0983 0C33.518 0 39.2217 2.21927 43.4221 5.5485C47.3063 8.63874 49.1254 11.7298 50.7128 14.5041L39.6217 20.046C38.8281 18.2265 37.873 16.3232 35.4213 14.2651C32.7246 12.123 30.0339 11.4908 27.7305 11.4908C18.6979 11.4908 13.9428 19.8914 13.9428 29.2402C13.9428 41.5247 20.2076 47.6219 27.7305 47.6219C35.0211 47.6219 37.9567 42.5505 39.8539 39.3055L50.8739 44.9318V44.9316ZM89.7273 1.74213H104.625L85.2109 57.687H70.9522L51.7771 1.74213H66.6746L78.243 41.525L89.7273 1.74213Z"
                      fill="#D1D5DB"
                    />
                  </svg>
                </a>
              </SocialCard>
            </div>
          </SocialCardContainer>
        </div>
        <div data-aos="zoom-in-up">
          <PersonalCard>
            <ImageContainer>
              <img
                src={require("../assets/glassesAvatar.png")}
                alt="Avatar"
                height={100}
              />
            </ImageContainer>

            <p>
              Hello 👋 ! I'm <CustomizeText>Ozkan</CustomizeText>, a Frontend
              developer and indie maker from Turkey. I work with React, React
              Native, Figma, and a laptop. Oh and I'm very funny.
            </p>
          </PersonalCard>
        </div>
        <div>
          <SocialCardContainer>
            <Link to="/about">
              <div data-aos="fade-left">
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
            </Link>

            <a
              href="https://github.com/arxlan99"
              target="_blank"
              rel="noreferrer"
            >
              <div data-aos="fade-left">
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
            </a>

            <a
              href="https://www.linkedin.com/in/%C3%B6zkan-arslan-73473620b/"
              target="_blank"
              rel="noreferrer"
            >
              <div data-aos="fade-left">
                <SocialCard>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="#d1d5db"
                    stroke="#d1d5db"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      style={{
                        fill: "#d1d5db",
                      }}
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    ></path>{" "}
                    <rect x="2" y="9" width="4" height="12"></rect>{" "}
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </SocialCard>
              </div>
            </a>

            <a href="mailto:ozkan.arslan.321@gmail.com">
              <div data-aos="fade-left">
                <SocialCard>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>{" "}
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </SocialCard>
              </div>
            </a>
          </SocialCardContainer>
        </div>
        <div data-aos="zoom-in-up">
          <SkilsCard>
            <h2>Skills</h2>
            <p>
              My name is <CustomizeText>Ozkan,</CustomizeText> but my friends
              call me Toto.
            </p>
            <p>
              I live in Nantes, and I will be very happy to meet you if you live
              nearby!
            </p>
            <p>
              I split my time between freelancing, indie making, badminton, and
              my friends.
            </p>
            <p>
              My dream is to be able to live from my personal projects on the
              internet! For this, I have already launched several: Uneed.best
              and Gumaffiliates . And I have many more in the works!
            </p>
          </SkilsCard>
        </div>
        <div data-aos="zoom-in-up">
          <SkilsCard>
            <h2>My skills and tools</h2>
            <p>
              I develop mainly in Javascript and Typescript, with VueJS, NuxtJS
              and TailwindCSS.
            </p>
            <p>I design my projects myself, with Figma.</p>
            <p>
              I write E2E and integration tests with Cypress, while developing
              my components with Storybook. I also use AVA or Jest for unit
              testing.
            </p>
            <p>
              I also handle the backend with Strapi, Firebase, Supabase or
              Express.
            </p>
            <p>I sometimes do python.</p>
            <p>
              I've also worked on form validation, two factors authentication,
              permissions systems, custom component libraries, and lots of other
              fun stuff!
            </p>
          </SkilsCard>
        </div>
      </CardContainer>
    </Layout>
  );
};

const CardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  display: flex;
  align-content: center;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const Content = styled.div`
  h1 {
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    font-size: 0.88rem;
  }
`;

const SocialCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  width: 280px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    width: 290px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomizeText = styled.span`
  font-size: 1.3rem;
  color: #0ea5e9;
  letter-spacing: 0.4px;
`;

const CustomizeHeader = styled.h1`
  color: #0ea5e9;
  font-weight: 800;
`;
export default About;
