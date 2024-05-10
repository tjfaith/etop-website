import React from "react";
import { CustomAccordion } from "@/app/components";

const OpenPositions = () => {
  const positions = [
    {
      title: "Financial analyst",
      content:
      <div>
      <div>
        As a Financial Analyst , you will play a crucial role in providing
        accurate and valuable insights to our users, enabling them to make
        informed financial decisions. You will be responsible for analyzing
        market trends, conducting research, and delivering comprehensive
        financial reports. Your expertise will help shape our platform&apos;s
        offerings and contribute to the overall success of our users.
      </div>
      <div className="mt-3">
        <div className="font-bold">Responsibilities:</div>
        <ol className="space-y-3 list-decimal mt-3 px-4" >
          <li>
            Market Analysis: Conduct in-depth research and analysis of
            financial markets, industry trends, and economic indicators. Stay
            updated on market developments and identify potential
            opportunities or risks for our users.
          </li>
          <li>
            Financial Modeling: Develop and maintain financial models to
            forecast and assess the performance of various investment options
            and strategies. Analyze financial statements, historical data, and
            market conditions to generate accurate projections.
          </li>
          <li>
            Investment Research: Evaluate investment opportunities, including
            stocks, bonds, and other financial instruments. Assess the
            risk-return profile, conduct due diligence, and provide
            recommendations based on thorough analysis.
          </li>
          <li>
            Reporting and Presentations: Prepare comprehensive financial
            reports, including analysis summaries, investment recommendations,
            and performance reviews. Present findings and recommendations to
            internal stakeholders and external clients in a clear and concise
            manner
          </li>
          <li>
            Data Analysis: Collect, organize, and analyze large datasets using
            statistical tools and financial software. Extract insights and
            identify trends to support decision-making and improve the
            accuracy of our financial models.
          </li>
        </ol>
      </div>
    </div>
    },
  ];
  return (
    <div className="lg:px-28 px-5">
      <div className="text-center flex flex-col items-center justify-center">
        <div
          className="lg:text-4xl text-xl font-bold  items-center"
          data-aos="fade-up"
        >
          Open positions
        </div>
        <div
          className=" text-center md:text-base text-sm md:w-9/12 mt-3  text-gray-500 "
          data-aos="fade-down text-gray-500  "
        >
          As a dynamic and rapidly growing financial website, we offer a range
          of exciting career opportunities for those who are passionate about
          finance, technology, and making a positive impact on people&apos;s lives.
          Are you ready to take your career to the next level? Explore our open
          positions below
        </div>
      </div>
      <CustomAccordion items={positions} />

      
    </div>
  );
};

export default OpenPositions;
