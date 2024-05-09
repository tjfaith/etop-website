"use client";
import React from "react";
import { Banner, Partners, AboutUs, Counts, Platforms, JoinUs } from "@/app/components";

const Dashboard = () => {
  return (
      <div className="flex flex-col space-y-20">
        <Banner />
        <Partners />
        <AboutUs />
        <Counts/>
        <Platforms/>
        <JoinUs/>
    </div>
  );
};

export default Dashboard;
