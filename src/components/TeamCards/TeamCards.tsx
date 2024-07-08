"use client";

import { battleCards } from "@/Constants/data";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <section className="md:py-12 py-7 bg-darkColor2  ">
      <div className="custom-container slider-container w-full">
        <Slider {...settings}>
          {battleCards.map((card) => (
            <div key={card.id} className=" md:h-[120px] sm:h-[75px] h-[65px]">
              <Image
                src={card.image}
                alt="icons"
                className="md:w-[90px] sm:w-[65px] w-[55px] m-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamCards;
