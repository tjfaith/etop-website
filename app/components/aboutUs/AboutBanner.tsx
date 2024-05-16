import React from "react";
import { Counts, HighlightedText } from "@/app/components";
import { Img9, LineBg } from "@/app/assets";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <section className="">
      <div className="relative lg:px-28 px-5 sm:min-h-screen min-h-50-screen flex flex-col items-center justify-center md:gap-8 ">
        <Image
          src={LineBg}
          alt="Line Background"
          className=" -z-10 absolute -top-16 "
        />
        <div
          className="lg:text-4xl text-2xl font-bold  items-center"
          data-aos="fade-up"
        >
          Who are <span className="text-primary">we!</span>
        </div>
        <div className="md:w-1/2 text-center md:text-base text-sm" data-aos="fade-down">
          We are a rapidly growing company helping organizations and individuals
          improve the quality of their transactions and services through the
          power of powerful tools.
        </div>

        <div className="rounded-xl md:h-screen-72 w-full mt-5">
          <Image src={Img9} alt="Banner Image" className="rounded-xl h-auto max-w-full object-cover object-top lg:h-full lg:w-full " />
        </div>
      </div>
      <Counts/>
    </section>
  );
};

export default AboutBanner;
