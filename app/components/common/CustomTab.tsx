import React, {useState, useEffect} from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { CustomTabProps } from "@/app/interfaces/components.interface";

const CustomTab = ({ data }: CustomTabProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768); 
        };
    
        // Initial check
        handleResize();
    
        // Event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <Tabs aria-label="Options" isVertical={!isMobile} variant="light" color="warning"  
    classNames={{
        tab:" justify-start ",
        panel:"w-full md:pl-28 pr-0 ",
        tabList:"bg-red-800",
        tabContent: "group-data-[selected=true]:text-primary  ", 
        base:"md:border-r md:border-r-gray-300 md:pr-10  md:w-auto w-11/12"
    }}>
      {data.map((item, index: number) => (
        <Tab key={index} title={item.title}>
          {item.content}
        </Tab>
      ))}
    </Tabs>
  );
};

export default CustomTab;
