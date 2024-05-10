import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import { CustomSelectProps } from '@/app/interfaces/components.interface';



const CustomSelect =({ data, placeholder, label }: CustomSelectProps) => {
  return (
    <Select 
        label={label}  
        labelPlacement="outside"
        radius="sm"
        variant="bordered"
        placeholder={placeholder}
        classNames={{
            // innerWrapper:[
            //   "transition-all",
            //   "ease-in-out",
            //   "duration-300",
            //   "w-full",
            //   "px-3",
            //   "border",
            //   "border-gray-300",
            //   "rounded-md",
            //   "focus:outline-none",
            //   "focus:border-primary",
            //   "focus:ring",
            //   "focus:shadow-primary",
            //   "focus:ring-primary/30", 
            // ],
            label: ["font-bold z-0"],
            mainWrapper: [
            "px-0",
            "border-none",
            "shadow-sm",
            "outline-none"
            ],
        }}
      >
        {data.map((item: any, index:number) => (
          <SelectItem key={index} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
  )
}

export default CustomSelect