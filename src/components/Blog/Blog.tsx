import React from "react";
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import SectionHeader from "../Header/SectionHeader";
import cover from "@/assets/bgCover1.png";
import Image from "next/image";
import { BlogCards } from "@/Constants/data";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <section className="relative w-full  py-10">
      <Image
        src={cover}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        alt="cover"
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.93)] to-[rgba(0,0,0,0.93)]"></div>
      <div className="py-10 custom-container relative space-y-14">
        <SectionHeader
          smallTitle="# Game streaming battle"
          title="Our Gaming Tournament!"
          center
        />

        <div className="grid grid-cols-3 gap-7">
          {BlogCards.map((card) => (
            <div key={card.id} className="blog-card h-[420px] w-full">
              <div className="w-full absolute left-0 top-0 z-10 space-y-3 p-5">
                <div className="w-full blog-img h-[210px]">
                  <Image
                    src={card.image}
                    className="object-cover object-center w-full h-full z-10"
                    alt="cover"
                  />
                </div>
                <div className="flex gap-3 items-center text-gray-400">
                  <div className="flex items-center gap-2 ">
                    <CiUser className="text-activeColor2" />
                    <span className="block">By John doe</span>
                  </div>

                  <div>|</div>

                  <div className="flex items-center gap-2 ">
                    <CiCalendar className="text-activeColor2" />
                    <span className="block">30 Nov, 2024</span>
                  </div>
                </div>

                <span className="text-2xl font-semibold block">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </span>

                <button className="heading-font tracking-[2px] text-lg  text-activeColor relative flex items-center gap-2">
                  Read More <FaArrowRightLong />
                  <span className="absolute left-0 bottom-0 h-[0.3px] bg-activeColor w-full "></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
