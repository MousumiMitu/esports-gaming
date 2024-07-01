"use client";
import React, { useState } from "react";
import SectionHeader from "../Header/SectionHeader";
import Image from "next/image";
import cover from "@/assets/bgCover1.png";
import "./Battles.css";
import team from "@/assets/teamLogo/team.png";
import team2 from "@/assets/teamLogo/team3.png";
import Button from "../Button/Button";
import { BattleCards2 } from "@/Constants/data";

const BattleTournament = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tab = [
    { id: 1, tab: "all match" },
    { id: 14, tab: "upcoming match" },
    { id: 15, tab: "finished match" },
  ];
  return (
    <section className="relative w-full min-h-[90vh] py-10">
      <Image
        src={cover}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        alt="cover"
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.87)]"></div>
      <div className="py-10 custom-container relative px-10 space-y-14">
        <SectionHeader
          smallTitle="# Game streaming battle"
          title="Our Gaming Tournament!"
          center
        />

        <div className="flex items-center justify-center gap-3">
          {tab.map((item) => (
            <div key={item.id}>
              <Button
                text={item.tab}
                bg={activeTab === item.id ? "yellow" : "black"}
                {...(activeTab !== item.id && { white: true })}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {BattleCards2.map((card) => (
            <div
              key={card.id}
              className="flex items-center group cursor-pointer  px-14"
            >
              <div className="w-[20%] relative flex items-center justify-center ">
                <div className="battle-cover-shadow bg-activeColor w-[101.5%] hidden group-hover:block"></div>
                <div className="battle-cover w-full bg-darkColor1  flex items-center justify-center">
                  <Image src={team} alt="team" className="w-[70px]" />
                </div>
              </div>

              <div className="w-[60%] relative flex items-center justify-center">
                <div className="battle-content-shadow bg-activeColor w-[100.6%] hidden group-hover:block"></div>
                <div className="battle-content bg-darkColor1 w-full py-4">
                  <div className="w-[85%] h-full mx-auto flex items-center justify-center gap-5">
                    <div className="space-y-1 text-end">
                      <span className="block text-sm font-medium text-activeColor uppercase">
                        Pubg mobile
                      </span>
                      <span className="block text-3xl font-bold text-white capitalize">
                        Pro player
                      </span>
                    </div>
                    <div className="bg-black rounded-md py-2 px-4 space-y-1 ">
                      <span className="block text-4xl font-bold text-white capitalize">
                        07:45
                      </span>
                      <span className="block text-sm  text-gray-400 text-center ">
                        23 dec, 2024
                      </span>
                    </div>
                    <div className="space-y-1 text-start">
                      <span className="block text-sm font-medium text-activeColor uppercase">
                        Pubg mobile
                      </span>
                      <span className="block text-3xl font-bold text-white capitalize">
                        Pro player
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[20%] relative flex items-center justify-center ">
                <div className="battle-cover-shadow bg-activeColor w-[101.5%] hidden group-hover:block"></div>
                <div className="battle-cover w-full bg-darkColor1  flex items-center justify-center">
                  <h4 className="text-white z-10">
                    <Image src={team2} alt="team" className="w-[70px]" />
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BattleTournament;
