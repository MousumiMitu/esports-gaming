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
    <div className="flex items-center justify-between gap-2 ">
      <div className="space-y-3">
        <h5 className="heading-font uppercase tracking-[7px] text-base  text-activeColor">
          {smallTitle}
        </h5>
        <h6 className="capitalize text-3xl font-bold text-white tracking-[2px]">
          {title}
        </h6>
      </div>

      {button && <Button text={button} bg="darkColor" white />}
    </div>
  );
};

export default SectionHeader;
