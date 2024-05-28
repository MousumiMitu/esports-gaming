import React from "react";
import "./Button.css";
import Link from "next/link";

const Button = ({
  text,
  bg,
  white,
}: {
  text: any;
  bg: string;
  white?: boolean;
}) => {
  return (
    <>
      {/* <Link href="" className="btn">
        <span className="btn-bg"></span>
        <span className="btn-text capitalize tracking-wide">{text}</span>
      </Link> */}

      <Link
        href="/"
        className={`custom-btn bg-activeColor ${
          bg === "yellow"
            ? "after:bg-activeColor"
            : bg === "black"
            ? "after:bg-black"
            : "after:bg-darkColor1"
        }`}
      >
        {/* <span className="btn-bg"></span> */}
        <span
          className={`font-semibold uppercase tracking-wider z-10 text-sm ${
            white ? "text-white" : "text-darkColor1"
          }`}
        >
          {text}
        </span>
      </Link>

      {/* <div className="module border p-4 ">
        <span>{text}</span>
      </div> */}
      {/* <div className="button">
        <div className="button-outer">
          <div className="button-inner">BUTTON</div>
        </div>
      </div> */}
      {/* <div className="w-full flex items-center justify-center">
        <Link
          href=""
          className="relative px-7 py-3 font-bold text-darkColor2 group"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-activeColor group-hover:bg-lightColor group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-lightColor group-hover:bg-activeColor group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-lightColor -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-activeColor -rotate-12"></span>
          <span className="relative capitalize text-2xl">{text}</span>
        </Link>
      </div> */}
    </>
  );
};

export default Button;
