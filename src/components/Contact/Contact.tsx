import React from "react";
import cover2 from "@/assets/cover2.png";
import cover from "@/assets/bgCover1.png";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="relative w-full min-h-[100vh] py-10">
      {/* <Image
        src={cover}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        alt="cover"
      /> */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.87)]"></div>
      <div className="contact-area min-h-[60vh] py-16">
        <Image
          src={cover2}
          layout="fill"
          className="object-center object-cover pointer-events-none"
          alt="cover"
        />
        <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.28)] "></div>

        <div className="relative   border flex custom-container items-center"></div>
      </div>
    </section>
  );
};

export default Contact;
