import React from 'react'
import {Avatar, Select, SelectItem} from "@nextui-org/react";
import { CustomSelectProps } from '@/app/interfaces/components.interface';



const CustomSelect =({ data, placeholder, label, required }: CustomSelectProps) => {
  return (
    <Select 
        label={label}  
        labelPlacement="outside"
        radius="sm"
        variant="bordered"
        placeholder={placeholder}
        isRequired={required}
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
           {!item.avatar ? <span>{item.label}</span>:
            <div className="flex gap-2 items-center">
            <Avatar alt={item.avatar} className="flex-shrink-0" size="sm" src={item.avatar} />
            <div className="flex flex-col">
              <span className="text-small">{item.label}</span>
            </div>
          </div>}
          </SelectItem>
        ))}
      </Select>
  )
}

export default CustomSelect