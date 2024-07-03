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
import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer/Footer";

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
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
