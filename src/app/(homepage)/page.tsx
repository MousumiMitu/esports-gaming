import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import bg from "@/assets/heroImg.png";
import cover from "@/assets/try3.jpg";
import "./homepage.css";
import Button from "@/components/Button/Button";
import HeroSection from "@/components/HeroSection/HeroSection";
import TeamCards from "@/components/TeamCards/TeamCards";
import UpComingFeatures from "@/components/Features/UpComingFeatures";
import FeatureArea from "@/components/Features/FeatureArea";

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <TeamCards />
      <UpComingFeatures />
      <FeatureArea />
    </>
  );
};

export default Home;
