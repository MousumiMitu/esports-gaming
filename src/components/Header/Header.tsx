"use client";

import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Navigation } from "@/Constants/data";
import { useDispatch } from "react-redux";
import { setNavbarClose, setNavbarOpen } from "@/store/NavbarSlice";
import { RiMenu4Fill } from "react-icons/ri";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <nav className="md:h-[90px] h-[65px] bg-darkColor1 border border-slate-950 flex justify-between items-center pe-5 ">
      <div className="h-full md:w-[230px] w-[140px] bg-darkColor2  logo-container flex items-center">
        <Image src={logo} className="w-[70%] ms-3" alt="logo" />
      </div>

      <div className="lg:flex justify-center items-center gap-6 text-base font-medium uppercase hidden ">
        {Navigation.map((nav) => (
          <span
            key={nav.id}
            className="hover:text-activeColor cursor-pointer transition ease-in-out delay-150"
          >
            {nav.name}
          </span>
        ))}
      </div>

      <div className="relative hidden lg:block">
        <Button text="Contact Us" bg="darkColor" white />
      </div>

      <div
        className="lg:hidden text-activeColor text-xl"
        onClick={() => dispatch(setNavbarOpen())}
      >
        <RiMenu4Fill />
      </div>
    </nav>
  );
};

export default Header;
