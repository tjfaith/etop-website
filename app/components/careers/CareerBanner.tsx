import React from "react";
import { Img10, LineBg } from "@/app/assets";
import Image from "next/image";

const CareerBanner = () => {
  return (
    <section className="">
      <div className="relative lg:px-28 px-5 sm:min-h-screen min-h-50-screen flex flex-col items-center justify-center md:gap-8 mt-8 ">
        <Image
          src={LineBg}
          alt="Line Background"
          className=" -z-10 absolute -top-16 "
        />
        <div
          className="lg:text-4xl text-2xl font-bold  items-center"
          data-aos="fade-up"
        >
          Do you want to <span className="text-primary">join us</span>?
        </div>
        <div className="md:w-1/2 text-center md:text-base text-sm" data-aos="fade-down">
        At E-top, we believe that the foundation of a successful transaction lies in the expertise and dedication of its team members. As a leading platform in the financial industry, we are committed to providing our customers with the most reliable transaction process. To achieve this, we seek talented individuals who are passionate about our customers and are driven to make a meaningful impact.
        </div>

        <div className="rounded-xl md:h-screen-72 w-full mt-5">
          <Image src={Img10} alt="Banner Image" className="rounded-xl h-auto max-w-full object-cover object-center lg:h-full lg:w-full " />
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;

