"use client";
import React, { useState } from "react";
import SectionHeader from "../Header/SectionHeader";
import Image from "next/image";
import icon from "@/assets/teamLogo/team.png";
import { gamesCards } from "@/Constants/data";
import { FaStar } from "react-icons/fa6";

const UpComingFeatures = () => {
  const [activeCard, setActiveCard] = useState(gamesCards[1]);
  return (
    <div className="lg:py-20 md:py-14 py-10 custom-container lg:space-y-20 md:space-y-14 space-y-9">
      <SectionHeader
        smallTitle="# release the latest Game"
        title="Create your upcoming game"
        button="See all"
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-20 pt-10">
        {gamesCards.map((card) => (
          <div
            onClick={() => setActiveCard(card)}
            className={`border-2 ${
              activeCard.id === card.id
                ? "border-activeColor"
                : "border-darkColor2"
            }  pb-5 lg:px-8 md:px-6 px-4 rounded-3xl relative space-y-2`}
            key={card.id}
          >
            <div className="relative">
              <Image
                src={card.image}
                className="w-full rounded-2xl lg:h-[300px] md:h-[250px] h-[200px] object-cover lg:-translate-y-10 md:-translate-y-8 -translate-y-6"
                alt="card"
              />
              <div
                className={`absolute bottom-2 left-[50%] -translate-x-[50%] w-[70px] h-[70px] border-2 border-darkColor1 rounded-full ${
                  activeCard.id === card.id ? "bg-activeColor" : "bg-darkColor2"
                }   flex justify-center items-center`}
              >
                <Image
                  src={card.team}
                  className="w-[40px] rounded-full "
                  alt="card"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex flex-row items-center justify-between ">
                <h6 className="text-3xl font-semibold tracking-wide">
                  {card.name}
                </h6>

                <button className="flex items-center gap-x-2 py-.5 px-1 rounded-sm bg-darkColor2 text-sm text-gray-400 ">
                  <FaStar className=" text-activeColor" />{" "}
                  <span className="block">4.5</span>
                </button>
              </div>

              <span className="text-[16px] block text-secondaryColor tracking-wide">
                Entry fee: <span className="text-activeColor2">Free</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default UpComingFeatures;
