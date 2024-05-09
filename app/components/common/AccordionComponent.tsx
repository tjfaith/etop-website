import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { AccordionComponentProps } from "@/app/interfaces/components.interface";
import { CircleMinus, CirclePlus } from "lucide-react";

const AccordionComponent = ({ items }: AccordionComponentProps) => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium font-semibold",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 h-14 flex items-center",
    indicator: "text-medium font-bold text-black",
    content: " px-2 text-sm text-gray-500 font-light",
  };
  return (
    <Accordion
      defaultExpandedKeys={["0"]}
      variant="light"
      showDivider
      fullWidth
      className="outline-none"
      itemClasses={itemClasses}
    >
      {items.map((val, index) => (
        <AccordionItem
          indicator={({ isOpen }) =>
            isOpen ? <CircleMinus className="rotate-90" /> : <CirclePlus />
          }
          key={index}
          aria-label={val.title}
          title={val.title}
        >
          {val.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
