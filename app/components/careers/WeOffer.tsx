import React from "react";
import Image from "next/image";
import { LineBg, WalletIcon } from "@/app/assets";
const WeOffer = () => {
  return (
    <div className="lg:px-28 px-5">
      <div className="text-center flex flex-col items-center justify-center">
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

      <div className="flex flex-wrap justify-center mt-5">
        <div className="flex items-center  space-x-3 md:w-2/12">
          <div className="rounded-full p-2 border shadow-md shadow-primary border-primary bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url(" + LineBg.src + ")" }}>
            <Image src={WalletIcon} alt="wallet icon" width={30} height={30} />
          </div>
          <span className="font-semibold">Competitive salary</span>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
