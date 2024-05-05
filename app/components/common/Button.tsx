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
          "bg-primary rounded-lg px-5 py-2 text-center text-white"
        }`,
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
