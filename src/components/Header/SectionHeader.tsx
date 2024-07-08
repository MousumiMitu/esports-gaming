import React from "react";
import Button from "../Button/Button";

interface SectionHeader {
  title: string;
  smallTitle: string;
  button?: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeader> = ({
  title,
  smallTitle,
  button,
  center,
}) => {
  return (
    <div
      className={`flex flex-wrap items-center  gap-2 ${
        center ? "justify-center" : "justify-between"
      }`}
    >
      <div className={`space-y-3 ${center && "text-center"}`}>
        <h5 className="heading-font uppercase tracking-[7px] lg:text-base md:text-sm text-xs  text-activeColor">
          {smallTitle}
        </h5>
        <h6 className="capitalize lg:text-3xl md:text-xl text-lg font-bold text-white tracking-[2px]">
          {title}
        </h6>
      </div>

      {button && <Button text={button} bg="darkColor" white />}
    </div>
  );
};

export default SectionHeader;
