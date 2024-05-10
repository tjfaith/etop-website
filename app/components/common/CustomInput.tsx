import React from "react";
import { Input } from "@nextui-org/react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { CustomInputProps } from "@/app/interfaces/components.interface";
import Image from "next/image";
import { DocumentUpload } from "@/app/assets";

const InputComponent = ({
  value,
  type = "text",
  label,
  placeholder,
  phone,
  setPhone,
}: CustomInputProps) => {
  return (
    <>
      {type === "phone" ? (
        <PhoneInput
          defaultCountry="ng"
          className="w-full z-10 border-none"
          value={phone}
          onChange={(phone) => setPhone && setPhone(phone)}
        />
      ) : type === "file" ? (
        <div>
          <div className="font-bold text-gray-700 text-sm mb-2">{label}</div>
          <div className="flex items-center px-3 py-2 space-x-3 transition-all ease-in-out duration-300 border border-gray-300 rounded-lg  hover:border-primary hover:shadow-primary hover:ring-primary/20 hover:ring shadow-sm w-full text-sm text-slate-500">
            <Image src={DocumentUpload} alt="File icon" />

            <input type="file" id="custom-input" hidden />
            <label htmlFor="custom-input" className="  cursor-pointer w-full">
              File Upload
            </label>
          </div>
        </div>
      ) : (
        <Input
          value={value}
          type={type}
          label={label}
          labelPlacement="outside"
          placeholder={placeholder}
          radius="sm"
          variant="bordered"
          classNames={{
            label: ["font-bold z-0"],
            input: [
              "transition-all",
              "ease-in-out",
              "duration-300",
              "w-full",
              "px-3",
              "border",
              "border-gray-300",
              "rounded-md",
              "focus:outline-none",
              "focus:border-primary",
              "focus:ring",
              "focus:shadow-primary",
              "focus:ring-primary/30",
            ],
            inputWrapper: ["px-0", "border-none", "shadow-sm"],
          }}
        />
      )}
    </>
  );
};

export default InputComponent;
