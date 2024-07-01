import { NextPage } from "next";
import React from "react";
import "./homepage.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import TeamCards from "@/components/TeamCards/TeamCards";
import UpComingFeatures from "@/components/Features/UpComingFeatures";
import FeatureArea from "@/components/Features/FeatureArea";
import TopRatedUsers from "@/components/Users/TopRatedUsers";
import BattleTournament from "@/components/TeamCards/Battles";
import Contact from "@/components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <TeamCards />
      <UpComingFeatures />
      <FeatureArea />
      <TopRatedUsers />
      <BattleTournament />
      <Contact />
    </>
  );
};

export default Home;
