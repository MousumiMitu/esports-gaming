"use client";
import Image from "next/image";
import React, { useState } from "react";
import cover from "@/assets/cover1.png";
import SectionHeader from "../Header/SectionHeader";
import character from "@/assets/character.png";
import { features } from "process";
import { featuresCards, featuresCards2 } from "@/Constants/data";

const FeatureArea = () => {
  const [activeCard, setActiveCard] = useState(featuresCards[0]);
  return (
    <section className="relative w-full min-h-[90vh] py-10">
      <Image
        src={cover}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        alt="cover"
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.87)] to-[rgba(0,0,0,0.87)]"></div>

      <div className="py-10 custom-container relative space-y-10">
        <SectionHeader
          smallTitle="# welcome to the esport gaming site"
          title="the gaming universe"
          center
        />

        <div className="grid grid-cols-2 items-center gap-5">
          <div className="flex justify-end pe-28">
            <Image src={character} alt="character" className=" w-[400px]" />
          </div>

          <div className=" ps-6 py-5 space-y-7">
            {featuresCards.map((feature) => (
              <div
                key={feature.id}
                className={`flex items-center gap-9 border-2 ${
                  activeCard.id === feature.id
                    ? "border-activeColor"
                    : "border-darkColor2"
                }  rounded-xl py-4 px-5`}
              >
                <div className="">
                  <feature.image />
                </div>
                <div className="space-y-2">
                  <span className="text-3xl tracking-wide font-medium block">
                    {feature.name}
                  </span>
                  <span className="text-base text-gray-400 tracking-wide font-light block">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur hic incidunt dolorem
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-4">
          {featuresCards2.map((card) => (
            <div key={card.id} className="space-y-1 text-center">
              <span className="block text-[70px] tracking-wide font-bold heading-font  leading-none">
                {card.title}
                {card.plus && (
                  <span className="text-[70px] tracking-wide font-bold text-activeColor2">
                    +
                  </span>
                )}
              </span>

              <span className="text-base tracking-wide  text-activeColor block">
                {card.state}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureArea;
