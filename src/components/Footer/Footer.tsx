import { Navigation } from "@/Constants/data";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="custom-container bg-[rgba(0,0,0,0.99)] space-y-7 pb-10">
      <div className="w-[20%] h-[80px] flex items-center justify-center bg-darkColor2 mx-auto footer-logo">
        <Image src={logo} className="w-[70%]" alt="logo" />
      </div>

      <div className="flex justify-center items-center gap-6 text-lg font-medium uppercase">
        {Navigation.map((nav) => (
          <span key={nav.id}>{nav.name}</span>
        ))}
      </div>

      <div className="border-y-2 border-darkColor2 py-6 flex justify-between gap-5">
        <div className="space-y-3">
          <h5 className="text-2xl font-bold tracking-wide">
            Office <span className="text-activeColor">Location</span>
          </h5>
          <p className="text-base text-gray-400">
            Lo adipisicing elit. Modi rem ipsum dolor consectetur
            <br />
            sit amet consectetur
          </p>
        </div>

        <div className="space-y-3">
          <h5 className="text-2xl font-bold tracking-wide">
            Contact <span className="text-activeColor">Information</span>
          </h5>
          <p className="text-base text-gray-400">
            14568000
            <br />
            xyz@example.com
          </p>
        </div>

        <div className="space-y-5 min-w-[20%]">
          <h5 className="text-2xl font-bold tracking-wide">
            Follow <span className="text-activeColor">With Us</span>
          </h5>
          <div className="flex items-center gap-3">
            <span className=" w-10 h-10 rounded-full bg-darkColor2 flex items-center justify-center hover:text-activeColor">
              <FaFacebookF />
            </span>

            <span className=" w-10 h-10 rounded-full bg-darkColor2 flex items-center justify-center hover:text-activeColor">
              <IoLogoInstagram />
            </span>

            <span className=" w-10 h-10 rounded-full bg-darkColor2 flex items-center justify-center hover:text-activeColor">
              <IoLogoGooglePlaystore />
            </span>
          </div>
        </div>
      </div>

      <span className="text-xs text-gray-500 block text-center">
        Copyright © 2024 All Right Reserved to mitz
      </span>
    </section>
  );
};

export default Footer;
