import React from "react";
import SectionHeader from "../Header/SectionHeader";
import { streamersCards } from "@/Constants/data";
import Image from "next/image";

const TopRatedUsers = () => {
  return (
    <div className="py-20 custom-container  px-10 space-y-20">
      <SectionHeader
        smallTitle="# Our top Streamers"
        title="Lets see Our top rated streamers"
        center
      />

      <div className="grid grid-cols-4 gap-10">
        {streamersCards.map((card) => (
          <div
            key={card.id}
            className="border-4 border-activeColor p-px rounded-2xl h-[380px] relative"
          >
            <Image
              src={card.image}
              alt="img"
              className="w-full z-0 h-full object-cover rounded-xl border-4 border-activeColor translate-x-2 -translate-y-2 "
            />

            <div
              className="absolute left-0 top-0 rounded-xl border-x-4 border-b-4 border-activeColor w-full h-full z-10 bg-gradient-to-b from-[rgba(255,255,255,0)] 
            via-[#000000ed] via-80% to-[#000000fb] translate-x-2 -translate-y-2 flex items-end"
            >
              <div>
                <span className="text-base block text-white font-medium">
                  {card.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedUsers;
