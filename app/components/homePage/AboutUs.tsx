import React from "react";
import { Button, HighlightedText } from "@/app/components";
import Image from "next/image";
import {
  BuildingsIcon,
  Circle,
  LineBg,
  OurCompany,
  PeopleIcon,
  ATMCard,
  BgStyle,
} from "@/app/assets";

const AboutUs = () => {
  return (
    <section className="px-28 w-full flex flex-col justify-center items-center ">
      <div className=" flex flex-col justify-center items-center relative gap-5">
    <div className="flex w-full justify-center items-center  ">
      <BgStyle className="absolute left-0"/>
      <BgStyle fill="#F2F4F7" fill2="#F2F4F7" className="absolute right-0"/>
    </div>
        <div className="flex items-center space-x-2 text-4xl font-bold  ">
          <span>What makes us</span>
          <HighlightedText text="unique" />
        </div>
        <div className="w-8/12 text-center">
          You get to know of the foundation our company is built upon and a
          little secret on how we have thrived over the years.
        </div>
      </div>



      <div className=" w-9/12 inline-flex items-center justify-center gap-8 mt-16 radial-gradient ">
        {/* left */}
        <div className="border border-primary rounded-2xl w-96 p-8 space-y-5 bg-white">
          <Image src={BuildingsIcon} alt="Building Icon" />
          <div className="font-bold">Our Company</div>
          <div className="text-sm">
            We provide technology services to payment switching companies, banks
            and merchants, by offering convenient payment methods.
          </div>
          <div className="flex items-center justify-center w-full relative ">
            <Image src={OurCompany} alt="Our company" />
            <Image
              src={LineBg}
              alt="Line Background"
              layout="fill"
              objectFit="cover"
              className=" -z-10 px-20"
            />
          </div>
        </div>  

        {/* middle */}
        <div className="space-y-4 w-96 ">
          <div className="border border-primary rounded-2xl w-full p-8 space-y-5 bg-white">
            <Image src={BuildingsIcon} alt="Building Icon" />
            <div className="font-bold">Our objective</div>
            <div className="text-sm">
              To become the number one Payment Terminal Service Provider by
              providing a one stop solution terminal for merchant that accept
              all major credit and debit cards in Africa.
            </div>
          </div>
          <div className="border-2 border-orange-300 bg-primary rounded-2xl w-full p-8 space-y-5 relative flex items-center justify-center flex-col text-center">
            <div className="font-bold text-white z-0">
              We will continue to serve you with all our heart.
            </div>

            <Image
              src={Circle}
              alt="Line Background"
              className=" -z-0 top-10 right-0 absolute"
            />

            <Button
              label="Get in touch"
              style="secondary"
              className="text-primary z-0 font-bold border-none"
              onClick={() => {}}
            />
          </div>
          <div className="border border-primary rounded-2xl w-full p-8 space-y-5 bg-white">
            <Image src={PeopleIcon} alt="Building Icon" />
            <div className="font-bold">Our partners</div>
            <div className="text-sm">
              We realize the important of alliance partners in the technology
              industry not only for our success but of yours and we will
              continue to partner with leading companies across the globe.
            </div>
          </div>
        </div>

        {/* right */}
        <div className="border border-primary rounded-2xl w-96 p-8 space-y-5 bg-white">
          <Image src={BuildingsIcon} alt="Building Icon" />
          <div className="font-bold">Our mission</div>
          <div className="text-sm">
            Our mission is to enable the Nigerian consumer to have easy and
            secure access to electronic payment solution and Networks.
          </div>
          <div className="flex items-center justify-center w-full ">
            <Image src={ATMCard} alt="ATM" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;