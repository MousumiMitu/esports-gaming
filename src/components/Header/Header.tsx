import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Navigation } from "@/Constants/data";

const Header = () => {
  return (
    <nav className="h-[90px] bg-darkColor1 border border-slate-950 flex justify-between items-center pe-5 ">
      <div className="h-full w-[230px] bg-darkColor2  logo-container flex items-center">
        <Image src={logo} className="w-[70%] ms-3" alt="logo" />
      </div>

      <div className="flex justify-center items-center gap-6 text-base font-medium uppercase">
        {Navigation.map((nav) => (
          <span
            key={nav.id}
            className="hover:text-activeColor cursor-pointer transition ease-in-out delay-150"
          >
            {nav.name}
          </span>
        ))}
      </div>

      <div className="relative">
        <Button text="Contact Us" bg="darkColor" white />
      </div>
    </nav>
  );
};

export default Header;
