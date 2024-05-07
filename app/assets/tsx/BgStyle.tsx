import React from "react";
import { BgStyleProps } from "@/app/interfaces/assets.interface";


const BgStyle = ({fill='#EA661C', fill2='#FADAC9',  className}:BgStyleProps) => {
  return (
    <div className={className}>
      <svg
        width="92"
        height="91"
        viewBox="0 0 92 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="56" fill={fill} />
        <rect
          width="36"
          height="36"
          transform="translate(56 55)"
          fill={fill2}
        />
      </svg>
    </div>
  );
};

export default BgStyle;
