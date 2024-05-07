'use client'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const PageLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({once: true});
  },[])

  return (
    <div>
     
        {children}
       
    </div>
  );
};

export default PageLayout;
