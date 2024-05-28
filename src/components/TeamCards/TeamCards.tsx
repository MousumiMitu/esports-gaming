import { battleCards } from "@/Constants/data";
import Image from "next/image";
import React from "react";

const TeamCards = () => {
  return (
    <section className="py-12 bg-darkColor2 px-10">
      <div className="flex items-center gap-14 ">
        {battleCards.map((card) => (
          <Image
            src={card.image}
            alt="icons"
            key={card.id}
            className="w-[90px]"
          />
        ))}
      </div>
    </section>
  );
};

export default TeamCards;
