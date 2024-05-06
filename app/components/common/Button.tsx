import React from "react";
import { cn } from "@/app/lib/utils";
import { ButtonProps } from "@/app/interfaces/components.interface";

const Button = ({
  style = "primary",
  className,
  label = "button",
  type="button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        `${
          style == "primary" &&
          "bg-primary  text-white hover:bg-orange-700" 
        }  ${
          style == "secondary" &&
          "bg-white border-2 text-gray-600 hover:bg-gray-100"
        }  rounded-lg px-14 py-2 text-center text-sm font-semibold transition-all duration-300 ease-in-out`,
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
