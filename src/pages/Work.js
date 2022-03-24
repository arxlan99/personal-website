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
import TrendMarket from "../components/Projects/TrendMarket";
import TwitchExtension from "../components/Projects/TwitchExtension";
import TrendingAllSocial from "../components/Projects/TrendingAllSocial";
import LinkedinSearching from "../components/Projects/LinkedinSearching";
import Osym from "../components/Projects/Osym";
import CountryInformation from "../components/Projects/CountryInformation";
import DailyWordy from "../components/Projects/DailyWordy";
import FantasticUI from "../components/Projects/FantasticUI";

const Work = () => {
  return (
    <Layout>
      <CardContainer>
        <div data-aos="zoom-in">
          <TrendMarket />
        </div>
        <div data-aos="zoom-in">
          <TwitchExtension />
        </div>
        <div data-aos="zoom-in">
          <TrendingAllSocial />
        </div>
        <div data-aos="zoom-in">
          <LinkedinSearching />
        </div>
        <div data-aos="zoom-in">
          <Osym />
        </div>
        <div data-aos="zoom-in">
          <CountryInformation />
        </div>
        <div data-aos="zoom-in">
          <DailyWordy />
        </div>
        <div data-aos="zoom-in">
          <FantasticUI />
        </div>
      </CardContainer>
    </Layout>
  );
};

const CardContainer = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  display: flex;

  @media (max-width: 1280px) {
    max-width: 900px;
  }
`;

export default Work;
