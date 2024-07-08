"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { setNavbarClose } from "@/store/NavbarSlice";
import { Navigation } from "@/Constants/data";

const ResNavbar = () => {
  const open = useSelector((state: any) => state.navbarSlice.open);
  const dispatch = useDispatch();

  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 z-[1000]  w-full lg:hidden md:h-screen h-[100dvh]  transition delay-200 duration-700 ease-in-out backdrop:  ${
        open ? "translate-x-0 " : "-translate-x-full "
      }`}
    >
      <div
        className={`lg:[35%] md:w-[45%]  sm:w-[65%] w-[78%]  bg-darkColor2 lg:h-screen h-[100dvh] opacity-100   relative transition duration-700 ease-in-out delay-200 `}
      >
        <button
          onClick={() => dispatch(setNavbarClose())}
          className="text-lightColor absolute right-3 top-3   font-semibold text-xl"
        >
          <IoCloseOutline />
        </button>
        <div className="md:px-5 px-3 pt-5 flex flex-col gap-3">
          {Navigation.map((item) => (
            <div key={item.id}>
              <span
                className={` px-3 py-1.5 rounded-xl hover:bg-gray-200 hover:text-activeColor transition ease-in-out delay-100  `}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResNavbar;
