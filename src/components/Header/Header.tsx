import React from "react";
import "./Header.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <nav className="h-[90px] bg-darkColor1 border border-slate-950 flex justify-between items-center pe-5 ">
      <div className="h-full w-[230px] bg-darkColor2 p-5 logo-container flex items-center">
        <h3 className="text-activeColor font-extrabold text-2xl uppercase  ">
          Logo
        </h3>
      </div>

      <div className="relative">
        <Button text="Contact Us" bg="darkColor" white />
      </div>
    </nav>
  );
};

export default Header;
