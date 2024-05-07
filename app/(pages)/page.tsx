"use client";
import React from "react";
import { Header, Banner, Partners, AboutUs, Counts, Platforms, JoinUs, Footer } from "@/app/components";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col space-y-20">
        <Banner />
        <Partners />
        <AboutUs />
        <Counts/>
        <Platforms/>
        <JoinUs/>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
