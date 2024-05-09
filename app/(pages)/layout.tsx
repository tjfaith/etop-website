'use client'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "react-multi-carousel/lib/styles.css";
import { Footer, Header } from "@/app/components";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({once: true});
  },[])

  return (
    <div>
      <Header />
     
        {children}
      <Footer/>
       
    </div>
  );
};

export default PageLayout;
