import Image from "next/image";

import bg from "@/assets/heroImg.png";
import cover from "@/assets/try3.jpg";

import Button from "@/components/Button/Button";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] pt-10">
      <Image
        src={cover}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        alt="cover"
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.93)] to-[rgba(0,0,0,0.93)]"></div>

      <div className="flex flex-col h-full gap-5 items-center justify-between w-full relative pb-5">
        <div className="w-[350px] h-[440px] relative  ">
          <div className="absolute -left-[105%] top-[55%] z-0">
            <span className="text-[110px] uppercase font-style2 text-activeColor">
              Strea
            </span>
          </div>
          <div className="absolute -right-[100%] top-[55%] z-0">
            <span className="text-[110px] uppercase font-style2 text-activeColor">
              ming
            </span>
          </div>
          <div className="absolute -left-[25%] top-[42%] z-0">
            <span className="text-[40px] uppercase font-style text-whiteColor">
              Live
            </span>
          </div>
          <div className="absolute -right-[30%] top-[42%] z-0">
            <span className="text-[40px] uppercase font-style text-whiteColor">
              GAme
            </span>
          </div>
          <Image
            src={bg}
            width={1000}
            height={1200}
            alt="cartoon"
            className="h-full w-full object-cover rounded-b-2xl z-10 relative"
          />
          <div className="absolute inset-0 w-[95%] mx-auto h-full bg-gradient-to-b from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0)] via-75% to-[rgba(13,13,13,0.99)] "></div>
        </div>
        <div className="absolute  text-center -bottom-[40px] w-full z-20">
          <h1 className="font-style text-[62px] text-activeColor">
            ESPORT TOURNAMENT
          </h1>
        </div>
      </div>

      <div className="flex justify-center relative items-center pt-16 pb-8">
        <Button text="contact us" bg="black" white />
      </div>
    </section>
  );
};

export default HeroSection;
