import React from "react";
import Image from "next/image";
import { LineBg, WalletIcon } from "@/app/assets";
const WeOffer = () => {
  return (
    <div className="lg:px-28 px-5 ">
      <div className="text-center flex flex-col items-center justify-center ">
        <div
          className="lg:text-4xl text-xl font-bold  items-center"
          data-aos="fade-up"
        >
          What we have to offer
        </div>
        <div
          className=" text-center md:text-base text-sm md:w-9/12 mt-3  text-gray-500 "
          data-aos="fade-down text-gray-500  "
        >
          We value the well-being and happiness of our team members. We believe
          that providing a comprehensive benefits package is crucial in
          fostering a positive work environment and supporting your overall
          quality of life. Here are some of the benefits we offer:
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-5">
        <div className="flex items-start md:w-5/12 space-x-3" data-aos="fade-up">
          <div className="rounded-full p-2 border shadow-md shadow-primary border-primary bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url(" + LineBg.src + ")" }}>
            <Image src={WalletIcon} alt="wallet icon" width={50} height={50} />
          </div>
          <div>
          <span className="font-semibold">Competitive salary</span>
          <div>
          Our goal is to lead the Pan-African financial technology market by providing state-of-the-art and secure payment solutions, backed by a competitive salary package.

          </div>
          </div>
        </div>
        <div className="flex items-start md:w-5/12 space-x-3" data-aos="fade-up">
          <div className="rounded-full p-2 border shadow-md shadow-primary border-primary bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url(" + LineBg.src + ")" }}>
            <Image src={WalletIcon} alt="wallet icon" width={50} height={50} />
          </div>
          <div>
          <span className="font-semibold">Balanced Work-Life Culture</span>
          <div>
          Join us for team gatherings, volunteer initiatives, and employee-driven events as we believe in balancing hard work with rewarding downtime.
          </div>
          </div>
        </div>

        <div className="flex items-start md:w-5/12 space-x-3" data-aos="fade-up">
          <div className="rounded-full p-2 border shadow-md shadow-primary border-primary bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url(" + LineBg.src + ")" }}>
            <Image src={WalletIcon} alt="wallet icon" width={50} height={50} />
          </div>
          <div>
          <span className="font-semibold">Professional Development:</span>
          <div>
          We&apos;re dedicated to investing in our employees to help them reach their professional aspirations, whether short-term, medium-term, or long-term.
          </div>
          </div>
        </div>

        <div className="flex items-start md:w-5/12 space-x-3" data-aos="fade-up">
          <div className="rounded-full p-2 border shadow-md shadow-primary border-primary bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url(" + LineBg.src + ")" }}>
            <Image src={WalletIcon} alt="wallet icon" width={50} height={50} />
          </div>
          <div>
          <span className="font-semibold">Flexible Leave Options</span>
          <div>
          Enjoy the flexibility of work hours, generous time-off policies, parental leave options, and opportunities for volunteer time-off.
          </div>
          </div>
        </div>

        <div className="flex items-start md:w-5/12 space-x-3" data-aos="fade-up">
          <div className="rounded-full p-2 border shadow-md shadow-primary border-primary bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url(" + LineBg.src + ")" }}>
            <Image src={WalletIcon} alt="wallet icon" width={50} height={50} />
          </div>
          <div>
          <span className="font-semibold">Solid Retirement Benefits</span>
          <div>
          We are committed to supporting you and your family both now and in the future by offering a solid retirement plan to help you save for the years ahead.
          </div>
          </div>
        </div>

        <div className="flex items-start md:w-5/12 space-x-3" data-aos="fade-up">
          <div className="rounded-full p-2 border shadow-md shadow-primary border-primary bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url(" + LineBg.src + ")" }}>
            <Image src={WalletIcon} alt="wallet icon" width={50} height={50} />
          </div>
          <div>
          <span className="font-semibold">Healthcare Perks</span>
          <div>
          We offer comprehensive health and wellness benefits, including coverage for dependents, life insurance, and more.
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
