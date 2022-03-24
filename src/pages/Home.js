import React, { useEffect } from "react";
import styled from "styled-components";
import PersonalCard from "../components/PersonalCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/Layout";
import SocialCard from "../components/SocialCard";
import CountryInformation from "../components/Projects/CountryInformation";
import TrendMarket from "../components/Projects/TrendMarket";
import TwitchExtension from "../components/Projects/TwitchExtension";
import DailyWordy from "../components/Projects/DailyWordy";
import TrendingAllSocial from "../components/Projects/TrendingAllSocial";
import DarkMode from "../components/Projects/DarkMode";

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

        <SocialCardContainer>
          <div data-aos="fade-right">
            {/*           <SocialCard>
              <a href="/resume.pdf" download>
                <img src={require("../assets/cv.png")} alt="" width={60} />
              </a>
            </SocialCard> */}
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
          <div data-aos="fade-right">
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
        </SocialCardContainer>

        <div data-aos="zoom-in-left">
          <DarkMode />
        </div>

        <div data-aos="zoom-in-up">
          <TrendingAllSocial />
        </div>
        <div data-aos="zoom-in-up">
          <CountryInformation />
        </div>
        <div data-aos="zoom-in-up">
          <TrendMarket />
        </div>
        <div data-aos="zoom-in-up">
          <TwitchExtension />
        </div>
      </CardContainer>
    </Layout>
  );
};

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 1280px) {
    max-width: 900px;
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
