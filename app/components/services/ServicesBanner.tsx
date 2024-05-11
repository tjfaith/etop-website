import React from "react";
import { Img14, LineBg } from "@/app/assets";
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
          What do we <span className="text-primary">offer</span>?
        </div>
        <div className="md:w-1/2 text-center md:text-base text-sm" data-aos="fade-down">
        We empower individuals to take control of their financial lives with our comprehensive service. Simplifying the complexities of finance, we provide the tools and knowledge needed for informed decisions. That&apos;s what sets us apart.
        </div>

        <div className="rounded-xl md:h-screen-72 w-full mt-5">
          <Image src={Img14} alt="Banner Image" className="rounded-xl h-auto max-w-full object-cover object-center lg:h-full lg:w-full " />
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;

