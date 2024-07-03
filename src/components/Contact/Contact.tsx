import React from "react";
import cover2 from "@/assets/cover2.png";
import cover from "@/assets/bgCover1.png";
import Image from "next/image";
import SectionHeader from "../Header/SectionHeader";
import AppInput from "../AppInput/AppInput";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../Button/Button";
import Accordion from "./Accordion";

const Contact = () => {
  return (
    <section className="relative w-full  py-10">
      {/* <Image
        src={cover}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        alt="cover"
      /> */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.81)] to-[rgba(0,0,0,0.81)]"></div>
      <div className="contact-area min-h-[60vh] py-16">
        <Image
          src={cover2}
          layout="fill"
          className="object-center object-cover pointer-events-none"
          alt="cover"
        />
        <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.28)] "></div>

        <div className="relative grid grid-cols-2 gap-10 custom-container ">
          <div className="space-y-7 px-4">
            <SectionHeader
              smallTitle="# Our experience gamer"
              title="Contact us and Meet our team!"
            />
            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
              <AppInput
                name="name"
                id="1"
                placeholder="Your Name"
                icon={<CiUser />}
              />
              <AppInput
                name="name"
                id="1"
                placeholder="Email"
                icon={<MdOutlineEmail />}
              />
              <AppInput
                name="Phone"
                id="1"
                placeholder="Phone"
                icon={<LuPhone />}
              />
              <AppInput
                name="Subject"
                id="1"
                placeholder="Subject"
                icon={<IoIosArrowDown />}
              />
              <div className="col-span-2">
                <AppInput
                  type="textarea"
                  name="Subject"
                  id="1"
                  rows={5}
                  placeholder="Write message..."
                />
              </div>
            </div>

            <Button text="contact us" bg="yellow" />
          </div>
          <div className="space-y-8">
            <SectionHeader
              smallTitle="# common questions about our company "
              title="Frequently Asked questions for our esports and gaming site"
            />
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
